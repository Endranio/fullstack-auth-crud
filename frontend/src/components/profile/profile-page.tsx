"use client";

import { TableProduct } from "@/utils/table";
import GetProductUserHook from "./hooks/get-product-user";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";
import { Users } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/storage/store";
import { useState } from "react";

export default function ProfilePage() {
  const [page, setPage] = useState<number>(1);
  const { data, isPending } = GetProductUserHook(page);

  const { user } = useSelector((state: RootState) => state.auth);

  if (isPending) {
    return;
  }

  return (
    <div>
      <h1 className="font-bold text-2xl pl-10 pt-10">Profile</h1>

      <Card className="md:col-span-1 shadow-lg w-[30%] m-auto">
        <CardHeader className="text-center pb-4">
          <div className="space-y-2">
            <h2 className="text-xl font-bold">{user?.name}</h2>
            <p className="text-muted-foreground">{user?.email}</p>
            <Badge variant="secondary" className="mt-2">
              Active User
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2 text-sm">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">
              Gender: {user?.gender}
            </span>
          </div>
        </CardContent>
      </Card>

      <TableProduct
        products={data?.products}
        page={data?.page}
        totalPages={data?.totalPages}
        onPageChange={setPage}
      />
    </div>
  );
}
