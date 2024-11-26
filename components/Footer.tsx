import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <p className="text-xs">
        powered by <span className="font-bold">Sunil Industries</span>{" "}
        &copy;2024
      </p>
      <p className="text-xs">
        contact{" "}
        <Link href={"mailto:mka1408@gmail.com"}>
          <span className="font-bold">mka1408@gmail.com</span>
        </Link>
      </p>
    </div>
  );
};

export default Footer;
