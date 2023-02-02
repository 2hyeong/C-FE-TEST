//
import Image from "next/image";
// types
import type { IBook } from "@/types/book";
// emotion
import { css } from "@emotion/react";
import styled from "@emotion/styled";
// utils
import { toCurrency } from "@/utils/currency";
// components
import Button from "@/components/ui/button";
import { useSetRecoilState } from "recoil";
import { bookDetailKeyState } from "@/store/book";

interface ISearchBookDetail {
  doc: IBook;
}

export default function SearchBookDetail({ doc }: ISearchBookDetail) {
  const setBookDetail = useSetRecoilState(bookDetailKeyState);

  const Title = styled.span(({ theme }) => ({
    ...theme.typography.title3,
    ...theme.text.primary,
  }));

  const Author = styled.span(({ theme }) => ({
    ...theme.typography.body2,
    ...theme.text.secondary,
    marginLeft: "1rem",
  }));

  const Contents = styled.p(({ theme }) => ({
    ...theme.text.primary,
    fontFamily: "Noto Sans KR",
    fontWeight: 500,
    fontSize: "10px",
    lineHeight: "16px",
    wordBreak: "keep-all",
    display: "contents",
  }));

  const Price = styled.div(({ theme }) => ({
    ...theme.typography.title3,
    ...theme.text.primary,
    marginLeft: "8px",
  }));

  const PriceCaption = styled.span(() => ({
    fontFamily: "Noto Sans KR",
    fontWeight: 500,
    fontSize: "10px",
    lineHeight: "22px",
    color: "#8D94A0",
  }));

  const 구매하기 = (url: string) => {
    if (url === "") {
      alert("구매 링크가 유효하지 않습니다.");
      return;
    }
    window.open(url);
  };

  const 상세보기 = () => {
    setBookDetail("");
  };

  const DetailPrice = () => {
    const hasSalesPrice = doc.sale_price > 0;
    return (
      <>
        <p
          css={css`
            display: flex;
            margin-bottom: 8px;
            align-items: center;
          `}
        >
          <PriceCaption>정가</PriceCaption>
          <Price
            css={css`
              ${hasSalesPrice &&
              `
              text-decoration: line-through;
              font-weight: 350;
              `}
            `}
          >
            {toCurrency(doc.price)}
          </Price>
        </p>
        {hasSalesPrice ? (
          <p
            css={css`
              display: flex;
              margin-bottom: 16px;
            `}
          >
            <PriceCaption>할인가</PriceCaption>
            <Price>{toCurrency(doc.sale_price)}</Price>
          </p>
        ) : null}
      </>
    );
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
        <Image
          width={209}
          height={278}
          src={doc?.thumbnail || ""}
          alt="책 이미지"
        />
        <div
          css={css`
            display: flex;
            flex-direction: column;
            max-width: 360px;
            height: 278px;
          `}
        >
          <div>
            <Title>{doc.title}</Title>
            <Author>{doc.authors[0]}</Author>
          </div>
          <p
            css={css`
              font-weight: 700;
              font-size: 14px;
              line-height: 26px;
              margin: 16px 0 12px 0;
            `}
          >
            책 소개
          </p>
          <Contents>{doc.contents}</Contents>
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            height: 278px;
            justify-content: space-between;
          `}
        >
          <Button
            onClick={상세보기}
            css={{ marginLeft: "8px", width: "115px" }}
            color="secondary"
          >
            상세보기
            <Image
              css={css`
                margin-left: 5px;
              `}
              src="/assets/icons/icon_up.svg"
              width={8}
              height={14}
              alt="상세보기 접기 아이콘"
            />
          </Button>
          <div
            css={css`
              display: flex;
              flex-direction: column;
              align-items: flex-end;
            `}
          >
            <DetailPrice />
            <Button
              onClick={() => 구매하기(doc.url)}
              css={{ marginLeft: "56px", width: "240px" }}
            >
              구매하기
            </Button>
          </div>
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
