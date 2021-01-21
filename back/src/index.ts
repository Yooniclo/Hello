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

var config = {
    port: 3000,
    https: {
      options: {
        // key: fs.readFileSync(Path.resolve(process.cwd(), 'src/ssl/privkey1.pem'), 'utf8').toString(),
        // cert: fs.readFileSync(Path.resolve(process.cwd(), 'src/ssl/fullchain1.pem'), 'utf8').toString()
      }
    }
}

if(process.env.NODE_ENV === 'development' || process.env.NODE_ENV === undefined) {
    app.listen(config.port, () => {
        console.log('server is listening to port 5000 on http')
    })
} else {
    let serverCallback = app.callback()
    let httpsServer = https.createServer(config.https.options, serverCallback)

    httpsServer.listen(config.port, () => {
        console.log('server is listening to port 5000 on https')
    })
}

app.use(async ctx => {
    await Sendfile(ctx, Path.join(__dirname, '../public/hello/index.html'))
})

router.post('/backend/extract', async (ctx: Context) => {
    console.log('KEY PRESS')
    try {
        let info = await ytdl.getInfo(ctx.request.body.url)
        ytdl(ctx.request.body.url, { filter: 'audioonly' }).pipe(fs.createWriteStream('mp3/' + info.videoDetails.title + '.mp3'))
        ctx.body = {message: 'Success'}
    } catch (e) {
        ctx.body = {message: 'Fail'}
    }
    
    
})