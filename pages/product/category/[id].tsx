import { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Product from "../../../components/product";
import { Iproduct } from "../../../types/components/product";
import { CategoryProductNetwork } from "../../../network/Category.network";
import { networkErrorHandeller } from "../../../utils/helpers";
import Bradcrumbs from "../../../components/bradcrumbs";
import Sidebar from "../../../components/shop_Page/Sidebar";

const ProductCategoryShow: React.FC = (): JSX.Element => {
  const [product, setProduct] = useState<Iproduct[] | []>([]);

  /* request query id */
  const router = useRouter();
  const { id } = router.query;

  /* fetch category has assing product */
  const fetchData = useCallback(async () => {
    try {
      const response = await CategoryProductNetwork({ id });
      if (response && response.status === 200) {
        setProduct(response?.data?.data);
      }
    } catch (error: any) {
      networkErrorHandeller(error);
    }
  }, [id]);

  /* useEffect */
  useEffect(() => {
    if (id) {
      fetchData();
    }

  }, [id, fetchData]);

  return (
    <>
      <Bradcrumbs name="Category Product"></Bradcrumbs>
      <div className="container">
        <div className="grid md:grid-cols-4 grid-cols-2">
          <div className="col-span-4 md:col-span-1">
            <Sidebar></Sidebar>
          </div>
          <div className="col-span-4 md:col-span-3 mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {
                product.map((product, i) => {
                  return <Product key={i} {...product} />;
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCategoryShow;
