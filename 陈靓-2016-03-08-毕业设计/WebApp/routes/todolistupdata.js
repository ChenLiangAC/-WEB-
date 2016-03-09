/**
 * Created by Administrator on 16-3-5.
 */
var express = require('express'),
    router = express.Router(),
    todolist = require('../models/todolist.add.Data.js'),
    moment = require("moment"),
    TITLE_LOGIN = '编辑事项';

router.get('/:todo_id', function(req, res) {
    if (req.cookies.islogin) {
        console.log('cookies:' + req.cookies.islogin);
        req.session.username = req.cookies.islogin;
    }

    if (req.session.username) {
        console.log('session:' + req.session.username);
        res.locals.username = req.session.username;
    } else {
        res.redirect('/login');
        return;
    }

    var todo_id = req.params.todo_id;
    todolist.searchList(todo_id, function(err, results) {

        res.render('todolistupdata', {
            title: TITLE_LOGIN,
            updatalist: results
        });

        ////console.log(results);

    });

});
router.post('/:todo_id', function(req, res, next) {

    var todoid = req.params.todo_id,
        todoTitle = req.body['todo_title'],
        todoContent = req.body['todo_content'],
        todostarttime = req.body['todo_starttime'],
        todoendtime = req.body['todo_endtime'];


    todolist.updateList(todoTitle, todoContent, todostarttime, todoendtime, +todoid, function(err, results) {
        if (err) {
            res.locals.error = err;

            return;
        }
        if (results.affectedRows > 0) {


            res.redirect("/todolist");
            console.log('更新成功');
        }
    });
});
module.exports = router;
