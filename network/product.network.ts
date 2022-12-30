import { publicRequest } from "../config/axios.config";

/* List of resources */
export const index = async () => {
  return await publicRequest.get(`/api/v1/product`);
};