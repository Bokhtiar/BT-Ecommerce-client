import { CategorySideMenu } from "../../types/components/category-side-menu"

const CategorySideMenu: React.FC<CategorySideMenu> = ({ name, check }: {
    name: string,
    check?: boolean
}) => {
    return <>

        <div className='flex justify-between items-center mt-4'>
            <div className="flex gap-4">
                <span><input type="checkbox" className="accent-primary" /></span>
                <span className='font-bold'>{name}</span>
            </div>
            <span className="font-bold"><span className="material-symbols-outlined">navigate_next</span></span>
        </div>

    </>
}

export default CategorySideMenu