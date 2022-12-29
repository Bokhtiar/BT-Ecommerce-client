import React from 'react'

export default function header() {
  return (
    <div>
      {/* header start here */}
      <header className='py-4 shadow-sm bg-white'>


        <div className="container flex justify-between items-center">
          {/* logo */}
          <div className=''>
            <img src="/logo.svg" className='w-16 md:w-28' alt="" />
          </div>
          {/* search bar */}
          <div className=''>
            <div className='w-full md:w-96 mx-w-xl flex pl-4 relative'>
              <span className='pl-4 text-4xl absolute'>
                <span className="material-symbols-outlined">manage_search</span>
              </span>
              <input type="text" className='w-full border border-primary py-2 hover:border-gray-300' name="" id="" />
              <button className='bg-primary text-xl text-white border rounded px-4'>Search</button>
            </div>
          </div>
          {/* icons */}

          <div className="">
          <div className="flex justify-center text-center gap-4">
            <div className='hover:text-primary'>
              <span className="material-symbols-outlined">
                shopping_cart
              </span>
            </div>
            <div className='hover:text-primary'>
              <span className="material-symbols-outlined">
                favorite
              </span>
            </div>
            <div className='hover:text-primary'>
              <span className="material-symbols-outlined">
                person_filled
              </span>
            </div>
          </div>
          </div>
        </div>
      </header>

      {/* navbar */}
      <nav className='bg-gray-600'>
        <div className="container flex ">

          {/* categories */}
          <div className="px-8 py-4 text-white items-center bg-primary flex cursor-pointer relative group">
            <span className="material-symbols-outlined">menu</span>
            <span className='capitalize ml-2'>All Cateogry</span>

            <div className='absolute w-full text-center left-0 top-full bg-white text-black shadow-md divide-y divide-gray-300 divide-dashed hidden group-hover:block '>

              <a href="" className='flex px-2 py-2 hover:bg-gray-100 gap-2 '>
                <span className="material-symbols-outlined">menu_book</span>
                <span>Baby</span>
              </a>

              <a href="" className='flex px-2 py-2 hover:bg-gray-100 gap-2 '>
                <span className="material-symbols-outlined">menu_book</span>
                <span>Baby</span>
              </a>

              <a href="" className='flex px-2 py-2 hover:bg-gray-100 gap-2 '>
                <span className="material-symbols-outlined">menu_book</span>
                <span>Baby</span>
              </a>


              <a href="" className='flex px-2 py-2 hover:bg-gray-100 gap-2 '>
                <span className="material-symbols-outlined">menu_book</span>
                <span>Baby</span>
              </a>

              <a href="" className='flex px-2 py-2 hover:bg-gray-100 gap-2 '>
                <span className="material-symbols-outlined">menu_book</span>
                <span>Baby</span>
              </a>





            </div>
          </div>
          {/* nav-menu */}
          <div className='flex items-center '>
            {/* menu */}
            <div className='ml-4'>
              <ul className='flex items-center gap-4 text-white '>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Shop</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {/* header end here */}
    </div>
  )
}
