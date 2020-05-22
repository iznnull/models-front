import React from "react";
export class Calculator{

    constructor() {
        this.state = {
            multiply: false,
            divide: false
        }
    }
    

    add(op1,op2){
        return this.state.multiply ? op1 * op2 : op1 + op2;        
    }

    subtract(op1,op2){
        return op1 - op2;
    }

}