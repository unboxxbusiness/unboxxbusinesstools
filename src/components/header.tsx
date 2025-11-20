import React from 'react'

export function HeroHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-6xl px-6">
            <div className="flex h-20 items-center justify-between">
                <a className="text-lg font-medium" href="#">
                    UBX
                </a>
                <a className="text-sm font-medium" href="#">
                    Sign In
                </a>
            </div>
        </div>
    </header>
  )
}
