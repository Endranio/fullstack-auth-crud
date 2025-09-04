import { TableProduct } from "@/utils/table";
import DashboardHook from "./hooks/get-product";
import { useState } from "react";

export default function DashboardPage() {
  const [page, setPage] = useState(1);
  const { data, isPending } = DashboardHook(page);

  if (isPending || !data) {
    return <p>loading...</p>;
  }

  return (
    <div>
      <h1 className="font-bold text-2xl pl-10 pt-10">Product</h1>

      <TableProduct
        products={data.products}
        page={data.page}
        totalPages={data.totalPages}
         onPageChange={setPage}
      />
    </div>
  );
}
