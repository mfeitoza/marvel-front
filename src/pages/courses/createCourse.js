import Layout from "../layout"

export default function CreateCourse() {
  return (
    <>
      <Layout>
        <h1>Novo Curso</h1>
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
              <label for="inputEmail4">Nome do Curso</label>
              <input
                type="text"
                class="form-control"
                id="inputEmail4"
                placeholder=""
              />
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Local</label>
              <input
                type="text"
                class="form-control"
                id="inputPassword4"
                placeholder=""
              />
            </div>
          </div>
          <div class="form-group">
            <label for="inputAddress">Data de Início</label>
            <input
              type="date"
              class="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div class="form-group">
            <label for="inputAddress">Data de Fim</label>
            <input
              type="date"
              class="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
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
