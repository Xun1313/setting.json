const express=require('express')
const app=express()
const engine=require('ejs-locals')
const bodyParser=require('body-parser')
const user=require('./routes/user')
//第一個參數是路由,第二個參數是另開router的檔
//等於是user是第一個路由,profile是第二個路由要省略
app.use('/user',user)

//增加client端送到server端的body解析,這樣寫就可以做到支援json和表單的功能
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use(express.static('public'))
app.engine('ejs',engine)
//把樣板語言載入
app.set('views','./views')
//樣板語言的路徑在哪裡
app.set('views engine','ejs')
//使用哪種樣板語言

app.get('/search',(req,res)=>{
  res.render('search.ejs')
})

app.post('/searchList', (req, res) => {
  console.log(req.body)
  res.redirect('/search')
})

app.post('/searchAjax', (req, res) => {
  console.log(req.body)
  res.send('hello!!')
})


app.get('/', (req, res) => {
  //res.send(`<h1><img src='./photo-1518791841217-8f162f1e1131.jpg'></h1>`)
  res.render('index.ejs', {
    title: '我在這裡',
    place: '<h1>home</h1>',
    show:false,
    cat:['yellow','white','black']
  })
})

/* app.get('/user', (req, res) => {
  //res.send(`<h1><img src='./photo-1518791841217-8f162f1e1131.jpg'></h1>`)
  res.render('user.ejs',{
    title:'我不在這裡'
  })
}) */

/* app.get('/',(req,res)=>{
  //res.send('1234')
  res.send('<h1>555<h1>')
}) */


/* app.use((req, res, next) => {
  if (req.query.q==='cat') {
    next()
  }else{
    res.send('<h1>種類不對<h1>')
  }
}) */

/* app.use((req, res, next) => {
  if (req.query.limit > '5') {
    next()
  } else {
    res.send('<h1>數量不對<h1>')
  }
}) */



const check = (req, res, next) => {
  console.log('here')
  next()
}

//app.use(check)



app.get('/user/:users/:color', check, (req, res) => {
  /* const name=req.params.users
  if (req.params.users!=='Adam') {
    res.send('<h1>查無此人<h1>')
  } else {
    res.send('<h1>' + req.params.users + '<h1>')
  }
  console.log(req.params.color);
  console.log(req.params) */
  res.send(`<h1>${req.params.users}要抓${req.params.color}的${req.query.q}${req.query.limit}隻<h1>`)
})


/* app.use((req, res, next) => {
  res.status(404).send('我找不到 換你')
})

app.use((err,req, res, next) => {
  res.status(500).send('程式碼錯誤')
}) */

const port = process.env.PORT || 3000
app.listen(port)