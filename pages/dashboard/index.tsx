import authRoute from "../../hook/authRoute"
import Header from "../../components/layouts/header";
import Bradcrumbs from "../../components/bradcrumbs";
import DashboardSidebar from "../../components/Dashboard/sidebar";
import Dashboard from "../../components/Dashboard/Index";

const Index = () => {
  return (
    <>
      {/* bradcrumbs */}
      <Bradcrumbs name="Shop"></Bradcrumbs>

      <div className="grid grid-cols-1 md:grid-cols-4 container gap-4">
        {/* sidebar */}
        <div className="col-span-1 h-screen shadow-lg">
          <DashboardSidebar />
        </div>
        {/* main content */}
        <div className="col-span-3">
            <Dashboard />
        </div>
      </div>
    </>
  );
}
export default authRoute(Index)
