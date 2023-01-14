import React from 'react'
import { Category } from '../../types/components/category'

const Category: React.FC<Category> = ({ name, icon }: {
  name: string,
  icon: string
}) => {
  return (
    <div className='flex items-center gap-2 bg-primary text-white shadow-lg py-2 px-4 rounded rounded-full'>
      <img src={icon} className="h-8 w-8 rounded rounded-full" alt="" />
      <span className='text-xl font-bold'>{name}</span>
    </div>
  );
}
export default Category