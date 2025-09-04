import { api } from "@/lib/api";
import { ProductDTO, ProductSchema } from "@/schema/product-schema";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface EditProductProps {
  id: string;
  product: ProductDTO;
}

interface EditProductResponse {
  message: string;
  id: string;
  product: ProductDTO;
}



export default function EditProductHooks({ id, product }: EditProductProps) {
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

  useEffect(() => {
    if (product) {
      reset({
        name: product.name,
        description: product.description,
      });
    }
  }, [product, reset]);

  const queryClient = useQueryClient();
  const { mutateAsync, isPending } = useMutation<EditProductResponse, Error, ProductDTO>({
    mutationKey: ["edit-product"],
    mutationFn: async (data: ProductDTO) => {
      const response = await api.patch(`/product/${id}`, data);
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
