import Layout from "@/components/layout";
import Head from "next/head";
import SearchBook from "@/components/search-book";

export default function Home() {
  return (
    <>
      <Head>
        <title>도서 검색</title>
        <meta name="description" content="도서 검색" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <SearchBook />
      </Layout>
    </>
  );
}
