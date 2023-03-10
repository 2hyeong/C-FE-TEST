//
import Image from "next/image";
// emotion
import { css } from "@emotion/react";

export default function Empty({ text }: { text: string }) {
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
        {text}
      </span>
    </div>
  );
}
