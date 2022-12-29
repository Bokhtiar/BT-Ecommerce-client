import React from 'react'
import CategorySideMenu from '../category/categorySideMenu'


export default function Sidebar() {
    return (
        <>
            <div className="shadow-md px-4 py-4">

                <div>
                    <h2 className='text-xl uppercase font-semibold '>Categories</h2>
                    <CategorySideMenu name='Marlboro Advence' items={20} check={true}></CategorySideMenu>
                    <CategorySideMenu name='Dervy' items={24}></CategorySideMenu>
                    <CategorySideMenu name='Banson' items={28}></CategorySideMenu>
                    <CategorySideMenu name='Star' items={29}></CategorySideMenu>
                    <hr />
                </div>

                {/* brands */}
                <div>
                    <h2 className='text-xl uppercase font-semibold my-6 '>Brands</h2>
                    <CategorySideMenu name='Marlboro Advence' items={20} check={true}></CategorySideMenu>
                    <CategorySideMenu name='Dervy' items={24}></CategorySideMenu>
                    <CategorySideMenu name='Banson' items={28}></CategorySideMenu>
                    <CategorySideMenu name='Star' items={29}></CategorySideMenu>
                    <hr />
                </div>

                {/* priceing */}
                <div>
                    <h2 className='text-xl uppercase font-semibold my-6 '>Price</h2>
                    <input id="medium-range" type="range" value="50" className="w-full h-2 mb-6 bg-primary rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
                </div>

            </div>
        </>
    )
}
