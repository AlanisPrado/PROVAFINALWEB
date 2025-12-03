import mongoose from "mongoose";

export async function connectDB() {
    try {
        await mongoose.connect("mongodb://localhost:27017/gestor_financeiro");

        console.log("🍃 MongoDB conectado com sucesso!");
    } catch (erro) {
        console.error("❌ Erro ao conectar ao MongoDB:", erro);
    }
}
