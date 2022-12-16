import type { NextPage } from "next";
import { Task } from "../types/Task";

type ListProps ={
    tasks: Task[]
}

export const List : NextPage<ListProps> = ({ tasks}) => {
    return (
        <div className={"container-list" + (tasks && tasks.length > 0 ? ' not-empty' : '')}>
            {tasks && tasks.length > 0 
                ?
                    tasks.map(t => <p key={t._id}>{t.name}</p>)
                :
                    <>
                        <img src="/empty.svg" alt="Nenhuma tarefa cadastrada!"/>
                        <p>Você ainda não possui tarefas cadastradas!</p>
                    </>
            }
        </div>
    );
}