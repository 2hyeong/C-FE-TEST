//
import { SyntheticEvent, useRef } from "react";
import { useSetRecoilState } from "recoil";
// ui
import { css } from "@emotion/react";
import styled from "@emotion/styled";
// components
import Button from "@/components/ui/button";
import Dropdown from "./dropdown";
// store
import { bookQueryState, searchInputState } from "@/store/book";

interface IDetailSearchBookDialog
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "css"> {
  show: boolean;
  callback: () => void;
}

export default function DetailSearchBookDialog({
  show,
  callback,
}: IDetailSearchBookDialog) {
  const input = useRef<HTMLInputElement>(null);

  const setInput = useSetRecoilState(searchInputState);
  const setBookQuery = useSetRecoilState(bookQueryState);

  const 검색 = (e: SyntheticEvent) => {
    e.preventDefault();

    if (input.current?.value) {
      setInput(input.current?.value);
      setBookQuery(Math.random());
    }
    callback();
  };

  return (
    <Container
      css={css`
        ${show ? "display: block" : "display: none"}
      `}
    >
      <div
        css={css`
          display: flex;
          padding: 16px 0;
        `}
      >
        <div
          css={css`
            flex: 1;
          `}
        >
          <Dropdown />
          <Divider
            css={css`
              color: #d2d6da;
              background: #d2d6da;
            `}
          />
        </div>
        <form
          css={css`
            flex: 2;
            margin-left: 4px;
          `}
          onSubmit={검색}
        >
          <Input ref={input} placeholder="검색어 입력" />
          <Divider
            css={css`
              color: #4880ee;
              background: #4880ee;
            `}
          />
        </form>
      </div>
      <Button
        css={css`
          width: 100%;
        `}
        onClick={검색}
      >
        검색
      </Button>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  width: 360px;
  height: 160px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 14px 6px rgba(151, 151, 151, 0.15);
  top: 60px;
  left: -130px;
  display: flex;
  flex-direction: column;
  padding: 32px 24px;
`;

const Divider = styled.hr`
  margin-top: 5px;
  height: 1px;
  border: thin;
`;

const Input = styled.input(({ theme }) => ({
  border: 0,
  ...theme.typography.caption,
  color: "#8D94A0",
  "&:focus": {
    outline: "none",
  },
}));
