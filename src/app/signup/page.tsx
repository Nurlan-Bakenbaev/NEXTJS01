"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import Loading from "@/components/Loading";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";
const SignUpPage = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });
  const router = useRouter();
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const onSignup = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setButtonDisabled(true);
    try {
      const response = await axios.post("/api/users/signup", user);
      toast.success("Your account successfully created  ");
      router.push("/login");
    } catch (error) {
      toast.error("Something went wrong ");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center text-center w-full h-screen">
      <Toaster position="top-right" reverseOrder={false} />
      <Image
        className="absolute filter blur-[20%] z-[-1] opacity-40 "
        src={
          "https://images.unsplash.com/photo-1557264337-e8a93017fe92?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt="Unsplash - Photo"
        layout="fill"
        objectFit="cover"
      />
      <form className="flex flex-col gap-3 bg-slate-800 w-[350px]  p-8 rounded-md">
        <h1 className="text-2xl mb-3">Signup</h1>
        <input
          className="text-black pl-3 py-2  rounded-md outline-none"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="Username"
          type="text"
        />
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
          disabled={buttonDisabled}
          onClick={onSignup}
          className="hover:bg-slate-700 border p-2 rounded-md text-sm"
        >
          {buttonDisabled ? <Loading /> : "Signup"}
        </button>
        <Link
          className=" hover:text-blue-600 text-blue-400 text-[13px] text-right"
          href="/login"
        >
          Already have an account?
        </Link>
      </form>
    </div>
  );
};

export default SignUpPage;
