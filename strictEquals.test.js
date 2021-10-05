function strictEquals(a, b) {
  return Object.is(a, b);
}

test("If a is 1, and b is 1 , it should return true", () => {
  //Arrange
  const a = 1;
  const b = 1;
  const expected = true;

  //Act
  const result = strictEquals(a, b);

  //Assert
  expect(result).toBe(expected);
});
