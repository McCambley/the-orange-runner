import { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import Loading from "../../components/Loading";
import { client } from "../../utils/client";
import Comic from "../../components/Comic";

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
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  console.log(!!router.isReady, router.query);

  useEffect(() => {
    setLoading(true);

    fetch(`api/search?keyword=${router.query.keyword}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error({ error });
      });
  }, []);

  return (
    <Layout>
      {loading && <Loading />}
      {!loading && <Comic standalone={false} comic={comic} />}
    </Layout>
  );
}
