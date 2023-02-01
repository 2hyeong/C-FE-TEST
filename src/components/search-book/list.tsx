import { useGetBooks } from "@/hooks/quries/useBook";
import { searchInputState } from "@/store/book";
import { IBook } from "@/types/book";
import { css } from "@emotion/react";
import { useRecoilValue } from "recoil";
import Empty from "./empty";
import SearchBookItem from "./item";

export default function SearchBookList() {
  const query = useRecoilValue(searchInputState);
  const { data, isLoading } = useGetBooks({ query });

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
          display: "flex";
          flex-direction: "column";
        `}
      >
        {!data?.data?.documents?.length ? (
          <div
            css={css`
              margin-top: 10rem;
            `}
          >
            <Empty />
          </div>
        ) : (
          <div
            css={css`
              margin-top: 4rem;
            `}
          >
            {data?.data?.documents?.map((doc: IBook, key: number) => (
              <SearchBookItem key={key} doc={doc} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
