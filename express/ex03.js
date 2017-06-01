const express = require('express')
const server = express()

server.use('/api', (req, res, next) => {
  console.log('Inicio...')
  next()
  console.log('Fim!')
})

server.use('/api', (req, res) => {
  console.log('Resposta...')
  res.send('<H1>API!</H1>')
})

server.listen(3000, () => console.log('Executando...'))
