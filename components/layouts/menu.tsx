import Link from 'next/link'
import React from 'react'

export default function Index() {
    return (
        <div className='bg-gray-600'>
            <div className="flex container items-center">
                <div className="w-1/5">
                    {/* category */}
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
                </div>
                <div className="w-3/5">
                    <div className='ml-4'>
                        <ul className='flex items-center gap-4 text-white '>
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/product">Shop</Link>
                            </li>
                            <li>
                                <a href="/about">About</a>
                            </li>
                            <li>
                                <a href="/contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-1/5">
                    <div className='ml-4 float-right'>
                        <ul className='flex items-center gap-4 text-white '>
                            <li>
                                <a href="/auth/login">Login</a>
                            </li>
                            <li>
                                <a href="/auth/register">Register</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            {/* header end here */}
        </div>
    )
}
