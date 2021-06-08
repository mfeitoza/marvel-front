import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container">
          <Link className="navbar-brand" to="/">
            <i class="bi bi-journal-text"></i>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link className="nav-link" to="/professores">
                Professores
              </Link>
              <Link className="nav-link" to="/classes">
                Classes
              </Link>
              <Link className="nav-link" to="/cursos">
                Cursos
              </Link>
              <Link className="nav-link" to="/alunos">
                Alunos
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
