//
import Image from "next/image";
import { ReactNode } from "react";
// emotion
import { css } from "@emotion/react";
import styled from "@emotion/styled";
// components
import Nav from "./nav";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Column>
      <Header>
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
          <Nav />
        </div>
      </Header>
      <Main>{children}</Main>
    </Column>
  );
}

const Main = styled.main`
  margin-top: 104px;
  display: flex;
  justify-content: center;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  height: 80px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
