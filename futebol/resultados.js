let vitoria
let derrota
let empate

const fs = require('fs');

try {
  const data = fs.readFileSync('./resultados', 'utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}


