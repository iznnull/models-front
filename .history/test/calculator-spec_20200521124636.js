import {Calculator} from './calculator';

describe('Calculator', () => {

   it('should add two numbers', () => {

       let calculator = new Calculator();
       spyOn(calculator, "getMultiply").and.returnValue(false)

       let sum = calculator.add(1,4);

       expect(sum).toBe(5);
   });

   it('should multiply two numbers', () => {

    let calculator = new Calculator();
    spyOn(calculator, "getMultiply").and.returnValue(true)

    let sum = calculator.add(2,4);

    expect(sum).toBe(8);
    });

    it('should subtract two numbers', () => {

        let calculator = new Calculator();
        spyOn(calculator, "getDivide").and.returnValue(true)

        let sum = calculator.subtract(8,2);

        expect(sum).toBe(4);
    });

    it('should subtract two numbers', () => {

        let calculator = new Calculator();

        let sum = calculator.subtract(4,1);

        expect(sum).toBe(3);
    });

});