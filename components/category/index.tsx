import React from 'react'
import { Category } from '../../types/components/category'

const Category: React.FC<Category> = ({ name, image }: {
  name: string,
  image: string
}) => {
  return (
    <div>
      <div className='relative overflow-hidden'>
        <img src={image} className='h-32 w-full' alt="" />
        <a href="" className='absolute text-xl text-black font-bold bg-opacity-40 inset-0 text-center flex justify-center items-center'>{name}</a>
      </div>
    </div>
  )
}
export default Category