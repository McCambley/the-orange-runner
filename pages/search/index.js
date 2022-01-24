import Layout from "../../components/Layout";
import Loading from "../../components/Loading";
import Comic from "../../components/Comic";
import { useSearch } from "../../context/searchContext";
import { Error, Message, SubMessage } from "../../styles/styledSearch";

export default function Search({ comic }) {
  const { keyword, loading, error, searchResults } = useSearch();

  return (
    <Layout>
      {loading && <Loading />}
      {!loading && searchResults.map((comic) => <Comic comic={comic} key={comic.sys.id} />)}
      {error && (
        <Error>
          <Message>{`No results found for ${keyword.toLowerCase()}`}</Message>
          <SubMessage>Heading back...</SubMessage>
        </Error>
      )}
    </Layout>
  );
}
