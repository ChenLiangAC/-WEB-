var express = require('express'),
    router = express.Router(),
    todolist = require('../models/todolist.add.Data.js'),

    TITLE_LOGIN = '事项删除';

router.get('/:todo_id_', function(req, res,next) {

    var todoid_ = req.params.todo_id_;

    if(todoid_!=null && todoid_!=""){
        todolist.deleteList(todoid_,function(err){
            if(err){
                next(err);
            }else{
                res.redirect("/todolist");
            }
        });
    }else{
        next(new Error("新闻不存在"));
    }
    console.log("删除成功", todoid_);
});
module.exports = router;