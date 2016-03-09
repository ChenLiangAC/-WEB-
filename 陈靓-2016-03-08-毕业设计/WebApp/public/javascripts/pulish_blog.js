//发布文章
var ue = UE.getEditor('editor');
//文章验证
String.prototype.format = function (args) {
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
$(function () {
    $('.sub-mood').on('click', function () {
        var root = UE.htmlparser(UE.getEditor('editor').getContent(), true);
        var imgs = [];
        var imgsrc;
        var imgs = root.getNodesByTagName('img');
        for (i = 0; imgs.length > 0; i++) {

            imgsrc = imgs[0].getAttr('src');

            break;

        }
        var contenttext = UE.getEditor('editor').getPlainTxt();
        var hascontent = UE.getEditor('editor').hasContents();

        var
            $moodtitle = $('.moodtitle'),
            moodtitleVal = $moodtitle.val(),
            $moodwrite = $('.moodwrite'),
            moodwriteVal = $moodwrite.val(),
            moodcontentVal = contenttext,
            moodimgVal = imgsrc,
            errorTip = '<div id="errorTip" class="alert alert-warning">{0}</div> ',
            successTip = '<div id="alt_sucess" class="alert alert-success">{0}</div> ';

        $("#errorTip,#alt_sucess,#alt_warning").remove();

        if (moodtitleVal.length == 0) {
            $(".blog-content").prepend(errorTip.format('请输入文章的标题...'));
            $moodtitle.focus();
            return false;
        }
        if (hascontent == false) {
            $(".blog-content").prepend(errorTip.format('请输入文章内容...'));
            UE.getEditor('editor').focus();
            return false;
        }

        var mooddata = {
            "mood_title": moodtitleVal,
            "mood_img": moodimgVal,
            "mood_content": moodcontentVal,
            "mood_write": moodwriteVal

        };
        $.ajax({
            url: '/publish_blogs',
            type: 'post',
            data: mooddata,
            success: function (data, status) {

                if (status == 'success') {

                    $('#addWidgetConfirm2').popup('show');
                    $('#deleteWidgetConfirm').popup('hide');


                }
            },
            error: function (data, status) {
                if (status == 'error') {
                    console.log(data, status);

                    alert('添加失败');
                    location.href = 'publish_blogs';
                }
            }
        });
    })
});