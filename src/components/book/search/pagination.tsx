//
// emotion
import styled from "@emotion/styled";
//
import { useRecoilState, useSetRecoilState } from "recoil";
// store
import { pageState, bookDetailKeyState } from "@/store/book";

/**
 * total 총 갯수
 * volume 한번에 보여줄 리스트 개수
 */
interface IPagination {
  total: number;
  volume?: number;
}

export default function Pagination({ total, volume = 10 }: IPagination) {
  const [page, setPage] = useRecoilState(pageState);
  const setBookDetailKey = useSetRecoilState(bookDetailKeyState);

  const totalPage = Math.ceil(total / volume);

  const handleClick = (num: number) => () => {
    setBookDetailKey("");

    if (num === 0) {
      alert("이전 페이지가 없습니다.");
      return;
    }

    if (num > totalPage) {
      alert("마지막 페이지입니다.");
      return;
    }

    setPage(num);
  };

  const buttons = [];

  let leftSide = page - 10;
  if (leftSide <= 0) leftSide = 1;
  let rightSide = page + 10;
  if (rightSide > totalPage) rightSide = totalPage;

  for (let i = leftSide; i <= rightSide; i++) {
    buttons.push(
      <Button
        key={`page-${i}`}
        className={i === page ? "active" : ""}
        onClick={handleClick(i)}
      >
        {i}
      </Button>
    );
  }

  return rightSide > 0 ? (
    <Container>
      <Button onClick={handleClick(page - 1)}>&lsaquo;</Button>
      {buttons}
      <Button onClick={handleClick(page + 1)}>&rsaquo;</Button>
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
