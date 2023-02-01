import "@emotion/react";

type palette = "primary" | "red" | "gray" | "lightGray" | "white" | "black";
type typography =
  | "title1"
  | "title2"
  | "title3"
  | "body1"
  | "body2"
  | "body2-bold"
  | "caption"
  | "small";

declare module "@emotion/react" {
  export interface Theme {
    palette: {
      [key in palette]: string;
    };
    typography: {
      [key in typography]: unknown;
    };
  }
}
