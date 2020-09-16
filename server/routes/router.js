const express = require('express')
let router = express.Router();
require('./linkDB');
let Article = require('../models/article');
let Tag = require('../models/tag');


router.get('/api/article', async (req, res) => {
  // console.log(req)
  let article = await Article.find()
  // Article.create([{
  //   title: 'text',
  //   author: '无限',
  //   category: 'Test',
  //   time: '2020-9-15',
  //   body: 'this is a test',
  //   star: 0,
  // }],(err)=>{
  //   if(!err){
  //     console.log('插入成功')
  //   }
  // })
  // console.log(article)
  res.send(article)
})

router.get('/api/article/:id', async (req, res) => {
  let articles = await Article.findById(req.params.id)
  res.send(articles)
})

router.get('/api/article/:type/category', async (req, res) => {
  let article = await Article.find({ classfiy: req.params })
  res.send(article)
})

router.get('/api/category', async (req, res) => {
  let tags = await Tag.find({})
  res.send(tags)
})

router.post('/api/article/add', async (req, res) => {
  let articleData = ''
  req.on('data', function (data) {
    articleData += data
  });
  //接收完成后的操作
  req.on("end", function () {
    articleData = JSON.parse(articleData.toString())
    console.log(articleData)
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

router.delete('/api/article/delete/:id', async (req,res)=>{
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



module.exports = router