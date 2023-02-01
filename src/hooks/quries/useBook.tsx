import { getBooks } from "@/api/book";
import type { IApiError } from "@/types/api";
import { IBookParams } from "@/types/book";
import { useQuery } from "react-query";

export const useGetBooks = ({
  query,
  sort,
  page,
  size,
  target,
}: IBookParams) => {
  return useQuery(
    [query],
    () => getBooks({ query, sort, page, size, target }),
    {
      onError: (err: IApiError) => err,
      enabled: query.length > 0,
    }
  );
};
