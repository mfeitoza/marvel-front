import Layout from "../layout";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import { saveClasses, getCourses, getProfessors } from "../../api";

export default function CreateClass() {
  let history = useHistory();
  const [professors, setProfessors] = useState([]);
  const [courses, setCourses] = useState([]);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    saveClasses(data).then(res => {
      history.push("/classes");
    }).catch(() => alert("ERRO! Tente novamente."))
  }

  useEffect(() => {
    console.log("effect");
    getProfessors().then((data) => {
      setProfessors(data);
    });
    getCourses().then((data) => {
      setCourses(data);
    });
  }, []);

  return (
    <>
      <Layout>
        <h1>Nova Classe</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-5 pt-3 form-row">
            <div className="form-group col-md-6">
              <label htmlFor="course">Curso</label>
              <select
                class="form-select"
                aria-label="Default select example"
                {...register("courseId", { required: true })}
              >
                <option selected></option>
                {courses.map((course) => (
                  <option value={course.id} key={course.id}>
                    {course.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="name">Vagas</label>
              <input
                type="number"
                className="form-control"
                {...register("availablePlaces", { required: true })}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="location">Local</label>
              <input
                type="text"
                className="form-control"
                {...register("location", { required: true })}
              />
            </div>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="startDate">Data de In??cio</label>
            <input
              type="date"
              className="form-control"
              {...register("startDate", { required: true })}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="endDate">Data de Fim</label>
            <input
              type="date"
              className="form-control"
              {...register("endDate", { required: true })}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="course">Professor</label>
            <select
              class="form-select"
              aria-label="Default select example"
              {...register("professorId", { required: true })}
            >
              <option selected></option>
              {professors.map((professor) => (
                <option value={professor.id} key={professor.id}>
                  {professor.name}
                </option>
              ))}
            </select>
          </div>

          <br />
          <button type="submit" className="btn btn-primary">
            Cadastrar
          </button>
        </form>
      </Layout>
    </>
  );
}
