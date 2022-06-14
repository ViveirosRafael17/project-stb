import React from "react";
import { Link } from 'react-router-dom';
import '../Styles/Cadastro.css'

export const Cadastro = () => {
    return (
        <main className="singup">
            <div className="singup-options">
                <div className="singup-title">
                    <h3>Cadastro</h3>
                </div>
                <div className="singup-item">
                    <Link className="singup-link" to={'/cadastro/veterinario'}>Sou um Veterinario</Link>
                </div>
                <div className="singup-item">
                    <Link className="singup-link" to={'/cadastro/produtor'}>Sou um Produtor</Link>
                </div>
            </div>
            <div className="login-options">
                ou
                <div className="login-item">
                    <Link to="/login" className="btn btn-info">Entrar</Link>
                </div>
            </div>
        </main>
    )
};