// Função para calcular os juros compostos
function calcularJurosCompostos(principal, taxa, tempo) {
    if (principal < 0 || taxa < 0 || tempo < 0) {
      throw new Error("Valores não podem ser negativos");
    }
    const valorFinal = principal * Math.pow((1 + taxa), tempo);
    return valorFinal;
  }
  
  module.exports = { calcularJurosCompostos };
  