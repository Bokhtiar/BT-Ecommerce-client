import {publicRequest} from '../config/axios.config'

export const CategoriesNetwork = async() => {
    return await publicRequest.get(`/api/v1/category`)
}