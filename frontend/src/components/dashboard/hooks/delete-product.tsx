import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Spinner from "@/components/ui/spinner";
import { api } from "@/lib/api";
import { DeleteDTO } from "@/schema/product-schema";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { ReactNode } from "react";
import { toast } from "sonner";


  
type Delete={
  id:string,
  trigger:ReactNode,
  
}

interface DeleteResponse {
  message: string;
}

  export function AlertDelete({trigger,id}:Delete) {


    const queryClient = useQueryClient();
      const { mutateAsync, isPending } = useMutation<
        DeleteResponse,
        Error,
        DeleteDTO
      >({
        mutationKey: ['delete'],
        mutationFn: async () => {
          const response = await api.delete(`/product/${id}`);
        
          return response.data;
        },
        onError: (error) => {
          if (axios.isAxiosError(error)) {
            return toast.error(error.response?.data.message);
          }
    
          toast.error('something wrong');
        },
        onSuccess: async (data) => {
            toast.success(data.message);
          await queryClient.invalidateQueries({
            queryKey: [`All-product`],
          });
          
        },
      });
    
    
      const onSubmit = async(data:DeleteDTO)=>{
        await mutateAsync(data)
      }

    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          {trigger}
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. The selected item will be permanently deleted and cannot be recovered.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
  className="hover:bg-red-500 flex items-center justify-center gap-2"
  onClick={() => onSubmit({ id: id })}
  disabled={isPending}
>
  {isPending ? (
    <Spinner/>
  ) : (
    "Continue"
  )}
</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  