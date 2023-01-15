import Bradcrumbs from "../../../components/bradcrumbs";
import DashboardSidebar from "../../../components/Dashboard/sidebar";
import Header from "../../../components/layouts/header";
import Footer from "../../../components/layouts/footer";
import Order from '../../../components/Dashboard/order'
import authRoute from "../../../hook/authRoute";

const Index:React.FC  = ():JSX.Element => {
    return (
      <div>
        <Header></Header>
        <Bradcrumbs name="Order"></Bradcrumbs>
        <div className="grid grid-cols-1 md:grid-cols-4 container gap-4">
          {/* sidebar */}
          <div className="col-span-1 h-screen shadow-lg">
            <DashboardSidebar />
          </div>
          {/* main content */}
          <div className="col-span-3">
            <Order></Order>            
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
}
export default authRoute(Index);