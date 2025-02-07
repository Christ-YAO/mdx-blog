import { getPosts } from "@/lib/posts";

export default async function Home() {
  const fileNames = await getPosts();

  return (
    <ul className="list-disc list-inside">
      {fileNames.map((fileName) => (
        <li key={fileName}>{fileName}</li>
      ))}
    </ul>
  );
}
