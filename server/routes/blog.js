var express = require('express');
var router = express.Router();
//var marked = require('marked');
var dbHandle = require('../db/dbHandle');
var Blog = dbHandle.getModel('blog');
var markdown = require('markdown').markdown;
// var moment = require('moment');

/* GET users listing. */

//请求所有文章
router.get('/',(req,res,next)=>{
    // Blog.find({}).sort({"time.createAt":-1},(err,resData)=>{
    Blog.find({}).sort({"time.createAt":-1}).exec((err,resData)=>{
        //将文章由markdown转化为html
        resData.forEach((doc)=>{
            doc.content = markdown.toHTML(doc.content);
            // console.log(doc);
        });

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
                'count':resData.length
            });
        }
    });
});

//请求某个分类的文章列表
router.get('/cate/:name',(req,res,next)=>{
    Blog.find({tag:req.params.name},(err,resData)=>{
        //将文章由markdown转化为html
        resData.forEach((doc)=>{
            doc.content = markdown.toHTML(doc.content);
            // console.log(doc);
        });
        if(err){
            res.json({
                'status':0,
                'message':'获取失败'
            });
        }else{
            res.json({
                'status':1,
                'message':'获取成功',
                'data':resData
            });
        }
    });
});

//获取某篇文章
router.get('/:id',(req,res,next)=>{
    Blog.findOne({_id:req.params.id},(err,resData)=>{
        resData.content = markdown.toHTML(resData.content);
        if(err){
            res.json({
                'status':0,
                'message':'获取失败'
            })
        }else{
            res.json({
                'status':1,
                'message':'获取文章成功',
                'data':resData
            })
        }
    })
});

//获取编辑文章
router.get('/markdown/:id',(req,res,next)=>{
    Blog.findOne({_id:req.params.id},(err,resData)=>{
        //resData.text = markdown.toHTML(resData.text);
        if(err){
            res.json({
                'status':0,
                'message':'获取失败'
            })
        }else{
            res.json({
                'status':1,
                'message':'获取文章成功',
                'data':resData
            })
        }
    })
});

//编辑文章提交
router.post('/edit/:id',(req,res,next)=>{
    Blog.findOne({_id:req.params.id}).update({
        "title": req.body.title,
        "content": req.body.content,
        "tag": req.body.tag.split(","),
        // "time": {"updataAt":Date.now()}
        },(err)=>{
            if(err){
                res.json({
                    'status':0,
                    'message':'更新失败',
                    "data": err
                });
            }else{
                res.json({
                    'status':1,
                    'message':'更新成功'
                });
            }
        })
    })


//添加文章
router.post('/new',(req,res,next)=>{
   /* if(!req.body.title || !req.body.text) {
        res.statusCode = 400;
        return res.send('Error 400: Post syntax incorrect.');
    }*/
    let blog = {
        title : req.body.title,
        content : req.body.content,
        tag : req.body.tag.split(","),
    }
    let newBlog = new Blog(blog);
    newBlog.save();
    res.json({
        'status':1,
        'message':'保存成功'
    });
});

//删除文章
router.get('/del/:id',(req,res,next)=>{
    Blog.remove({_id:req.params.id},(err,resData)=>{
    //resData.text = markdown.toHTML(resData.text);
    if(err){
        res.json({
            'status':0,
            'message':'删除失败'
        })
    }else{
        res.json({
            'status':1,
            'message':'删除成功',
            'data':resData
        })
    }
})

});
module.exports = router;
