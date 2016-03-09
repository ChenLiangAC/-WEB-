//添加文章
var mysql = require('mysql');
var moment = require('moment');

var DB_NAME = 'webapp';
moment.locale('zh-cn');
var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root'
});

pool.on('connection', function(connection) {
    connection.query('SET SESSION auto_increment_increment=1');
});

function mood(md) {
    this.mood_id = md.mood_id;
    this.mood_title = md.mood_title;
    this.mood_img = md.mood_img;
    this.mood_content = md.mood_content;
    this.mood_date = md.mood_date;
    this.mood_write = md.mood_write;


};


module.exports = mood;

pool.getConnection(function(err, connection) {

    var useDbSql = "USE " + DB_NAME;

    connection.query(useDbSql, function(err) {
        if (err) {
            console.log("USE Error: " + err.message);

            return;
        }
        console.log('succeed--moodData');

    });

    //保存数据
    mood.prototype.saveMood = function save(callback) {
        var md = {
            mood_id: this.mood_id,
            mood_title: this.mood_title,
            mood_img: this.mood_img,
            mood_content: this.mood_content,
            mood_date: this.mood_date,
            mood_write: this.mood_write



        };

        var insertMood_Sql = "INSERT INTO base_mood(mood_id,mood_title,mood_img,mood_content,mood_date,mood_write) VALUES(0,?,?,?,?,?)";

        connection.query(insertMood_Sql, [md.mood_title,md.mood_img,md.mood_content, md.mood_date, md.mood_write], function(err, result) {
            if (err) {
                console.log("insertMood_Sql Error: " + err.message);
                return;
            }

            /////connection.release();

            console.log("invoked[Moodsave]");
            callback(err, result);
        });
    };

    ///删除文章
    mood.deleteMood = function deleteUser(mood_id, callback) {
        /// var id = req.query.userid_;
        var deleteMood_Sql = "DELETE  FROM base_mood WHERE mood_id = ?";

        connection.query(deleteMood_Sql, [mood_id], function(err, result) {
            if (err) {
                console.log("deleteMood Error: " + err.message);
                return;
            }

            console.log("invoked[deleteMoodByMoodId]");
            callback(null);
        });
    };



    connection.release();
});
