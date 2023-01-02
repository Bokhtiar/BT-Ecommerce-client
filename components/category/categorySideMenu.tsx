import { CategorySideMenu } from "../../types/components/category-side-menu"
import { useCallback, useState } from 'react';
import { CategoryProductNetwork } from "../../network/Category.network";

const CategorySideMenu: React.FC<CategorySideMenu> = (props: CategorySideMenu, ) => {
    const [products, setProduct] = useState([])

    //    useCallback(async () => {
    //             try {
    //               const response = await CategoryProductNetwork({ _id });
    //               if (response && response.status == 200) {
    //                 const data = response.data.data;
    //                 console.log(data);
    //               }
    //             } catch (error) {
    //               if (error) {
    //                 console.log(error);
    //               }
    //             }
    //           }, [products]);


    
    return (
      <>

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

      </>
    );
}

export default CategorySideMenu