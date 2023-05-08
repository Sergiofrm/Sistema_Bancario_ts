import { Request,Response } from "express"
import { Account } from "../types"
import { CRUD } from "../crud"
const fs = require('fs')

let status = 200
let message = "Ação concluída com sucesso"

export const createAccount =(req:Request,res:Response)=>{
  try {

    const {name,cpf,birthDate} = req.body
    const longDate = new Date(birthDate).toString()

    if(!name || !cpf || !birthDate){
      status = 422
      message = "Campos obrigatórios não foram preenchidos, favor preencher os todos os campos (name,cpf,birthDate)"
      throw new Error("");
      
    }
    const newAccount:Account ={name,cpf,birthDate:longDate,balance:0,
    transactions:[]
  }

   const result:boolean| Array<string|number>|undefined = CRUD.createAccount('src/account.json',newAccount)
   
  if(result && result[0]){
    message = result[0] as string
    status = result[1] as number

    throw new Error("");
    
    
  }
    

    res.send(message).status(status).end()

  } catch (error) {

    res.send(message).status(status).end()
  }
}