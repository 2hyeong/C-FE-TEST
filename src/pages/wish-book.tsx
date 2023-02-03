import Head from "next/head";
// components
import Layout from "@/components/layout";
// emotion
import styled from "@emotion/styled";
import WishBookList from "@/components/book/wish/list";

export default function WishList() {
  return (
    <>
      <Head>
        <title>내가 찜한 책</title>
        <meta name="description" content="내가 찜한 책" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Container>
          <검색Container>
            <Title2>내가 찜한 책</Title2>
          </검색Container>
          <WishBookList />
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
