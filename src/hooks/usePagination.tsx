import { useMemo, useState } from "react";
//
import type { IBook } from "@/types/book";

export default function usePagination(data: IBook[], volume: number) {
  /** All pages in total. */
  const totalPages = useMemo(
    () => Math.floor(data.length / volume),
    [volume, data?.length]
  );
  const [page, setPage] = useState(1);

  const offset = (page - 1) * volume;
  const limit = (page - 1) * volume + volume;

  /** Data representing one single page. */
  const slicedData = useMemo(
    () => data.slice(offset, limit),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [volume, page]
  );

  return { data: slicedData, page, totalPages, setPage, offset, limit };
}
