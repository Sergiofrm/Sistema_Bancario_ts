
import { Account, Transaction } from "./types"
const fs = require('fs')

const writeInDB = (path:string,data:Account)=>{
  return  fs.writeFileSync(path,JSON.stringify(data,null,2))
}

export const CRUD = {

  accounts :JSON.parse(fs.readFileSync("src/account.json", 'utf-8')),

  getAccout(cpf:string){
    return this.accounts.find((account:Account) => account.cpf === cpf)

  },
  createAccount(path:string,data:Account){

    const checkCPF = this.getAccout(data.cpf)

    if(checkCPF){
      return["Já existe um conta criada com esse cpf",422]
    }

    this.accounts.push(data)
    fs.writeFileSync(path,JSON.stringify(this.accounts,null,2))},

  updateAccount(cpf:string,newName:string){
    const updateItem = this.getAccout(cpf)

    if(updateItem){
      updateItem.name = newName
      writeInDB("src/account.json",this.accounts)
      
      return true
    }else{
      return false

    }

  },

  deleteAccount(cpf:string){

    const checaSaldo = this.getAccout(cpf)

    if(checaSaldo.balance > 0){
      return [`Você precisa sacar R$${checaSaldo.balance} antes de apagar a conta!`,400]
    }

    const deleteItem = this.accounts.findIndex((count:Account)=> count.cpf === cpf)

    if(deleteItem < 0){

      return false
    }
    this.accounts.splice(deleteItem,1)
    writeInDB("src/account.json",this.accounts)

    return true
  },
  addTransaction(cpf:string,newTransaction:Transaction){
    const addTransactionItem = this.getAccout(cpf)
    if(addTransactionItem){
      addTransactionItem.transactions.push(newTransaction)
      addTransactionItem.balance = addTransactionItem.balance + newTransaction.value
      writeInDB("src/account.json",this.accounts) 
      return true
    
  } else{
    return false
  }
}

}