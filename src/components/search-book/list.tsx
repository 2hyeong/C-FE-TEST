import { useGetBooks } from "@/hooks/quries/useBook";
import { searchInputState } from "@/store/book";
import { css } from "@emotion/react";
import { useRecoilValue } from "recoil";
import Empty from "./empty";

export default function SearchBookList() {
  const query = useRecoilValue(searchInputState);
  const { data } = useGetBooks({ query });

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
            {data?.data?.documents?.length || 0}
          </span>
          건
        </span>
      </div>
      <div
        css={css`
          margin-top: 10rem;
        `}
      >
        {!data?.data?.documents?.length ? <Empty /> : <></>}
      </div>
    </div>
  );
}
