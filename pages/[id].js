import React from "react";
import Image from "next/image";
import Layout from "../components/Layout";
import Head from "next/head";

export default function Comic({ comicData }) {
  return (
    <Layout>
      <Head>{/* <title>{comicData.title}</title> */}</Head>
      {/* map over images from comicData to make articles */}
    </Layout>
  );
}

// For static page generation
// export async function getStaticPaths() {
//   // return a list of possible values for id
//   const paths = getAllPostIds();
//   return {
//     paths: paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }) {
//   const postData = await getPostData(params.id);
//   return {
//     props: {
//       postData,
//     },
//   };
// }
