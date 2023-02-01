import { SyntheticEvent, useRef } from "react";
//
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { searchInputState } from "@/store/book";
import { useSetRecoilState } from "recoil";

export default function SearchBookInput() {
  const input = useRef<HTMLInputElement>(null);
  const setInput = useSetRecoilState(searchInputState);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    setInput(input.current?.value || "");
  };

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
          padding: "10px 0px 10px 10px",
          background: "#f2f4f6",
          borderRadius: "100px",
          border: "none",
          width: "480px",
          height: "50px",
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
