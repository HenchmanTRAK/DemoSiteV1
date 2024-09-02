import React from "react";
import Banner from "@/app/components/banner";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset, faLock, faTruck } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <div
        id="content"
        className="container flex flex-col justify-center h-full mb-3 max-w-screen-xl w-full bg-neutral-100"
      >
        <Banner />
        <div
          id="spacer"
          className="bg-blue-400 flex justify-around py-2.5 text-center"
        >
          {/* try and get the spacer text to center properly */}
          <div className="text-center ">
            <FontAwesomeIcon icon={faTruck} className="fa text-8xl px-4" />
            <span className="px-4">
              Standard Shipping Flatrate within Australia AU$25
            </span>
          </div>
          <div>
            <FontAwesomeIcon icon={faHeadset} className="fa text-8xl px-4" />
            <span className="px-4">
              Chat and Phone Support Mon-Fri 7am to 5pm
            </span>
          </div>
          <div>
            <FontAwesomeIcon icon={faLock} className="fa text-8xl px-4" />
            <span className="px-4">
              Secure Checkout through our Global Payment Gateway
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
