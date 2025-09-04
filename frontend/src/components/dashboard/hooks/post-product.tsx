import { api } from "@/lib/api";
import { ProductDTO, ProductSchema } from "@/schema/product-schema";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";


interface PostProductResponse {
  message: string;
  id: string;
  product: ProductDTO;
}
export default function PostProductHooks() {
  const closeRef = useRef<HTMLButtonElement>(null);

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<ProductDTO>({
    mode: "onChange",
    resolver: zodResolver(ProductSchema),
  });

  const queryClient = useQueryClient();
  const { mutateAsync, isPending } = useMutation<PostProductResponse, Error, ProductDTO>({
    mutationKey: ["add-product"],
    mutationFn: async (data: ProductDTO) => {
      const response = await api.post(`/product`, data);
      return response.data;
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        return toast.error(error.response?.data.message);
      }

      toast.error("something wrong");
    },
    onSuccess: async (data) => {
      await queryClient.invalidateQueries({
        queryKey: ["All-product"],
      });
       await queryClient.invalidateQueries({
        queryKey: ["User-product"],
      });


      toast.success(data.message);
      closeRef.current?.click();
      reset();
    },
  });

  const onSubmit = async (data: ProductDTO) => {
    await mutateAsync(data);
  };

  return {
    handleSubmit,
    onSubmit,
    errors,
    register,
    isPending,
    closeRef,
  };
}
