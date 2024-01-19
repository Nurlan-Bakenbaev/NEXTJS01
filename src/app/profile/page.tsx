"use client";
import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import GoogleAuth from "@/components/GoogleAuth";
const Profile = () => {
  const router = useRouter();
  const logOut = async () => {
    try {
      const response = await axios.get("/api/users/logout");
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex w-full h-screen justify-center items-center">
      {(
        <button onClick={logOut} className="border border-slate-400">
          LOGOUT
        </button>
      ) && <GoogleAuth />}
    </div>
  );
};

export default Profile;
