import type { NextPage } from "next";
import { useState } from "react";

export const Login: NextPage = () => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const doLogin = () => {
        try{
            setError('');
            if(!login || !password){
                setError('Favor preencher os campos!');
                return
            }

            setError('Formulario ok!');
        }catch(e){
            console.log(`Erro ao efetuar login: ${e}`);
        }
    }

    return (
        <div className="container-login">
            <img src="/logo.svg" alt="Logo Fiap" className="logo" />
            <div className="form">
                {error && <p className="error">{error}</p>}
                <div className="input">
                    <img src="/mail.svg" alt="Login Icone" />
                    <input type='text' placeholder="Login"
                        value={login}
                        onChange={evento => setLogin(evento.target.value)}
                    />
                </div>
                <div className="input">
                    <img src="/lock.svg" alt="Senha Icone" />
                    <input type='password' placeholder="Senha"
                        value={password}
                        onChange={evento => setPassword(evento.target.value)}
                    />
                </div>
                <button onClick={doLogin}>Login</button>
            </div>
        </div>
    );
}