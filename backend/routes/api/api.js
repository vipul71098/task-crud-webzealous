const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');



//user model
const userData = require('../../models/Users');
const userCommnent = require('../../models/Comments');


		

router.get('/',(req,res) => {

      			userData.find()									
	 					.then((user) =>{res.json(user)})
	 					.catch((err) =>{res.status(404).json({sucess:false})})
       		    
});


router.get('/comment',(req,res) => {

      			userCommnent.find()									
	 					.then((user) =>{res.json(user)})
	 					.catch((err) =>{res.status(404).json({sucess:false})})
       		    
});

    //@route GET api/user
    //@desc get all userData

	


router.post('/add-post',(req,res) => {
	const newUsers = new userData({					
		title: req.body.title,						
		body: req.body.body,
		author: req.body.author,				
		email: req.body.email
	});

	newUsers.save().then((user) => {res.json(user)})
				   .catch((err) =>{res.status(404).json({error:err})})
})



router.post('/add-comment',(req,res) => {
	const newComment = new userCommnent({					
		name: req.body.name,						
		comment: req.body.comment
		
	});

	newComment.save().then((user) => {res.json(user)})
				   .catch((err) =>{res.status(404).json({error:err})})
})

    //@route POST api/user/insert
    //@desc add all userData


router.put('/update/:id', function (req, res) {
	
      	userData.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, user) {
            if (err) return res.status(500).send(err);
            res.status(200).send(user);
        });    
});

    //@route put api/user/update
    //@desc update all userData

router.delete('/delete/:id',(req,res) => {
	userData.findById(req.params.id)												
		.then((user) => {user.remove().then(() => {res.json({sucess:true})})})	
		.catch((err) =>{res.status(404).json({error:"Not deleted"})})
})

    //@route DELETE api/user/delete
    //@desc delete all userData





module.exports = router;