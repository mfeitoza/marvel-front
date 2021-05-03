import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Categoria extends Component {
    render() {
        return (
            <nav className="mt-5 pt-3">

                <h5><Link className="Secretaria" to="/secretaria">Secretaria</Link></h5>
                <h5><Link className="Aluno" to="/aluno">Aluno</Link></h5>
                <h5><Link className="Professor" to="/professor">Professor</Link></h5>
                
            
                        
            </nav>
        )
    }
}
