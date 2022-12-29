import React from 'react'
import { Iinput } from '../../types/components/input'

const InputFild: React.FC<Iinput> = ({ name, placeholder, type, label }: {
    placeholder: string,
    name: string,
    type: string,
    label: string
}) => {
    return <>
        <div>
            <label htmlFor="" className='font-bold font-2xl'>{label}</label>
            <input className='w-full border border-gray-300 py-3 px-4 hover:border-primary outline-0 ' type={type} name={name} placeholder={placeholder} />
        </div>
     </>
}

export default InputFild;
