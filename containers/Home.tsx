import type { NextPage } from "next";
import { Filter } from "../components/Filter";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

type HomeProps = {
    setToken(s: string): void
}
export const Home: NextPage<HomeProps> = ({setToken}) => {

    const sair = () => {
        localStorage.clear();
        setToken('');
    }

    return (<>
        <Header sair={sair}/>
        <Filter />
        <Footer/>
    </>);
}