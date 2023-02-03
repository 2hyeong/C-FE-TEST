import axios from "axios";
import type { IBookParams, IBookResponse } from "@/types/book";

const kakaoAPI = `${process.env.KAKAO_API}/v3/search/book`;
const headers = {
  Authorization: `KakaoAK ${process.env.API_KEY}`,
};

export const getBooks = async (params: IBookParams): Promise<IBookResponse> => {
  const { data } = await axios.get(kakaoAPI, { params, headers });
  return data;
};
