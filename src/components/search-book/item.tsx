//
import Image from "next/image";
import { useSetRecoilState } from "recoil";
// types
import type { IBook } from "@/types/book";
// emotion
import { css } from "@emotion/react";
import styled from "@emotion/styled";
// utils
import { toCurrency } from "@/utils/currency";
// components
import Button from "@/components/ui/button";
// store
import { bookDetailKeyState } from "@/store/book";

interface ISearchBookItem {
  id: string;
  doc: IBook;
}

export default function SearchBookItem({ id, doc }: ISearchBookItem) {
  const setBookDetail = useSetRecoilState(bookDetailKeyState);

  const 구매하기 = (url: string) => {
    if (url === "") {
      alert("구매 링크가 유효하지 않습니다.");
      return;
    }
    window.open(url);
  };

  const 상세보기 = () => {
    setBookDetail(id);
  };

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
            width: 100%;
          `}
        >
          <Image
            width={48}
            height={68}
            src={doc?.thumbnail || ""}
            alt="책 이미지"
          />
          <Title>{doc.title}</Title>
          <Author>{doc.authors.join(", ")}</Author>
        </div>
        <div
          css={css`
            width: 100%;
            display: flex;
            justify-content: end;
            align-items: center;
          `}
        >
          <Price>{toCurrency(doc.price)}</Price>
          <Button
            onClick={() => 구매하기(doc.url)}
            css={{ marginLeft: "56px" }}
          >
            <span>구매하기</span>
          </Button>
          <Button
            onClick={상세보기}
            css={{ marginLeft: "8px" }}
            color="secondary"
          >
            <span>상세보기</span>
            <Image
              css={css`
                margin-left: 5px;
              `}
              src="/assets/icons/icon_down.svg"
              width={8}
              height={14}
              alt="상세보기 열기 아이콘"
            />
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

const Title = styled.span(({ theme }) => ({
  ...theme.typography.title3,
  ...theme.text.primary,
  marginLeft: "4rem",
  whiteSpace: "pre",
  overflow: "auto",
  textOverflow: "ellipsis",
  maxWidth: "400px",
}));

const Author = styled.span(({ theme }) => ({
  ...theme.typography.body2,
  ...theme.text.secondary,
  marginLeft: "1rem",
  whiteSpace: "pre",
  overflow: "auto",
  textOverflow: "ellipsis",
  maxWidth: "100px",
}));

const Price = styled.span(({ theme }) => ({
  ...theme.typography.title3,
  ...theme.text.primary,
}));
