import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import Bradcrumbs from '../../../components/bradcrumbs'
import OrderForm from '../../../components/order'
import { Toastify } from '../../../components/toastify';
import { CartNetwork } from '../../../network/cart.network';
import { OrderStoreNetwork } from '../../../network/order.network';
import { networkErrorHandeller } from '../../../utils/helpers';

type ProductProps = {
    name: string;
    image: string;
    sale_price: any;
}
interface ICart {
    _id: string;
    product: ProductProps | null;
    quantity: any;
}

export default function Order() {
    const [isLoading, setLoading] = useState<boolean>(false);
    const router = useRouter();

    /* useState */
    const [carts, setCart] = useState<ICart[] | []>([]);

    /* useCallback */
    const cart_fetch_data = useCallback(async () => {
        try {
            const response = await CartNetwork()
            if (response && response.status === 200) {
                setCart(response.data.data)
            }
        } catch (error: any) {
            console.log(error);
            networkErrorHandeller(error)
        }
    }, [carts])

    /* useEffect */
    useEffect(() => {
        cart_fetch_data()
    }, [])

    /* Handle order */
    const handleOrder = async (data: any) => {
        try {
            setLoading(true);
            const response = await OrderStoreNetwork(data);
            if (response && response.status === 200) {
                router.push("/dashboard/order");
            }
            Toastify.Success("Order created.");
            setLoading(false);
        } catch (error: any) {
            if (error) {
                setLoading(false);
                networkErrorHandeller(error);
            }
        }
    };

    return (
        <>
            <Bradcrumbs name="Order Create"></Bradcrumbs>
            <div className='container my-3'>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="col-span-2">
                        <OrderForm loading={isLoading} onSubmit={(data) => handleOrder(data)} />
                    </div>
                    <div className="col-span-1">
                        <div className='shadow-lg'>
                            <h2 className='font-bold my-8 px-4'>Your Order</h2>
                            {
                                carts.map((cart, i) => {  
                                    return (
                                        <div className="py-3" key={i} >
                                            <div className="flex items-center gap-4 px-4">
                                                <div className=''>
                                                    <img src={cart.product?.image} className='h-16 w-32' alt="" />
                                                </div>
                                                <div>
                                                    <span className='font-bold'>{cart.product?.name} </span><br />
                                                    <span className=''><span className='font-bold'>{cart.product?.sale_price}</span> &nbsp; x {cart.quantity}</span> = {cart.product?.sale_price * cart.quantity}<br />
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <hr />

                            <div className='flex justify-between  py-4 px-4'>
                                <div className=''>
                                    <span className='font-bold text-2xl'>Total</span>
                                </div>
                                <div><span className='font-bold'>433</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
