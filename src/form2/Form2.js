import React, { Component } from 'react'

export default class Form2 extends Component {
    render() {
        return (
            <form>
                <div class="mt-5 pt-3 form-row">
                <div class="form-group col-md-6">
                        <label for="inputEmail4">ID</label>
                        <input type="text" class="form-control" id="inputEmail4" placeholder=""/>
                </div>
                    <div class="form-group col-md-6">
                        <label for="inputEmail4">Nome</label>
                        <input type="text" class="form-control" id="inputEmail4" placeholder=""/>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputPassword4">Gênero</label>
                        <input type="text" class="form-control" id="inputPassword4" placeholder=""/>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputEmail4">Email</label>
                        <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
                    </div>
                </div>
                    <div class="form-group">
                        <label for="inputAddress">Data de Nascimento</label>
                        <input type="date" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
                    </div>
                <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputCity">telefone</label>
                    <input type="text" class="form-control" id="inputCity"/>
                </div>
                </div>
                <br/>
                <button type="submit" class="btn btn-primary">Cadastrar</button>                <button type="submit" class="btn btn-primary">Editar</button>
            </form>
        )
    }
}