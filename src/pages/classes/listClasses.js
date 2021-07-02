import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Layout from "../layout";
import { getClasses } from "../../api";

export default function ListClasses() {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    getClasses().then((data) => {
      setClasses(data);
    });
  }, []);

  return (
    <>
      <Layout>
        <h1>Classes</h1>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Curso</th>
              <th scope="col">Localização</th>
              <th scope="col">Lugares Disponíveis</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((cls) => (
              <tr key={cls.id}>
                <th scope="row">{ cls.id }</th>
                <td>{ cls.course.name }</td>
                <td>{ cls.location }</td>
                <td>{ cls.availablePlaces }</td>
              </tr>
            ))}
          </tbody>
        </table>

        <Link to="/novo-classe">
          <button className="btn btn-primary" role="button">
            Cadastrar
          </button>
        </Link>
      </Layout>
    </>
  );
}
