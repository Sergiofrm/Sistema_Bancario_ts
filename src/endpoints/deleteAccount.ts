import { Request,Response } from "express";
import { CRUD } from "../crud";

export const deleteAccount = (req:Request,res:Response)=>{

  let status =200
  let message = "Ação conclúida com sucesso!"
  try {
    const {cpf} = req.params

    const result:any= CRUD.deleteAccount(cpf)

    if(result[0]){
      message = result[0]
      status = result[1]
      throw new Error();
      
    }
    
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