var mongoose = require('mongoose');
var models = require('./model.js');

var db = mongoose.connect('mongodb://localhost/mll_blog');

mongoose.connection.on("open",function(){
    console.log('success connent');
});

mongoose.connection.on("error",function(){
    console.log('fail connent');
});

var Schema = mongoose.Schema;

for(var modelName in models){
    if(!db.modelName){
        console.log(modelName);
        mongoose.model(modelName,new Schema(models[modelName]));
    }
}

/*article.pre('save',function(next){
 if(this.isNew){
 this.time.createAt = this.time.updateAt = Date.now();
 } else{
 this.time.updateAt = Date.now();
 }

 next();
 });

 article.statics = {
 // 取出数据库中所有数据
 fetch: function (cb) {
 return this
 .find({})
 .sort('time.updateAt');
 exec(cb);// 执行回调方法
 },
 findById: function (id, cb) {
 return this
 .findOne({_id:id});
 exec(cb);// 执行回调方法
 }
 };*/


module.exports = {
    getModel: function(modelName){
        return _getModel(modelName);
    }
}

var _getModel = function(modelName){
    return mongoose.model(modelName)
}