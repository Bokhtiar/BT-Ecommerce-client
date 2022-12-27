import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      {/* header start here */}
      <header className='py-4 shadow-sm bg-white'>
        <div className="container flex justify-between items-center">
          {/* logo */}
          <div className=''>
            <img src="/logo.svg" className='w-16' alt="" />
          </div>
          {/* search bar */}
          <div className='w-full md:w-96 mx-w-xl flex pl-4 relative'>
            <span className='pl-4 text-4xl absolute'>
              <span className="material-symbols-outlined">manage_search</span>
            </span>
            <input type="text" className='w-full border border-primary py-2' name="" id="" />
            <button className='bg-primary text-xl text-white border rounded px-4'>Search</button>
          </div>

          {/* icons */}

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
      </header>

      {/* navbar */}
      <nav className='bg-gray-600'>
          <div className="container flex">
            
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
            <div className='flex items-center justify-between'>
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
                {/* account infor */}
                <div className='ml-4'>
                  <ul className='flex items-center gap-4 text-white'>
                    <li>
                      <a href="">Login</a>
                    </li>
                    <li>
                      <a href="">Register</a>
                    </li>
                  </ul>
                </div>
                
            </div>

          </div>
      </nav>
      {/* header end here */}
    </>
  )
}
