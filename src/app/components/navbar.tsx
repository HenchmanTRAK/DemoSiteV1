"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingCart,
  faBars,
  faCube,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const currency = Math.random() > 0.5 ? "AUD" : "USD";
  const priceTotal = (0).toFixed(2);

  return (
    <>
      <div //header
        id="header"
        className="flex justify-center lg:justify-between flex-col lg:flex-row items-center lg:px-5 lg:py-5 container mx-auto max-w-screen-lg"
      >
        <div id="logo_container" className="w-1/2 lg:w-4/12 py-2 lg:py-0 mx-5">
          <Image
            src={
              //"https://images.squarespace-cdn.com/content/v1/57b557342994ca46e44c561c/1471503635867-J7URIOXOSUUY9BGVTC3O/HenchmanTRAK_BLUE.png"
              "https://www.henchman.com.au/documents/Logo-transparent.png"
            }
            alt="HenchmanTRAK Logo"
            sizes="100vw"
            width={500}
            height={60}
            className="h-auto w-full"
          />
        </div>
        <div //header controls pc
          id="header_controls_pc"
          className="w-4/12 text-center hidden lg:block mx-5"
        >
          <div className="flex w-full justify-between items-center">
            <Image
              src={
                currency === "AUD"
                  ? "https://www.henchman.com.au/documents/au.png"
                  : "https://www.henchmanusa.com/documents/us.png"
              }
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
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className="fa leading-none font-fa text-xl"
                />
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
                <FontAwesomeIcon
                  icon={faSearch}
                  className="fa leading-none font-fa"
                />
              </Button>
            </span>
          </div>
        </div>
      </div>
      <div //header controls mobile
        id="header_controls_mobile"
        className="w-full px-4 py-3 lg:hidden bg-neutral-100 sticky top-0 z-50 "
      >
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
              <FontAwesomeIcon
                icon={faSearch}
                className="fa leading-none font-fa"
              />
            </Button>
          </span>
        </div>
      </div>
      <nav //navbar_pc
        id="navbar_pc"
        className="bg-sky-500 hidden lg:block items-center px-5"
      >
        <ul className="flex justify-between divide-x-2 divide-white border-solid border-x-2 border-x-white text-center container mx-auto max-w-screen-lg items-center">
          <li className="py-2.5 px-4 w-full align-middle">
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="fa pr-2 leading-none font-fa"
            />
            <a>Shop Online</a>
          </li>
          <li className="py-2.5 px-4 w-full ">
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
      </nav>
      <nav id="navbar_mobile" className="lg:hidden sticky top-[58px] z-50">
        <ul className="flex divide-x-2 bg-neutral-800 divide-white border-solid border-x-2 border-x-white container mx-auto max-w-screen-lg">
          <li className="py-2 px-3 w-1/2 h-auto flex flex-col gap-2 sm:gap-3 items-stretch text-center align-middle leading-normal md:text-xl">
            <FontAwesomeIcon
              icon={faBars}
              className="fa leading-none font-fa text-xl"
            />
            <span className="text-xs md:uppercase h-full flex flex-col justify-center">
              MENU
            </span>
          </li>
          <li className="py-2 px-3 w-1/2 h-auto flex flex-col gap-2 sm:gap-3 text-center align-middle leading-normal md:text-xl">
            <FontAwesomeIcon
              icon={faCube}
              className="fa leading-none font-fa text-xl"
            />
            <span className="text-xs md:uppercase h-full flex flex-col justify-center">
              SHOP
            </span>
          </li>
          <li className="py-2 px-3 w-1/2 h-auto flex flex-col gap-2 sm:gap-3 text-center align-middle leading-normal md:text-xl">
            <FontAwesomeIcon
              icon={faPhone}
              className="fa leading-none font-fa text-xl"
            />
            <span className="text-xs md:uppercase h-full flex flex-col justify-center">
              CALL US
            </span>
          </li>
          <li className="py-2 px-3 w-1/2 h-auto flex flex-col gap-2 sm:gap-3 text-center align-middle leading-normal md:text-xl">
            <FontAwesomeIcon
              icon={faUser}
              className="fa leading-none font-fa text-xl"
            />
            <span className="text-xs md::uppercase h-full flex flex-col justify-center">
              LOGIN
            </span>
          </li>
          <li className="py-2 px-3 w-1/2 h-auto flex flex-col gap-2 sm:gap-3 text-center align-middle leading-normal md:text-xl">
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="fa leading-none font-fa text-xl"
            />
            <span className="text-xs md:uppercase h-full flex flex-col justify-center">
              CART
            </span>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
