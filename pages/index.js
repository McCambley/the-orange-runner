import Layout from "../components/Layout";
import Comic from "../components/Comic";
import { useState } from "react";
import { client } from "../utils/client";
import InfiniteScroll from "react-infinite-scroll-component";

export async function getStaticProps() {
  const res = await client.getEntries({ content_type: "comic", order: "-fields.originalPublishDate", limit: 15 });

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
  const [loading, setLoading] = useState(true);

  function getMoreComics() {
    alert("cool");
    // console.log("Getting more...");
    return fetch(`/api/comics?skip=${keyword}`)
      .then((res) => {
        if (!res.ok) {
          return Promise.reject(`${res.status} error!`);
        }
        return res.json();
      })
      .then((res) => {
        // do another thing
        setComics((oldList) => {
          return { ...oldList, data: res.data };
        });
        if (res.done) {
          setHasMore(false);
        }
      })
      .catch(() => {
        // handle something
        setLoading(false);
        console.error(error);
      });
  }

  function handleScroll() {
    // console.log("scrolling");
  }

  return (
    <Layout home={true}>
      <InfiniteScroll
        dataLength={comics.length}
        next={getMoreComics}
        onScroll={handleScroll}
        hasMore={hasMore}
        loader={<h3> Loading...</h3>}
        endMessage={<h4>Nothing more to show</h4>}
        getScrollParent={() => document.getElementsByTagName("main")[0]}
      >
        {comics.map((comic) => (
          <Comic comic={comic} key={comic.sys.id} />
        ))}
      </InfiniteScroll>
    </Layout>
  );
}

// On this page
// figure out how to get a fixed height div to scroll
// load only the first 15 comics
// write and fetch call to get the next 15 and setComics as that
// scroll again...
