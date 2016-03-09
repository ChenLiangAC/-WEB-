
////注册验证
String.prototype.format = function(args) {
    var result = this;
    if (arguments.length > 0) {
        if (arguments.length == 1 && typeof(args) == "object") {
            for (var key in args) {
                if (args[key] != undefined) {
                    var reg = new RegExp("({" + key + "})", "g");
                    result = result.replace(reg, args[key]);
                }
            }
        } else {
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

$(function() {
    $('.register-btn').on('click', function() {
        var
            $txtUserName = $('#inputEmail3'),
            txtUserNameVal = $.trim($txtUserName.val()),
            $txtUserPwd = $('#inputPassword3'),
            txtUserPwdVal = $.trim($txtUserPwd.val()),
            $txtUserRePwd = $('#inputPassword4'),
            txtUserRePwdVal = $.trim($txtUserRePwd.val()),
            errorTip = '<div id="errorTip" class="alert alert-warning">{0}</div> ',
            successTip = '<div id="alt_sucess" class="alert alert-success">{0}</div> ';

        $("#errorTip,#alt_sucess,#alt_warning").remove();

        if (txtUserNameVal.length == 0) {
            $(".sign-contant").prepend(errorTip.format('用户名不能为空'));
            $txtUserName.focus();
            return false;
        }

        if (txtUserPwdVal.length == 0) {
            $(".sign-contant").prepend(errorTip.format('密码不能为空'));
            $txtUserPwd.focus();
            return false;
        }

        if (txtUserRePwdVal.length == 0) {
            $(".sign-contant").prepend(errorTip.format('确认密码不能为空'));
            $txtUserRePwd.focus();
            return false;
        }

        if (txtUserPwdVal != txtUserRePwdVal) {
            $(".sign-contant").prepend(errorTip.format('两次密码不一致'));
            $txtUserPwd.focus();
            return false;
        }
        var data2 = {
            "username": txtUserNameVal,
            "userpwd": txtUserPwdVal
        };
        $.ajax({
            url: '/register',
            type: 'post',
            data: data2,
            success: function(data, status) {

                if (status == 'success') {
                    $("#container").prepend(successTip.format('注册成功！'));
                    location.href = 'personal';

                }
            },
            error: function(data, status) {
                if (status == 'error') {
                    location.href = 'register';
                }
            }
        });
        ////return true;
    })
});