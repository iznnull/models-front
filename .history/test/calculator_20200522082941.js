import React from "react";
export class Calculator{

    constructor() {
        this.state = {
            multiply: false,
            divide: false
        }        
    } 
    
    getMultiply = function() {
        return this.state.multiply;
    };

    getDivide() {
        return this.state.divide;
    }

    add(op1,op2){
        return getMultiply? op1 * op2 : op1 + op2;        
    }

    subtract(op1,op2){
        return getDivide()? op1 / op2 : op1 - op2;
    }

}