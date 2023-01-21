import OrderItem from "../../../components/Dashboard/order/item"

const OrderShow: React.FC = (): JSX.Element => {
    return (
        <div className="container">
            <div className="grid grid-cols-3 gap-4 items-center my-8">
                {/* user information */}
                <div className="shadow-lg">
                    <h3 className="px-4 text-2xl text-gray-500  py-4">Information</h3> <hr />
                    <div className="px-4 my-3">
                        <span className="text-base text-gray-400">Name: bokhtiar</span> <br />
                        <span className="text-base text-gray-400">Email: bokhtiar@gmail.com</span><br />
                        <span className="text-base text-gray-400">Phone: 023872323</span><br />
                    </div>
                </div>
                {/* payment information */}
                <div className="shadow-lg">
                    <h3 className="px-4 text-2xl text-gray-500  py-4">Payment</h3> <hr />
                    <div className="px-4 my-3">
                        <span className="text-base text-gray-400">Payment type: Bkash</span> <br />
                        <span className="text-base text-gray-400">payment number: 0198772121</span><br />
                        <span className="text-base text-gray-400">payment Transection ID: asdlf21</span><br />
                    </div>
                </div>

                {/* Location information */}
                <div className="shadow-lg">
                    <h3 className=" px-4 text-2xl text-gray-500  py-4">Location</h3> <hr />
                    <div className="px-4 my-3">
                        <span className="text-base text-gray-400">Location: mirput 2</span> <br />
                        <span className="text-base text-gray-400">note: note</span><br />
                        <span className="text-base text-gray-400"></span><br />
                    </div>
                </div>
            </div>

            <div>
                <OrderItem></OrderItem>
            </div>
        </div>
    )
}
export default OrderShow