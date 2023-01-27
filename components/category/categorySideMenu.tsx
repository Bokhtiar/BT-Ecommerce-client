import Link from "next/link";
import { useCallback, useState } from "react";
import { CategoryProductNetwork } from "../../network/Category.network";
import { ICategorySideMenu } from "../../types/components/category-side-menu";

const CategorySideMenu: React.FC<ICategorySideMenu> = (
  props: ICategorySideMenu
) => {

  return (
    <>
      <Link href={`/product/category/${props._id}`}>
        <div className="flex justify-between items-center mt-4">
          <div className="flex gap-4">
            <span>
              <img className="h-4 w-4 rounded rounded-full" src={props.icon} alt="" />
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
