"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";

import { useRouter } from "next/navigation";

import { LoginDTO, LoginSchema } from "@/schema/auth-schema";
import { api } from "@/lib/api";
import { AppDispatch } from "@/storage/store";
import { useDispatch } from "react-redux";
import { setUser } from "@/storage/authSlice";


export default function UseLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginDTO>({
    mode: "onChange",
    resolver: zodResolver(LoginSchema),
  });

  const router = useRouter();

  const dispatch = useDispatch<AppDispatch>();
  const { mutateAsync, isPending } = useMutation({
    mutationKey: ["login"],
    mutationFn: async (data: LoginDTO) => {
      const res = await api.post("/auth/login", data);
      Cookies.set("token", res.data.data.token, {
        expires: 1,
      });
      dispatch(setUser(res.data.data.user));
      return res.data;
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        return toast.error(error.response?.data.message);
      }
      toast.error("something wrong");
    },
    onSuccess: async (data) => {
      toast.success(data.message);
      router.push("/dashboard");
    },
  });

  const onSubmit = handleSubmit(async (data: LoginDTO) => {
    await mutateAsync(data);
  });

  return {
    register,
    errors,
    onSubmit,
    isPending,
  };
}
