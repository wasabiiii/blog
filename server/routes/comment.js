var express = require('express');
var router = express.Router();
var dbHandle = require('../db/dbHandle');
var Comment = dbHandle.getModel('comment');

//获得所有评论
router.get('/',(req,res,next)=>{
    Comment.find({}).sort({"time.createAt":-1}).exec((err,resData)=>{
        if(err){
            res.json({
                'status':0,
                'message':'获取失败'
            });
        }else{
            res.json({
                'status':1,
                'message':'获取成功',
                'data':resData,
            });
        }
    });
});

//获得某篇文章评论
router.get('/:id',(req,res,next)=>{
    Comment.find({blogId:req.params.id}).sort({"time":-1}).exec((err,resData)=>{
        if(err){
            res.json({
                'status':0,
                'message':'获取失败'
            })
        }else{
            res.json({
                'status':1,
                'message':'获取评论成功',
                'data':resData
            })
        }
    })
});

//添加评论
router.post('/add',(req,res,next)=>{
    let {blogId,author,content} = req.body;
    let comment = {
        blogId,
        author,
        content
    };
    let newBlog = new Comment(comment);
    newBlog.save();
    res.json({
        'status':1,
        'message':'评论成功'
    });
});

module.exports = router;
