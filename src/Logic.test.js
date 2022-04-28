import calculate from './logic/calculate';
import operate from './logic/operate';

const mockobj = {
  total: 10,
  next: 5,
  operation: '+',
};

describe('Test calculate', () => {
  describe.each([
    { obj: mockobj, button: '=', expected: '15' },
    { obj: { ...mockobj, operation: '-' }, button: '=', expected: '5' },
    { obj: { ...mockobj, operation: '%' }, button: '=', expected: '0' },
  ])('testing button $button', ({ obj, button, expected }) => {
    test(`Operator : ${obj.operation}`, () => {
      expect(calculate(obj, button).total).toBe(expected);
    });
  });

  describe.each([
    { obj: mockobj, button: 'AC', expected: null },
  ])('testing button $button)', ({ obj, button, expected }) => {
    test(`Operator : ${obj.operation}`, () => {
      expect(calculate(obj, button).total).toBe(expected);
    });
  });

  describe.each([
    { obj: mockobj, button: '+/-', expected: `${-mockobj.next}` },
  ])('testing button $button)', ({ obj, button, expected }) => {
    test(`Operator : ${obj.operation}`, () => {
      expect(calculate(obj, button).next).toBe(expected);
    });
  });
});

describe('Test operate', () => {
  describe.each([
    [10, 5, '+', '15'],
    [10, 5, '÷', '2'],
  ])('operation with opsos', (a, b, c, expected) => {
    it(`Test operator ${c}`, () => {
      expect(operate(a, b, c)).toBe(expected);
    });
  });
});
