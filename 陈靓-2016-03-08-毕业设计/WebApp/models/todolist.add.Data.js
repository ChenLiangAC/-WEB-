//每日事项
var mysql = require('mysql');
var moment = require('moment');
var DB_NAME = 'webapp';

var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root'
});

pool.on('connection', function(connection) {
    connection.query('SET SESSION auto_increment_increment=1');
});

function todolist(todo) {
    this.todo_id = todo.todo_id;
    this.todo_title = todo.todo_title;
    this.todo_content = todo.todo_content;
    this.todo_starttime = todo.todo_starttime;
    this.todo_endtime = todo.todo_endtime;
};


module.exports = todolist;

pool.getConnection(function(err, connection) {

    var useDbSql = "USE " + DB_NAME;

    connection.query(useDbSql, function(err) {
        if (err) {
            console.log("USE Error: " + err.message);

            return;
        }
        console.log('USE-todolist succeed');

    });

    //保存数据
    todolist.prototype.savetodo = function savetodo(callback) {
        var todo = {
            todo_title: this.todo_title,
            todo_content: this.todo_content,
            todo_starttime: this.todo_starttime,
            todo_endtime: this.todo_endtime
        };

        var insertList_Sql = "INSERT INTO base_todo(todo_id,todo_title,todo_content,todo_starttime,todo_endtime) VALUES(0,?,?,?,?)";

        connection.query(insertList_Sql, [todo.todo_title, todo.todo_content, todo.todo_starttime, todo.todo_endtime], function(err, result) {
            if (err) {
                console.log("insertTodolist_Sql Error: " + err.message);
                return;
            }

            /////connection.release();

            console.log("invoked[save-todolist]");
            callback(err, result);
        });
    };

   ///////查询事项数据
    todolist.searchList = function searchList(todo_id, callback) {

        var searchList_Sql = "SELECT * FROM base_todo WHERE todo_id = ?";

        connection.query(searchList_Sql, [todo_id], function(err, result) {
            if (err) {
                console.log("searchList Error: " + err.message);
                return;
            }

            ///connection.release();

            console.log("invoked[searchList]");
            callback(err, result);
        });
    };
    /////////更新事项信息
    todolist.updateList = function updateList(todo_title,todo_content,todo_starttime,todo_endtime,todo_id, callback) {

        var updateList_Sql = "UPDATE  base_todo SET todo_title = ?,todo_content = ?,todo_starttime = ?,todo_endtime = ? WHERE todo_id = ?";

        connection.query(updateList_Sql, [todo_title,todo_content,todo_starttime,todo_endtime, +todo_id], function(err, result) {
            if (err) {
                console.log("updateUser Error: " + err.message);
                return;
            }

            ///connection.release();

            console.log("invoked[updateList]");
            callback(err, result);
        });
    };
    /////删除事项
    todolist.deleteList = function deleteList(todo_id, callback) {
        /// var id = req.query.userid_;
        var deleteList_Sql = "DELETE  FROM base_todo WHERE todo_id = ?";

        connection.query(deleteList_Sql, [todo_id], function(err, result) {
            if (err) {
                console.log("deleteToDo Error: " + err.message);
                return;
            }

            console.log("invoked[deleteToDo]");
            callback(null);
        });
    };
    ///////////查看事项
    todolist.gettodoList = function gettodoList(callback) {

        var getTodo_Sql = "SELECT * FROM base_todo  order by todo_id desc limit 6";

        var arr = [];
        connection.query(getTodo_Sql, function(err, result) {
            if (err) {
                console.log("getUser Error: " + err.message);
                return;
            }

            ///connection.release();

            console.log("invoked[getTodoList]");
            callback(err, result);
        });
    };


    connection.release();
});
