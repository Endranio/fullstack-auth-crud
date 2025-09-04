"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/storage/store";
import { logout } from "@/storage/authSlice";
import Cookies from "js-cookie";
export default function Navbar() {
  const dispatch = useDispatch<AppDispatch>();
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  return (
    <nav className=" sticky top-0 z-50 w-full border-b bg-white p-2 px-4">
      <div className=" flex h-16 items-center justify-between w-full">
        <div className="space-x-4">
          {isAuthenticated && (
            <>
              <Link
               href={"/dashboard"}
              >
                Product
              </Link>
              <Link
               href={"/dashboard/profile"}
              >
                Profile
              </Link>
            </>
          )}
        </div>
        {isAuthenticated ? (
          <Button
            onClick={() => {
              dispatch(logout()), Cookies.remove("token");
            }}
            className="text-lg"
            variant="ghost"
          >
            <Link href="/login">Log out</Link>
          </Button>
        ) : (
          <div className="flex items-center space-x-2">
            <Button className="text-lg" variant="ghost" asChild>
              <Link href="/login">Sign In</Link>
            </Button>
            <Button className="text-lg" asChild>
              <Link href="/register">Sign Up</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
