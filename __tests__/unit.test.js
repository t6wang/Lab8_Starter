// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// isPhoneNumber tests
test('123-123-1234 should be a phone number', () => {
    expect(functions["isPhoneNumber"]("123-123-1234")).toBe(true);
  });
test('(123)123-1234 should be a phone number', () => {
expect(functions["isPhoneNumber"]("(123)123-1234 ")).toBe(true);
});
test('123-123-123 should not be a phone number', () => {
expect(functions["isPhoneNumber"]("123-123-123")).toBe(false);
});
test('12345678900 should not be a phone number', () => {
expect(functions["isPhoneNumber"]("12345678900")).toBe(false);
});

// isEmail tests
test('t6wang@ucsd.edu should be an email', () => {
    expect(functions["isEmail"]("t6wang@ucsd.edu")).toBe(true);
  });
test('lol@gmail.com should be an email', () => {
    expect(functions["isEmail"]("lol@gmail.com")).toBe(true);
});  
test('abcd@gmail. com should not be an email', () => {
    expect(functions["isEmail"]("abcd@gmail. com")).toBe(false);
});
test('abc@gmail should not be an email', () => {
    expect(functions["isEmail"]("abc@gmail")).toBe(false);
});

// isPassword tests
test('Abcd_123 is a strong password', () => {
    expect(functions["isStrongPassword"]("Abcd_123")).toBe(true);
});
test('Abcd_123 is a strong password', () => {
    expect(functions["isStrongPassword"]("Abcd_123")).toBe(true);
});
test('Abc! is not a strong password', () => {
    expect(functions["isStrongPassword"]("Abc!")).toBe(false);
});
test('Abcd_123wjgfnejfbjejrnewefwbfj is not a strong password', () => {
    expect(functions["isStrongPassword"]("Abcd_123wjgfnejfbjejrnewefwbfj")).toBe(false);
});

// isDate tests
test('02/28/2021 is a date', () => {
    expect(functions["isDate"]("02/28/2021")).toBe(true);
});
test('1/1/2021 is a date', () => {
    expect(functions["isDate"]("1/1/2021")).toBe(true);
});
test('02/28/21 is not a date', () => {
    expect(functions["isDate"]("02/28/21")).toBe(false);
});
test('02.28.2021 is not a date', () => {
    expect(functions["isDate"]("02.28.2021")).toBe(false);
});

// isHexColor tests
test('#000000 is a hex color', () => {
    expect(functions["isHexColor"]("#000000")).toBe(true);
});
test('F19 is a hex color', () => {
    expect(functions["isHexColor"]('F19')).toBe(true);
});
test('#abcdf is a not hex color', () => {
    expect(functions["isHexColor"]('#abcdf')).toBe(false);
});
test('125e is a not hex color', () => {
    expect(functions["isHexColor"]('125e')).toBe(false);
});
