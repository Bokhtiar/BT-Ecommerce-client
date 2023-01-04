import Order from '../../components/Dashboard/order'

const Dashboard: React.FC = ():JSX.Element => {
    return (
      <>
        {/* dashboard cart */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className=" py-3 px-12 border border-primary rounded-sm  text-center">
            <p className="">
              <span className="font-bold text-xl">Free Shoping</span> <br />
              <span className="text-gray-500">$200</span>
            </p>
          </div>

          <div className=" py-3 px-12 border border-primary rounded-sm  text-center">
            <p className="">
              <span className="font-bold text-xl">Free Shoping</span> <br />
              <span className="text-gray-500">$200</span>
            </p>
          </div>

          <div className=" py-3 px-12 border border-primary rounded-sm  text-center">
            <p className="">
              <span className="font-bold text-xl">Free Shoping</span> <br />
              <span className="text-gray-500"> $200</span>
            </p>
          </div>

          <div className=" py-3 px-12 border border-primary rounded-sm  text-center">
            <p className="">
              <span className="font-bold text-xl">Free Shoping</span> <br />
              <span className="text-gray-500">$200</span>
            </p>
          </div>
        </div>


        {/* order table list */}
        <Order></Order>
      </>
    );
}
export default Dashboard