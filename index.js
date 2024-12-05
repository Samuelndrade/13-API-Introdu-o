import express from "express";      // Requisição do pacote do express
const app = express();              // Instancia o Express
const port = 3000;                  // Define a porta

app.get("/", (req, res) => {        // Cria a rota da raiz do projeto
  console.log("Rota GET/ solicitada");
  res.json({
    nome: "Samuel Andrade",      // Substitua pelo seu nome
  });
});

app.listen(port, () => {            // Um socket para "escutar" as requisições
  console.log(`Serviço escutando na porta:  ${port}`);
});
import { selectUsuarios, selectUsuario } from "./bd.js";
app.use(express.json());
import { insertUsuario } from "./bd.js";
import { deleteUsuario } from "./bd.js";
import { updateUsuario } from "./bd.js";
