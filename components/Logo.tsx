import { userIcon } from "./images";
import Itens from "./Itens";

export default function Logo() {
    return (
        <div className={`flex flex-col items-center justify-center pt-5`}>
            <div className={ `flex flex-col justify-center items-center`}>
               {userIcon}
               <Itens texto="Bibi Junior" /> 
            </div>
        </div>
    )
}