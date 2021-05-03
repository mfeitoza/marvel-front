import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-light fixed-top pl-5"> 
                <div className="col-12 bg-info text-white p-2">
                    <Link className="navbar-brand" to="/"><i class="bi bi-house"></i></Link>
                    <Link className="navbar-brand" to="/categoria"> Portal de Serviços</Link>
                    
                </div>
                
            </nav>
        )
    }
}
