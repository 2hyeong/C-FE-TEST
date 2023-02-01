import "@emotion/react";

type text = "primary" | "secondary";
type palette = "primary" | "red" | "gray" | "white" | "black" | "secondary";
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
    text: {
      [key in text]: {
        color: string;
      };
    };
    typography: {
      [key in typography]: {
        fontFamily: string;
        fontStyle: string;
        fontWeight: number;
        fontSize: string;
        lineHeight: string;
      };
    };
  }
}
