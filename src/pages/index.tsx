//
import Head from "next/head";
// emotion
import styled from "@emotion/styled";
// components
import Layout from "@/components/layout";
import SearchBookInput from "@/components/search-book/input";
import SearchBookList from "@/components/search-book/list";

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
        <Container>
          <검색Container>
            <Title2>도서 검색</Title2>
            <SearchBookInput />
          </검색Container>
          <SearchBookList />
        </Container>
      </Layout>
    </>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  max-width: 960px;
  & > * {
    margin: 16px 0;
  }
`;

const 검색Container = styled.div`
  width: 100%;
  & > * {
    margin: 16px 0;
  }
`;

const Title2 = styled.h2(({ theme }) => ({
  ...theme.typography.title2,
}));
