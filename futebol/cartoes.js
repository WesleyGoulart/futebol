const fs = require('fs');

try {
  const data = fs.readFileSync('./cartoes', 'utf8');
  const linhas = data.split(/\r?\n/);
  console.log(linhas);

  // Iterar array e fazer loop para somar
  let i = 0
  while (i < linhas.length) {
    console.log(linhas[i])
    i = i + 1
  }


} catch (err) {
  console.error(err);
}
