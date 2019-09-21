const express =require('express');
const app =express();
const mongoose=require ('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');
app.use(bodyParser.json());


const postsRoute=require('./routes/user');

app.use(cors({
    origin : ""
}));
app.use('/posts',postsRoute);



mongoose.connect('mongodb://localhost:27017/login',{ useNewUrlParser: true,useFindAndModify:true,useCreateIndex:true,useUnifiedTopology:true },()=>{
    console.log("connected to db....")
})


app.listen(3000);