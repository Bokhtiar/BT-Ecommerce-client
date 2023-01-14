import { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Product from "../../../components/product";
import { product } from "../../../types/components/product";
import { CategoryProductNetwork } from "../../../network/Category.network";
import { networkErrorHandeller } from "../../../utils/helpers";

const ProductCategoryShow: React.FC = (): JSX.Element => {
  const [product, setProduct] = useState<product[] | []>([]);

  /* request query id */
  const router = useRouter();
  const { id } = router.query;
  const _id = id;
  
  /* fetch category has assing product */
  const fetchData = useCallback(async () => {
    try {
      const response = await CategoryProductNetwork({ _id });
      if (response && response.status === 200) {
        setProduct(response?.data?.data);
      }
    } catch (error: any) {
      networkErrorHandeller(error);
    }
  }, [product]);

  /* useEffect */
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="container my-8">
        <h2 className="text-2xl text-gray-500 my-4 font-bold">
          Category Products
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {product.map((product, i) => {
            return <Product key={i} {...product} />;
          })}
        </div>
      </div>
    </>
  );
};

export default ProductCategoryShow;
