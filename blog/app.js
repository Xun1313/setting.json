var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var flash = require('connect-flash')
var session = require('express-session')
var auth=require('./routes/auth')
var indexRouter = require('./routes/index');
var dashboardRouter = require('./routes/dashboard');

var app = express();
require('dotenv').config()


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('ejs', require('express-ejs-extend'))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(flash())
app.use(
  session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
  }),
)

/* const check=(req,res,next)=>{
  console.log(req.session);
  if (req.session.uid === process.env.adminuid) {
    next()
  } else {
    res.redirect('/auth/signin')
  }
} */

app.use('/', indexRouter);
app.use('/dashboard', /* check, */dashboardRouter)
app.use('/auth',auth)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
