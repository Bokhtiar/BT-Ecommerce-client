import React from 'react'
import Product from '../product'

export default function Products() {
  return (
    <>
        <div className='flex justify-between items-center container'>
            <div className='my-4 md:my-0'>
               <select className='border border-gray-300 py-1 px-4' name="" id="">
                    <option value="">Defoult product</option>
                </select> 
            </div>
            <div className='flex items-center gap-2'>
                <div className=''>
                    <button className='bg-primary border px-2 rounded text-white text-center'>
                        <span className="material-symbols-outlined pt-1">menu</span>
                    </button>
                </div>
                <div className=''>
                <button className=' px-2 border border-gray-300 text-primary'>
                <span className="material-symbols-outlined pt-1">list</span>
                    </button>
                   </div>
            </div>
        </div>
    {/* regular product */}
      <div className='container'>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
           
          <Product name='Marlbro Advence' price={23} id='23' image='/product1.jpg' ></Product>
          <Product name='Banchol' price={23} id='23' image='/product2.jfif' ></Product>
          <Product name='Royel next' price={23} id='23' image='/product3.jfif' ></Product>
          <Product name='Lucky Stric' price={23} id='23' image='/product5.jfif' ></Product>
          <Product name='goldlif' price={23} id='23' image='/product6.jfif' ></Product>
          <Product name='Marlbro Advence' price={23} id='23' image='/product1.jpg' ></Product>
          <Product name='Banchol' price={23} id='23' image='/product2.jfif' ></Product>
          <Product name='Royel next' price={23} id='23' image='/product3.jfif' ></Product>
  
          </div>
      </div>
    </>
  )
}
