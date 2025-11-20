'use client'

import * as React from 'react'

import { type MotionProps, motion } from 'framer-motion'

import { cn } from '@/lib/utils'

interface TextEffectProps {
    children: React.ReactNode
    className?: string
    per?: 'char' | 'word' | 'line'
    speedSegment?: number
    preset?: 'slide-in' | 'fade-in-blur'
    as?: 'p' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    delay?: number
}

export const TextEffect = ({
    children,
    className,
    per = 'word',
    speedSegment = 0.05,
    preset = 'slide-in',
    as: Tag = 'div',
    delay = 0,
    ...props
}: TextEffectProps) => {
    const text = String(children)
    const segments = React.useMemo(() => {
        if (per === 'char') {
            return text.split('')
        } else if (per === 'word') {
            return text.split(' ')
        } else if (per === 'line') {
            return text.split('\n')
        }
    }, [text, per])

    const containerVariants = {
        visible: {
            transition: {
                staggerChildren: speedSegment,
                delayChildren: delay,
            },
        },
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className={cn('relative', className)}
            {...(props as MotionProps)}>
            {segments.map((segment, index) => {
                const isLine = per === 'line'
                return (
                    <div
                        key={index}
                        className={cn('relative inline-block', {
                            'w-full': isLine,
                        })}>
                        <motion.div
                            className={cn('inline-block', {
                                'w-full': isLine,
                            })}
                            variants={{
                                hidden: {
                                    opacity: preset === 'fade-in-blur' ? 0 : 1,
                                    y: 12,
                                    filter:
                                        preset === 'fade-in-blur'
                                            ? 'blur(12px)'
                                            : 'blur(0px)',
                                },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    filter: 'blur(0px)',
                                    transition: {
                                        type: 'spring',
                                        bounce: 0.3,
                                        duration: 1.5,
                                    },
                                },
                            }}>
                            <Tag>{segment}&nbsp;</Tag>
                        </motion.div>
                    </div>
                )
            })}
        </motion.div>
    )
}
