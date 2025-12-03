import express from 'express';
import Movimentacao from '../models/Movimentacao.js';

const router = express.Router();

router.get('/', async (req, res) => {
    const itens = await Movimentacao.find();
    res.json(itens);
});

router.post('/', async (req, res) => {
    try {
        const nova = new Movimentacao(req.body);
        const resultado = await nova.save();
        res.status(201).json(resultado);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

export default router;
