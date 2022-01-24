import Layout from "../components/Layout";
// import Comic from "../components/ComicOld";
import Comic from "../components/Comic";
import { client } from "../utils/client";

export async function getStaticProps() {
  const res = await client.getEntries({ content_type: "comic", order: "-fields.originalPublishDate", limit: 1000 });

  return {
    props: {
      comics: res.items,
    },
    revalidate: 10,
  };
}

export default function Home({ comics }) {
  return (
    <Layout home={true}>
      {comics.map((comic) => (
        <Comic comic={comic} key={comic.sys.id} />
      ))}
    </Layout>
  );
}
