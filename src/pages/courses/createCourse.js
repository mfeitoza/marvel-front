import Layout from "../layout";
import { useForm, } from "react-hook-form";
import { useHistory } from "react-router-dom";

import { saveCourses } from "../../api";

export default function CreateCourse() {
  let history = useHistory();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    saveCourses(data).then(res => {
      history.push("/cursos");
    }).catch(() => alert("ERRO! Tente novamente."))
  }

  return (
    <>
      <Layout>
        <h1>Nova Curso</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-5 pt-3 form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputEmail4">Nome do Classe</label>
              <input
                type="text"
                className="form-control"
                {...register("name", { required: true })}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputPassword4">Carga Horária</label>
              <input
                type="text"
                className="form-control"
                {...register("workload", { required: true })}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputAddress">Descrição</label>
            <input
              type="text"
              className="form-control"
              {...register("description", { required: true })}
            />
          </div>
          <div className="form-row"></div>
          <br />
          <button type="submit" className="btn btn-primary">
            Cadastrar
          </button>{" "}
          <button type="submit" className="btn btn-primary">
            Editar
          </button>
        </form>
      </Layout>
    </>
  );
}
