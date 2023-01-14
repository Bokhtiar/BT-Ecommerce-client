import Link from "next/link";
import { useCallback, useState } from "react";
import { CategoryProductNetwork } from "../../network/Category.network";
import { CategorySideMenu } from "../../types/components/category-side-menu";

const CategorySideMenu: React.FC<CategorySideMenu> = (
  props: CategorySideMenu
) => {
  const [products, setProduct] = useState([]);

  return (
    <>
      <Link href={`/product/category/${props._id}`}>
        <div className="flex justify-between items-center mt-4">
          <div className="flex gap-4">
            <span>
              <input type="checkbox" className="accent-primary" />
            </span>
            <span className="font-bold">{props.name}</span>
          </div>
          <span className="font-bold">
            <span className="material-symbols-outlined">navigate_next</span>
          </span>
        </div>
      </Link>
    </>
  );
};

export default CategorySideMenu;
