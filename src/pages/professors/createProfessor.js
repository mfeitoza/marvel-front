import Layout from "../layout";
import { useForm } from "react-hook-form";

export default function CreateProfessor() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Layout>
        <h1>Novo Professor</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-5 pt-3 form-row">
            <div className="form-group col-md-6">
              <label for="name">Nome</label>
              <input
                type="text"
                className="form-control"
                {...register("name")}
              />
            </div>
            <div className="form-group col-md-6">
              <label for="gender">Gênero</label>
              <input
                type="text"
                className="form-control"
                {...register("gender")}
              />
            </div>
            <div className="form-group col-md-6">
              <label for="email">Email</label>
              <input
                type="email"
                className="form-control"
                {...register("email")}
              />
            </div>
          </div>
          <div className="form-group">
            <label for="birthday">Data de Nascimento</label>
            <input
              type="date"
              className="form-control"
              {...register("birthday")}
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="phone">telefone</label>
              <input type="text" className="form-control" {...register("phone")} />
            </div>
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
