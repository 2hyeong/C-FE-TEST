// emotion
import styled from "@emotion/styled";
// components
import SearchBookInput from "./input";
import SearchBookList from "./list";

export default function SearchBook() {
  return (
    <Container>
      <검색Container>
        <Title2>도서 검색</Title2>
        <SearchBookInput />
      </검색Container>
      <SearchBookList />
    </Container>
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

const Title2 = styled.h2((props) => ({
  ...props.theme.typography.title2,
}));
