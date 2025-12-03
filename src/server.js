import mongoose from 'mongoose';
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import movimentacaoRoutes from './routes/movimentacao.routes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Configurações básicas do Express
app.use(express.json());

// Configuração do CORS
app.use(cors({
  origin: 'http://localhost:4200'
}));

// Rotas
app.use('/movimentacoes', movimentacaoRoutes);

// Conexão com MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('🍃 MongoDB conectado com sucesso!'))
  .catch(err => console.log('Erro ao conectar no MongoDB:', err));

// Inicialização do servidor
app.listen(port, () => console.log(`🚀 Servidor rodando na porta ${port}`));
