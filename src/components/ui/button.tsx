import type { palette } from "@/types/emotion";
import { ReactNode } from "react";

interface ButtonProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "css"> {
  children: ReactNode;
  color?: palette;
  onClick: () => void;
}

export default function Button({
  children,
  color = "primary",
  className,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      css={(theme) => ({
        ...(color === "secondary" ? theme.text.secondary : { color: "white" }),
        backgroundColor: theme.palette[color],
        borderRadius: "8px",
        padding: "13px 20px",
        border: 0,
        cursor: "pointer",
        display: "inline-flex",
        alignItem: "center",
        justifyContent: "center",
      })}
      className={className}
    >
      {children}
    </button>
  );
}
