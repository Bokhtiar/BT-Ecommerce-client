import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { OrderList } from "../../../network/order.network";
import { networkErrorHandeller } from "../../../utils/helpers";

interface IOrder {
  name: string;
  email: string;
  phone: string;
}

const Index: React.FC = (): JSX.Element => {

  /* useState */
  const [orders, setOrder] = useState<IOrder[] | []>([])

  /* useCallback */
  const fetch_order_data = useCallback(async () => {
    try {
      const response = await OrderList();
      console.log(response);

      if (response && response.status === 200) {
        setOrder(response.data.data)
      }
    } catch (error: any) {
      console.log(error);
      networkErrorHandeller(error)
    }
  }, [orders])

  /* useCallback */
  useEffect(() => {
    fetch_order_data();
  }, [])

  return (
    <div>
      <h2 className="text-2xl font-bold mt-8">Order list</h2>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg my-5">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Name
              </th>

              <th scope="col" className="py-3 px-6">
                Phone
              </th>
              <th scope="col" className="py-3 px-6">
                Email
              </th>
              <th scope="col" className="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {
              orders.map((order, i) => {
                return (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                      {order.name}
                    </td>
                    <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                      {order.email}
                    </td>
                    <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                      {order.phone}
                    </td>
                    <td className="py-4 px-6">
                      <Link
                        href=""
                        className="font-medium text-red-600 dark:text-red-500 hover:underline"
                      >
                        <span className="material-symbols-outlined">
                          visibility
                        </span>
                      </Link>
                    </td>
                  </tr>
                )
              })
            }

          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Index