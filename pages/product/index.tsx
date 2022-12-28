import Header from "../../components/layouts/header"
import Footer from "../../components/layouts/footer"
import Bradcrumbs from "../../components/bradcrumbs"
import Sidebar from "../../components/shop_Page/Sidebar"
export default function Product() {
  return (
   <>
    <Header></Header>
    <div className="container">
          {/* bradcrumbs */}
         <Bradcrumbs></Bradcrumbs>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-6">
          <div className="md:grid-cols-1 grid-cols-4">
            <Sidebar></Sidebar>
          </div>
          <div className="md:grid-cols-3 grid-cols-4">asdfasdfads</div>
        </div>

    </div>
    <Footer></Footer>
   </>
  )
}
 