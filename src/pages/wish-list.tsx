import Layout from "@/components/layout";
import Head from "next/head";
import SearchBook from "@/components/search-book";

export default function WishList() {
  return (
    <>
      <Head>
        <title>내가 찜한 책</title>
        <meta name="description" content="내가 찜한 책" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout></Layout>
    </>
  );
}
