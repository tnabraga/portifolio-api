module.exports = app => {
  const controller = require('../controller/customerWallets')()
  const path = require('path')
  app.route('/api/v1/customer-wallets').get(controller.listCustomerWallets)
  // app.get('/', (req, res) => res.send('Hello World com Express!'))
  app.get('/', (req, res) => {
    // aqui precisamos enviar o index.html para o cliente
    res.sendFile(path.join(__dirname + '../../../html/index.html'))
  })  
}