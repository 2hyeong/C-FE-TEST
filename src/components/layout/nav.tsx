//
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
// store
import { bookDetailKeyState } from "@/store/book";
// emotion
import styled from "@emotion/styled";

export default function Nav() {
  const { pathname } = useRouter();
  const setBookDetail = useSetRecoilState(bookDetailKeyState);
  const routes = [
    {
      to: "/",
      name: "도서 검색",
    },
    {
      to: "/wish-book",
      name: "내가 찜한 책",
    },
  ];

  useEffect(() => {
    setBookDetail("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <>
      {routes.map((route) => (
        <StyledLink
          key={`route-${route.to}`}
          className={pathname == route.to ? "active" : ""}
          href={route.to}
        >
          {route.name}
        </StyledLink>
      ))}
    </>
  );
}

const StyledLink = styled(Link)(({ theme }) => ({
  ...theme.typography.body1,
  margin: "0 2rem",
  "&.active": {
    borderBottom: "1px solid #353C49",
    paddingBottom: "2px",
  },
}));
