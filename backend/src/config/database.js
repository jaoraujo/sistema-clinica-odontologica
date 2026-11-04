import mongoose from "mongoose";

const conectarBanco = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB conectado com sucesso!");
  } catch (erro) {
    console.error("Erro ao conectar ao MongoDB:", erro.message);
    process.exit(1);
  }
};

export default conectarBanco;