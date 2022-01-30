import Logo from "./Logo";

export default function SideBar() {
    return (
        <aside className={`flex flex-col bg-gray-200 text-gray-700`}>
            <div className={`flex flex-col items-center justify-center`}>
                <Logo />
            </div>
            <ul className={`flex-grow`}> 

            </ul>
            <ul className={`flex-grow`}>

            </ul>
        </aside>
    )
}