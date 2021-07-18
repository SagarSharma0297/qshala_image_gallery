const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT||9000;
const route = require('./route/routes');
var bodyParser = require('body-parser');
const URL = "mongodb+srv://SAGAR_VASHISTHA:72zqqEgfaRpddPh5@cluster0.eubhu.mongodb.net/video?retryWrites=true&w=majority";


app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use('/',route);



mongoose.connect(URL,{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false},(err)=>{
if(err){
    console.log(err)
}else {
    console.log("Connected To MongoDB")
}
})

app.use(express.static('client/build'))
const path = require('path')
app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
})

app.listen(port,(err)=>{
if(err){
    console.log(err)
} else {
    console.log(`Qshala app is running on ${port}`);
}
})