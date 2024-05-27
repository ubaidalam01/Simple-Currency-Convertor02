#!/usr/bin/env node
import inquirer from "inquirer"



const currency : any =  {
    USD: 1,   // (Base CURRENCY)
    EUR: 0.93,
    GBP: 0.76,
    QAR: 3.64,
    SAD: 3.75,
    INR: 74.57,
    PKR: 278.15,
    
}

let user_answer = await inquirer.prompt(
    [
        {
            name: 'from',
            message: "Enter From Currency", 
            type: "list",
            choices: ['USD', 'EUR', 'QAR', 'SAD', 'GBP', 'INR', 'PKR',],
         
        },
        {
            name: 'to',
            message: "Enter TO Currency", 
            type: "list",
            choices: ['USD', 'EUR', 'QAR', 'SAD', 'GBP', 'INR', 'PKR',],
         
        },
        {
            name: 'amount',
            message: 'ENTER YOUR AMOUNT',
            type: 'number'
        }
    ]
)


let fromAmount = currency[user_answer.from];  // (EXCHANGE RATE)
let toAmount = currency[user_answer.to]       // (EXCHANGE RATE)
let amount = user_answer.amount
let baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount);