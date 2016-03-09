/**
 * Created by Administrator on 16-2-24.
 */
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

function personal(per) {
    this.data_id = per.data_id;
    this.data_name = per.data_name;
    this.data_age = per.data_age;
    this.data_work = per.data_work;
    this.data_company = per.data_company;
    this.data_email = per.data_email;
    this.data_phone = per.data_phone;
    this.data_brithday = per.data_brithday;
    this.data_self = per.data_self;
    this.data_image = per.data_image;
    ///this.data_id = per.data_id;
};


module.exports = personal;

pool.getConnection(function(err, connection) {

    var useDbSql = "USE " + DB_NAME;

    connection.query(useDbSql, function(err) {
        if (err) {
            console.log("USE Error: " + err.message);

            return;
        }
        console.log('succeed--personalData');

    });

    //保存数据
    personal.prototype.saveData = function save(callback) {
        var per = {
            data_name: this.data_name,
            data_age: this.data_age,
            data_work: this.data_work,
            data_company: this.data_company,
            data_email: this.data_email,
            data_phone: this.data_phone,
            data_brithday: this.data_brithday,
            data_self: this.data_self


        };

        var insertData_Sql = "INSERT INTO base_personaldata(data_id,data_name,data_age,data_work,data_company,data_email,data_phone,data_brithday,data_self) VALUES(0,?,?,?,?,?,?,?,?)";

        connection.query(insertData_Sql, [per.data_name, per.data_age,per.data_work, per.data_company, per.data_email, per.data_phone, per.data_brithday,  per.data_self], function(err, result) {
            if (err) {
                console.log("insertData_Sql Error: " + err.message);
                return;
            }

            /////connection.release();

            console.log("invoked[Datasave]");
            callback(err, result);
        });
    };

    ////根据电子邮箱得到用户信息
    personal.getDataByData = function getUserByUserName(data_email, callback) {

        var getDataByDataEmail_Sql = "SELECT * FROM base_personaldata WHERE data_email = ?";
        var arrdata = [];
        connection.query(getDataByDataEmail_Sql, [data_email], function(err, result) {
            if (err) {
                console.log("getDataByData Error: " + err.message);
                return;
            }
            if (result) {
                for (var i = 0; i < result.length; i++) {

                    arrdata[i] = result[i].data_email;
                    result[i].data_brithday= moment(result[i].data_brithday).format("YYYY/MM/DD");



                }
            }

            ///connection.release();

            console.log("invoked[getDataByData]");
            callback(err, result);
        });
    };
    /////////查询个人资料
    personal.searchData = function searchData(data_id, callback) {

        var searchData_Sql = "SELECT * FROM base_personaldata WHERE data_id = ?";
        var arrdata2 = [];
        connection.query(searchData_Sql, [data_id], function(err, result) {
            if (err) {
                console.log("searchData Error: " + err.message);
                return;
            }
            if (result) {
                for (var i = 0; i < result.length; i++) {

                    arrdata2[i] = result[i].data_id;
                    result[i].data_brithday= moment(result[i].data_brithday).format("YYYY/MM/DD");



                }
            }
            ///connection.release();

            console.log("invoked[searchData]");
            callback(err, result);
        });
    };
    ///////////更新个人资料
    personal.updateData = function updateData(data_name,data_age,data_work,data_company,data_email,data_phone,data_brithday,data_self,data_id, callback) {

        var updateData_Sql = "UPDATE  base_personaldata SET data_name = ?,data_age = ?,data_work = ?,data_company = ?,data_email = ?,data_phone = ?,data_brithday = ?,data_self = ? WHERE data_id = ?";

        connection.query(updateData_Sql, [data_name,data_age,data_work,data_company,data_email,data_phone,data_brithday,data_self,+data_id], function(err, result) {
            if (err) {
                console.log("updateData Error: " + err.message);
                return;
            }

            ///connection.release();

            console.log("invoked[updateData]");
            callback(err, result);
        });
    };


    connection.release();
});
