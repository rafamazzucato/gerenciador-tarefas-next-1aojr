import type { NextPage } from "next";
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
    </>);
}