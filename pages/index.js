import Layout from "../components/Layout";
import Comic from "../components/Comic";
import { useState } from "react";
import { client } from "../utils/client";
import InfiniteScroll from "react-infinite-scroll-component";

export async function getStaticProps() {
  const res = await client.getEntries({ content_type: "comic", order: "-fields.originalPublishDate", limit: 1000 });

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

  function getMoreComics() {
    console.log("Getting more...");
  }

  return (
    <Layout home={true}>
      <InfiniteScroll
        dataLength={comics.length / 10}
        next={getMoreComics}
        hasMore={hasMore}
        loader={<h3> Loading...</h3>}
        endMessage={<h4>Nothing more to show</h4>}
      >
        {comics.map((comic) => (
          <Comic comic={comic} key={comic.sys.id} />
        ))}
      </InfiniteScroll>
    </Layout>
  );
}
