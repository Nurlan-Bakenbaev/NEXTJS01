"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Loading from "@/components/Loading";
import GoogleAuth from "@/components/GoogleAuth";

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
    <div className=" flex flex-col justify-center items-center text-center w-full h-screen">
      <Toaster position="top-right" reverseOrder={false} />
      <h1 className="text-2xl mb-3">Login</h1>
      <form className=" flex flex-col gap-3">
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
      </form>
      <div>
        <p className="my-3 text-blue-300">or</p>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default LoginPage;
