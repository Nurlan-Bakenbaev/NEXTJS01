"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Loading from "@/components/Loading";
import GoogleAuth from "@/components/GoogleAuth";
import Image from "next/image";

const LoginPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const onLogin = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("/api/users/login", user);
      router.push("/profile");
      console.log(response.data);
      toast.success("Successfully toasted!");
    } catch (error) {
      toast.error(" Incorrect Password or Email ");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className=" flex flex-row justify-center items-center text-center w-full h-screen">
      <Image
        className="absolute filter blur-[20%] z-[-1] opacity-40 "
        src={
          "https://images.unsplash.com/photo-1557264337-e8a93017fe92?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt="Unsplash - Photo"
        layout="fill"
        objectFit="cover"
      />
      <Toaster position="top-right" reverseOrder={false} />

      <div className=" flex flex-col gap-3 bg-slate-800 w-[350px]  p-8 rounded-md">
        <h1 className="text-2xl ">Login</h1>
        <input
          className="text-black pl-3 py-2  rounded-md outline-none"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Email"
          type="email"
        />
        <input
          className="text-black pl-3 py-2  rounded-md outline-none"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Password"
          type="password"
        />
        <button
          onClick={onLogin}
          className="hover:bg-slate-700 border p-2 rounded-md text-sm"
        >
          {loading ? <Loading /> : "Signup"}
        </button>
        <Link
          className=" hover:text-blue-600 text-blue-400 text-[13px] text-right"
          href="/signup"
        >
          Create an account?
        </Link>
        <div>
          <p className="my-3 text-blue-300 text-center">or</p>
        </div>
        <div className="flex justify-center">
          <GoogleAuth />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
