import type { NextPage } from "next";
import { useState } from "react";

export const Filter : NextPage = () => {

    const [showFilter, setShowFilters] = useState(false)

    return (
        <div className="container-filters">
            <div className="title">
                <span>Tarefas</span>
                <img src="/filter.svg" alt="Filtrar atividades" onClick={_ => setShowFilters(!showFilter)}/>
                <div className="form">
                <div>
                    <label>Data prevista de conclusão</label>
                    <input type="date"/>
                </div>
                <div>
                    <label>até</label>
                    <input type="date"/>
                </div>
                <div className="separator"/>
                <div>
                    <label>Status</label>
                    <select>
                        <option value={0}>Todas</option>
                        <option value={1}>Ativas</option>
                        <option value={2}>Concluídas</option>
                    </select>
                </div>
                </div>
            </div>
            {showFilter && <div className="mobiles-filters">
                <div>
                    <label>Data de previsão de:</label>
                    <input type="date"/>
                </div>
                <div>
                    <label>Data de previsão até:</label>
                    <input type="date"/>
                </div>
                <div>
                    <label>Status:</label>
                    <select>
                        <option value={0}>Todas</option>
                        <option value={1}>Ativas</option>
                        <option value={2}>Concluídas</option>
                    </select>
                </div>
            </div>}
        </div>
    );
}