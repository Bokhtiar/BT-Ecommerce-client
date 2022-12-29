import {IButton} from "../../types/components/button"

const Button : React.FC<IButton> = ({name}:{name:string}) => {
    return <>
        <button className="bg-primary px-8 py-3 text-white rounded text-xl font-semibold hover:bg-white hover:text-black border hover:border-primray">{name}</button>
    </>
}
export default Button