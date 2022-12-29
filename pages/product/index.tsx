import Header from "../../components/layouts/header"
import Footer from "../../components/layouts/footer"
import Bradcrumbs from "../../components/bradcrumbs"
import Sidebar from "../../components/shop_Page/Sidebar"
import Products from "../../components/shop_Page/Products"
export default function Product() {
  return (
   <>
    <Header></Header>
    {/* bradcrumbs */}
    <Bradcrumbs name="Shop"></Bradcrumbs>
    <div className="container">
        <div className="grid md:grid-cols-4 grid-cols-2">
          <div className="col-span-4 md:col-span-1">
            <Sidebar></Sidebar>
          </div>
          <div className="col-span-4 md:col-span-3 mb-8">
            <Products></Products>
          </div>
        </div>

    </div>
    <Footer></Footer>
   </>
  )
}
 