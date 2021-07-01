import Layout from "../layout"

export default function CreateClass() {
  return (
    <>
      <Layout>
        <h1>Nova Classe</h1>
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
              <label for="inputEmail4">Nome do Classe</label>
              <input
                type="text"
                className="form-control"
                id="inputEmail4"
                placeholder=""
              />
            </div>
            <div className="form-group col-md-6">
              <label for="inputPassword4">Carga Horária</label>
              <input
                type="text"
                className="form-control"
                id="inputPassword4"
                placeholder=""
              />
            </div>
          </div>
          <div className="form-group">
            <label for="inputAddress">Descrição</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder=""
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
