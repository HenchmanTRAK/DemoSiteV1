import React from "react";
import Banner from "@/app/components/banner";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div
        id="content"
        className="container flex flex-col justify-center mx-auto h-full mb-3"
      >
        <Banner />
        <div id="spacer"></div>
      </div>
    </>
  );
}
