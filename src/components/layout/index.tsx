import { css } from "@emotion/react";
import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "@emotion/styled";

export default function Layout({ children }: { children: ReactNode }) {
  const StyledLink = styled(Link)((props) => ({
    ...props.theme.typography.body1,
    margin: "0 2rem",
  }));
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
      `}
    >
      <header
        css={css`
          display: flex;
          align-items: center;
          height: 80px;
        `}
      >
        <div
          css={css`
            position: absolute;
            left: 8.33%;
          `}
        >
          <Image
            width={207}
            height={32}
            src="/assets/images/CERTICOS_BOOKS.svg"
            alt="로고"
          />
        </div>
        <div
          css={css`
            display: flex;
            justify-content: center;
            flex: 1;
          `}
        >
          <StyledLink href="/">도서 검색</StyledLink>
          <StyledLink href="/wish-list">내가 찜한 책</StyledLink>
        </div>
      </header>
      <main
        css={css`
          margin-top: 104px;
          display: flex;
          justify-content: center;
        `}
      >
        {children}
      </main>
    </div>
  );
}
