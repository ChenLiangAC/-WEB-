//个人资料
$(function()	{

    //Select2
    $('.select2').select2();


    //选择日期
    $('.datepicker-input').datetimepicker({
        format: 'yyyy/mm/dd',
        language: 'cn',
        minView :2,
        pickTime: true
    });

    //个人资料验证
    $('.next-btn').on('click', function() {
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
            dataselfVal = $dataself.val();

        if (datanameVal.length == 0) {
            $dataname.addClass("error-personal");
            $(".error-text1").html("用户名为必填项...");
            $dataname.focus();
            return false;
        }else {
            $dataname.removeClass("error-personal");
            $(".error-text1").remove();
        }


        if (dataworkVal.length == 0) {
            $datawork.addClass("error-personal");
            $(".error-text2").html("请填写您的职业...");
            $datawork.focus();
            return false;
        }else {
            $datawork.removeClass("error-personal");
            $(".error-text2").remove();
        }


        if (dataphoneVal.length == 0) {
            $dataphone.addClass("error-personal");
            $(".error-text4").html("电话必须填写...");
            $dataphone.focus();
            return false;
        }else {
            $dataphone.removeClass("error-personal");
            $(".error-text4").remove();
        }


        /////过滤其他字符
        //var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]");
        //if($(".newstitle-add").val() != "" && $(".newstitle-add").val() != null){
        //    if(pattern.test($(".newstitle-add").val())){
        //        alert("非法字符！");
        //        $(".newstitle-add").attr("value","");
        //        $(".newstitle-add").focus();
        //        return false;
        //    }
        //}
        //if($(".newscontent-add").val() != "" && $(".newscontent-add").val() != null){
        //    if(pattern.test($(".newscontent-add").val())){
        //        alert("非法字符！");
        //        $(".newscontent-add").attr("value","");
        //        $(".newscontent-add").focus();
        //        return false;
        //    }
        //}
        //return true;
        ///alert(datahobbyVal);
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
            url: '/personal',
            type: 'post',
            data: personaldata,
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
    })
});