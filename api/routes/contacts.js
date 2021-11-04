const express = require("express");
const router = express.Router();



router.get("/", (req, res, next) => {
  res.status(200).json({
      massage: "hallo , I am All Contacts Get Route"
  })

});

router.post('/',(req,res,next) => {
  const name = req.body.name
  const email = req.body.email

  res.status(201).json({
    message: "hello , I a am post route",
    name,
    email,

  })
})


router.get('/:id',(req,res,next) => {
   
 const id = req.params.id  
   res.json({
     message: "hello , I a am single contact"
   })
   
})

router.put('/:id',(req,res,next) => {
   
  const id = req.params.id  
    res.json({
      message: "hello , I a am put route"
    })
    
 })
 

 router.delete('/:id',(req,res,next) => {
   
  const id = req.params.id  
    res.json({
      message: "hello , I a am delete route"
    })
    
 })


module.exports = router;
