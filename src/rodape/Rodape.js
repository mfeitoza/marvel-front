import React, { Component } from 'react'

export default class Rodape extends Component {
    render() {
        return (
            <footer className="row fixed-bottom mt-2">
                <div className="col-12 bg-info text-white p-2 text-center">
                    Sistema Acadêmico
                    <br />
                    Rua dos Avestruzes, nº 51, Porto Canoa. Serra - ES 
                    <br />
                    Telefones: 27 99914-3696 | 27 3361-4100 
                </div>
            </footer>
        )
    }
}
