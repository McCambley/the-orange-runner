import Layout from "../components/Layout";
import Comic from "../components/Comic";
import { useEffect, useState } from "react";
import { client } from "../utils/client";
import { debounce } from "../lib/debounce";
import Loading from "../components/Loading";

const INITIAL_LENGTH = 3;
const LIMIT = 3;

export async function getStaticProps() {
  const res = await client.getEntries({
    content_type: "comic",
    order: "-fields.originalPublishDate",
    limit: INITIAL_LENGTH,
  });

  return {
    props: {
      data: res.items,
    },
    revalidate: 10,
  };
}

export default function Home({ data }) {
  const [comics, setComics] = useState(data);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const main = document.getElementById("main");
    const debounceScroll = debounce(() => handleScroll(comics.length));
    main.addEventListener("scroll", debounceScroll);
    return () => main.removeEventListener("scroll", debounceScroll);
  }, [comics]);

  function handleScroll(skip) {
    const main = document.getElementById("main");
    const scrollTop = main.scrollTop;
    const offsetHeight = main.offsetHeight;
    const scrollHeight = main.scrollHeight;
    const isScrollEnd = scrollTop + offsetHeight + 400 >= scrollHeight;
    // console.log({ isScrollEnd, scrollTop, offsetHeight, scrollHeight });
    return isScrollEnd && hasMore && getMoreComics(skip);
  }

  async function getMoreComics(skip) {
    // console.log({ hasMore, isLoading });
    if (!hasMore || isLoading) return;
    setIsLoading(true);

    const res = await fetch(`/api/comics?skip=${skip}&limit=${LIMIT}`);
    const { data, done } = await res.json();
    // remove loader
    setIsLoading(false);
    // if no more comics prevent further queries
    if (done) {
      setHasMore(false);
    }
    // add new comics to list
    if (res.status == 200) {
      setComics((list) => [...list, ...data.items]);
    }
  }

  return (
    <Layout home={true}>
      {comics.map((comic) => (
        <Comic comic={comic} key={comic.sys.id} />
      ))}
      {/* {isLoading && <Loading />} */}
      {hasMore && <Loading />}
    </Layout>
  );
}
