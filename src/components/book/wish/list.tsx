//
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
// store
import { bookDetailKeyState, wishState } from "@/store/book";
// type
import type { IBook } from "@/types/book";
// emotion
import { css } from "@emotion/react";
// components
import BookDetail from "../detail";
import Empty from "../empty";
import BookItem from "../item";
import Pagination from "./pagination";
import usePagination from "@/hooks/usePagination";

export default function WishBookList() {
  const bookDetailKey = useRecoilValue(bookDetailKeyState);
  const [data, setData] = useRecoilState(wishState);
  const volume = 10;

  const { page, totalPages, setPage, offset, limit } = usePagination(
    data.doc,
    volume
  );

  useEffect(() => {
    const wishList = JSON.parse(localStorage.getItem("wish-list") as string);
    setData(wishList);
  }, []);

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
          찜한 책
          <span
            css={(theme) => ({
              color: theme.palette.primary,
              marginLeft: "1rem",
            })}
          >
            {data.doc.length}
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
        {!data.doc ? (
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
            {data.doc.slice(offset, limit)?.map((doc: IBook, key: number) => {
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
        <Pagination
          page={page}
          totalPages={totalPages}
          volume={volume}
          setPage={setPage}
        />
      </div>
    </div>
  );
}
