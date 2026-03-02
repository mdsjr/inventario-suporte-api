import express from 'express';

const app = express();
const PORT = 3333;

app.use(express.json());

app.get('/', (request, response) => {
  return response.json({ 
    message: "API de Inventário - Suporte Técnico",
    status: "Online",
    dev: "Moacir Jr"
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});