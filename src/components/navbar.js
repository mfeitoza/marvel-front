import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <Link className="navbar-brand" to="/inicio">
            <i className="bi bi-journal-text"></i>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
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
