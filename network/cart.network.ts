import {privateRequest} from '../config/axios.config'

export const CartNetwork = async() => {
    return await privateRequest.get(`/api/v1/cart`)
}

export const CartNetworkStore = async({_id}:{_id:string}) => {
    return await privateRequest.post(`/api/v1/cart/${_id}`)
}

export const CartNetworkIncrement = async({_id}:{_id:string}) => {
    return await privateRequest.put(`/api/v1/cart/increment/${_id}`)
}

