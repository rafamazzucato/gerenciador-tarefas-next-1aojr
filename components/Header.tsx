import { NextPage } from "next"
import { useEffect, useState } from "react"

type HeaderProps =  {
    sair (): void
    showModal():void
}

export const Header: NextPage<HeaderProps> = ({sair, showModal}) =>{
    const [name, setName] = useState<string| null>('');

    useEffect(()=>{
        if(typeof window !== 'undefined'){
          const at = localStorage.getItem('name');
          setName(at);
        }
    },[])

    return(
        <div className="container-header">
            <img src="/fiappng.png" alt="Logo FIAP" className="logo"/>
            <button onClick={showModal}><span>+</span> Adicionar Tarefa</button>
            
            <div className="mobile">
                <span>Olá, {name}</span>
                <img src="/exit-mobile.svg" alt="Sair" onClick={sair}/>
            </div>

            <div className="desktop">
                <span>Olá,{name}</span>
                <img src="/exit-desktop.svg" alt="Sair" onClick={sair}/>
            </div>
        </div>
    )
}