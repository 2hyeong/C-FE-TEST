//
import { useRecoilState, useRecoilValue } from "recoil";
// store
import {
  bookDetailKeyState,
  bookQueryState,
  pageState,
  searchInputState,
  targetState,
  wishState,
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
import { useEffect, useState } from "react";

export default function WishBookList() {
  const bookDetailKey = useRecoilValue(bookDetailKeyState);
  const [data, setData] = useRecoilState(wishState);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("wish-list") as string));
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
            {data?.doc?.length || 0}
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
        {!data?.doc?.length ? (
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
            {data?.doc?.map((doc: IBook, key: number) => {
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
        <Pagination total={data?.doc?.length} />
      </div>
    </div>
  );
}
