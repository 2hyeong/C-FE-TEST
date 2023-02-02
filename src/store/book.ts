import { atom } from "recoil";

export const bookQueryState = atom({
  key: "bookQueryState",
  default: 1,
});

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

export const targetState = atom({
  key: "targetState",
  default: "",
});
