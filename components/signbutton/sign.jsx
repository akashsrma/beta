"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const Sign = () => {
  const { data: session } = useSession();
  return session && session.user ? (
    <button
      className="mt-6 font-medium  bg-gray-600 text-white px-9 py-3 justify-center rounded-md hover:shadow-sm hover:shadow-gray-400 cursor-pointer hover:text-gray-800 hover:bg-gray-100"
      onClick={() => signOut()}
    >
      Sign Out
    </button>
  ) : (
    <button
      className="mt-6 font-medium  bg-gray-600 text-white px-9 py-3 justify-center rounded-md hover:shadow-sm hover:shadow-gray-400 cursor-pointer hover:text-gray-800 hover:bg-gray-100"
      onClick={() => signIn()}
    >
      Sign In
    </button>
  );
};

export default Sign;
