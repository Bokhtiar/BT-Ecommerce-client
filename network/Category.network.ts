import {publicRequest} from '../config/axios.config'

export const CategoriesNetwork = async() => {
    return await publicRequest.get(`/api/v1/category`)
}

export const CategoryProductNetwork = async({id}: {id:string}) => {
    return await publicRequest.get(`/api/v1/category/product/${id}`);
}