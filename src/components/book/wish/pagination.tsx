import styled from "@emotion/styled";
import { Dispatch, SetStateAction, useState } from "react";

interface IPagination {
  page: number;
  totalPages: number;
  volume: number;
  setPage: Dispatch<SetStateAction<number>>;
}

export default function Pagination({
  page,
  totalPages,
  volume,
  setPage,
}: IPagination) {
  const buttons = [];

  let leftSide = page - 10;
  if (leftSide <= 0) leftSide = 1;
  let rightSide = page + 10;
  if (rightSide > totalPages) rightSide = totalPages;

  const nextPage = () => {
    if (page < volume && page < rightSide + 1) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  for (let i = leftSide; i <= rightSide + 1; i++) {
    buttons.push(
      <Button
        key={`page-${i}`}
        className={i === page ? "active" : ""}
        onClick={() => setPage(i)}
      >
        {i}
      </Button>
    );
  }
  return rightSide > 0 ? (
    <Container>
      <Button onClick={prevPage}>&lsaquo;</Button>
      {buttons}
      <Button onClick={nextPage}>&rsaquo;</Button>
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
