const cheke = require("../src");

const body = {
  age: "number"
};
describe("Express request body", () => {
  test("should return age is not a number.", async () => {
    const res = await cheke;
    // expect(res.body.errors).toBeDefined();
    // expect(res.body.errors.age).toBe("The age must be a number.");
  });
});
