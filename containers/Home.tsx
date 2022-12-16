import type { NextPage } from "next";
import { Filter } from "../components/Filter";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useEffect, useState } from "react";
import { executeRequest } from "../services/api";
import { List } from "../components/List";

type HomeProps = {
    setToken(s: string): void
}
export const Home: NextPage<HomeProps> = ({setToken}) => {

    const [list, setList] = useState([]);
    const [previsionDateStart, setPrevisionDateStart] = useState('');
    const [previsionDateEnd, setPrevisionDateEnd] = useState('');
    const [status, setStatus] = useState(0);

    const sair = () => {
        localStorage.clear();
        setToken('');
    }

    const getFilteredData = async () => {
        try{
            let query = '?status='+status;

            if(previsionDateStart){
                query+= '&finishPrevisionStart='+previsionDateStart;
            }

            if(previsionDateEnd){
                query+= '&finishPrevisionEnd='+previsionDateEnd;
            }

            const result = await executeRequest('task'+query, 'GET');
            if(result && result.data){
                setList(result.data);
            }
        }catch(e){
            console.log('Ocorreu erro ao buscar tarefas:', e);
        }
    }

    useEffect(() => {
        getFilteredData();
    }, [previsionDateStart, previsionDateEnd, status]);

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
        <List tasks={list}/>
        <Footer/>
    </>);
}