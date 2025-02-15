import Link from 'next/link'
import { ThemeToggle } from './theme/ThemeToggle'
// import Headroom from 'react-headroom'

export const Header = () => {
    return (
        // <Headroom>
        <div className="flex items-center justify-center border px-3 py-2 gap-2 shadow-xl rounded-3xl my-4 font-mono top-4 z-10 backdrop:filter backdrop-blur-lg">
            <Link href="/">
                Christ<span className="text-primary">.dev</span>
            </Link>
            <div className="ml-auto"></div>
            <Link href="/" className='text-primary hover:underline'>
                Post
            </Link>
            <ThemeToggle />
        </div>
        // </Headroom>
    )
}
