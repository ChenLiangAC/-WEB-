var express = require('express'),
    router = express.Router(),
    todolist = require('../models/todolist.add.Data.js'),
    TITLE_REG = 'Martian待办事项';

/* GET home page. */
router.get('/', function(req, res,next) {
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
    todolist.gettodoList(function(err, results) {

        res.render('todolist', {
            title: TITLE_REG,
            ToDoDatalist: results
        });




    });
    ///res.render('todolist', { title: TITLE_REG });
});

router.post('/', function(req, res) {
    var todoTitle = req.body.todo_title,
        todocontent = req.body.todo_content,
        todostarttime = req.body.todo_starttime,
        todoendtime = req.body.todo_endtime;

    var newlist = new todolist({
        todo_title: todoTitle,
        todo_content: todocontent,
        todo_starttime: todostarttime,
        todo_endtime: todoendtime
    });

    newlist.savetodo(function(err, result) {
        if (err) {
           // req.session.error = err;

            ///res.send(500);
            res.redirect('/todolist');
            return;
        }
        if (result.insertId > 0) {

            //req.session.error = '添加成功';

            ///res.redirect('/main');
             //res.send(200);
            //return;
            res.redirect('/todolist');
            return;
        } else {
            /////req.session.error = '添加失败';
            //res.send(500);
            res.redirect('/todolist');

            return;
        }

        res.render('todolist', {
            title: TITLE_REG
        });
    });
});
module.exports = router;