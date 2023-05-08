import { Request,Response } from "express";
import { Transaction } from "../types";
import { CRUD } from "../crud";

export const addTransaction = (req:Request,res:Response)=>{

  let status =200
  let message = "Ação conclúida com sucesso!"
  try {

    const {cpf} =req.params
    const {value} =req.body


    const type = value > 0 ? "entrada":"saida"
    const date= new Date().toString()

    if(!value){
      status = 422
      message = "Você precisa infomar o valor da transação"
      throw new Error("");
    }

    const newTransaction: Transaction = {
      type,
      value,
      description: "Transação em Dinheiro",
      date
    }

    const result = CRUD.addTransaction(cpf,newTransaction)


    if(!result){
      status = 400
      message = "Não existe um conta com esse CPF!"
      throw new Error("");
      

    }

    res.send(message).status(status).end()

  } 

  catch (error) {
    res.send(message).status(status).end()

  }
  }