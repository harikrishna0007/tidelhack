const express = require ('express');
const router=express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const cors = require ('cors');
const Login = require('../model/Users')
router.use(cors());

process.env.SECRET_KEY = 'secret'

router.post('/register',(req,res)=>{
    const userData={
        email:req.body.email,
        password:req.body.pasword
    }

    Login.findOne({
        email:req.body.email
    })
    .then(user =>{
        if(!user){
            bcrypt.hash(req.body.password,10,(err,hash)=>{
                userData.password= hash
                Login.create(userData)
                .then(user =>{
                    res.json({status: user.email + 'registered'})
                })
                .catch(err =>{
                    res.send('err' + err)
                })
            })
        }else{
            res.send({error:"user already exits"})
        }
    })
})
router.post('/login',(req,res)=>{
    Login.findOne({
        email:req.body.email
    })
    .then(user =>{
        if(user){
            if(bcrypt.compareSync(req.body.password, user.password)){
                const payload={
                    _id:user._id,
                    email:user.email,
                    password:user.password
                }
                let token = jwt.sign(payload,process.env.SECRET_KEY,{
                    expiresIn: 1440
                })
                res.json({token: token})
            }else{
                res.json({error:"user doesn't exit"})
            }
        }else{
            res.json({error:"user does not found"})
        }
    })
    .catch(err =>{
        res.send('err' + err);
    })
});


module.exports=router;