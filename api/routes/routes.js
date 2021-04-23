module.exports = app => {
  const controller = require('../controller/controller')()
  const path = require('path')

  app.route('/api/v1/welcome').get(controller.data)

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '../../../html/index.html'))
  })  
}