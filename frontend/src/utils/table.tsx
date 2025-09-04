"use client";

import { AlertDelete } from "@/components/dashboard/hooks/delete-product";
import { CreateProduct } from "@/components/dashboard/modal/add-product";
import { EditProduct } from "@/components/dashboard/modal/edit-product";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ProductDTO } from "@/schema/product-schema";
import { Settings, Trash2 } from "lucide-react";
import { useState } from "react";

interface TableProductProps {
  products?: ProductDTO[];
  page?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
}
export function TableProduct({
  products,
  page,
  totalPages,
  onPageChange,
}: TableProductProps) {
  const [inputPage, setInputPage] = useState<number>(page || 1);

  const goToPage = () => {
    if (onPageChange) {
      const newPage = Math.max(1, Math.min(totalPages || 1, inputPage));
      onPageChange(newPage);
    }
  };

  if(!page || !totalPages){
    return
  }

  return (
    <div className="p-10 ">
      <div className="flex justify-between mb-5">
        <div className="flex items-center gap-2">
          <Input
            min={1}
            max={totalPages}
            value={inputPage}
            onChange={(e) => setInputPage(Number(e.target.value))}
            type="number"
            placeholder="Go to"
            className="w-24"
          />
          <Button  onClick={goToPage} variant="outline">Go</Button>
        </div>
        <CreateProduct trigger={<Button>+ Add product</Button>} />
      </div>
      <div className="border-2 rounded-xl shadow-xl ">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">No</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="text-end">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products?.map((product, index) => (
              <TableRow key={product.id}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.description}</TableCell>
                <TableCell className="text-right">
                  <div className="flex gap-2 justify-end">
                    <AlertDelete
                      id={product.id || ""}
                      trigger={
                        <Button type="button" className="bg-red-600">
                          <Trash2 />
                        </Button>
                      }
                    />

                    <EditProduct
                      trigger={
                        <Button className="bg-yellow-500">
                          <Settings />
                        </Button>
                      }
                      id={product.id || ""}
                      product={product}
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex justify-center mt-4 gap-2">
        <Button   onClick={() => onPageChange?.(page - 1)}
          disabled={page <= 1} variant="outline">Prev</Button>
        <span className="px-3 py-2">
          Page {page} of {totalPages}
        </span>
        <Button   onClick={() => onPageChange?.(page + 1)}
          disabled={page >= totalPages} variant="outline">Next</Button>
      </div>
    </div>
  );
}
