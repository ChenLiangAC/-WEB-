/**
 * Created by Administrator on 16-3-5.
 */
//日期选择
$(function(){
    $('.datepicker-input').datetimepicker({
        format: 'yyyy-mm-dd hh:ii:ss',
        language: 'cn',
        autoclose: true,
        todayBtn: true,
        startDate: "2013-02-14 10:00",
        minuteStep: 10
    });

});
//每日事项验证
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
    $('.add-todo').click(function(){
        var
            $txtToDotitle = $('.todolisttitle'),
            ToDotitleVal = $.trim($txtToDotitle.val()),
            $txtStartTime = $('.starttime'),
            StartTimeVal = $txtStartTime.val(),
            $txtEndTime = $('.endtime'),
            EndTimeVal = $txtEndTime.val(),
            $txtToDoContent = $('.todolistcontent'),
            ToDoContentVal = $.trim($txtToDoContent.val()),

            errorTip = '<div id="errorTip" class="alert alert-warning">{0}</div> ';

        $("#errorTip,#alt_warning").remove();

        if(ToDotitleVal.length == 0)
        {

            $('.todotitle').addClass('has-error');

            $txtToDotitle.focus();
            return false;
        }else if(ToDotitleVal){
            $('.todotitle').removeClass('has-error');
        }

        if(StartTimeVal.length == 0)
        {

            $('.start').addClass('has-error');
            $txtStartTime.focus();
            return false;
        }else if(StartTimeVal){
            $('.todotitle').removeClass('has-error');
        }
        if(ToDoContentVal.length == 0)
        {
            $('.todocontent').addClass('has-error');
            $txtToDoContent.focus();
            return false;
        }else if(ToDoContentVal){
            $('.todocontent').removeClass('has-error');
        }




    });

});