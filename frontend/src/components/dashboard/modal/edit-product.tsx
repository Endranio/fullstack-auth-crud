"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ReactNode } from "react";

import Spinner from "@/components/ui/spinner";
import { Textarea } from "@/components/ui/textarea";
import { ProductDTO } from "@/schema/product-schema";
import EditProductHooks from "../hooks/edit-product";

interface CreateProductProps {
  trigger: ReactNode;
  id: string;
  product: ProductDTO
}

export function EditProduct({ trigger, id, product }: CreateProductProps) {
  

  

  const { errors, handleSubmit, isPending, onSubmit, register, closeRef } =
    EditProductHooks({ id, product});

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Edit Product</DialogTitle>
           
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3 mt-4">
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" {...register("name")} />
              <p className="text-red-500 text-sm">{errors.name?.message}</p>
            </div>
            <div className="grid gap-3">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" {...register("description")} />
              <p className="text-red-500 text-sm">
                {errors.description?.message}
              </p>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button disabled={isPending} type="submit">
              {isPending ? <Spinner /> : "Save"}
            </Button>
            <DialogClose asChild>
              <Button ref={closeRef} hidden />
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
