import Layout from "../layout";
import { useForm } from "react-hook-form";

export default function CreateClass() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Layout>
        <h1>Nova Classe</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-5 pt-3 form-row">
            <div className="form-group col-md-6">
              <label for="courseId">Curso</label>
              <input
                type="text"
                className="form-control"
                {...register("courseId")}
              />
            </div>
            <div className="form-group col-md-6">
              <label for="name">Vagas</label>
              <input
                type="number"
                className="form-control"
                {...register("availablePlaces")}
              />
            </div>
            <div className="form-group col-md-6">
              <label for="location">Local</label>
              <input
                type="text"
                className="form-control"
                {...register("location")}
              />
            </div>
          </div>
          <div className="form-group">
            <label for="startDate">Data de Início</label>
            <input
              type="date"
              className="form-control"
              {...register("startDate")}
            />
          </div>
          <div className="form-group">
            <label for="endDate">Data de Fim</label>
            <input
              type="date"
              className="form-control"
              {...register("endDate")}
            />
          </div>
          <div className="form-group col-md-6">
              <label for="professorId">Professor</label>
              <input
                type="text"
                className="form-control"
                {...register("professorId")}
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
