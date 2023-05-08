import { Request,Response } from "express";
import { CRUD } from "../crud";

export const updateAccount = (req:Request,res:Response)=>{

  let status =200
  let message = "Ação conclúida com sucesso!"

  try {
    const {cpf} = req.params
    const {newName} = req.body


    const result = CRUD.updateAccount(cpf,newName)

    if(!result){
      status = 400
      message = "Ocorreu um erro!"
      throw new Error("");
      

    }

    res.send(message).status(status).end()

  } 

  catch (error) {
    res.send(message).status(status).end()

  }
  }