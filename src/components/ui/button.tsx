import type { palette } from "@/types/emotion";
import { ReactNode } from "react";

interface ButtonProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "css"> {
  children: ReactNode;
  color?: palette;
}

export default function Button({
  children,
  color = "primary",
  className,
}: ButtonProps) {
  return (
    <button
      css={(theme) => ({
        ...(color === "secondary" ? theme.text.secondary : { color: "white" }),
        backgroundColor: theme.palette[color],
        borderRadius: "8px",
        padding: "13px 20px",
        border: 0,
        cursor: "pointer",
      })}
      className={className}
    >
      {children}
    </button>
  );
}
