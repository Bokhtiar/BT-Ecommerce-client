import {privateRequest} from '../config/axios.config'

export const CartNetwork = async() => {
    return await privateRequest.get(`/api/v1/cart`)
}
