const http = require('http');
const server = http.createServer(function(req, res) {
  res.writeHeader(200, {"Content-Type": "text/html"});
  res.end('<H1>Acho que é melhor usar o Express, não?</H1>');
})

const porta = 3456;
server.listen(porta, function() {
  console.log(`Escutando a porta ${porta}!`)
})
