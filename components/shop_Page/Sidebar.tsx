import { publicRequest } from '../../config/axios.config'

import React, { useCallback, useEffect, useState } from 'react'
import CategorySideMenu from '../category/categorySideMenu'
import { CategoriesNetwork } from '../../network/Category.network'
export default function Sidebar() {
    const [categories, setCategories] = useState([])

    /* category fetch data */
    const category_fetch_data = useCallback(async () => {
        try {
            const response = await CategoriesNetwork()
            if (response && response.status === 200) {
                setCategories(response.data.data)
            }
        } catch (error: any) {
            if (error) {
                console.log(error);
            }
        }
    }, [categories])

    /* useCallback */
    useEffect(()=> {
        category_fetch_data()
    }, [])

    return (
        <>
            <div className="shadow-md px-4 py-4">
                <div>
                    <h2 className='text-xl uppercase font-semibold '>Categories</h2>
                    {
                        categories.map((category, i) => {
                            return <CategorySideMenu key={i} {...category} check={true} />
                        })
                    }                    
                    <hr />
                </div>

                {/* brands */}
                <div>
                    <h2 className='text-xl uppercase font-semibold my-6 '>Brands</h2>
                    <CategorySideMenu name='Marlboro Advence' check={true}></CategorySideMenu>

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
