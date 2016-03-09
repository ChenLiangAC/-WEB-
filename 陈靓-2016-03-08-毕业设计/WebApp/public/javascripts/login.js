////////登录验证

String.prototype.format = function (args) {
    var result = this;
    if (arguments.length > 0) {
        if (arguments.length == 1 && typeof (args) == "object") {
            for (var key in args) {
                if (args[key] != undefined) {
                    var reg = new RegExp("({" + key + "})", "g");
                    result = result.replace(reg, args[key]);
                }
            }
        }
        else {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] != undefined) {
                    var reg = new RegExp("({)" + i + "(})", "g");
                    result = result.replace(reg, arguments[i]);
                }
            }
        }
    }
    return result;
}

$(document).ready(function() {
    $('.login-btn').click(function(){
        var
            $txtUserName = $('#inputEmail3'),
            username = $.trim($txtUserName.val()),
            $txtUserPwd = $('#inputPassword3'),
            userpwd = $.trim($txtUserPwd.val()),

            errorTip = '<div id="errorTip" class="alert alert-warning">{0}</div> ';

        $("#errorTip,#alt_warning").remove();

        if(username.length == 0)
        {
            $(".log-contant").prepend(errorTip.format('用户名/邮箱不能为空!'));
            $txtUserName.focus();
            return false;
        }
        if(!username.match(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/))
            {
                $(".log-contant").prepend(errorTip.format('邮箱格式不正确！请重新输入!'));
                $txtUserName.focus();
                return false;
            }

        if(userpwd.length == 0)
        {
            $(".log-contant").prepend(errorTip.format('密码不能为空！'));
            $txtUserPwd.focus();
            return false;
        }
        var data = {
            "username": username,
            "userpwd": userpwd
        };
        $.ajax({
            url: '/login',
            type: 'post',
            data: data,
            success: function(data, status) {

                if (status == 'success') {
                    location.href = 'main';

                }
            },
            error: function(data, status) {
                if (status == 'error') {
                    console.log(data, status);
                    location.href = 'login';
                }
            }
        });
        ///return true;



    })
});