"use client"

import { useState } from "react"
import Image, { ImageProps } from "next/image"
import { cn } from "@/lib/utils"

interface ImageWithLoaderProps extends ImageProps {
    containerClassName?: string
}

export default function ImageWithLoader({
    className,
    containerClassName,
    alt,
    ...props
}: ImageWithLoaderProps) {
    const [isLoading, setIsLoading] = useState(true)

    return (
        <div className={cn("relative overflow-hidden", containerClassName)}>
            {isLoading && (
                <div className="absolute inset-0 bg-neutral-200 animate-pulse z-10" />
            )}
            <Image
                className={cn(
                    "transition-opacity duration-500",
                    isLoading ? "opacity-0" : "opacity-100",
                    className
                )}
                alt={alt}
                onLoadingComplete={() => setIsLoading(false)}
                {...props}
            />
        </div>
    )
}
