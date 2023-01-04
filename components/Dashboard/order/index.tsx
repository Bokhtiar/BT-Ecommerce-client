const Index : React.FC = ():JSX.Element =>{
    return (
      <div>
        <h2 className="text-2xl font-bold mt-8">Order list</h2>
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
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="p-4 w-32">
                  <img src="/product2.jfif" alt="Apple Watch" />
                </td>
                <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                  Apple Watch
                </td>
                <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                  $599
                </td>
                <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                  $599
                </td>
                <td className="py-4 px-6">
                  <a
                    href="#"
                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                  >
                    Remove
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
} 

export default Index