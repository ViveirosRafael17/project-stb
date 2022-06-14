import React from 'react';
import "../Styles/Cadastro.css";

export const CadastroVeterinario = () => {
    return (
        <main className='singup-vet'>
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
                    <div>Envie seu diploma</div>
                   <input type="file" className="form-control" aria-label="file example" required/>
                   <div className="invalid-feedback">Envie seu certificado</div>
                </div>
                <div class="row">
                  <div className="col-md-4">
                    <div class="form-group">
                      <label for="email">Email</label>
                      <input type="email" class="form-control" name="email" id="email" aria-describedby="emailHelpId" placeholder="seuemail1234@email.com"/>
                    </div>
                    <div class="form-group">
                      <label for="password">Senha</label>
                      <input type="password" class="form-control" name="password" id="password" placeholder="Digite sua senha"/>
                    </div>
                    <div class="form-group">
                      <label for="password">Repita sua Senha</label>
                      <input type="password" class="form-control" name="password" id="password" placeholder="Digite sua senha novamente"/>
                    </div>
                  </div>
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
}