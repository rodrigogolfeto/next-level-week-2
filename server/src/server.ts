import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

// GET: Buscar ou listar informação
// POST: Criar alguma nova informação
// PUT: Atualizar informação já existente
// DELETE: Excluir um registro já existente

// Corpo (Request body)
// Route Params: Identficar qual recurso quero atualizar ou deletar
// Query Params: Página, filtro, ordenação