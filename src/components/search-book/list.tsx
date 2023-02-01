import { css } from "@emotion/react";

export default function SearchBookList() {
  return (
    <div>
      <div>
        <span
          css={css`
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
          `}
        >
          도서결과 총
          <span
            css={(theme) => ({
              color: theme.palette.primary,
              marginLeft: "1rem",
            })}
          >
            0
          </span>
          건
        </span>
      </div>
      <div></div>
    </div>
  );
}
