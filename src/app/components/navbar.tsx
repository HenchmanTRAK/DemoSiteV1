import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const navbar = () => {
  const currency = Math.random() > 0.5 ? "AUD" : "USD";
  const priceTotal = (0).toFixed(2);
  return (
    <>
      <div>
        <div className="flex justify-between items-center px-14 py-5">
          <div className="w-4/12">
            <Image
              src={
                //"https://images.squarespace-cdn.com/content/v1/57b557342994ca46e44c561c/1471503635867-J7URIOXOSUUY9BGVTC3O/HenchmanTRAK_BLUE.png"
                "https://www.henchman.com.au/documents/Logo-transparent.png"
              }
              alt="HenchmanTRAK Logo"
              sizes="100vw"
              width={500}
              height={60}
              className="w-full h-auto"
            />
          </div>
          <div className="w-4/12 text-center">
            <div className="flex w-full justify-between items-center">
              <Image
                src={"https://www.henchman.com.au/documents/au.png"}
                alt={"Image of the Australian Flag"}
                width={32}
                height={16}
              />
              <Link
                href="/login"
                id="headerLogin"
                className="leading-10 font-bold text-sky-500 hover:underline"
              >
                Login
              </Link>
              <div>
                <span className="text-white leading-10 font-bold">{`(${0}) $${currency} ${priceTotal}`}</span>
                <Button className="leading-10 rounded text-white inline-block font-normal text-lg text-center align-middle touch-manipulation cursor-pointer whitespace-nowrap px-1.5 py-1.5 user-select-none">
                  <FontAwesomeIcon icon={faShoppingCart} className="fa" />
                </Button>
              </div>
            </div>
            <div className="table border-separate box-border">
              <input
                type="text"
                name="searchFilter"
                id="searchFilter"
                placeholder="Search for Products"
                autoComplete="off"
                className="rounded rounded-tr-none rounded-br-none shadow-none table-cell float-left w-full mb-0 text-sm leading-normal px-3 py-1.5 text-neutral-600 bg-white border-solid border-[1px] border-neutral-400 transition-[border-color] duration-150 ease-in-out focus:border-sky-600 focus-visible:outline-none"
              />
              <span className="relative whitespace-nowrap text-xs table-cell align-middle w-[1%]">
                <Button
                  className={
                    "ml-[-1px] rounded rounded-tl-none rounded-bl-none bg-sky-500 border-sky-600 text-white inline-block mb-0 font-normal text-center align-middle touch-manipulation cursor-pointer border-solid border-[1px] border-transparent whitespace-nowrap px-3 py-1.5 text-sm leading-normal user-select-none"
                  }
                >
                  <FontAwesomeIcon icon={faSearch} className="fa" />
                </Button>
              </span>
            </div>
          </div>
        </div>
        <div>
          <nav>
            <div className="px-10 bg-sky-500 ">
              <ul className="flex justify-between divide-x-2 divide-white border-solid border-x-2 border-x-white text-center">
                <li className="py-2.5 px-4 w-full">
                  <FontAwesomeIcon icon={faShoppingCart} className="fa pr-2" />
                  <a>Shop Online</a>
                </li>
                <li className="py-2.5 px-4 w-full">
                  <a>Specials</a>
                </li>
                <li className="py-2.5 px-4 w-full">
                  <a>Toolkit Builder</a>
                </li>
                <li className="py-2.5 px-4 w-full">
                  <a>Industries</a>
                </li>
                <li className="py-2.5 px-4 w-full">
                  <a>Solutions</a>
                </li>
                <li className="py-2.5 px-4 w-full">
                  <a>Resources</a>
                </li>
                <li className="py-2.5 px-4 w-full">
                  <a>Contact Us</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default navbar;
