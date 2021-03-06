import React from "react";
import { NavLink } from 'react-router-dom';

export const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <NavLink className="navbar-brand ms-4" to="/">STB</NavLink>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-end me-4" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to={'/docs'}>Documentação</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={'./vet'}>Veterinarios</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={'./cadastro'}>Cadastrar</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
};