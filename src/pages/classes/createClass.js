import Layout from "../layout"

export default function createClass() {
  return (
    <>
      <Layout>
        <h1>Nova Classe</h1>
        <form>
          <div class="mt-5 pt-3 form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">ID</label>
              <input
                type="text"
                class="form-control"
                id="inputEmail4"
                placeholder=""
              />
            </div>
            <div class="form-group col-md-6">
              <label for="inputEmail4">Nome do Classe</label>
              <input
                type="text"
                class="form-control"
                id="inputEmail4"
                placeholder=""
              />
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Carga Horária</label>
              <input
                type="text"
                class="form-control"
                id="inputPassword4"
                placeholder=""
              />
            </div>
          </div>
          <div class="form-group">
            <label for="inputAddress">Descrição</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder=""
            />
          </div>
          <div class="form-row"></div>
          <br />
          <button type="submit" class="btn btn-primary">
            Cadastrar
          </button>{" "}
          <button type="submit" class="btn btn-primary">
            Editar
          </button>
        </form>
      </Layout>
    </>
  );
}
