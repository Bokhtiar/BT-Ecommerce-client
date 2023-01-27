import { publicRequest } from "../config/axios.config";

/* List of regular product resources */
export const RegularProductIndex = async () => {
  return await publicRequest.get(`/api/v1/product/regular`);
};

/* List of flash sale product resource */
export const FlashSaleProductIndex = async () => {
  return await publicRequest.get(`/api/v1/product/flash-sale`)
}

/* List of resources */
export const productShow = async ({id}: {id:any}) => {
  return await publicRequest.get(`/api/v1/product/${id}`);
}; 