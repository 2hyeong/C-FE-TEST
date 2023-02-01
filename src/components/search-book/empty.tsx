import { css } from "@emotion/react";
import Image from "next/image";

export default function Empty() {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
      `}
    >
      <Image
        src="/assets/icons/icon_book.svg"
        width={80}
        height={80}
        alt="책 아이콘"
      />
      <span
        css={(theme) => ({ ...theme.typography.caption, marginTop: "2rem" })}
      >
        검색 결과가 없습니다
      </span>
    </div>
  );
}
