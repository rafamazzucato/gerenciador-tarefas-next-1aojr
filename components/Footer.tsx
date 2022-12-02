import type { NextPage } from "next";

export const Footer : NextPage = () => {
    return (
        <div className="container-footer">
            <button><img src="/add.svg"/>Adicionar uma tarefa</button>
            <span>© Copyright {new Date().getFullYear()}. Todos os direitos reservados.</span>
        </div>
    );
}