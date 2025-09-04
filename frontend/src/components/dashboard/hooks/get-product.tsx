import { api } from "@/lib/api";
import { ProductDTO } from "@/schema/product-schema";
import { useQuery } from "@tanstack/react-query";


interface DashboardResponse {
  products: ProductDTO[];
  page: number;
  totalPages: number;
}
export default function DashboardHook(page:number) {
  const { data, isPending } = useQuery<DashboardResponse>({
    queryKey: ["All-product",page],
    queryFn: async () => {
      const res = await api.get(`/product?page=${page}`);
      return res.data.data;
    },
  });

  return {
    data,
    isPending,
  };
}
