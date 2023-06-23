"use client";
import React from "react";
import Sign from "../signbutton/sign";
import { useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();
  return (
    <div className=" flex justify-between border-b-2 border-gray-300 p-5">
      <div>
        <img
          src="../assets/wwe.webp"
          alt="wwe"
          width={100}
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-row gap-[3rem]">
        <div className="mt-6 font-extrabold bg-gray-600 text-white px-6 py-4   rounded-md hover:shadow-sm hover:shadow-gray-400 cursor-pointer hover:text-gray-800 hover:bg-gray-100 ">
          <button>Create Profile</button>
        </div>
        <Sign />

        {session && session.user ? (
          <img
            src={session.user.image}
            width={70}
            height={70}
            alt="profile"
            className="cursor-pointer rounded-lg mt-3"
          />
        ) : (
          <img
            src="/assets/randy.jpg"
            width={90}
            height={90}
            className="cursor-pointer rounded-lg mt-3"
          />
        )}
      </div>
    </div>
  );
};

export default Header;
