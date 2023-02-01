import { css } from "@emotion/react";
import Button from "@/components/ui/button";
import styled from "@emotion/styled";

export default function SearchBookInput() {
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
    <div
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
      />
      <div
        css={css`
          display: flex;
          align-items: center;
          margin-left: 1rem;
        `}
      >
        <상세검색버튼>상세 검색</상세검색버튼>
      </div>
    </div>
  );
}
