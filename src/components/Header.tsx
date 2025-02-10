import Link from 'next/link'
import React from 'react'
import { ThemeToggle } from './theme/ThemeToggle'

export const Header = () => {
    return (
        <header className="flex items-center justify-center border px-3 py-2 gap-2 bg-card shadow-xl rounded-3xl my-4 font-mono">
            <p>
                Codelynx<span className="text-primary">.dev</span>
            </p>
            <div className="ml-auto"></div>
            <Link href="/" className='text-primary hover:underline'>
                Post
            </Link>
            <ThemeToggle />
        </header>
    )
}
