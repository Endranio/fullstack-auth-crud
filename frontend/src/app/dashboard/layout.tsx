"use client";

import { api } from "@/lib/api";
import { QueryClient, useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useEffect } from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();

  const { isFetched, isError } = useQuery({
    queryKey: ["check"],
    queryFn: async () => {
      Cookies.get("token");
      const res = await api.get("/auth/check");
      return res.data;
    },
  });

  useEffect(() => {
    if (isError) {
      Cookies.remove("token");
      window.location.replace("/login");
    }
  }, [isError]);

  if (!isFetched || isError) {
    return;
  }

  return <main>{children}</main>;
}
