import { instaIcon } from "./images";
import Itens from "./Itens";
import Logo from "./Logo";

export default function SideBar() {
    return (
        <aside className={`flex flex-col bg-gray-200 text-gray-700`}>
            <div className={`flex flex-col items-center justify-center`}>
                <Logo />
            </div>
            <ul className={`flex-grow p-5 justify-center items-center`}> 
                <Itens icone={instaIcon} texto="Instagram" />
                <Itens icone={instaIcon} texto="Linkedin" />
                <Itens icone={instaIcon} texto="Facebook" />
                <Itens icone={instaIcon} texto="GitHub" />
                <Itens icone={instaIcon} texto="Youtube" />
                <Itens icone={instaIcon} texto="Telegram" />
                <Itens icone={instaIcon} texto="Twiter" />
            </ul>
            <ul className={`flex-grow `}>
                <p>Tecnologias!!</p>
                <div>
                <Itens texto="HTML" />
                <Itens texto="CSS" />
                <Itens texto="BOOTSTRAP" />
                <Itens texto="NextJs" />
                <Itens texto="JavaScript" />
                </div>
            </ul>
        </aside>
    )
}