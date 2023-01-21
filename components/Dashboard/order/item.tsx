import Link from "next/link"

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


const OrderItem: React.FC<ICart> = (props: ICart) => {
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="p-4 w-32">
                <img src={props.product?.image} alt="Apple Watch" />
            </td>
            <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                {props.product?.name}
            </td>
            <td className="py-4 px-6">
                {props.quantity}
            </td>
            <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                {props.product?.sale_price}
            </td>
            <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                {props.product?.sale_price * props.quantity}
            </td>
        </tr>
    )
}
export default OrderItem