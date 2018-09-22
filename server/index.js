import Koa from 'koa'
import Router from 'koa-router'
import faker from 'faker'
import formatJson from 'koa-json'
import logger from 'koa-logger'
import { Nuxt, Builder } from 'nuxt'

startServer()

async function startServer() {
  const HOST = process.env.HOST || `127.0.0.1`
  const PORT = process.env.PORT || 3000
  const app = new Koa()

  app.use(logger())
  app.use(formatJson())
  app.use(async function handleError(ctx, next) {
    try {
      await next()
    } catch (err) {
      ctx.status = err.statusCode || err.status || 500
      ctx.body = err
    }
  })

  //----- integrate a server API

  const apiRouter = new Router({ prefix: `/api` })

  apiRouter.get(`/foo`, async ctx => {
    ctx.body = [
      { text: faker.name.firstName(), id: faker.random.uuid() },
      { text: faker.name.firstName(), id: faker.random.uuid() },
    ]
  })
  apiRouter.get(`/bar`, async ctx => {
    ctx.body = [
      { text: faker.lorem.sentence(), id: faker.random.uuid() },
      { text: faker.lorem.sentence(), id: faker.random.uuid() },
    ]
  })
  app.use(apiRouter.routes())
  app.use(apiRouter.allowedMethods())

  //----- NUXT

  const config = require('../nuxt.config.js')
  config.dev = !(app.env === `production`)

  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  app.use(ctx => {
    ctx.status = 200
    ctx.respond = false // Mark request as handled for Koa
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })

  app.listen(PORT, HOST, function endInit() {
    console.log(`APP Server is listening on ${HOST}:${PORT}`)
  })
}
