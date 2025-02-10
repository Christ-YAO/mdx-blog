import { getPost } from '@/lib/posts';
import { notFound } from 'next/navigation';
import React from 'react'

export const Page = (props: { params: { slug: string } }) => {
    const post = getPost(props.params.slug);

    if (!post) {
        notFound();
    }
    return (
        <div>page</div>
    )
}
