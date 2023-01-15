import Link from 'next/link'
import React from 'react'
import { Category } from '../../types/components/category'

const Category: React.FC<Category> = (props: Category): JSX.Element => {
  return (
    <Link href={`/product/category/${props._id}`}>
      <div className='flex items-center gap-2 bg-primary text-white shadow-lg py-2 px-4 rounded rounded-full'>
        <img src={props.icon} className="h-8 w-8 rounded rounded-full" alt="" />
        <span className='text-xl font-bold'>{props.name}</span>
      </div>
    </Link>
  );
}
export default Category