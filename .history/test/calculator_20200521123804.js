import React from "react";
export class Calculator{

    constructor() {
        var multiply = false;
        var divide = false;
    }
    

    add(op1,op2){
        return multiply ? op1 * op2 : op1 + op2;        
    }

    subtract(op1,op2){
        return op1 - op2;
    }

}