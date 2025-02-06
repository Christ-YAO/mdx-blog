import Link from 'next/link'
import React from 'react'

export const Header = () => {
    return (
        <header className="flex items-center justify-center gap-2">
            <p>
                Codelynx<span className="text-primary">.dev</span>
            </p>
            <div className="ml-auto"></div>
            <Link href="/" className='text-primary'>
                Post
            </Link>
        </header>
    )
}
