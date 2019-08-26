var express = require('express');
var app = express();
var engine = require('ejs-locals');
var bodyParser = require('body-parser');
var admin = require('firebase-admin')
var serviceAccount = require('./myproject-955e4-firebase-adminsdk-k6qo5-acdd66f5c5.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://myproject-955e4.firebaseio.com',
})

const fireData=admin.database()

app.engine('ejs',engine);
app.set('views','./views');
app.set('view engine','ejs');
//增加靜態檔案的路徑
app.use(express.static('public'))

// 增加 body 解析
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

//路由
app.get('/',function(req,res){
  fireData.ref('todos').once('value',snapshot=>{
    const data = snapshot.val()
    console.log(data);
    res.render('index', {
      todolist: data
    })
  })
})

//新增事項
app.post('/addtodo',(req,res)=>{
  const content = req.body.content
  const contentRef = fireData.ref('todos')
  contentRef.push({ content: content }).then(()=>{
    fireData.ref('todos').once('value',snapshot=>{
      res.send({
        message: '資料讀取成功',
        success: true,
        result: snapshot.val()
      })
    })
  })
})

//刪除事項
app.post('/removetodo',(req,res)=>{
  const id=req.body.id
  fireData.ref('todos').child(id).remove().then(()=>{
    fireData.ref('todos').once('value',snapshot=>{
      res.send({
        message: '刪除成功',
        success: true,
        result: snapshot.val()
      })
    })
  })
})

// 監聽 port
var port = process.env.PORT || 3000;
app.listen(port);