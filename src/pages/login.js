import { Link } from "react-router-dom";

export default function login() {
  return (
    <>
      <main class="form-signin text-center">
        <form>
          <i class="bi bi-journal-text fs-1"></i>
          <h1 class="h3 mb-3 fw-normal">Sistema Acadêmico</h1>

          <div class="form-floating">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Senha</label>
          </div>

          <Link to="/inicio">
          <button class="w-100 btn btn-lg btn-primary" type="submit">
            LogIn
          </button>
          </Link>
          <p class="mt-5 mb-3 text-muted">2021</p>
        </form>
      </main>
    </>
  );
}
