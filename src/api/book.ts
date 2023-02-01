import axios from "axios";
import type { IBookParams } from "@/types/book";

const url = `${process.env.KAKAO_API}/v3/search/book`;
const headers = {
  Authorization: `KakaoAK ${process.env.API_KEY}`,
};

export const getBooks = async (params: IBookParams): Promise<any> => {
  const data = await axios(url, { params, headers });
  return data;
};
