import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";

const Login = () => {
  return (
    <div className="grid place-items-center">
      <Image
        src="https://links.papareact.com/t4i"
        width={400}
        height={400}
        objectFit="contain"
      />
      <h1
        onClick={() => signIn()}
        className="p-5 text-center text-white bg-blue-500 rounded-full cursor-pointer"
      >
        Login with Facebook
      </h1>
    </div>
  );
};

export default Login;
