import Layout from "../layout"
import { useForm } from "react-hook-form";

export default function CreateCourse() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Layout>
        <h1>Nova Curso</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-5 pt-3 form-row">
            <div className="form-group col-md-6">
              <label for="inputEmail4">Nome do Classe</label>
              <input
                type="text"
                className="form-control"
                {...register("name")}
              />
            </div>
            <div className="form-group col-md-6">
              <label for="inputPassword4">Carga Horária</label>
              <input
                type="text"
                className="form-control"
                {...register("workload")}
              />
            </div>
          </div>
          <div className="form-group">
            <label for="inputAddress">Descrição</label>
            <input
              type="text"
              className="form-control"
              {...register("description")}
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
