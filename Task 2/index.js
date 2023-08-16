const express = require('express');
const index = express();
const path = require('path');
const nunjucks = require('nunjucks');
const https = require('https');
const _ = require("lodash");
const httpsAgent = new https.Agent({
    rejectUnauthorized: false, // (NOTE: this will disable client verification)
    passphrase: "YYY"
  });
const axios = require("axios");
let mainData;
// const env = new nunjucks.Environment();
async function getData(){
    const response = await axios.get("https://jsonplaceholder.typicode.com/users",{httpsAgent});
    index.get('/',function(req,res){
        res.render(path.join(__dirname,'./views/Home.html'),{mainData:response.data});
    })
}
const env = nunjucks.configure("views",{
    autoescape:true,
    express:index,
    watch:true
});
env.addFilter("isObj",(obj)=>_.isPlainObject(obj));
env.addFilter("checkStr",(obj)=>obj.substr(-4)===".biz");
env.addFilter("checkCity",(cityname)=>{
    const bool = (cityname=="Aliyaview" || cityname=="Howemouth" || cityname=="Gwenborough") ? true : false;
    // console.log(bool);
    return bool;
});
env.addFilter("checkAdd",(name)=>name==="address");
getData();
// let data = Promise.resolve(getData());
// console.log(data);
// console.log(mainData)
index.set("view engine","html");

index.listen(3000);