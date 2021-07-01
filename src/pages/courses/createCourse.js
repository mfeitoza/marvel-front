import Layout from "../layout"

export default function CreateCourse() {
  return (
    <>
      <Layout>
        <h1>Novo Curso</h1>
        <form>
          <div className="mt-5 pt-3 form-row">
            <div className="form-group col-md-6">
              <label for="inputEmail4">ID</label>
              <input
                type="text"
                className="form-control"
                id="inputEmail4"
                placeholder=""
              />
            </div>
            <div className="form-group col-md-6">
              <label for="inputEmail4">Nome do Curso</label>
              <input
                type="text"
                className="form-control"
                id="inputEmail4"
                placeholder=""
              />
            </div>
            <div className="form-group col-md-6">
              <label for="inputPassword4">Local</label>
              <input
                type="text"
                className="form-control"
                id="inputPassword4"
                placeholder=""
              />
            </div>
          </div>
          <div className="form-group">
            <label for="inputAddress">Data de Início</label>
            <input
              type="date"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div className="form-group">
            <label for="inputAddress">Data de Fim</label>
            <input
              type="date"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
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
