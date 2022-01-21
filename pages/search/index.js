import { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import Loading from "../../components/Loading";
import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  console.log(!!router.isReady, router.query);

  useEffect(() => {
    setLoading(true);

    // client
    //   .getEntries({
    //     content_type: "comic",
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => console.error(err));
    // fetch("api/profile-data")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setData(data);
    //     setLoading(false);
    //   });
  }, []);

  return <Layout>{true && <Loading />}</Layout>;
}
