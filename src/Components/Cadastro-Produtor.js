import React from "react";
import "../Styles/Cadastro.css";

export const CadastroProdutor = () => {
    return (
        <main className="singup-prod">
            <form className="row g-3 needs-validation" novalidate>
                <div className="col-md-4">
                  <label for="validationCustom01" className="form-label">Nome</label>
                  <input type="text" className="form-control" id="validationCustom01" required/>
                  <div className="valid-feedback">
                    Parece bom!
                  </div>
                </div>
                <div className="col-md-4">
                  <label for="validationCustom02" className="form-label">Sobrenome</label>
                  <input type="text" className="form-control" id="validationCustom02" required/>
                  <div className="valid-feedback">
                    Parece bom!
                  </div>
                </div>
                <div className="col-md-4">
                  <label for="validationCustomUsername" className="form-label">Nome de usuário</label>
                  <div className="input-group has-validation">
                    <span className="input-group-text" id="inputGroupPrepend">@</span>
                    <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
                    <div className="invalid-feedback">
                      Por favor escolha um nome de usúario
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <label for="validationCustom03" className="form-label">Cidade</label>
                  <input type="text" className="form-control" id="validationCustom03" required/>
                  <div className="invalid-feedback">
                    Por favor selecione sua cidade.
                  </div>
                </div>
                <div className="col-md-3">
                  <label for="validationCustom04" className="form-label">Estado</label>
                  <select className="form-select" id="validationCustom04" required>
                    <option selected disabled value="">Escolha...</option>
                    <option>Minas Gerais</option>
                    <option>São Paulo</option>
                    <option>Rio de Janeiro</option>
                    <option>Bahia</option>
                  </select>
                  <div className="invalid-feedback">
                    Por favor selecione um estado valido.
                  </div>
                </div>
                <div class="mb-3">
                    <div>Envie o certificado de Produtor</div>
                   <input type="file" className="form-control" aria-label="file example" required/>
                   <div className="invalid-feedback">Envie seu certificado</div>
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                    <label className="form-check-label" for="invalidCheck">
                        Aceito os temos e condições.
                    </label>
                    <div className="invalid-feedback">
                      You must agree before submitting.
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary" type="submit">Cadastrar</button>
                </div>
            </form>
        </main>
    )
};