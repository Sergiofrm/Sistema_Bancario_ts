import { Request,Response } from "express";

export const NomeDoEndpoint = (req:Request,res:Response)=>{

  let status =200
  let message = "Ação conclúida com sucesso!"
  try {

    const result = ""
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