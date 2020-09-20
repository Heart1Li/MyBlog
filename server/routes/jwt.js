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
  console.log(payload)
}
// const userinfo={
//   username:'admin',
//   password:'123456'
// }
// checkToken(createToken(userinfo))
// console.log(Math.floor(Date.now()))

// function checkJwt(token){

// }
module.exports = {
  createToken,
  checkToken
}