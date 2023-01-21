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
    console.log(data);
    
    return await privateRequest.post(`/api/v1/order`, data);
}