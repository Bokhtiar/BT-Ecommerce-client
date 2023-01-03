import authRoute from "../../hook/authRoute"

const Index = () => {
  return <>
    <div className='container'>
      <div className="py-2 flex items-center">
        <span className="material-symbols-outlined">home</span>             
        <span className="material-symbols-outlined">chevron_right</span> 
        </div>
    </div>
    
  </>
}
export default authRoute(Index)
