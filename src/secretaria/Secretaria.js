import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Secretaria extends Component {
    render() {
        return (
            <div className="mt-5 pt-3">
                <Link className="Secretaria" to="/form/Form">Cadastro de Aluno </Link><br/>
                <Link className="Secretaria" to="/form2/Form2">Cadastro de Professor </Link><br/>
                <Link className="Secretaria" to="/form3/Form3">Cadastro de Curso </Link><br/>
                <Link className="Secretaria" to="/form4/Form4">Cadastro de Classe </Link><br/>
            </div>
        )
    }
}




