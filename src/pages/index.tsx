import Layout from "@/components/layout";
import Head from "next/head";
import SearchBook from "@/components/search-book";

export default function Home() {
  return (
    <>
      <Head>
        <title>CERTICOS BOOKS</title>
        <meta name="description" content="CERTICOS BOOKS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <SearchBook />
      </Layout>
    </>
  );
}
