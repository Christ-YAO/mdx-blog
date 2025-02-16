import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="flex items-center justify-center border-t px-3 py-2 gap-2 font-mono">
            <p>
                &copy; {new Date().getFullYear()} Copyright |
            </p>
            <div className="ml-auto"></div>
            <Link href="/" className='hover:underline'>
                Christ<span className="text-primary">.dev</span>
            </Link>
        </footer>
    );
};

export default Footer;