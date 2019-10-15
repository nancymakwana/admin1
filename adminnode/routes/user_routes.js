var exp=require('express');
var router=exp.Router();
var user=require('../models/user_model');
router.get('/',function(req,res,next){
    user.getAllUser(function(rows,err){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    })
});

router.delete('/:uid', function (req,res,next) {
    user.deleteUser(req.params.uid,function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

router.get('/:uid', function (req,res,next) {
    user.getUserById(req.params.uid,function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

router.put('/:uid', function (req,res,next) {
    console.log("update");
    user.UpdateUser(req.body,function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

module.exports=router;
