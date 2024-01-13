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
  const onSignup = async () => {
    
  };
  return <div className="text-center w-full">SignUpPage</div>;
};

export default SignUpPage;
