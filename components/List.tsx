import type { NextPage } from "next";
import { Task } from "../types/Task";
import { Item } from "./Item";

type ListProps ={
    tasks: Task[]
}

export const List : NextPage<ListProps> = ({ tasks}) => {
    return (
        <div className={"container-list" + (tasks && tasks.length > 0 ? ' not-empty' : '')}>
            {tasks && tasks.length > 0 
                ?
                    tasks.map(t => <Item key={t._id} task={t}/>)
                :
                    <>
                        <img src="/empty.svg" alt="Nenhuma tarefa cadastrada!"/>
                        <p>Você ainda não possui tarefas cadastradas!</p>
                    </>
            }
        </div>
    );
}