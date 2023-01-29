import Category from "../components/category";
import Product from "../components/product";
import { CategoriesNetwork } from "../network/Category.network";
import {
  FlashSaleProductIndex,
  RegularProductIndex,
} from "../network/product.network";
import { useCallback, useEffect, useState } from "react";
import { ICategory } from "../types/components/category";
import { Iproduct } from "../types/components/product";
import Image from "next/image";

export default function Home() {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [Categories, setCategories] = useState<ICategory[] | []>([]);
  const [RegularProducts, setRegularProducts] = useState<Iproduct[] | []>([]);
  const [FlashSaleProducts, setFlashSaleProduct] = useState<Iproduct[] | []>(
    []
  );

  /* category fetch data */
  const category_Fetch_Data = useCallback(async () => {
    try {
      const response = await CategoriesNetwork();
      if (response && response.status === 200) {
        setCategories(response.data.data);
      }
      setLoading(false);
    } catch (error) {
      if (error) {
        setLoading(false);
        console.log(error);
      }
    }
  }, [Categories]);

  /* regular product fetch data */
  const regular_product_fetch_data = useCallback(async () => {
    try {
      const response = await RegularProductIndex();
      if (response && response.status === 200) {
        setRegularProducts(response.data.data);
      }
      setLoading(false);
    } catch (error: any) {
      if (error) {
        setLoading(false);
        console.log(error);
      }
    }
  }, [RegularProducts]);

  /* flash sale product list */
  const flash_sale_product_fetch_data = useCallback(async () => {
    try {
      const response = await FlashSaleProductIndex();
      if (response && response.status === 200) {
        setFlashSaleProduct(response.data.data);
      }
    } catch (error: any) {
      if (error) {
        console.log(error);
      }
    }
  }, [FlashSaleProducts]);

  /* useEffect */
  useEffect(() => {
    category_Fetch_Data(), regular_product_fetch_data();
    flash_sale_product_fetch_data();
  }, []);

  return (
    <>
      {/* banner start here */}
      <div
        className="md:py-28 py-12"
        style={{
          backgroundImage: "url('./banner.jpg')",
          height: "md:70vh 10vh",
          width: "100%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className="">
            <h2 className="text-4xl text-gray-600 mb-4 my-auto">
              Best collection for <br /> Home decoration
            </h2>
            <p className="text-base">
              Lorem Ipsum is simply dummy text of the printing <br /> and
              typesetting industry.
            </p>
            <button className="bg-primary border-gray-100 px-8 py-2 text-white rounded-sm mt-8">
              Shop now
            </button>
          </div>
        </div>
      </div>
      {/* banner end here */}

      {/* businness card */}
      <div className="container my-8">
        <div className="w-10/12 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex gap-2 py-3 px-12 border border-primary rounded-sm  text-center">
              <div className="mt-4">
                <span className="material-symbols-outlined">
                  restaurant_menu
                </span>
              </div>
              <p className="ml-4">
                <span className="font-bold text-xl">Free Shoping</span> <br />
                <span className="text-gray-500">Order over $200</span>
              </p>
            </div>

            <div className="flex gap-2 py-3 px-12 border border-primary rounded-sm  text-center">
              <div className="mt-4">
                <span className="material-symbols-outlined">
                  restaurant_menu
                </span>
              </div>
              <p className="ml-4">
                <span className="font-bold text-xl">Free Shoping</span> <br />
                <span className="text-gray-500">Order over $200</span>
              </p>
            </div>

            <div className="flex gap-2 py-3 px-12 border border-primary rounded-sm  text-center">
              <div className="mt-4">
                <span className="material-symbols-outlined">
                  restaurant_menu
                </span>
              </div>
              <p className="ml-4">
                <span className="font-bold text-xl">Free Shoping</span> <br />
                <span className="text-gray-500">Order over $200</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* shop by category */}
      <div className="container my-20">
        <h2 className="text-2xl text-gray-700 font-bold my-6">
          SHOP BY CATEGORIES
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {Categories.map((category, i) => {
            return <Category key={i} {...category}></Category>;
          })}
        </div>
      </div>

      {/* new arrible product */}
      <div className="container my-8">
        <h2 className="text-2xl text-gray-700 my-4 font-bold">
          TOP NEW ARRIBLE
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {FlashSaleProducts.map((flashSaleproduct, i) => {
            return <Product key={i} {...flashSaleproduct} />;
          })}
        </div>
      </div>

      {/* banner section */}
      <div className="container my-20">
        <img className="w-full" src="/banner_1.jpg" alt="" />
      </div>

      {/* regular product */}
      <div className="container my-8">
        <h2 className="text-2xl text-gray-700 my-4 font-bold">
          Regular product
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {RegularProducts.map((Regularproduct, i) => {
            return <Product key={i} {...Regularproduct} />;
          })}
        </div>
      </div>
    </>
  );
}
