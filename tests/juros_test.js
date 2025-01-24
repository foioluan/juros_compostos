const { calcularJurosCompostos } = require('../src/calculo');

console.log("Testando cálculo de juros compostos...");

// Teste 1: Cálculo com valores positivos
try {
  const resultado1 = calcularJurosCompostos(1000, 0.05, 2); // 1000 * (1 + 0.05)^2 = 1102.5
  console.log("Resultado Teste 1:", resultado1); // Esperado: 1102.5
} catch (e) {
  console.error("Erro no Teste 1:", e.message);
}

// Teste 2: Cálculo com valor negativo (deve lançar erro)
try {
  const resultado2 = calcularJurosCompostos(-1000, 0.05, 2); // Erro esperado
  console.log("Resultado Teste 2:", resultado2);
} catch (e) {
  console.error("Erro no Teste 2:", e.message); // Esperado: "Valores não podem ser negativos"
}

// Teste 3: Cálculo com taxa negativa (deve lançar erro)
try {
  const resultado3 = calcularJurosCompostos(1000, -0.05, 2); // Erro esperado
  console.log("Resultado Teste 3:", resultado3);
} catch (e) {
  console.error("Erro no Teste 3:", e.message); // Esperado: "Valores não podem ser negativos"
}
