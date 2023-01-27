import Link from "next/link";
import { removeToken } from "../../../utils/helpers";

const DashboardSidebar: React.FC = ():JSX.Element => {

  const logout = () => {
    return removeToken()
  }
    return (
      <ul className="text-center divide-y divide-gray-300 divide-dashed">
        <li className="py-3 hover:bg-gray-300">
          <Link href="/dashboard" className="font-bold">
            Dasbhoard
          </Link>
        </li>

        <li className="py-3 hover:bg-gray-300">
          <Link href="/dashboard/cart" className="font-bold">
            Cart
          </Link>
        </li>

        <li className="py-3 hover:bg-gray-300">
          <Link href="/dashboard/order" className="font-bold">
            Order
          </Link>
        </li>

        <li className="py-3 hover:bg-gray-300">
          <Link onClick={()=>logout()} href="/auth/logout" className="font-bold">
            Logout
          </Link>
        </li>
      </ul>
    );
}
export default DashboardSidebar