const fs = require('fs');

try {
  const data = fs.readFileSync('C:/Users/wesle/OneDrive/Área de Trabalho/Projetinho/futebol/futebol/cartoes', 'utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}
