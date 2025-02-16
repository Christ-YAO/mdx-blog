import Mdx from '@/lib/features/mdx/Mdx';
import { getPost } from '@/lib/posts';
import { notFound } from 'next/navigation';
import { ViewCount } from './ViewCount';
import { Metadata } from 'next';

export const dynamic = "force-static"

export const generateMetadata = async (props: {
    params: { slug: string };
}): Promise<Metadata> => {
    const post = await getPost(props.params.slug);

    if (!post) {
        return {
            title: "404 - Page Not Found",
            description: "Page not found",
        };
    }

    return {
        title: post.title,
        description: post.description,
    };
};

const Page = async ({ params: { slug } }: { params: { slug: string } }) => {
    const post = await getPost(slug);

    if (!post) {
        notFound();
    }
    return (
        <div className='prose py-8'>
            <div className="flex items-center gap-2">
                <p className="text-xs text-muted-foreground">
                    {new Date(post.publishedAt).toLocaleDateString()}
                </p>
                <ViewCount slug={slug} />
            </div>
            <h1 className='dark:text-white'>{post.title}</h1>
            <Mdx>{post.content}</Mdx>
        </div>
    )
}


export default Page;