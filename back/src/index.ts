import Koa, { Context } from 'koa' 
import Path from 'path'

const Router = require('koa-router')
const Cors = require('koa2-cors')
const Serve = require('koa-static')
const Sendfile = require('koa-sendfile')
const Bodyparser = require('koa-bodyparser')
const https = require('https')
const fs = require('fs')
const ytdl = require('ytdl-core')

const app = new Koa() 
const router = new Router()

app.use(Cors())
app.use(Bodyparser())
app.use(router.routes())
app.use(Serve(Path.join(__dirname, '../public')))

let config

if(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === undefined) {
    config = {
        port: 5000,
    }
    
    app.listen(config.port, () => {
        console.log('server is listening to port 5000 on http')
    })
} else {
    config = {
        port: 5000,
        https: {
          options: {
            key: fs.readFileSync(Path.resolve(process.cwd(), '../../https-ssl/privkey1.pem'), 'utf8').toString(),
            cert: fs.readFileSync(Path.resolve(process.cwd(), '../../https-ssl/fullchain1.pem'), 'utf8').toString()
          }
        }
    }
    
    let serverCallback = app.callback()
    let httpsServer = https.createServer(config.https.options, serverCallback)

    httpsServer.listen(config.port, () => {
        console.log('server is listening to port 5000 on https')
    })
}
  
app.use(async ctx => {
    await Sendfile(ctx, Path.join(__dirname, '../public/hello/index.html'))
})

router.get('/init', async (ctx: Context) => {
    const list = await fs.readdirSync('public/hello/mp3')
    ctx.body = list
})

router.post('/backend/extract', async (ctx: Context) => {
    try {
        let info = await ytdl.getInfo(ctx.request.body.url)
        ytdl(ctx.request.body.url, { filter: 'audioonly' }).pipe(fs.createWriteStream('public/hello/mp3/' + info.videoDetails.title + '.mp3'))
        ctx.body = { message: 'Success' }
    } catch (e) {
        ctx.body = { message: 'Fail' }
    }
})

router.delete('/backend/delete', async (ctx: Context) => {
    const result = await fs.unlinkSync('public/hello/mp3/' + ctx.request.body.filename)
    result === undefined ? ctx.body = { message: 'Success' } : ctx.body = { message: 'Fail' }
})