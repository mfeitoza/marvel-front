import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import { login } from "../api";

export default function Login() {
  let history = useHistory();
  const { register, handleSubmit } = useForm();

  const onSubmit = ({ email, password }) => {
    login(email, password).then((data) => {
      history.push("/inicio");
    }).catch(data => {
      alert("Login invalido!")
    })
  }
  return (
    <>
      <main className="form-signin text-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <i className="bi bi-journal-text fs-1"></i>
          <h1 className="h3 mb-3 fw-normal">Sistema Acadêmico</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              defaultValue="fernando@gmail.com"
              {...register("email", { required: true })}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              defaultValue="123456789"
              {...register("password", { required: true })}
            />
            <label htmlFor="password">Senha</label>
          </div>

          <button className="w-100 btn btn-lg btn-primary" type="submit">
            LogIn
          </button>
          <p className="mt-5 mb-3 text-muted">2021</p>
        </form>
      </main>
    </>
  );
}
