import { redirect } from "next/navigation";
// import Image from "next/image";
// import React from "react";
// import logo from "../public/Logo_noback.png";

export default function Home() {
  redirect("/products");
  return <div></div>;
}
