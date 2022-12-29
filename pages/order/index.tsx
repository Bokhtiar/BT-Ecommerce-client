import React from 'react'
import InputFild from '../../components/input-fild'
import Header from '../../components/layouts/header'
import Footer from '../../components/layouts/footer'
import Bradcrumbs from '../../components/bradcrumbs'

export default function Order() {
  return (
    <>
        <Header></Header>
            <Bradcrumbs name="Order"></Bradcrumbs>
            
            <div className='container my-3'>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <InputFild type='text' placeholder='Enter your name' name="name" ></InputFild>
                    <InputFild type='number' placeholder='Enter your phone' name="name" ></InputFild>
                </div>
            </div>
        <Footer></Footer>
    </>
  )
}
