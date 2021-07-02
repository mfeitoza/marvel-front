import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Layout from "../layout";
import { getStudentes } from "../../api";

export default function ListStudents(props) {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudentes().then((data) => {
      setStudents(data);
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
            {students.map((student) => (
              <tr key={student.id}>
                <th scope="row">{ student.id }</th>
                <td>{ student.name }</td>
                <td>{ student.email }</td>
                <td>{ student.phone }</td>
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
