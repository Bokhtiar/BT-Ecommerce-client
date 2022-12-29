import React from 'react'
import InputFild from '../../components/input-fild'
import Header from '../../components/layouts/header'
import Footer from '../../components/layouts/footer'
import Bradcrumbs from '../../components/bradcrumbs'
import Button from '../../components/button'

export default function Order() {
  return (
    <>
      <Header></Header>
      <Bradcrumbs name="Order"></Bradcrumbs>

      <div className='container my-3'>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-2">
            {/* title */}
            <div className="flex gap-4 my-8 py-3 items-center shadow-md px-3">
              <div className='mt-1'><span className="material-symbols-outlined">check_circle</span></div>
              <div className='uppercase text-xl font-bold'>Shipping Address</div>
            </div>

            {/* name part */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <InputFild type='text' placeholder='First Name' label='First Name' name="name" ></InputFild>
              </div>
              <div>
                <InputFild type='number' placeholder='Enter your phone' label='Last Name' name="name" ></InputFild>
              </div>
            </div>

            {/* personal infomation */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
              <div className='md:col-span-2'>
                <InputFild type='text' placeholder='Email Address' label='Email' name="email" ></InputFild>
              </div>
              <div className='md:col-span-1'>
                <InputFild type='number' placeholder='Enter Your Phone' label='Phone Number' name="phone" ></InputFild>
              </div>
            </div>

            {/* address */}
            <div className='grid grid-cols-1 my-4'>
              <InputFild type='text' placeholder='Enter Your Delevery Location' label='Adress' name="address" ></InputFild>
            </div>

            {/* address type */}
            <label htmlFor="" className='text-base font-bold'>Address Types</label>
            <div className="flex items-center justify-between">
              <div>
                <div className='flex gap-4'>
                  <input type="checkbox" name="" id="" />
                  <span className='font-bold font-xl'>Home (All Day Delivery)</span>
                </div>
              </div>
              <div>
                <div className='flex gap-4'>
                  <input type="checkbox" name="" id="" />
                  <span className='font-bold font-xl'>Office (Delivery Between 10AM - 5PM)</span>
                </div>
              </div>
            </div>

            {/* button */}
           <div className='my-8 flex gap-2 text-center'>
              <Button name='Save and delivery here'></Button>
              <Button name='Cancel'></Button>
           </div>

          </div>
          <div className="col-span-1">
            <div className='shadow-lg'>
              <h2 className='font-bold my-8 px-4'>Your Order</h2>
              <div className="grid grid-cols-2 py-3">
                <div className="flex gap-4 px-4">
                    <div className=''>
                        <img src="/product1.jpg" className='h-16' alt="" />
                    </div>
                    <div>
                      <span className='font-bold'>Sprite</span><br />
                      <span className=''><span className='font-bold'>$200</span> &nbsp; x 2</span><br />
                    </div>
                </div>
              </div>
              <hr />
              <div className="grid grid-cols-2 py-3">
                <div className="flex gap-4 px-4">
                    <div className=''>
                        <img src="/product1.jpg" className='h-16' alt="" />
                    </div>
                    <div>
                      <span className='font-bold'>Sprite</span><br />
                      <span className=''><span className='font-bold'>$200</span> &nbsp; x 2</span><br />
                    </div>
                </div>
              </div>
              <hr />
              <div className="grid grid-cols-2 py-3">
                <div className="flex gap-4 px-4">
                    <div className=''>
                        <img src="/product1.jpg" className='h-16' alt="" />
                    </div>
                    <div>
                      <span className='font-bold'>Sprite</span><br />
                      <span className=''><span className='font-bold'>$200</span> &nbsp; x 2</span><br />
                    </div>
                </div>
              </div>

              <div className='flex justify-between  py-4 px-4'>
                <div className=''>
                  <span className='font-bold text-2xl'>Total</span>
                </div>
                <div><span className='font-bold'>$2323</span></div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}
