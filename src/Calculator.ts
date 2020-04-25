export interface ICalculator {
  add(a: number, b: number): number;
  sub(a: number, b: number): number;
}

export class Calculator implements ICalculator {
  public add = (a: number, b: number) => a + b;
  public sub = (a: number, b: number) => a - b;
}

export default Calculator;
