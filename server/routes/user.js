var express = require('express');
var router = express.Router();
var dbHandle = require('../db/dbHandle');
var User = dbHandle.getModel('user');
var utils = require('utility');

//登录
router.post('/login',(req,res,next)=>{
  const {username,password} = req.body;
  let query = {username:username,password:md5Pwd(password)};
      User.findOne(query,{'password':0},(err,resData)=>{//若查到，将pswd设为0返回
          console.log(resData);
          if(err){
              res.json({
                  'status':0,
                  'message':'登录失败'
              })
          }else{
              if(resData){
                  res.cookie('userid', resData._id);
                  res.json({
                      'status':1,
                      'message':'登录成功',
                      'data':resData
                  })
              }else{
                  res.json({
                      'status':0,
                      'message':'用户名或密码错误'
                  })
              }
          }
      })
})

router.post('/register',(req,res,next)=>{
   /* if(!req.body.title || !req.body.text) {
        res.statusCode = 400;
        return res.send('Error 400: Post syntax incorrect.');
    }*/
    let user = {
        username : "xxx",
        password : md5Pwd("123456"),
    }
    let newUser = new User(user);
    newUser.save();
    res.json({
        'status':1,
        'message':'注册成功'
    });
});


router.get('/info',(req,res,next)=>{
    const {userid} = req.cookies;
    if (!userid) {
        return res.json({
          'status':0,
          'message':'未登录'
        })
    }
    User.findOne({_id:userid},{'password':0},(err,resData)=>{
        if(err){
            res.json({
                'status':0,
                'message':'后端出错了'
            })
        }else{
            res.json({
                'status':1,
                'message':'获取成功',
                'data':resData
            })
        }
  })
})

// //请求个人信息
// router.get('/',(req,res,next)=>{
//     User.find({},(err,resData)=>{
//         if(err){
//             res.json({
//                 'status':0,
//                 'message':'获取失败'
//             })
//         }else{
//             res.json({
//                 'status':1,
//                 'message':'获取成功',
//                 'data':resData
//             })
//         }
//   })
// })

// //修改个人信息
// router.post('/edit',(req,res,next)=>{
//     let name =  req.fields.name;
//     let password = req.fields.password;
//     let avatar = '/be/img/'+req.files.avatar.path.split(path.sep).pop();
//     let introduce = req.fields.introduce;
//     // console.log(111);
//     User.findOne({}).update({
//         "name":name,
//         "password":password,
//         "avatar":avatar,
//         "introduce":introduce
//     },(err)=>{
//       if(err){
//           res.json({
//               'status':0,
//               'message':'更新失败',
//               "data": err
//           });
//       }else{
//           res.json({
//               'status':1,
//               'message':'更新成功'
//           });
//       }
//     })
// })


function md5Pwd(pwd){
  const salt = 'sdgjosgdj234oisfl516km&*(^jhiuhi8&*(gbHk'
  return utils.md5(utils.md5(pwd+salt))
}

module.exports = router;