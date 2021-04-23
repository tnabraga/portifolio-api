
module.exports = () => {
  const controller = {}
  controller.data = (req, res) => res.status(200).json({
    title: 'Portifólio API',
    text: 'Seja bem-vindo!'
  })

  return controller
}