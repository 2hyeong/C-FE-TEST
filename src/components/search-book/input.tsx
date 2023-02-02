//
import { SyntheticEvent, useRef } from "react";
import { useSetRecoilState } from "recoil";
// emotion
import { css } from "@emotion/react";
import styled from "@emotion/styled";
// store
import { bookDetailKeyState, searchInputState } from "@/store/book";

export default function SearchBookInput() {
  const input = useRef<HTMLInputElement>(null);
  const setInput = useSetRecoilState(searchInputState);
  const setBookDetail = useSetRecoilState(bookDetailKeyState);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    setInput(input.current?.value || "");
    setBookDetail("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      css={css`
        display: flex;
      `}
    >
      <input
        css={(theme) => ({
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
        })}
        placeholder="검색어를 입력하세요"
        ref={input}
      />
      <div
        css={css`
          display: flex;
          align-items: center;
          margin-left: 1rem;
        `}
      >
        <상세검색버튼 type="submit">상세 검색</상세검색버튼>
      </div>
    </form>
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
