import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Layout from "../layout"
import { getCourses } from "../../api";

export default function ListCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then((data) => {
      setCourses(data)
    })
  }, [])
  return (
    <>
      <Layout>
        <h1>Cursos</h1>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">Carga horária</th>
            </tr>
          </thead>
          <tbody>
          {courses.map((course) => (
              <tr key={course.id}>
                <th scope="row">{ course.id }</th>
                <td>{ course.name }</td>
                <td>{ course.workload }</td>
              </tr>
            ))}
          </tbody>
        </table>

        <Link to="/novo-curso"><a className="btn btn-primary" role="button">Cadastrar</a></Link>
      </Layout>
    </>
  );
}
