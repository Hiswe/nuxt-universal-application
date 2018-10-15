import chalk from 'chalk'
import Koa from 'koa'
import Router from 'koa-router'
import faker from 'faker'
import formatJson from 'koa-json'
import logger from 'koa-logger'
import { Nuxt, Builder } from 'nuxt'

import config from '../nuxt.config.js'

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

  config.dev = !(app.env === `production`)

  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  // Build in development
  if (config.dev) {
    console.log(chalk.yellow(`SPA build for dev`))
    const builder = new Builder(nuxt)
    await builder.build()
  }

  app.use(ctx => {
    ctx.status = 200 // koa defaults to 404 when it sees that status is unset

    return new Promise((resolve, reject) => {
      ctx.res.on('close', resolve)
      ctx.res.on('finish', resolve)
      nuxt.render(ctx.req, ctx.res, promise => {
        // nuxt.render passes a rejected promise into callback on error.
        promise.then(resolve).catch(reject)
      })
    })
  })

  app.listen(PORT, HOST, function endInit() {
    console.log(`APP is running at ${chalk.green(`${HOST}:${PORT}`)}`)
  })
}
