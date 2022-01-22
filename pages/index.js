import Layout from "../components/Layout";
import Comic from "../components/Comic";
import Story from "../components/Story";
import { client } from "../utils/client";

export async function getStaticProps() {
  const res = await client.getEntries({ content_type: "comic", order: "-fields.originalPublishDate" });

  return {
    props: {
      comics: res.items,
    },
    revalidate: 10,
  };
}

export default function Home({ comics }) {
  console.log({ comics });

  return (
    <Layout home={true}>
      {comics.map((comic) =>
        comic.fields.extendedComic ? (
          <Story comic={comic} key={comic.sys.id} />
        ) : (
          <Comic comic={comic} key={comic.sys.id} />
        )
      )}
    </Layout>
  );
}
