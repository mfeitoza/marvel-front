import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Layout from "../layout";
import { getProfessors } from "../../api";

export default function ListProfessors(props) {
  const [professors, setProfessors] = useState([]);

  useEffect(() => {
    getProfessors().then((data) => {
      setProfessors(data);
    });
  }, []);

  return (
    <>
      <Layout>
        <h1>Professores</h1>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">Email</th>
              <th scope="col">Telefone</th>
            </tr>
          </thead>
          <tbody>
            {professors.map((professor) => (
              <tr>
                <th scope="row">{ professor.id }</th>
                <td>{ professor.name }</td>
                <td>{ professor.email }</td>
                <td>{ professor.phone }</td>
              </tr>
            ))}
          </tbody>
        </table>

        <Link to="/novo-professor">
          <a className="btn btn-primary" role="button">
            Cadastrar
          </a>
        </Link>
      </Layout>
    </>
  );
}
