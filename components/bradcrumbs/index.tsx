import React from 'react'
import { Bradcrumbs } from '../../types/components/bradcrumbs'

const Bradcrumbs: React.FC<Bradcrumbs> = ({ name }: { name: string }) => {
  return <>
    <div className='container'>
      <div className="py-2 flex items-center">
        <span className="material-symbols-outlined">home</span>             
        <span className="material-symbols-outlined">chevron_right</span>
        <span className="font-bold text-base">{name}</span>           
        </div>
    </div>
  </>
}
export default Bradcrumbs
// import { Iinput } from '../../types/components/input'

// const InputFild: React.FC<Iinput> = ({ name, placeholder, type }: {
//     placeholder: string,
//     name: string,
//     type: string
// }) => {
//     return <>
//         <input className='' type={type} name={name} placeholder={placeholder} />
//      </>
// }

// export default InputFild;


// <div className='container'>
//          <div className="py-2 flex items-center">
//             <span className="material-symbols-outlined">home</span>
//             <span className="material-symbols-outlined">chevron_right</span>
//             <span className="font-bold text-base">Shop</span>
//           </div>
//     </div>