import Layout from "../components/Layout";
import { createClient } from "contentful";
import Comic from "../components/Comic";
import Story from "../components/Story";
import { useEffect } from "react";
import { useSlugs } from "../context/slugContext";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "comic", order: "-fields.originalPublishDate" });

  return {
    props: {
      comics: res.items,
    },
    revalidate: 10,
  };
}

export default function Home({ comics }) {
  const { slugs, setSlugs } = useSlugs();
  console.log(comics);

  useEffect(() => {
    setSlugs(comics.map((comic) => comic.fields.slug));
  }, [comics]);

  return (
    <Layout home={true}>
      {comics.map((comic) =>
        comic.fields.extendedComic ? (
          <Story comic={comic} key={comic.sys.id} slugs={slugs} />
        ) : (
          <Comic comic={comic} key={comic.sys.id} slugs={slugs} />
        )
      )}
    </Layout>
  );
}
