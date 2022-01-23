import React from "react";
import Layout from "../../components/Layout";
import { client } from "../../utils/client";
import Link from "next/link";
import { CollectionItem, CollectionList } from "../../styles/styledCollection";

export async function getStaticProps() {
  const res = await client.getEntries({ content_type: "collection" });

  return {
    props: {
      collections: res.items,
    },
  };
}

export default function thing({ collections }) {
  console.log({ collections });

  return (
    <Layout>
      <h1>Collections</h1>
      <CollectionList>
        {collections.map((collection) => {
          return (
            <li key={collection.fields.slug}>
              <Link href={`/collections/${collection.fields.slug}`}>
                <CollectionItem>{collection.fields.title} </CollectionItem>
              </Link>
              <p>{collection.fields.subtitle}</p>
            </li>
          );
        })}
      </CollectionList>
    </Layout>
  );
}
