import React from 'react'
import Header from '../../components/layouts/header'
import Footer from '../../components/layouts/footer'
import Bradcrumbs from '../../components/bradcrumbs'
import Product from '../../components/product'

export default function View() {
    return (
        <>
            <Header></Header>
            <Bradcrumbs name='Product / Details'></Bradcrumbs>
            <section className='container'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* image */}
                    <div className=''>
                        <img className='mx-auto  h-80' src="/product2.jfif" alt="" />
                        {/* product description */}
                        <h2 className='text-2xl font-bold my-2'>Product Details</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500
                            <br /> <br />
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500
                        </p>
                    </div>
                    {/* product details */}
                    <div>
                        <h2 className='text-2xl font-bold uppercase'>Sprite drinks</h2>
                        <div className="flex items-center my-2">
                            <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        </div>
                        {/* available */}
                        <div className='flex gap-4'>
                            <span className='font-bold'>Available:</span>
                            <span className='text-green-600 font-semibold'>in-stock</span>
                        </div>
                        {/* brand */}
                        <div className='flex gap-4'>
                            <span className='font-bold'>Brand:</span>
                            <span className='text-base'>Apex</span>
                        </div>

                        {/* brand */}
                        <div className='flex gap-4'>
                            <span className='font-bold'>Category:</span>
                            <span className='text-base'>Shoes</span>
                        </div>

                        {/* price */}
                        <div className='my-3'>
                            <span className='font-bold text-base text-primary '>Tk 100</span>
                        </div>
                        {/* shor description */}
                        <div className='my-3 w-8/12'>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        </div>

                        {/* quantity */}
                        <div className='w-5/12 flex'>
                            <div className='border px-2 cursor-pointer'>-</div>
                            <div className='border px-2 cursor-pointer'>2</div>
                            <div className='border px-2 cursor-pointer'>+</div>
                        </div>

                        {/* add to cart wishlisth */}
                        <div className="flex my-5 gap-2">
                            <button className='rounded-md border text-white border-primary py-1 bg-primary hover:bg-white hover:text-black px-5'>Add to cart</button>
                            <button className='rounded-md border text-white border-primary py-1 bg-primary hover:bg-white hover:text-black px-5'>Wishlist</button>
                        </div>
                    </div>
                </div>

                {/* releted product */}
                <div className='my-8'>
                    <h2 className='uppercase font-bold text-xl'>Releted products</h2>
                    <div className='container'>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">

                            <Product name='Marlbro Advence' price={23} id='23' image='/product1.jpg' ></Product>
                            <Product name='Banchol' price={23} id='23' image='/product2.jfif' ></Product>
                            <Product name='Royel next' price={23} id='23' image='/product3.jfif' ></Product>
                            <Product name='Lucky Stric' price={23} id='23' image='/product5.jfif' ></Product>
                            <Product name='goldlif' price={23} id='23' image='/product6.jfif' ></Product>

                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    )
}
