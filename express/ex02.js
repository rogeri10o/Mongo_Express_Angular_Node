const express = require('express')
const server = express()

server.get('/', (req, res, next) => {
  console.log('Inicio...')
  next()
  console.log('Fim!')
})

server.get('/', (req, res) => {
  console.log('Resposta...')
  res.send('<H1>Olá Express!</H1>')
})

server.listen(3000, () => console.log('Executando...'))
