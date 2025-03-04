import Image from "next/image";
import React from "react";
import logo from "../../../public/Logo_noback.png";

const loading = () => {
  return (
    <div className="fixed top-0 left-0 h-dvh w-dvw flex justify-center items-center">
      <Image src={logo} alt="Nanak Spices logo" className="w-12 h-auto" />
    </div>
  );
};

export default loading;
