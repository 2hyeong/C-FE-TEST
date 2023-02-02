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
        width: 100%;
        align-items: center;
        max-width: 960px;
        & > * {
          margin: 16px 0;
        }
      `}
    >
      <div
        css={css`
          width: 100%;
          & > * {
            margin: 16px 0;
          }
        `}
      >
        <Title2>도서 검색</Title2>
        <SearchBookInput />
      </div>
      <SearchBookList />
    </section>
  );
}
