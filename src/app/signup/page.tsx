"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { axios } from "axios";

const SignUpPage = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });
  console.log(user);
  const onSignup = async () => {};
  return (
    <div className="flex flex-col justify-center items-center text-center w-full h-screen">
      <h1 className="text-2xl mb-3">Signup</h1>
      <form className="flex flex-col gap-3">
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
          onClick={onSignup}
          className="hover:bg-slate-700 border p-2 rounded-md text-sm"
        >
          Signup
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
