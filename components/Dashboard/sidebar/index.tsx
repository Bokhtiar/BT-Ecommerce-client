const DashboardSidebar: React.FC = ():JSX.Element => {
    return (
      <ul className="text-center divide-y divide-gray-300 divide-dashed">
        <li className="py-3 hover:bg-gray-300">
          <a href="/dashboard" className="font-bold">
            Dasbhoard
          </a>
        </li>

        <li className="py-3 hover:bg-gray-300">
          <a href="/dashboard/cart" className="font-bold">
            Cart
          </a>
        </li>

        <li className="py-3 hover:bg-gray-300">
          <a href="/dashboard/order" className="font-bold">
            Order
          </a>
        </li>

        <li className="py-3 hover:bg-gray-300">
          <a href="/auth/logout" className="font-bold">
            Logout
          </a>
        </li>
      </ul>
    );
}
export default DashboardSidebar