const router = require('koa-router')()
const Model = require('../lib/mysql')

router.prefix('/post')

router.get('/', async function (ctx, next) {
  // ctx.body = 'this is a post response!'
  let posts =[]
  await Model.findAllPost().then((res)=>{
    posts = res
  }).catch((err)=>{
    console.log('查询文章失败',err)
  })

  await ctx.render('post', {
    values: posts
  })
})

router.post('/addPost',async function(ctx,next){
  await Model.insertPost(['dd','33','ffff','22','2016-02-15']).then((res)=>{
    // console.log('dddd',res)
  }).catch((err)=>{
    console.log('err',err)
  })
  ctx.body = {
    msg:'增加成功',
    code:0
  }
})

module.exports = router