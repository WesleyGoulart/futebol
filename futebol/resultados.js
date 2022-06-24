let golsMarcados = 0
let golsSofridos = 0
let saldoGols = 0
let vitorias = 0
let derrotas = 0
let empates = 0
let somaCartoes = 0

const fs = require('fs');

try {
  const data = fs.readFileSync('./resultados', 'utf8');
  const linhas = data.split(/\r?\n/);
  
  let i = 0
  
  while (i <linhas.length) {
    const resultado = linhas[i].split('x');
    
    // Verifica se é uma vitória, empate, derrota
    if (resultado[0] > resultado[1]) {
      vitorias = vitorias + 1
    }
    if (resultado[0] == resultado[1]) {
      empates = empates + 1
    }
    if (resultado[0] < resultado[1]) {
      derrotas = derrotas + 1
    }
    
    // Gols marcados e sofridos
    
    
    golsMarcados = golsMarcados + Number(resultado[0])
    golsSofridos = golsSofridos + Number(resultado[1])
    saldoGols = golsMarcados - golsSofridos
    
    i = i + 1
  }

  const dataCartoes = fs.readFileSync('./cartoes', 'utf8');
  const linhasCartoes = dataCartoes.split(/\r?\n/);

  // Iterar array e fazer loop para somar
  let j = 0
  while (j < linhasCartoes.length) {
    if (linhasCartoes[j] != '') {
      // Dentro desse if, temos só os números
      somaCartoes = somaCartoes + Number(linhasCartoes[j])
    }
    j = j + 1
  }
} catch (err) {
  console.error(err);
}


// A partir daqui é a resposta oficial

const printVitorias = vitorias.toString()
const printEmpates = empates.toString()
const printDerrotas = derrotas.toString()
const printGolsMarcados = golsMarcados.toString()
const printGolsSofridos = golsSofridos.toString()
const printSaldoGols = saldoGols.toString()
const printCartoes = somaCartoes.toString()

console.log('   V   E   D  GP  GC  SG   C')
console.log(printVitorias.padStart(4, ' ')
    + printEmpates.padStart(4, ' ')
    + printDerrotas.padStart(4, ' ')
    + printGolsMarcados.padStart(4, ' ')
    + printGolsSofridos.padStart(4, ' ')
    + printSaldoGols.padStart(4, ' ')
    + printCartoes.padStart(4, ' ')
)
