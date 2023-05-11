import axios from "axios";
import { privateRequest } from "../config/axios.config";
import { getToken } from "../utils/helpers";

export const CartNetwork = async () => {
  // return await privateRequest.post(`/api/v1/cart`)

  const instance = axios.create({
    baseURL:  "https://bt-ecommerce.onrender.com",
    timeout: 1000,
    headers: { Authorization: "Bearer " + (await getToken()) },
  });

  return instance.get("/api/v1/cart");
};

export const CartNetworkStore = async ({ _id }: { _id: string }) => {
  // return await privateRequest.post(`/api/v1/cart/${_id}`)

  const token = await getToken();
    const baseUrl = `https://bt-ecommerce.onrender.com/api/v1/cart/${_id}`
  return axios.post(
    baseUrl,
    {
      //...data
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const CartNetworkIncrement = async ({ _id }: { _id: string }) => {
  return await privateRequest.put(`/api/v1/cart/increment/${_id}`);
};

export const CartNetworkDecrement = async ({ _id }: { _id: string }) => {
  return await privateRequest.put(`/api/v1/cart/decrement/${_id}`);
};

export const CartNetworkDestroy = async ({ _id }: { _id: string }) => {
  return await privateRequest.delete(`/api/v1/cart/destroy/${_id}`);
};
