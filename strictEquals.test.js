function strictEquals(a, b) {
  if (a <= 0 && a >= -0 && b <= 0 && b >= -0) {
    return true;
  } else if (Number.isNaN(a) && Number.isNaN(b)) {
    return false;
  } else {
    return Object.is(a, b);
  }
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

test("If a is 1, and b is '1' , it should return false", () => {
  //Arrange
  const a = 1;
  const b = "1";
  const expected = false;

  //Act
  const result = strictEquals(a, b);

  //Assert
  expect(result).toBe(expected);
});

test("If a is true, and b is false, it should return false", () => {
  //Arrange
  const a = true;
  const b = false;
  const expected = false;

  //Act
  const result = strictEquals(a, b);

  //Assert
  expect(result).toBe(expected);
});

test("If a is false, and b is false, it should return true", () => {
  //Arrange
  const a = false;
  const b = false;
  const expected = true;

  //Act
  const result = strictEquals(a, b);

  //Assert
  expect(result).toBe(expected);
});

test("If a is 'water', and b is 'oil', it should return false", () => {
  //Arrange
  const a = "water";
  const b = "oil";
  const expected = false;

  //Act
  const result = strictEquals(a, b);

  //Assert
  expect(result).toBe(expected);
});

test("If a is 0, and b is -0, it should return true", () => {
  //Arrange
  const a = 0;
  const b = -0;
  const expected = true;

  //Act
  const result = strictEquals(a, b);

  //Assert
  expect(result).toBe(expected);
});

test("If a is -0, and b is 0, it should return true", () => {
  //Arrange
  const a = -0;
  const b = 0;
  const expected = true;

  //Act
  const result = strictEquals(a, b);

  //Assert
  expect(result).toBe(expected);
});

test("If a is NaN, and b is NaN, it should return false", () => {
  //Arrange
  const a = NaN;
  const b = NaN;
  const expected = false;

  //Act
  const result = strictEquals(a, b);

  //Assert
  expect(result).toBe(expected);
});
