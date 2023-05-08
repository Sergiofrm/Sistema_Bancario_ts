import { app } from "./app";
import { addTransaction } from "./endpoints/addTransaction";
import { createAccount } from "./endpoints/createAccount";
import { deleteAccount } from "./endpoints/deleteAccount";
import { getAccount } from "./endpoints/getAccount";
import { updateAccount } from "./endpoints/updateAccount";

app.get("/account",getAccount)
app.post("/account",createAccount)
app.put("/account/:cpf",updateAccount)
app.delete("/account/:cpf",deleteAccount)


app.get("/account/:cpf/balance",()=>{})
app.put("/account/:cpf/transaction",addTransaction)