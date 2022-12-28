import React from 'react'

export default function Sidebar() {
    return (
        <>
            <div className="shadow-md px-4 py-4">

                <div>
                    <h2 className='text-xl uppercase font-semibold '>Categories</h2>
                    <div className='flex justify-between items-center mt-4'>
                        <span><input type="checkbox" className="accent-primary" checked /></span>
                        <span className='font-bold'>Alchol</span>
                        <span>(20)</span>
                    </div>
                    <div className='flex justify-between items-center my-2'>
                        <span><input type="checkbox" className="accent-primary" /></span>
                        <span className='font-bold'>Alchol</span>
                        <span>(20)</span>
                    </div>
                    <div className='flex justify-between items-center my-2'>
                        <span><input type="checkbox" className="accent-primary" /></span>
                        <span className='font-bold'>Alchol</span>
                        <span>(20)</span>
                    </div>
                    <div className='flex justify-between items-center my-2'>
                        <span><input type="checkbox" className="accent-primary" /></span>
                        <span className='font-bold'>Alchol</span>
                        <span>(20)</span>
                    </div>
                    <div className='flex justify-between items-center my-2'>
                        <span><input type="checkbox" className="accent-primary" /></span>
                        <span className='font-bold'>Alchol</span>
                        <span>(20)</span>
                    </div>
                    <hr />
                </div>

                {/* brands */}
                <div>
                    <h2 className='text-xl uppercase font-semibold my-6 '>Brands</h2>
                    <div className='flex justify-between items-center mt-4'>
                        <span><input type="checkbox" className="accent-primary" checked /></span>
                        <span className='font-bold'>Alchol</span>
                        <span>(20)</span>
                    </div>
                    <div className='flex justify-between items-center my-2'>
                        <span><input type="checkbox" className="accent-primary" /></span>
                        <span className='font-bold'>Alchol</span>
                        <span>(20)</span>
                    </div>
                    <div className='flex justify-between items-center my-2'>
                        <span><input type="checkbox" className="accent-primary" /></span>
                        <span className='font-bold'>Alchol</span>
                        <span>(20)</span>
                    </div>
                    <div className='flex justify-between items-center my-2'>
                        <span><input type="checkbox" className="accent-primary" /></span>
                        <span className='font-bold'>Alchol</span>
                        <span>(20)</span>
                    </div>
                    <div className='flex justify-between items-center my-2'>
                        <span><input type="checkbox" className="accent-primary" /></span>
                        <span className='font-bold'>Alchol</span>
                        <span>(20)</span>
                    </div>
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
