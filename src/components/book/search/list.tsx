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
import BookDetail from "../detail";
import Empty from "../empty";
import BookItem from "../item";
import Pagination from "../pagination";

export default function SearchBookList() {
  const query = useRecoilValue(searchInputState);
  const bookDetailKey = useRecoilValue(bookDetailKeyState);
  const target = useRecoilValue(targetState);
  const bookQuery = useRecoilValue(bookQueryState);
  const page = useRecoilValue(pageState);

  const { data, isLoading } = useQueryBook({
    id: bookQuery,
    query,
    page,
    target,
  });

  if (isLoading) return <>loading...</>;

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
            {data?.meta?.total_count || 0}
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
        {!data?.documents?.length ? (
          <div
            css={css`
              margin-top: 10rem;
            `}
          >
            <Empty text="검색된 결과가 없습니다." />
          </div>
        ) : (
          <div
            css={css`
              margin-top: 4rem;
            `}
          >
            {data?.documents?.map((doc: IBook, key: number) => {
              {
                return bookDetailKey === `doc-${key}` ? (
                  <BookDetail key={`doc-${key}`} doc={doc} />
                ) : (
                  <BookItem key={`doc-${key}`} id={`doc-${key}`} doc={doc} />
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
        <Pagination total={data?.meta?.total_count || 0} />
      </div>
    </div>
  );
}
