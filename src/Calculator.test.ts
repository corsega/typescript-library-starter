import Calculator from './Calculator';

describe('Calculator Tests', () => {
  const calculator = new Calculator();

  it('Calculator.add()', () => {
    const result = calculator.add(1, 2);
    expect(result).toStrictEqual(3);
  });

  it('Calculator.sub()', () => {
    const result = calculator.sub(3, 2);
    expect(result).toStrictEqual(1);
  });
});
