import React, { useCallback, useEffect, useState } from 'react'
import { CartNetwork, CartNetworkDecrement, CartNetworkDestroy, CartNetworkIncrement } from '../../../network/cart.network'



const Cart: React.FC = (): JSX.Element => {
  const [carts, setCart] = useState([])

  /* cart fetch data */
  const cart_fetch_data = useCallback(async () => {
    const response: any = await CartNetwork()
    if (response && response.status == 200) {
      setCart(response.data.data)
    }
  }, [carts])

  /* cart increment */
  const increment = async (_id: string) => {
    await CartNetworkIncrement({ _id })
    cart_fetch_data()
  }

  /* cart decrement */
  const decrement = async (_id: string) => {
    await CartNetworkDecrement({ _id })
    cart_fetch_data()
  }

  /* cart destroy */
  const destroy = async (_id: string) => {
    await CartNetworkDestroy({ _id })
    cart_fetch_data()
  }

  /* useEffect */
  useEffect(() => {
    cart_fetch_data()
  }, [])

  return (
    <div className="container">
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
              <th scope="col" className="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {
              carts.map((cart, i) => {

                return (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="p-4 w-32">
                      <img src={cart.product ? cart.product.image : ""} alt="Apple Watch" />
                    </td>
                    <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                      {cart.product ? cart.product.name : ""}
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => decrement(cart._id)}
                          className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                          type="button"
                        >
                          dec
                          <span className="sr-only">Quantity button</span>
                          <svg
                            className="w-4 h-4"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </button>
                        <div>
                          <input
                            type="number"
                            id="first_product"
                            className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder={cart.quantity}
                            required
                          />
                        </div>
                        <button
                          onClick={() => increment(cart._id)}
                          className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                          type="button"
                        >
                          add
                          <span className="sr-only">Quantity button</span>
                          <svg
                            className="w-4 h-4"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </td>
                    <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                      {cart.product.sale_price}
                    </td>
                    <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                      {cart.product.sale_price * cart.quantity}
                    </td>
                    <td className="py-4 px-6">
                      <span onClick={() => destroy(cart._id)} className="cursor-pointer font-medium text-red-600 dark:text-red-500 hover:underline">Remove</span>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>

        <div className="float-right">
          <div className="flex my-5 gap-2">
            <button className="rounded-md border text-white border-primary py-1 bg-primary hover:bg-white hover:text-black px-5 font-bold">
              Go To Shoping
            </button>
            <button className="rounded-md border text-white border-primary py-1 bg-primary hover:bg-white hover:text-black px-5 font-bold">
              Go To Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Cart