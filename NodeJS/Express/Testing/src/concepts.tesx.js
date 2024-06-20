describe("Prueba de los metodos basicos de testing", () => {
  beforeAll(() => {
    console.log("Se realiza antes de todas las pruebas");
  });

  afterAll(() => {
    console.log("Se realiza al finalizar todas las pruebas");
  });

  beforeEach(() => {
    console.log("Al inicio de cada prueba");
  });

  afterEach(() => {
    console.log("Al finalizar cada prueba");
  });

  test("Mi primera prueba", () => {
    console.log("Mi primera prueba");
    expect(true).toBe(true);
  });
  test("Mi segunda prueba", () => {
    console.log("Mi segunda prueba");
    expect(true).toBe(true);
  });
});
