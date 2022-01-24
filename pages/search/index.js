import { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import Loading from "../../components/Loading";
import Comic from "../../components/Comic";
import { useSearch } from "../../context/searchContext";
import { Error, Message, SubMessage } from "../../styles/styledSearch";

export default function Search({ comic }) {
  const router = useRouter();
  const { keyword, setKeyword, loading, error, searchResults, search } = useSearch();

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
