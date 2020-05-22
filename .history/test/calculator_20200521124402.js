import React from "react";
export default class Calculator{

    constructor() {
        this.state = {
            multiply: false,
            divide: false
        }
    } 
    
    getMultiply() {
        return this.state.multiply;
    }

    add(op1,op2){
        return  getMultiply()? op1 * op2 : op1 + op2;        
    }

    subtract(op1,op2){
        return op1 - op2;
    }

}