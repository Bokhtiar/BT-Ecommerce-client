import React from 'react'
import { Iinput } from '../../types/components/input'

const InputFild: React.FC<Iinput> = ({ name, placeholder, type }: {
    placeholder: string,
    name: string,
    type: string 
}) => {
    return <>
        <input className='' type={type} name={name} placeholder={placeholder} />
     </>
}

export default InputFild;
