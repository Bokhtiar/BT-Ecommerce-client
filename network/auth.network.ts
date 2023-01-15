import { privateRequest, publicRequest } from "../config/axios.config";

/* Login request */
type LoginDataType = {
  email: string;
  password: string;
};


export const login = async (data: LoginDataType) => {
  return await publicRequest.post(`/api/v1/user/auth/login`, data);
};

/* profile */
export const profile = async () => {
  return await privateRequest.get(`/api/v1/user/auth/profile`)
}
