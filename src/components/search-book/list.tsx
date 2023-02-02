//
import { useRecoilValue } from "recoil";
// hooks
import { useQueryBook } from "@/hooks/quries/useBook";
// store
import {
  bookDetailKeyState,
  bookQueryState,
  pageState,
  searchInputState,
  targetState,
} from "@/store/book";
// type
import type { IBook } from "@/types/book";
// emotion
import { css } from "@emotion/react";
// components
import SearchBookDetail from "./detail";
import Empty from "./empty";
import SearchBookItem from "./item";
import Pagination from "./pagination";

export default function SearchBookList() {
  const query = useRecoilValue(searchInputState);
  const bookDetailKey = useRecoilValue(bookDetailKeyState);
  const target = useRecoilValue(targetState);
  const bookQuery = useRecoilValue(bookQueryState);
  const page = useRecoilValue(pageState);

  const { data, isLoading, isSuccess } = useQueryBook({
    id: bookQuery,
    query,
    page,
    target,
  });

  if (isLoading) return <>loading...</>;
  if (isSuccess) {
    console.log(data, "data");
  }

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
            {data?.data?.meta?.total_count || 0}
          </span>
          건
        </span>
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          width: 960px;
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
            {data?.data?.documents?.map((doc: IBook, key: number) => {
              {
                return bookDetailKey === `doc-${key}` ? (
                  <SearchBookDetail key={`doc-${key}`} doc={doc} />
                ) : (
                  <SearchBookItem
                    key={`doc-${key}`}
                    id={`doc-${key}`}
                    doc={doc}
                  />
                );
              }
            })}
          </div>
        )}
      </div>
      <div
        css={css`
          display: flex;
          justify-content: center;
        `}
      >
        <Pagination total={data?.data?.meta?.total_count} />
      </div>
    </div>
  );
}
