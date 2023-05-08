import { count } from "console";
import { Request,Response } from "express";
import { Account } from "../types";
import { CRUD } from "../crud";
const fs = require('fs')

export const getAccount = (req:Request,res:Response)=>{



  try {
  const {name,cpf}=req.query

  const account = CRUD.accounts
  const result:Account|undefined = account.find((count:Account)=> count.name === name && count.cpf === cpf)
  res.send(result).status(200).end()


  } catch (error) {
    res.send("Ocorreu algum erro").status(400).end()
  }


}