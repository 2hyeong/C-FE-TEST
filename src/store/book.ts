import { atom } from "recoil";

export const searchInputState = atom({
  key: "searchInputState",
  default: "",
});

export const bookDetailKeyState = atom({
  key: "bookDetailKeyState",
  default: "",
});

export const pageState = atom({
  key: "pageState",
  default: 1,
});
