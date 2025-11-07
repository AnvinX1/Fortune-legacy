import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, company, service, message } = body

    // Validate required fields
    if (!name || !email || !service || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY

    if (!RESEND_API_KEY) {
      console.log("[Fortune] Resend API key not configured - simulation mode")
      // Simulate a delay for realistic behavior
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Log the form submission for development purposes
      console.log("[Fortune] Contact form submission:", {
        name,
        email,
        phone: phone || "Not provided",
        company: company || "Not provided",
        service,
        message,
      })

      return NextResponse.json({
        success: true,
        message: "Email sent successfully (simulation mode - add RESEND_API_KEY for production)",
      })
    }

    // If we have the API key, use Resend
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Fortune Business Solutions <onboarding@resend.dev>", // Use Resend's test domain or your verified domain
        to: ["ceo.fortune@outlook.com"],
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2563eb; border-bottom: 3px solid #2563eb; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            
            <div style="margin: 20px 0; padding: 15px; background-color: #f3f4f6; border-left: 4px solid #2563eb;">
              <p style="margin: 8px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 8px 0;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 8px 0;"><strong>Phone:</strong> ${phone || "Not provided"}</p>
              <p style="margin: 8px 0;"><strong>Company:</strong> ${company || "Not provided"}</p>
              <p style="margin: 8px 0;"><strong>Service Interest:</strong> ${service}</p>
            </div>
            
            <div style="margin: 20px 0;">
              <h3 style="color: #1f2937;">Message:</h3>
              <p style="padding: 15px; background-color: #ffffff; border: 1px solid #e5e7eb; line-height: 1.6;">
                ${message}
              </p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
              <p>This email was sent from the Fortune Business Solutions contact form.</p>
              <p>Please respond within 24 hours to maintain service standards.</p>
            </div>
          </div>
        `,
      }),
    })

    if (!response.ok) {
      const error = await response.text()
      console.error("[Fortune] Resend API error:", error)
      throw new Error("Failed to send email")
    }

    const result = await response.json()
    console.log("[Fortune] Email sent successfully:", result)

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    })
  } catch (error) {
    console.error("[Fortune] Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email. Please try again later." }, { status: 500 })
  }
}
