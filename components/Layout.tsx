import Content from "./Content";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

interface LayoutProps {
    titulo?: string
    subtitulo?: string
}

export default function Layout(props: LayoutProps) {
    return (
        <div className={`flex h-screen w-screen`}>
            <SideBar />
            <div className={`flex flex-col w-full bg-gray-300 dark:bg-gray-800`}>
                <TopBar/>
                <Content />
            </div>
        </div>
    )
}