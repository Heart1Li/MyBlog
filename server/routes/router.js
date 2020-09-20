// const { create } = require('core-js/fn/object');
const express = require('express')
let router = express.Router();
require('./linkDB');
require('./jwt');
let Article = require('../models/article');
let Tag = require('../models/tag');
let User = require('../models/user')


const fs = require('fs')
const path = require('path')
const jwt  = require('jsonwebtoken');


function createToken(payload){
  let secret = fs.readFileSync(path.join(__dirname, '../pem/rsa_private_key.pem'))
  let token = jwt.sign({payload,exp:Math.floor(Date.now() / 1000)+(60*60*24)},secret,{algorithm: 'RS256'});
  return token
}
function checkToken(token){
  let publicKey = fs.readFileSync(path.join(__dirname, '../pem/rsa_public_key.pem'))
  let payload = jwt.verify(token,publicKey,{algorithm: 'RS256'})
}


router.post('/api/login', async (req, res) => {  //获取所有文章
  // console.log(req.body)
  let userData=''
  req.on('data', function (data) {
    userData +=data
    // console.log(userData)
    
  })
  req.on("end", function () {
    userDatas = JSON.parse(userData.toString())
    // User.create({username:'admin',password:'li123456',email:'123456@qq.com'},function(err){
    //   if(!err){
    //     console.log('创建成功')
    //   }
    // })
    User.findOne({username:userDatas.username},function(err,result){
      if(!err){
        console.log(result)
        if(userDatas.password===result.password){
          //创建token
          let token = createToken({useranme:result.username,password:result.password},function(err){
            if(err){
              console.log(err)
            }
          })
          console.log(token)
          res.send({status:200,msd:'登录成功',token})
        }
        else{
          res.send({status:401,msd:'密码错误'})
        }
      }
      else{
        res.send({status:401,msg:'用户名不存在'})
      }
    })
    console.log(userDatas)
  })
  // console.log(userdata)
})


router.get('/api/article', async (req, res) => {  //获取所有文章
  // console.log(req)
  let article = await Article.find()
  console.log(article)
  res.send(article)
})

router.get('/api/article/:id', async (req, res) => { //根据ID获取文章
  let articles = await Article.findById(req.params.id)
  res.send(articles)
})

router.get('/api/article/:type/category', async (req, res) => { //根据类别获取文章
  console.log(req.params)
  let article = await Article.find({ category: req.params.type })
  console.log(article)
  res.send(article)
})



router.post('/api/article/add', async (req, res) => {  //添加文章
  
  let articleData = ''
  req.on('data', function (data) {
    articleData += data
  });
  //接收完成后的操作
  req.on("end", function () {
    console.log(req.headers.authorization)
    articleData = JSON.parse(articleData.toString())
    // console.log(articleData)
    // Article.create({})
    let newAarticle = new Article(articleData )
    newAarticle.save(function (err) {
      if (err) {
        console.log(err)
        res.send({status:401,msg:'新增文章失败'})
        return
      }
      res.send({status:200,msg:'新增文章成功'})
      console.log("新增成功")
    })
  })
})

router.delete('/api/article/delete/:id', async (req,res)=>{  //删除文章
  console.log(req.params)
  // console.log(id)
 Article.deleteOne({_id:req.params.id}).then(result=>{
  console.log(result)
  if(result.ok==1){
    res.send({status:200,msg:'删除成功'})
  }
  else{
    res.send({status:400,msg:'删除失败'})
  }
 }) 
})

router.post('/api/article/update/:id', async (req,res)=>{  //更新文章
  console.log(req.params)
  let articleData = ''
  req.on('data', function (data) {
    articleData += data
    Article.findByIdAndUpdate(req.params.id,JSON.parse(articleData),function(err){
      if(err){
        console.log('更新失败')
        res.send({status:400,msg:'更新失败'})
      }
      else{
        console.log('更新成功')
        res.send({status:200,msg:'更新成功'})
      }
    })
    
  });
  
  //接收完成后的操作
  

  // console.log(id)
//  Article.findByIdAndUpdate(req.params.id,)
})



router.get('/api/category', async (req, res) => {  //查找所有分类
  let tags = await Tag.find({})
  res.send(tags)
})


router.get('/api/category/:type', async (req, res) => {   //添加分类
  console.log(req.params)
  if(req.params.type === undefined) return
  let tags = new Tag(req.params)
  tags.save(err=>{
    if(err){
      console.log('添加标签失败')
      res.send({status:400,msg:'添加标签失败'})
    }
    else{
      console.log('添加标签成功')
      res.send({status:200,msg:'添加标签成功'})
    }
  })
})
//更新标签,并更新对应的文章标签
router.post('/api/category/:id', async (req, res) => {   //添加分类
  // console.log(req.params)
  let tagData = ''
  let updateTag = await Tag.findById(req.params.id)
  // console.log(updateTag.type)
  req.on('data', function (data) {
    tagData += data
    // console.log(JSON.parse(tagData))
   
    // console.log(req.params)
    Tag.findByIdAndUpdate(req.params.id,JSON.parse(tagData),function(err){
      if(err){
        console.log('更新失败')
        res.send({status:400,msg:'更新失败'})
      }
      else{
        
        Article.updateMany({category:updateTag.type,category:JSON.parse(tagData).type},function(err){
          if(!err){
             console.log('更新成功')
             res.send({status:200,msg:'更新成功'})  
          }  
        }) 
      }
    }).then(()=>{
        
    })
  })
})

router.delete('/api/category/delete/:id', async (req,res)=>{  //根据id删除分类
  console.log(req.params)
  if(req.params.id ===undefined) return
  // console.log(id)
  //删除该标签的所有文章
  let deleteTag = await Tag.findById(req.params.id)
  console.log(deleteTag.type)
 
  


 Tag.deleteOne({_id:req.params.id}).then(result=>{
  console.log(result)
  if(result.ok==1){
    
    Article.deleteMany({category:deleteTag.type},function(err){
      if(!err){
        res.send({status:200,msg:'删除成功'})
      }
    })
  }
  else{
    res.send({status:400,msg:'删除失败'})
  }
 }) 
})

module.exports = router