import mongoose from 'mongoose';

const MovimentacaoSchema = new mongoose.Schema({
    descricao: { type: String, required: true },
    valor: { type: Number, required: true },
    tipo: { type: String, enum: ['receita', 'despesa'], required: true },
    data: { type: Date, default: Date.now }
});

const Movimentacao = mongoose.model('Movimentacao', MovimentacaoSchema);

export default Movimentacao;
