var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var marked = require('marked');

var index = require('./server/routes/index');
var blogRouter = require('./server/routes/blog');
var userRouter = require('./server/routes/user');
var commentRouter = require('./server/routes/comment');
var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/api/blog', blogRouter);
app.use('/api/user', userRouter);
app.use('/api/comment', commentRouter);

app.use(function(req, res, next) {
  if(req.url.startsWith('/api/')||req.url.startsWith('/dist/static')){
    return next()
  }
  return res.sendFile(path.resolve('dist/index.html'))

});

app.use('/dist/static',express.static(path.resolve('dist/static')));
app.use('/',express.static(path.resolve('dist')));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

//启动服务器
var server = app.listen(8000, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('Listening at http://%s:%s', host, port);
}); 

module.exports = app;
