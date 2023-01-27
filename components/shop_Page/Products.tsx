import Product from '../product'
import axios from 'axios';
import { RegularProductIndex } from '../../network/product.network'
import { Iproduct } from '../../types/components/product';
import { useCallback, useEffect, useState } from 'react';

export default function Products() {
    const [products, setProduct] = useState<Iproduct[] | []>([]);

    /* Fetch data */
    const fetchData = useCallback(async () => {
        try {
            const response = await RegularProductIndex();
            if ( response && response.status === 200 ) {
                setProduct(response.data.data);
            }
        } catch (error: any) {
            if (error) {
                console.log(error);
            }
        }
    }, [products]);

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div className='flex justify-between items-center container'>
                <div className='my-4 md:my-0'>
                    <select className='border border-gray-300 py-1 px-4' name="" id="">
                        <option value="">Defoult product</option>
                    </select>
                </div>
                <div className='flex items-center gap-2'>
                    <div className=''>
                        <button className='bg-primary border px-2 rounded text-white text-center'>
                            <span className="material-symbols-outlined pt-1">menu</span>
                        </button>
                    </div>
                    <div className=''>
                        <button className=' px-2 border border-gray-300 text-primary'>
                            <span className="material-symbols-outlined pt-1">list</span>
                        </button>
                    </div>
                </div>
            </div>
            {/* regular product */}
            <div className='container'>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {
                        products.map((item, i) => {
                            return <Product key={i} {...item} ></Product>;
                        })
                    }                    
                </div>
            </div>
        </>
    )
}
