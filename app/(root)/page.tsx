import Image from "next/image";
import SearchForm from "../../components/SearchForm";

import { posts } from "@/db/Posts";
import StartUpCard from "@/components/StartUpCard";

interface HomeProps {
  searchParams: {
    query?: string;
  };
}
interface Author {
  _id: number;
  name: string;
}
interface StartupCardType {
  _createdAt: Date;
  views: number;
  author: Author;
  _id: number;
  description: string;
  image: string;
  category: string;
  title: string;
}

export default async function Home({ searchParams }: HomeProps) {
  const query = (await searchParams).query;

  return (
    <>
      <section className="pink_container">
        <h1 className="main_heading">"Showcase. Connect. Build the Future."</h1>
        <p className="sub-heading">
          Empowering startups to rise, scale, and succeed.
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-bold">
          {query ? `Search Results for ${query}` : "All Startups"}
        </p>

        <ul className="card_grid mt-7 ">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType) => (
              <StartUpCard key={post?._id} post={post} />
            ))
          ) : (
            <li>No Startups Found</li>
          )}
        </ul>
      </section>
    </>
  );
}
