import Content from "./Content";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

interface LayoutProps {
    titulo: string
}

export default function Layout(props: LayoutProps) {
    return (
        <div className={`flex h-screen w-screen`}>
            <SideBar />
            <div>
                <TopBar />
                <Content />
            </div>
        </div>
    )
}