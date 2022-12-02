import type { NextPage } from "next";
import { Filter } from "../components/Filter";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useState } from "react";

type HomeProps = {
    setToken(s: string): void
}
export const Home: NextPage<HomeProps> = ({setToken}) => {

    const [previsionDateStart, setPrevisionDateStart] = useState('');
    const [previsionDateEnd, setPrevisionDateEnd] = useState('');
    const [status, setStatus] = useState(0);

    const sair = () => {
        localStorage.clear();
        setToken('');
    }

    return (<>
        <Header sair={sair}/>
        <Filter 
            previsionDateStart={previsionDateStart}
            previsionDateEnd={previsionDateEnd}
            status={status}
            setPrevisionDateStart={setPrevisionDateStart}
            setPrevisionDateEnd={setPrevisionDateEnd}
            setStatus={setStatus}
            />
        <Footer/>
    </>);
}