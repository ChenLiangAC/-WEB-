///////个人资料
$(function()	{
    //定位信息
    var myprovince = remote_ip_info['province'];
    var mycity = remote_ip_info['city'];
    var mydistrict = remote_ip_info['district'];

    $(".localction").html(myprovince+' '+mycity);

    //选择日期
    $('.datepicker-input').datetimepicker({
        format: 'yyyy/mm/dd',
        language: 'cn',
        minView :2,
        pickTime: true
    });
    //更新个人资料
    $('.profile-sub').on('click', function() {
        var
            $dataname = $('.dataname'),
            datanameVal = $dataname.val(),
            $dataage = $('.dataage'),
            dataageVal = $dataage.val(),
            $datawork = $('.datawork'),
            dataworkVal = $datawork.val(),
            $datacompany = $('.datacompany'),
            datacompanyVal = $datacompany.val(),
            $dataemail = $('.dataemail'),
            dataemailVal = $dataemail.val(),
            $dataphone = $('.dataphone'),
            dataphoneVal = $dataphone.val(),
            $databrithday = $('.databrithday'),
            databrithdayVal = $databrithday.val(),
            $dataself = $('.dataself'),
            dataselfVal = $dataself.val(),
            errorTip = '<div id="errorTip" class="alert alert-warning">{0}</div> ';

        $("#errorTip,#alt_warning").remove();

        if (datanameVal.length == 0) {
            $(".profileTab").prepend(errorTip.format('用户名不能为空!'));
            $dataname.focus();
            return false;
        }


        if (dataworkVal.length == 0) {
            $(".profileTab").prepend(errorTip.format('工作不能为空!'));
            $datawork.focus();
            return false;
        }


        if (dataphoneVal.length == 0) {
            $(".profileTab").prepend(errorTip.format('电话不能为空!'));
            $dataphone.focus();
            return false;
        }
        if (dataemailVal.length == 0) {
            $(".profileTab").prepend(errorTip.format('邮箱不能为空!'));
            $dataemail.focus();
            return false;
        }
        var personaldata = {
            "data_name": datanameVal,
            "data_age": dataageVal,
            "data_work": dataworkVal,
            "data_company": datacompanyVal,
            "data_email": dataemailVal,
            "data_phone": dataphoneVal,
            "data_brithday": databrithdayVal,
            "data_self": dataselfVal


        };
        $.ajax({
            url: '/profile',
            type: 'post',
            data: personaldata,
            success: function(data, status) {

                if (status == 'success') {

                    location.href = 'profile';

                }
            },
            error: function(data, status) {
                if (status == 'error') {
                    console.log(data, status);
                    alert('更新失败');
                }
            }
        });
    })
});
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

$(function(){
    $('#btnSub').on('click',function(){
        var fulAvatarVal = $('#fulAvatar').val(),
            errorTip = '<div id="errorTip" class="alert alert-warning">{0}</div> ';

        $("#errorTip,#alt_warning").remove();

        if(fulAvatarVal.length == 0)
        {
            $("#container").prepend(errorTip.format('请选择要上传的文件'));
            return false;
        }

        var extName = fulAvatarVal.substring(fulAvatarVal.lastIndexOf('.'),fulAvatarVal.length).toLowerCase();

        if(extName != '.png' && extName != '.jpg'){
            $("#container").prepend(errorTip.format('只支持png和jpg格式图片'));
            return false;
        }

        return true;
    })
});
