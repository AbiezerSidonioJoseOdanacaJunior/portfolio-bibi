import Link from "next/link"

interface ItensProps {
    icone: any
    texto: string
    url?: string
    onClick?: (evento: any) => void 
    className?: string
}

export default function Itens(props: ItensProps) {

    function renderizarLink() {
        <a className={`flex flex-col justify-center items-center
        h-20 w-20 text-gray-600`}> 
        {props.icone}
        <span className={`text-xs font-light`}>
            {props.texto}
        </span>
        </a>
    }

    return (
        <li onClick={props.onClick} className={`flex`} >
           {props.icone}
           {props.texto}
        </li>
    )
}