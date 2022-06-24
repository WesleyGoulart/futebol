const fs = require('fs');

try {
  const data = fs.readFileSync('./cartoes', 'utf8');
  const linhas = data.split(/\r?\n/);

  // Iterar array e fazer loop para somar
  let i = 0
  let soma = 0
  while (i < linhas.length) {
    if (linhas[i] != '') {
      // Dentro desse if, temos só os números
      soma = soma + Number(linhas[i])
    }
    i = i + 1
  }
  console.log(soma)


} catch (err) {
  console.error(err);
}
