import { publicRequest } from "../config/axios.config";

/* List of resources */
export const index = async () => {
  return await publicRequest.get(`/api/v1/product`);
};

/* List of resources */
export const productShow = async ({_id}: {_id:string}) => {
  return await publicRequest.get(`/api/v1/product/${_id}`);
};