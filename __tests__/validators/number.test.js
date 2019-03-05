const number = require("../../src/validators/number");

describe("number-validator", () => {
  test("should return The username must be a number.", () => {
    expect(number("not a number", "username")).toBe(
      "The username must be a number."
    );
  });

  test("should return The username must be a number.", () => {
    expect(number("21", "username")).toBe("The username must be a number.");
  });

  test("should return false", () => {
    expect(number(21, "username")).toBe(false);
  });
});
