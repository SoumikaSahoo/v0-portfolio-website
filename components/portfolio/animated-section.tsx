"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: "fadeUp" | "fadeLeft" | "fadeRight" | "scale" | "fade"
  delay?: number
}

const animationVariants = {
  fadeUp: {
    hidden: "opacity-0 translate-y-12",
    visible: "opacity-100 translate-y-0",
  },
  fadeLeft: {
    hidden: "opacity-0 -translate-x-12",
    visible: "opacity-100 translate-x-0",
  },
  fadeRight: {
    hidden: "opacity-0 translate-x-12",
    visible: "opacity-100 translate-x-0",
  },
  scale: {
    hidden: "opacity-0 scale-95",
    visible: "opacity-100 scale-100",
  },
  fade: {
    hidden: "opacity-0",
    visible: "opacity-100",
  },
}

export function AnimatedSection({
  children,
  className,
  animation = "fadeUp",
  delay = 0,
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true,
  })

  const variants = animationVariants[animation]

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible ? variants.visible : variants.hidden,
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
