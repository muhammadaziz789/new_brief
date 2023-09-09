import { useMemo } from "react";
import CSkeleton from "../CSkeleton";
export default function CTableSkeleton({ rowsCount = 5, columnsCount }) {
  const columns = useMemo(() => {
    return new Array(columnsCount).fill(0);
  }, [columnsCount]);

  const rows = useMemo(() => {
    return new Array(rowsCount).fill(0);
  }, [rowsCount]);

  return (
    <div className="mt-5">
      <CSkeleton classes="grid-cols-1 gap-3" width="100%" height={70} />
    </div>
  );
}
