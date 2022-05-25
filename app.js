const express = require("express");
const app = express();
const path = require("path");

// criando um servidor
app.get("/",(req,res)=>{
  res.send('TESTE');
});
app.get("/executar",(req,res)=>{
  res.send('Executando');
});
app.listen(3000,()=>console.log('Servidor executando'));

