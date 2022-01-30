import { userIcon } from "./images";

export default function Logo() {
    return (
        <div className={`flex flex-col items-center justify-center`}>
            <div>
               {userIcon}
            </div>
        </div>
    )
}