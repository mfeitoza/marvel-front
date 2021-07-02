import Layout from "../layout";
import { useForm, } from "react-hook-form";
import { useHistory } from "react-router-dom";

import { saveProfessors } from "../../api";

export default function CreateProfessor() {
  let history = useHistory();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    saveProfessors(data).then(res => {
      history.push("/professores");
    }).catch(() => alert("ERRO! Tente novamente."))
  }

  return (
    <>
      <Layout>
        <h1>Novo Professor</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-5 pt-3 form-row">
            <div className="form-group col-md-6">
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                className="form-control"
                {...register("name", { required: true })}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="gender">Genero</label>
              <select class="form-select" aria-label="Default select example" {...register("gender", { required: true })}>
                <option selected></option>
                <option value="male">Masculino</option>
                <option value="female">Feminino</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                {...register("email", { required: true })}
              />
            </div>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="birthday">Data de Nascimento</label>
            <input
              type="date"
              className="form-control"
              {...register("birthday", { required: true })}
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="phone">Telefone</label>
              <input type="text" className="form-control" {...register("phone", { required: true })} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="password">Senha</label>
              <input type="password" className="form-control" {...register("password", { required: true })} />
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
