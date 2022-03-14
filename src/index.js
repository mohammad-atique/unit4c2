const express = require("express");
const { default: mongoose } = require("mongoose");

const app= express();

const connect  = require("./configs/db.js");

const userSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    age: {type: Number, required:true},
    email: {type:String, required: true},
    address: {type: String, required: true},
    gender: {type:String, required: true},
},{
    versionKey: false,
    timestamps: true,
})


const User = mongoose.model("user",userSchema);




const branchDetailSchema = new mongoose.Schema({
    name: {type: String, required: true},
    address: {type: String, required: true},
    IFSC: {type: String, required: true},
    MICR : {type: Number, required:true},
},{
    versionKey: false,
    timestamps: true,
})

const BranchDetail = mongoose.model("branchDetail",branchDetailSchema)

const masterAccountSchema = new mongoose.Schema({
    
    balance: {type: Number, required:true},
    

},{
    versionKey: false,
    timestamps: true,
})

const MasterAccount = mongoose.model("masterAccount", masterAccountSchema);



const savingsAccountSchema = mongoose.Schema({
    account_number: {type: Number, required:true, unique: true},
    balance: {type: Number, required:true},
    interestRate: {type: String, required: true},
},{
    versionKey: false,
    timestamps: true,
})


const SavingAccount = mongoose.model("savingsAccount",savingsAccountSchema);


const fixedAccountSchema = mongoose.Schema({
    account_number: {type: Number, required:true, unique: true},
    balance: {type: Number, required:true},
    interestRate: {type: String, required: true},
    startDate: {type:Date, required: true},
    maturityDate: {type: Date, required:true},
},{
    versionKey: false,
    timestamps: true,
})



app.listen(5000, async() =>{
    try{
        await connect();

    }catch(err){
        console.log(err)
    }
    console.log("listnaing on 5000")
})
