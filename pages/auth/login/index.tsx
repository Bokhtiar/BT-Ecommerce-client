import { useEffect, useState } from "react";
import { login } from '../../../network/auth.network'
import LoginForm from '../../../components/auth/login'
import { setToken, getToken, networkErrorHandeller } from "../../../utils/helpers";
import { useRouter } from "next/router";
import { Toastify } from "../../../components/toastify";


const Login: React.FC = (): JSX.Element => {
  //const navigate = useNavigate();
  const [isLoading, setLoading] = useState<boolean>(false);
  const router = useRouter();


  /* Handle login */
  const handleLogin = async (data: any) => {
    try {

      const response = await login(data);
      if (response && response.status === 200) {
        console.log(response)
        await setToken(response.data.token);
        Toastify.Success(response.data.message)
        router.push("/dashboard");
      }
      Toastify.Success("login successfully");
    } catch (error: any) {
      if (error) {
        console.log("s", error);

        Toastify.Success("login successfully");
        networkErrorHandeller(error);
      }
    }
  };

  useEffect(() => {
    if (getToken()) {
      router.push("/dashboard");
    }
  }, [router]);

  return (
    <div className="w-full lg:w-3/4 mx-auto py-24 lg:py-32 px-4 lg:px-0">
      <div className="w-full md:w-[550px] mx-auto p-8 lg:p-10 bg-white">
        <p className="text-gray-700 text-3xl mb-1">Login</p>
        <p className="text-gray-400 text-sm mb-10">Login your account.</p>
        <LoginForm loading={isLoading} onSubmit={(data) => handleLogin(data)} />
      </div>
    </div>
  );
};


export default Login