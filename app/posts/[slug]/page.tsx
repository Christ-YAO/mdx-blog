import Mdx from '@/lib/features/mdx/Mdx';
import { getPost } from '@/lib/posts';
import { notFound } from 'next/navigation';

const Page = async ({ params: { slug } }: { params: { slug: string } }) => {
    const post = await getPost(slug);

    if (!post) {
        notFound();
    }
    return (
        <div className='prose py-8'>
            <p className="text-xs text-muted-foreground">
                {new Date(post.publishedAt).toLocaleDateString()}
            </p>
            <h1 className='dark:text-white'>{post.title}</h1>
            <Mdx>{post.content}</Mdx>
        </div>
    )
}


export default Page;