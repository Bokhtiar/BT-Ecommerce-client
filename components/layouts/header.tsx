import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Menu from "../../components/layouts/menu";
import { networkErrorHandeller } from "../../utils/helpers";
import { CartNetwork } from "../../network/cart.network";
import Image from "next/image";

export default function header() {
  /* cart count useState */
  // const [countCart, setCartCount] = useState<number>();

  // /* useCallback */
  // const fetchData = useCallback(async()=> {
  //   try {
  //     const response = await CartNetwork()
  //     if(response && response.status === 200){
  //       setCartCount(response?.data?.countCart)
  //     }
  //   } catch (error:any) {
  //     networkErrorHandeller(error)
  //   }
  // }, [countCart])

  // /* useEffect */
  // useEffect(()=> {
  //   fetchData()
  // }, [countCart])

  return (
    <div>
      {/* header start here */}
      <header className="py-4 shadow-sm bg-white  hidden md:flex">
        <div className="container grid grid-cols-1 md:grid-cols-5 justify-between items-center">
          {/* logo */}
          <div className="md:col-span-1 ">
            <Link href="/" className="flex items-center">
              <Image
                src="./logo.svg"
                alt="logo"
                width={0}
                height={0}
                className="w-28 md:w-28"
              />
            </Link>
          </div>
          {/* search bar */}
          <div className="md:col-span-3 ">
            <div className="md:w-96 mx-w-xl flex pl-4 relative">
              <span className="pl-4 text-4xl absolute">
                <span className="material-symbols-outlined">manage_search</span>
              </span>
              <input
                type="text"
                className="md:px-48 px-4 border border-primary py-2 hover:border-gray-300"
                name=""
                id=""
              />
              <button className="bg-primary text-xl text-white border rounded px-4">
                Search
              </button>
            </div>
          </div>
          {/* icons */}

          <div className="md:col-span-1">
            <div className="flex justify-center text-center gap-4 float-right">
              <div className="hover:text-primary cursor-pointer">
                <Link href="/dashboard/cart" className="flex">
                  <span className="material-symbols-outlined">
                    shopping_cart
                  </span>
                  <span className="text-primary mt-3 font-bold">1</span>
                </Link>
              </div>
              <div className="hover:text-primary">
                <span className="material-symbols-outlined">favorite</span>
              </div>
              <div className="hover:text-primary cursor-pointer">
                <Link href="/dashboard">
                  <span className="material-symbols-outlined">
                    person_filled
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>


    {/* mobaile resonsive */}
      <header className="flex justify-between md:hidden py-4 px-5">
        <Image
          src="./logo.svg"
          alt="Picture of the author"
          width={0}
          height={0}
          className="w-28 md:w-28"
        />
        <div className="">
          <div className="flex justify-center text-center gap-4 float-right">
            <div className="hover:text-primary cursor-pointer">
              <Link href="/dashboard/cart" className="flex">
                <span className="material-symbols-outlined">shopping_cart</span>
                <span className="text-primary mt-3 font-bold">1</span>
              </Link>
            </div>
            <div className="hover:text-primary">
              <span className="material-symbols-outlined">favorite</span>
            </div>
            <div className="hover:text-primary cursor-pointer">
              <Link href="/dashboard">
                <span className="material-symbols-outlined">person_filled</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <Menu></Menu>
    </div>
  );
}
