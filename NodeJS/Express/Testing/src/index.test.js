const request = require("supertest");
const app = require("./index");

describe("Testing app principal", () => {
  test("Response status is 200", async () => {
    // console.log(response);
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
  });

  test("Verificar que el arreglo devuelve mas de un elemento indexado", async () => {
    const response = await request(app).get("/");
    expect(true).toBe(response.body.movies.length > 0);
  });

  test("Verifican que el resultado de mensage es 'Mensaje de ok'", async () => {
    const response = await request(app).get("/");
    expect(response.body.message).toBe("Mensaje de ok");
  });

  test("Verificar igualdad de primer valor", async () => {
    const response = await request(app).get("/");

    // console.log(response.body.movies[0]);
    // console.log(typeof response.body.movies[0]);

    expect(response.body.movies[0]).toEqual({
      titulo: "Titanic",
      anio: 1997,
      director: "James Cameron",
      genero: ["Romance", "Drama"],
      puntuacion: 7.8,
    });
  });
});
