import { useGetBooks } from "@/hooks/quries/useBook";
import { bookDetailKeyState, searchInputState } from "@/store/book";
import { IBook } from "@/types/book";
import { css } from "@emotion/react";
import { useRecoilValue } from "recoil";
import SearchBookDetail from "./detail";
import Empty from "./empty";
import SearchBookItem from "./item";

export default function SearchBookList() {
  const query = useRecoilValue(searchInputState);
  const bookDetailKey = useRecoilValue(bookDetailKeyState);

  const { data, isLoading } = useGetBooks({ query });
  console.log(data);
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
    </div>
  );
}
