import { Suspense } from 'react'
import { MDXRemote } from "next-mdx-remote-client/rsc";
import { MDX_COMPONENTS } from './mdx-components';

const Mdx = ({ children }: { children: string }) => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <MDXRemote source={children} components={MDX_COMPONENTS} />
        </Suspense>
    )
}

export default Mdx;