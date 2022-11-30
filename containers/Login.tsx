import type { NextPage } from "next";

export const Login: NextPage = () => {
    return (
        <div className="container-login">
            <img src="/logo.svg" alt="Logo Fiap" className="logo"/>
            <div className="form">
                <div className="input">
                    <img src="/mail.svg" alt="Login Icone"/>
                    <input type='text' placeholder="Login"/>
                </div>
                <div className="input">
                    <img src="/lock.svg" alt="Senha Icone"/>
                    <input type='password' placeholder="Senha"/>
                </div>
                <button>Login</button>
            </div>
        </div>
    )
}