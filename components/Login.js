import React from "react";
import Image from "next/image";
import bgImage from "../public/existenz-bg.png";
import logo from "../public/logo2.png";
import { useMoralis } from 'react-moralis'

function Login() {

    const {authenticate } = useMoralis()

  return (
    <div className="bg-black relative text-white">
      <h1>I am the login screen</h1>
      <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
        {/* Metaverse Logo */}
        <Image
          className="object-cover rounded-full"
          src={logo}
          height={200}
          width={200}
        />
        {/* Login Button */}
        <button onClick={authenticate} className="bg-gradient-to-r from-indigo-800 to-fuchsia-600 rounded-lg p-5 font-bold animate-pulse" >Login to METAVERSE</button>
      </div>
      <div className="w-full h-screen ">
        <Image src={bgImage} layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}

export default Login;
