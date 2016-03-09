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

function infor(user) {
    this.userid = user.userid;
    this.username = user.username;
    this.userpwd = user.userpwd;
    this.userdate = user.userdate;
};


module.exports = infor;

pool.getConnection(function(err, connection) {

    var useDbSql = "USE " + DB_NAME;

    connection.query(useDbSql, function(err) {
        if (err) {
            console.log("USE Error: " + err.message);

            return;
        }
        console.log('USE succeed');

    });

    //保存数据
    infor.prototype.save = function save(callback) {
        var user = {
            username: this.username,
            userpwd: this.userpwd,
            userdate: this.userdate
        };

        var insertUser_Sql = "INSERT INTO base_users(userid,username,userpwd,userdate) VALUES(0,?,?,?)";

        connection.query(insertUser_Sql, [user.username, user.userpwd,user.userdate], function(err, result) {
            if (err) {
                console.log("insertUser_Sql Error: " + err.message);
                return;
            }

            /////connection.release();

            console.log("invoked[save]");
            callback(err, result);
        });
    };

    //根据用户名得到用户数量
    infor.getUserNumByName = function getUserNumByName(username, callback) {

        var getUserNumByName_Sql = "SELECT COUNT(1) AS num FROM base_users WHERE username = ?";

        connection.query(getUserNumByName_Sql, [username], function(err, result) {
            if (err) {
                console.log("getUserNumByName Error: " + err.message);
                return;
            }

            ///connection.release();

            console.log("invoked[getUserNumByName]");
            callback(err, result);
        });
    };

    //根据用户名得到用户信息
    infor.getUserByUserName = function getUserByUserName(username, callback) {

        var getUserByUserName_Sql = "SELECT * FROM base_users WHERE username = ?";

        connection.query(getUserByUserName_Sql, [username], function(err, result) {
            if (err) {
                console.log("getUserByUserName Error: " + err.message);
                return;
            }

            ///connection.release();

            console.log("invoked[getUserByUserName]");
            callback(err, result);
        });
    };
    ///////查询用户
    infor.searchUser = function searchUser(userid, callback) {

        var searchUser_Sql = "SELECT * FROM base_users WHERE userid = ?";

        connection.query(searchUser_Sql, [userid], function(err, result) {
            if (err) {
                console.log("searchUser Error: " + err.message);
                return;
            }

            ///connection.release();

            console.log("invoked[searchUser]");
            callback(err, result);
        });
    };
    /////////更新用户信息
    infor.updateUser = function updateUser(username, userpwd, userid, callback) {

        var updateUser_Sql = "UPDATE  base_users SET username = ?,userpwd = ? WHERE userid = ?";

        connection.query(updateUser_Sql, [username, userpwd, +userid], function(err, result) {
            if (err) {
                console.log("updateUser Error: " + err.message);
                return;
            }

            ///connection.release();

            console.log("invoked[updateUser]");
            callback(err, result);
        });
    };

    /////////查看用户
    infor.getUser = function getUser(callback) {

        var getUser_Sql = "SELECT * FROM base_users  order by userdate desc limit 6";

        var arr = [];
        connection.query(getUser_Sql, function(err, result) {
            if (err) {
                console.log("getUser Error: " + err.message);
                return;
            }

            ///connection.release();

            console.log("invoked[getUser]");
            callback(err, result);
        });
    };


    connection.release();
});
