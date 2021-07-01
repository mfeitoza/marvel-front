import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

import Layout from "../layout"

export default function ListProfessors(props) {

  const [professors, setProfessors] = useState([]);

  useEffect(() => {
    console.log('effect')
  })

  return (
    <>
      <Layout>
        <h1>Professores</h1>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
        
        <Link to="/novo-professor"><a className="btn btn-primary" role="button">Cadastrar</a></Link>
      </Layout>
    </>
  );
}
