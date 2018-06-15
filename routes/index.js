const router = require('koa-router')()
const userModel = require('../lib/mysql.js')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string111133222'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: ctx
  }
})

module.exports = router
