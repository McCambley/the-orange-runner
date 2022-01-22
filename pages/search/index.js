import { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import Loading from "../../components/Loading";
import Comic from "../../components/Comic";
import { useSearch } from "../../context/searchContext";

// export async function getServerSideProps(context) {
//   const res = await client.getEntries({
//     content_type: "comic",
//     order: "-fields.originalPublishDate",
//     field: "keywords",
//     value: useRouter().query.keyword,
//   });

//   console.log({ res });

//   if (!res.items.length) {
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false,
//       },
//     };
//   }
//   return {
//     props: { comic: res.items[0] },
//   };
// }

export default function Search({ comic }) {
  // const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { keyword, setKeyword, loading, error, searchResults, search } = useSearch();

  // useEffect(() => {
  //   if (!router.isReady) return;
  //   setLoading(true);
  // }, [router]);

  return (
    <Layout>
      {loading && <Loading />}
      {!true && <Comic standalone={false} comic={comic} />}
    </Layout>
  );
}
