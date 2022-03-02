import Link from "next/link";

export default function TopBar() {
   return (
    <div className="flex p-5 bg-gray-300">
        <div className="flex items-center bg-gray-500">  
        <h1>Meus projetos</h1>
        </div>
        <div className={`flex flex-grow justify-end items-center pr-0 `}>
        <Link href="https://github.com/AbiezerSidonioJoseOdanacaJunior">
        <a>Veja mais...</a>
        </Link>
        </div>  
    </div>
   )
}