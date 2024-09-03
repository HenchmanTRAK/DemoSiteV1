import React from "react";
import Banner from "@/app/components/banner";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset, faLock, faTruck } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div //content
        id="content"
        className="container flex flex-col justify-center h-full mb-3 max-w-screen-lg w-full bg-neutral-100"
      >
        <Banner />
        <div //spacer
          id="spacer"
          className="bg-sky-500 py-2.5 flex justify-around items-center"
        >
          <div className="flex items-center flex-col md:flex-row">
            <FontAwesomeIcon
              icon={faTruck}
              className="fa text-6xl md:text-7xl px-4 py-4 md:py-0"
            />
            <span className="px-4 text-center md:text-left text-sm">
              Standard Shipping Flatrate within Australia AU$25
            </span>
          </div>
          <div className="flex items-center flex-col md:flex-row">
            <FontAwesomeIcon
              icon={faHeadset}
              className="fa text-6xl md:text-7xl px-4 py-4 md:py-0"
            />
            <span className="px-4 text-center md:text-left text-sm">
              Chat and Phone Support Mon-Fri 7am to 5pm
            </span>
          </div>
          <div className="flex items-center flex-col md:flex-row">
            <FontAwesomeIcon
              icon={faLock}
              className="fa text-6xl md:text-7xl px-4 py-4 md:py-0"
            />
            <span className="px-4 text-center md:text-left text-sm">
              Secure Checkout through our Global Payment Gateway
            </span>
          </div>
        </div>
        <div //callout
          id="callout"
          className="flex gap-2.5 justify-around my-5 mx-5 flex-wrap md:flex-nowrap"
        >
          <div className="w-full max-w-xs">
            <Image
              src={`https://www.henchman.com.au/documents/Callouts/Web_Home_Top_Teaser2_2.jpg`}
              alt={`HenchmanTRAK Solutions`}
              width={500}
              height={400}
              className="w-full h-auto"
            />
          </div>
          <div className="w-full max-w-xs">
            <Image
              src={`https://www.henchman.com.au/documents/Callouts/Web_Home_Teaser_Shop_2.jpg`}
              alt={`HenchmanTRAK Shop Online`}
              width={500}
              height={400}
              className="w-full h-auto"
            />
          </div>
          <div className="w-full max-w-xs">
            <Image
              src={`https://www.henchman.com.au/documents/Callouts/Web_Home_Top_Teaser3_2.jpg`}
              alt={`HenchmanTRAK Custom Toolkits`}
              width={500}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
        <div //info_block
          id="info_block"
          className="flex text-black mx-5 mb-5"
        >
          <div className="">
            <h1 className="font-bold text-xl mt-5 mb-2.5 leading-[1.1]">
              Your Single Source Supplier for Tools and Custom Toolkits
            </h1>
            <p>
              <Image
                src={`https://www.henchman.com.au/documents/Henchman%20Quality%20Stickers%20grouped.png`}
                alt={`HenchmanTRAK Quality Stickers`}
                width={500}
                height={300}
                className="w-full max-w-sm h-auto float-right align-middle"
              />
            </p>
            <p className="text-sm">
              Pick and mix tools from the worlds best tool brands, add storage
              and Tool Control to create your customised toolkit.
            </p>
            <p className="text-sm">
              Our toolkits with shadow foam are renown for their superb quality
              finish and design.
            </p>
            <p className="text-sm">
              Henchman is a leading supplier of premium tools, repair and
              calibration services and custom-build toolkits with almost 25
              years of experience.
            </p>
            <p className="text-sm">
              <Link href={`/contact`} className="underline text-sky-500">
                Contact us
              </Link>
              &nbsp;if you can&apos;t find what you are looking for and our team
              will source it for you.
            </p>
            <p>
              We import and stock brands including Proto Tools, Wiha,
              Stahlwille, Knipex, Atlas Copco, Cleco, Dotco, Chicago Pneumatic,
              Taylor, Fluke, Hakko, Atten, JBC, Metcal, Clayton, Purex,
              Piergiacomi, Nightstick, Bayco, Explorer Cases, Milwaukee,
              Panasonic, Astro, and many more.
            </p>
            <p>
              Subscribe to our Newsletter to receive our monthly News and
              Specials.
            </p>
            <p>
              Whatever your requirements, with our range we empower you to work
              professionally!
            </p>
          </div>
          <div className="flex-1 flex flex-col justify-center w-full py-5"></div>
        </div>
      </div>
    </>
  );
}
