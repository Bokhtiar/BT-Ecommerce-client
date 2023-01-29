import { publicRequest } from "../config/axios.config";

export const CategoriesNetwork = async () => {
  return await publicRequest.get(`/api/v1/category`);
};

export const CategoryProductNetwork = async ({ id }: { id: any }) => {
  return await publicRequest.get(`/api/v1/category/product/${id}`);
};

export const ReletedProductNetwork = async ({ id }: { id: any }) => {
  return await publicRequest.get(`/api/v1/product/releted/${id}`);
};
