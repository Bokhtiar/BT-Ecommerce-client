import { publicRequest } from "../../config/axios.config";
import React, { useCallback, useEffect, useState } from "react";
import CategorySideMenu from "../category/categorySideMenu";
import { CategoriesNetwork } from "../../network/Category.network";
import { ICategorySideMenu } from "../../types/components/category-side-menu";

export default function Sidebar() {
  const [categories, setCategories] = useState<ICategorySideMenu[] | []>([]);

  /* category fetch data */
  const category_fetch_data = useCallback(async () => {
    try {
      const response = await CategoriesNetwork();
      if (response && response.status === 200) {
        setCategories(response.data.data);
      }
    } catch (error: any) {
      if (error) {
        console.log(error);
      }
    }
  }, [categories]);

  /* useCallback */
  useEffect(() => {
    category_fetch_data();
  }, []);

  return (
    <>
      <div className="shadow-md px-4 py-4">
        <div>
          <h2 className="text-xl uppercase font-semibold ">Categories</h2>
          {categories.map((category, i) => {
            return <CategorySideMenu key={i} {...category} check={true} />;
          })}
        </div>
      </div>
    </>
  );
}
