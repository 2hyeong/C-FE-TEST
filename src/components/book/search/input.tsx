//
import { SyntheticEvent, useRef, useState } from "react";
import { useSetRecoilState } from "recoil";
// emotion
import { css } from "@emotion/react";
import styled from "@emotion/styled";
// store
import {
  bookDetailKeyState,
  bookQueryState,
  searchInputState,
  targetState,
} from "@/store/book";
// components
import DetailSearchBookDialog from "../dialog";

export default function SearchBookInput() {
  const input = useRef<HTMLInputElement>(null);

  const [showDetailSearch, setShowDetailSearch] = useState(false);

  const setInput = useSetRecoilState(searchInputState);
  const setBookDetail = useSetRecoilState(bookDetailKeyState);
  const setTarget = useSetRecoilState(targetState);
  const setBookQuery = useSetRecoilState(bookQueryState);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    setInput(input.current?.value || "");
    setBookDetail("");
    setTarget("");
    setBookQuery(Math.random());
  };

  const handleClick상세검색 = () => {
    if (showDetailSearch) {
      setTarget("title");
    } else {
      setTarget("title");
    }
    setShowDetailSearch(!showDetailSearch);
  };

  const callback = () => {
    setShowDetailSearch(!showDetailSearch);
  };

  return (
    <div
      css={css`
        display: flex;
      `}
    >
      <form onSubmit={handleSubmit}>
        <Input placeholder="검색어를 입력하세요" ref={input} />
      </form>
      <div
        css={css`
          display: flex;
          align-items: center;
          margin-left: 1rem;
          position: relative;
        `}
      >
        <상세검색버튼 onClick={handleClick상세검색}>상세 검색</상세검색버튼>
        <DetailSearchBookDialog show={showDetailSearch} callback={callback} />
      </div>
    </div>
  );
}

const 상세검색버튼 = styled.button((props) => ({
  ...props.theme.typography.body2,
  border: "1px solid #8D94A0",
  borderRadius: "8px",
  color: "#8d94a0",
  padding: "5px 10px",
  cursor: "pointer",
  backgroundColor: props.theme.palette.white,
  height: "35.7px",
}));

const Input = styled.input(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  background: "#f2f4f6",
  borderRadius: "100px",
  border: "none",
  width: "480px",
  height: "50px",
  backgroundImage: 'url("/assets/icons/icon_search.svg")',
  backgroundPosition: "25px",
  backgroundRepeat: "no-repeat",
  padding: "0 60px",
  ...theme.typography.caption,
}));
