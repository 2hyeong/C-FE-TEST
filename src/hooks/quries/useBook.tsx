import { getBooks } from "@/api/book";
import type { IApiError } from "@/types/api";
import { IBookParams } from "@/types/book";
import { useQuery } from "react-query";

export const useQueryBook = ({
  id,
  query,
  sort,
  page,
  size,
  target,
}: { id?: number } & IBookParams) => {
  return useQuery(
    [id, query, page],
    () => getBooks({ query, sort, page, size, target }),
    {
      onError: (err: IApiError) => err,
      enabled: query.length > 0,
    }
  );
};
