import React from "react";
import { Link } from "react-router-dom";

export const MenuPrincipal = () => {
    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center">STB</h1>
                        <h2 className="text-center text-muted">(Sistema de Tratamento Bovino)</h2>
                    </div>
                    <div className="col-12">
                        <p className="fs-4">
                           O intuito do site é para que os animais cheguem no abatedor limpos e saudáveis, para não contaminar 
                           a sala. O que eles querem é que o animal não chegue la doente e sujo então o intuito seria isso, o 
                           fazendeiro faz o registro do animal, com sua situação atual, para ele chegar lá limpo e acabe não 
                           contaminando a sala do abate com os dados, o abatedor vai analisar a situação do animal e vai 
                           aprovar ou não a entrega do animal
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        <Link to="/cadastro" className="btn btn-primary me-3">Cadastrar</Link>
                        <span>ou</span>
                        <Link to="/login" className="btn btn-primary ms-3">Entrar</Link>
                    </div>
                </div>
            </div>
        </main>
    )
};