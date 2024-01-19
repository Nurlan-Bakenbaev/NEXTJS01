"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import jwt from "jsonwebtoken";
export default function GoogleAuth() {
  const router = useRouter();
  const { data: session } = useSession();

  const singInWithGoogle = async () => {
    await signIn("google");
    router.push("/");
  };
  return (
    <div>
      {!session ? (
        <button
          className="flex gap-2 items-center border
           group p-2
           hover:text-red-500 hover:bg-blue-200 
           rounded-md duration-300 hover:scale-105"
          onClick={() => singInWithGoogle()}
        >
          Sign in with Google{" "}
          <span className="group-hover:text-blue-500 p-1">
            <FaGoogle />
          </span>
        </button>
      ) : (
        <div>
          <p>Welcome, {session.user.name}!</p>
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      )}
    </div>
  );
}
