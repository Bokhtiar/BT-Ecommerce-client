import Bradcrumbs from '../../../components/bradcrumbs'
import Button from '../../../components/button'
import { TextInput } from '../../../components/input-fild'
import OrderForm from '../../../components/order'

export default function Order() {
    return (
        <>
            <Bradcrumbs name="Order"></Bradcrumbs>
            <div className='container my-3'>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="col-span-2">
                        <OrderForm></OrderForm>

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
        </>
    )
}
