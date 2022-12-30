import React from 'react'
import { Category } from '../../types/components/category'

const Category: React.FC<Category> = ({ name, icon }: {
  name: string,
  icon: string
}) => {
  return (
    <div>
      <div className='relative overflow-hidden bg-gray-600'>
        <img src={icon} className='h-32 w-full' alt="" />
        <a href="" className='absolute text-2xl text-primary font-bold bg-opacity-40 inset-0 text-center flex justify-center items-center'>{name}</a>
      </div>
    </div>
  )
}
export default Category