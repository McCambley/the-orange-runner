import { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import { Loading, StatusSpinner } from "../../styles/styledSearch";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  console.log(!!router.isReady, router.query);

  useEffect(() => {
    setLoading(true);
    fetch("api/profile-data")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  return (
    <Layout>
      {loading && (
        <Loading>
          <StatusSpinner />
          {/* {`Searching for: ${router.query.name}`} */}
        </Loading>
      )}
    </Layout>
  );
}
