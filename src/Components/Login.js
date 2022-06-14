import React from "react";

export const Login = () => {
    return (
        <main>
            <div className="d-flex flex-column justify-content-center">
                <div className="form-group mt-3">
                  <label for="email">Digite seu email</label>
                  <input type="email" className="form-control mt-1" name="password" id="email" aria-describedby="emailHelpId" placeholder="seuemail@email.com"/>
                  <div class="form-group mt-3">
                    <label for="password">Digite sua senha</label>
                    <input type="password" class="form-control mt-1" name="password" id="password" placeholder="senha"/>
                  </div>
                </div>
                <div>
                    <button type="button" className="btn btn-primary m-3">Entrar</button>
                </div>
            </div>
        </main>
    )
};