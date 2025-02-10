import { getPost } from '@/lib/posts';
import { notFound } from 'next/navigation';
import React from 'react'
const Page = async (props: { params: { slug: string } }) => {
    const post = await getPost(props.params.slug);

    if (!post) {
        notFound();
    }
    return (
        <div>page</div>
    )
}


export default Page;