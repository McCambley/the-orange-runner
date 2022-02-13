import Layout from "../components/Layout";
import Comic from "../components/Comic";
import { useEffect, useState } from "react";
import { client } from "../utils/client";
import { debounce } from "../lib/debounce";
import Loading from "../components/Loading";
import InfiniteScroll from "react-infinite-scroll-component";

export async function getStaticProps() {
  const res = await client.getEntries({ content_type: "comic", order: "-fields.originalPublishDate", limit: 3 });

  return {
    props: {
      data: res.items,
    },
    revalidate: 10,
  };
}

export default function Home({ data }) {
  // https://stackoverflow.com/questions/67624601/how-to-implement-infinite-scroll-in-next-js
  const [comics, setComics] = useState(data);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isScrollEnd, setIsScrollEnd] = useState(false);
  const debounceScroll = debounce(() => handleScroll(), 40);

  useEffect(() => {
    const main = document.getElementById("main");
    main.addEventListener("scroll", debounceScroll);
  }, []);

  useEffect(() => {
    return isScrollEnd && getMoreComics();
  }, [isScrollEnd]);

  function handleScroll() {
    const main = document.getElementById("main");
    const scrollTop = main.scrollTop;
    const offsetHeight = main.offsetHeight;
    const scrollHeight = main.scrollHeight;
    setIsScrollEnd(scrollTop + offsetHeight === scrollHeight);
  }

  function getMoreComics() {
    // alert("cool");
    if (hasMore) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
    console.log("Getting more...");
    // return fetch(`/api/comics?skip=${keyword}`)
    //   .then((res) => {
    //     if (!res.ok) {
    //       return Promise.reject(`${res.status} error!`);
    //     }
    //     return res.json();
    //   })
    //   .then((res) => {
    //     // do another thing
    //     setComics((oldList) => {
    //       return { ...oldList, data: res.data };
    //     });
    //     if (res.done) {
    //       setHasMore(false);
    //     }
    //   })
    //   .catch(() => {
    //     // handle something
    //     setLoading(false);
    //     console.error(error);
    //   });
  }

  return (
    <Layout home={true}>
      {comics.map((comic) => (
        <Comic comic={comic} key={comic.sys.id} />
      ))}
      {isLoading && <Loading />}
    </Layout>
  );
}

// On this page
// figure out how to get a fixed height div to scroll
// load only the first 15 comics
// write and fetch call to get the next 15 and setComics as that
// scroll again...
