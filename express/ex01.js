const express = require('express')
const server = express()

server.get('/', (req, res) => {
  res.send('<H1>Index!</H1>')
})

server.all('/teste', (req, res) => {
  res.send('<H1>Teste!</H1>')
})

server.get(/api/, (req, res) => {
  res.send('<H1>API!</H1>')
})

server.listen(3000, () => console.log('Executando...'))
