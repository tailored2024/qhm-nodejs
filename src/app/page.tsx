import HomePage from "@/components/home/HomePage";
import { getPublications } from "@/server/repositories/publications";

export default async function Home() {
  const posts = await getPublications();
  return <HomePage posts={posts} />;
}

