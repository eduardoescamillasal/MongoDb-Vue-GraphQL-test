const fastify = require('fastify')({
  logger: true
})

fastify.get('/', async(request, reply)=> {
  return { hello: 'world' }
})

const start = async () => {
  try {
    await fastify.listen(3000)
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()

const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/mycargarage')
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err))
