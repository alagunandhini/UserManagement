var express = require('express');
var router = express.Router();

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

//get method
router.get('/', async (req, res)=> {
  try{
  const users= await prisma.user.findMany();//get user details from User table
  res.json(users)
  console.log(users)
  }
  catch(e){
  res.status(500).json(e);
  }

});
// post method
router.post('/' ,async(req,res)=>{
  console.log(req.body)
  const {name,email,dob}=req.body;
  try{
    //create a row to be inserted in DB
    const userDetail=await prisma.user.create({
      data:{name,email,dob:new Date(dob)},
    })
    res.json(userDetail)
  }
    catch(e){
      res.status(500).json(e);
    }
    
  

});

//put method
router.put('/:id', async (req,res)=>{
  const {id}=req.params;
  const {name,email,dob}=req.body;
  if(!name||!email){
    return res.status(400).json({
      error:"Email and name must required"
    })
  }
  try{
const Updated =await prisma.user.update({
  where:{id:Number(id)},
    data:{name,email,dob:new Date(dob)}
 
})
 res.json(Updated)}
   catch(e){
      res.status(500).json(e);
    }
})

//delete method 
router.delete('/:id', async (req,res)=>{
  const {id}=req.params;
 
  try{
const deleted =await prisma.user.delete({
  where:{id:Number(id)}
 
})
 res.json(deleted)}
   catch(e){
      res.status(500).json(e);
    }
})


module.exports = router;
