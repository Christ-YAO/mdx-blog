import fs from "fs/promises";
import path from "path";
import { z } from "zod";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content");

const PostSchema = z.object({
  title: z.string(),
  description: z.string(),
  publishedAt: z.coerce.string(),
  published: z.boolean().optional().default(false),
});

type Post = z.infer<typeof PostSchema> & { slug: string; content: string };

export const getPosts = async () => {
  const files = await fs.readdir(postsDirectory);
  const fileNames = files.filter((file) => file.endsWith(".mdx"));

  const posts = [];
  for await (const fileName of fileNames) {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContent = await fs.readFile(fullPath, "utf8");
    const frontmatter = matter(fileContent);

    const safeData = PostSchema.safeParse(frontmatter.data);
    if (!safeData.success) {
      console.error(
        `Error parsing file: ${fileName} - ${safeData.error.issues
          .map((i) => i.message)
          .join(", ")}`
      );
      continue;
    }

    if (!safeData.data.published && process.env.NODE_ENV !== "development") {
      continue;
    }

    posts.push({
      ...safeData.data,
      slug: fileName.replace(".mdx", ""),
      content: frontmatter.content,
    });
  }

  return posts;
};

export const getPost = async (slug: string) => {
  const posts = await getPosts();
  return posts.find((post) => post.slug === slug);
};
