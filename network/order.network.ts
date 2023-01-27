import {privateRequest} from '../config/axios.config'

type OrderDataTypes = {
    name:string;
    email:string;
    phone:number;
    location: string;
    payment_name: string;
    payment_number: number;
    payment_txid : string
}
                   
export const OrderStoreNetwork = async(data: OrderDataTypes) => {
    return await privateRequest.post(`/api/v1/order`, data);
}

export const OrderList = async() => {
    return await privateRequest.get(`/api/v1/order`);
}

export const OrderNetworkShow = async({id}:{id:any}) => {
    return await privateRequest.get(`/api/v1/order/${id}`);
}