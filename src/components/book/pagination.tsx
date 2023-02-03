//
import { useState } from "react";
// emotion
import { css } from "@emotion/react";
import styled from "@emotion/styled";
//
import { useRecoilState, useSetRecoilState } from "recoil";
// store
import { pageState, bookDetailKeyState } from "@/store/book";

/**
 * total 총 갯수
 * show 한번에 보여줄 리스트 개수
 */
interface IPagination {
  total: number;
  show?: number;
}

export default function Pagination({ total, show = 10 }: IPagination) {
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(show);

  const [page, setPage] = useRecoilState(pageState);
  const setBookDetailKey = useSetRecoilState(bookDetailKeyState);

  const totalPage = Math.ceil(total / limit);

  const handleClick =
    ({
      num,
      prev = false,
      next = false,
    }: {
      num: number;
      prev?: boolean;
      next?: boolean;
    }) =>
    () => {
      setBookDetailKey("");

      if (num === 0) {
        alert("이전 페이지가 없습니다.");
        return;
      }

      if (num === totalPage) {
        alert("마지막 페이지입니다.");
        return;
      }

      setPage(num);

      // prev
      if (num % show === 9 && prev) {
        setOffset(offset - 10);
        setLimit(offset + 1);
        return;
      }

      // next
      if (num % show === 0 && next) {
        setOffset(limit - 1);
        setLimit(totalPage < limit + show ? totalPage : limit + show);
        return;
      }
    };

  return total > 0 ? (
    <Container>
      <Button onClick={handleClick({ num: page - 1, prev: true })}>
        &lsaquo;
      </Button>
      {totalPage &&
        Array(totalPage)
          .fill(0)
          .map((_, i) => {
            let num = i + 1;
            if (offset < num && num < limit) {
              return (
                <Button
                  key={`page-${num}`}
                  className={num === page ? "active" : ""}
                  onClick={handleClick({ num })}
                >
                  {num}
                </Button>
              );
            }
          })}
      <Button onClick={handleClick({ num: page + 1, next: true })}>
        &rsaquo;
      </Button>
    </Container>
  ) : null;
}

const Container = styled.div`
  display: flex;
  & > * {
    margin: 0 4px;
  }
`;

const Button = styled.button(({ theme }) => ({
  border: "1px solid #DADADA",
  borderRadius: "4px",
  width: "24px",
  height: "24px",
  fontFamily: "Noto Sans KR",
  fontWeight: 500,
  fontSize: "14px",
  lineHeight: "22px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#B1B8C0",
  backgroundColor: theme.palette.white,
  cursor: "pointer",
  "&.active": {
    background: "#4880EE",
    color: theme.palette.white,
  },
}));
