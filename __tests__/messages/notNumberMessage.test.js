const number = require("../../src/messages/notNumberMessage");

describe("number-message", () => {
  test("should return The username must be a number.", () => {
    expect(number("username")).toBe("The username must be a number.");
  });
});