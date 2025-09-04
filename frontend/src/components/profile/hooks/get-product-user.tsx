"use client"

import { api } from "@/lib/api";
import { ProductDTO } from "@/schema/product-schema";
import { useQuery } from "@tanstack/react-query";


interface DashboardResponse {
  products: ProductDTO[];
  page: number;
  totalPages: number;
}
export default function GetProductUserHook(page:number) {
    const { data, isPending } = useQuery<DashboardResponse>({
    queryKey: ["User-product"],
    queryFn: async () => {
      const res = await api.get(`/product/user`);
      return res.data.data;
    },
  });

  return {
    data,
    isPending,
  };
}