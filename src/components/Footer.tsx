import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="flex items-center justify-center border-t px-3 py-2 gap-2 font-mono">
            <Link href="/">
                &copy; {new Date().getFullYear()} | Christ<span className="text-primary">.dev</span>
            </Link>
            <div className="ml-auto"></div>
            {/* <Link href="/" className='text-primary hover:underline'>
                Post
            </Link> */}
        </footer>
    );
};

export default Footer;