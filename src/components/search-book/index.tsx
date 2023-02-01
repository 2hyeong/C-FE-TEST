import { css } from "@emotion/react";
import styled from "@emotion/styled";
import SearchBookInput from "./input";
import SearchBookList from "./list";

export default function SearchBook() {
  const Title2 = styled.h2((props) => ({
    ...props.theme.typography.title2,
  }));
  return (
    <section
      css={css`
        display: flex;
        flex-direction: column;
        & > * {
          margin: 0.5rem 0;
        }
      `}
    >
      <Title2>도서 검색</Title2>
      <SearchBookInput />
      <SearchBookList />
    </section>
  );
}
