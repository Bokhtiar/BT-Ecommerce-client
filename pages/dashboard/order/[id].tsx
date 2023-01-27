import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react"
import Bradcrumbs from "../../../components/bradcrumbs";
import OrderItem from "../../../components/Dashboard/order/item"
import { OrderNetworkShow } from "../../../network/order.network";
import { networkErrorHandeller } from "../../../utils/helpers";

interface IOrder {
    name: string;
    email: string;
    phone: string;
    location: string;
    payment_type: string;
    payment_number: string;
    payment_txid: string;
    note: string;
}

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
 

const OrderShow: React.FC = (): JSX.Element => {
    const router = useRouter();
    let {id}  = router.query;
     
    /* useState */
    const [order, setOrder] = useState<IOrder | null>();
    const [carts, setCart] = useState<ICart[] | []>([])

    /* data fetch */
    const fetch_data_order_show = useCallback(async () => {
        try {
            const response = await OrderNetworkShow({id});
            console.log(response);
            
            if (response && response.status == 200) {
                setOrder(response.data.data.Order)
                setCart(response.data.data.Cart)
            }
        } catch (error: any) {
            console.log(error);
            networkErrorHandeller(error)
        }
    }, [order, id])

    /* useEffect */
    useEffect(() => {
        fetch_data_order_show()
    }, [])

    return (
        <div className="container">
            <Bradcrumbs name="Order Detail"></Bradcrumbs>
            <div className="grid grid-cols-3 gap-4 items-center my-8">
                {/* user information */}
                <div className="shadow-lg">
                    <h3 className="px-4 text-2xl text-gray-500  py-4">Information</h3> <hr />
                    <div className="px-4 my-3">
                        <span className="text-base text-gray-400">Name: {order?.name}</span> <br />
                        <span className="text-base text-gray-400">Email: {order?.email}</span><br />
                        <span className="text-base text-gray-400">Phone: {order?.phone}</span><br />
                    </div>
                </div>
                {/* payment information */}
                <div className="shadow-lg">
                    <h3 className="px-4 text-2xl text-gray-500  py-4">Payment</h3> <hr />
                    <div className="px-4 my-3">
                        <span className="text-base text-gray-400">Payment type: {order?.payment_type} </span> <br />
                        <span className="text-base text-gray-400">payment number: {order?.payment_number} </span><br />
                        <span className="text-base text-gray-400">payment Transection ID: {order?.payment_txid} </span><br />
                    </div>
                </div>

                {/* Location information */}
                <div className="shadow-lg">
                    <h3 className=" px-4 text-2xl text-gray-500  py-4">Location</h3> <hr />
                    <div className="px-4 my-3">
                        <span className="text-base text-gray-400">Location: {order?.location} </span> <br />
                        <span className="text-base text-gray-400">note: {order?.note} </span><br />
                        <span className="text-base text-gray-400"></span><br />
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-bold">Cart List</h2>
                <div className="overflow-x-auto relative shadow-md sm:rounded-lg my-5">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                    <span className="sr-only">Image</span>
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Product
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Quantity
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Price
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Total
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                carts.map((cart, i) => {
                                    return <OrderItem key={i} {...cart} />
                                })
                            }

                        </tbody>
                    </table>

                    <div className="float-right">
                        <div className="flex my-5 gap-2">
                            <Link href="/" className="rounded-md border text-white border-primary py-1 bg-primary hover:bg-white hover:text-black px-5 font-bold">  Go To Shoping </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OrderShow