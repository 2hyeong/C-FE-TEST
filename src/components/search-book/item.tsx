import type { IBook } from "@/types/book";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Image from "next/image";
import { toCurrency } from "@/utils/currency";
import Button from "../ui/button";

interface ISearchBookItem {
  doc: IBook;
}

export default function SearchBookItem({ doc }: ISearchBookItem) {
  const Title = styled.span(({ theme }) => ({
    ...theme.typography.title3,
    ...theme.text.primary,
    marginLeft: "4rem",
  }));

  const Author = styled.span(({ theme }) => ({
    ...theme.typography.body2,
    ...theme.text.secondary,
    marginLeft: "1rem",
  }));

  const Price = styled.span(({ theme }) => ({
    ...theme.typography.title3,
    ...theme.text.primary,
    marginLeft: "18rem",
  }));

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
      `}
    >
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
        `}
      >
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <Image width={48} height={68} src={doc.thumbnail} alt="책 이미지" />
          <Title>{doc.title}</Title>
          <Author>{doc.authors[0]}</Author>
        </div>
        <div>
          <Price>{toCurrency(doc.price)}</Price>
          <Button css={{ marginLeft: "56px" }}>구매하기</Button>
          <Button css={{ marginLeft: "8px" }} color="secondary">
            상세보기
          </Button>
        </div>
      </div>
      <hr
        css={css`
          margin-top: 25px;
          margin-bottom: 15px;
          color: #d2d6da;
          background: #d2d6da;
          height: 1px;
        `}
      />
    </div>
  );
}
