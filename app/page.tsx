import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getPosts } from "@/lib/posts";
import Link from "next/link";

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Card key={post.slug}>
          <CardHeader>
            <p className="text-xs text-muted-foreground">{post.publishedAt}</p>
            <CardTitle>{post.title}</CardTitle>
            <CardDescription>{post.description}</CardDescription>
          </CardHeader>
          <CardFooter>
            <Link href={`/posts/${post.slug}`}>
              <span className="text-primary hover:underline">Read more</span>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
