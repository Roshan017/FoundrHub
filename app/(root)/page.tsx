import Image from "next/image";
import SearchForm from "../../components/SearchForm";

interface HomeProps {
  searchParams: {
    query?: string;
  };
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
    </>
  );
}
