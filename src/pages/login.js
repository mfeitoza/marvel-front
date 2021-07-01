import { Link } from "react-router-dom";

export default function login() {
  return (
    <>
      <main className="form-signin text-center">
        <form>
          <i className="bi bi-journal-text fs-1"></i>
          <h1 className="h3 mb-3 fw-normal">Sistema Acadêmico</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Senha</label>
          </div>

          <Link to="/inicio">
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            LogIn
          </button>
          </Link>
          <p className="mt-5 mb-3 text-muted">2021</p>
        </form>
      </main>
    </>
  );
}
