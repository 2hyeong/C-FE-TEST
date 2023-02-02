import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Nav() {
  const { pathname } = useRouter();
  const routes = [
    {
      to: "/",
      name: "도서 검색",
    },
    {
      to: "/wish-list",
      name: "내가 찜한 책",
    },
  ];

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
