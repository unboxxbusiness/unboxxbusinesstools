'use client'

import * as React from 'react'

import { motion } from 'framer-motion'

import { cn } from '@/lib/utils'

interface InfiniteSliderProps {
    children: React.ReactNode
    gap?: number
    speed?: number
    speedOnHover?: number
    reverse?: boolean
    className?: string
}

export const InfiniteSlider = ({
    children,
    gap = 24,
    speed = 50,
    speedOnHover = 20,
    reverse = false,
    className,
}: InfiniteSliderProps) => {
    const containerRef = React.useRef<HTMLDivElement>(null)
    const [isHovering, setIsHovering] = React.useState(false)

    const duplicatedChildren = React.useMemo(() => {
        const arr = React.Children.toArray(children)
        return [...arr, ...arr]
    }, [children])

    return (
        <div
            ref={containerRef}
            className={cn('w-full overflow-hidden', className)}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}>
            <motion.div
                className="flex"
                style={{ gap: `${gap}px` }}
                animate={{
                    x: reverse ? '100%' : '-100%',
                }}
                transition={{
                    duration: isHovering ? speedOnHover : speed,
                    repeat: Infinity,
                    ease: 'linear',
                }}>
                {duplicatedChildren.map((child, index) => (
                    <div key={index} className="flex-shrink-0">
                        {child}
                    </div>
                ))}
            </motion.div>
        </div>
    )
}
