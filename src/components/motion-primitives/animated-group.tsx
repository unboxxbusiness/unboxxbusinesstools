'use client'

import * as React from 'react'

import { motion, type MotionProps } from 'framer-motion'

import { cn } from '@/lib/utils'

interface AnimatedGroupProps extends MotionProps {
    children: React.ReactNode
    className?: string
}

export const AnimatedGroup = ({
    children,
    className,
    ...props
}: AnimatedGroupProps) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className={cn('relative', className)}
            {...props}>
            {children}
        </motion.div>
    )
}
