import Image from "next/image";
import React from "react";

export default function footer() {
  return (
    <div>
      {/* footer area */}
      <div className="bg-gray-100">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
            {/* compnay description */}
            <div className="my-8">
              <Image
                src="/logo.svg"
                alt="Picture of the author"
                width={0}
                height={0}
                className="w-16 md:w-28"
              />
              
              <p className="my-6 text-gray-600">
                Lorem ipsum, or lipsum as it is sometimes kno wn, is dummy text
                used in laying out print, gra phic or web designs the passage.
              </p>
              <h2>NEWSLATTER</h2>
              <div className="flex">
                <input
                  type="text"
                  className="w-full py-2 border-gray-400 rounded border px-2"
                  placeholder="your email address"
                  name=""
                  id=""
                />
                <button className="bg-primary px-4 text-white font-bold text-sm rounded-md">
                  SUBSCRIB
                </button>
              </div>
            </div>
            {/* my account */}
            <div className="my-8">
              <h2 className="text-xl text-black uppercase ">My account</h2>
              <ul className="my-4">
                <li className="my-2">
                  <a href="" className="">
                    Order
                  </a>
                </li>
                <li className="my-2">
                  <a href="" className="">
                    Wishlist
                  </a>
                </li>
                <li className="my-2">
                  <a href="" className="">
                    Track Order
                  </a>
                </li>
                <li className="my-2">
                  <a href="" className="">
                    Manage account
                  </a>
                </li>
              </ul>
            </div>
            {/* information */}
            <div className="my-8">
              <h2 className="text-xl text-black uppercase ">information</h2>
              <ul className="my-4">
                <li className="my-2">
                  <a href="" className="">
                    About us
                  </a>
                </li>
                <li className="my-2">
                  <a href="" className="">
                    Return policy
                  </a>
                </li>
                <li className="my-2">
                  <a href="" className="">
                    Trams & condition
                  </a>
                </li>
                <li className="my-2">
                  <a href="" className="">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            {/* contact */}
            <div className="my-8">
              <h2 className="text-xl text-black uppercase ">CONTACT</h2>
              <div className="flex my-4 gap-2">
                <span className="material-symbols-outlined">location_on</span>
                <span>
                  7895 Dr New Albuquerue, NM 19800,United States Of America
                </span>
              </div>

              <div className="flex my-4 gap-2">
                <span className="material-symbols-outlined">call</span>
                <span>+566 477 256, +566 254 575</span>
              </div>

              <div className="flex my-4 gap-2">
                <span className="material-symbols-outlined">mail</span>
                <span>info@domain.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
