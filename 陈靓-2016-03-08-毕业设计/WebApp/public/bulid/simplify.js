$(function	()	{
	//scrollable sidebar
	$('.scrollable-sidebar').slimScroll({
		height: '100%',
		size: '0px'
	});
	
	//Collapsible Sidebar Menu
	$('.sidebar-menu .openable > a').click(function()	{
		
		if(!$('aside').hasClass('sidebar-mini') || Modernizr.mq('(max-width: 991px)'))	{
			if( $(this).parent().children('.submenu').is(':hidden') ) {
				$(this).parent().siblings().removeClass('open').children('.submenu').slideUp(200);
				$(this).parent().addClass('open').children('.submenu').slideDown(200);
			}
			else	{
				$(this).parent().removeClass('open').children('.submenu').slideUp(200);
			}
		}
		
		return false;
	});

	//Open active menu
	if(!$('.sidebar-menu').hasClass('sidebar-mini') || Modernizr.mq('(max-width: 767px)'))	{
		$('.openable.open').children('.submenu').slideDown(200);
	}
	
	//Toggle User container on sidebar menu
	$('#btn-collapse').click(function()	{
		$('.sidebar-header').toggleClass('active');
	});
	
	//theme setting
	$("#theme-setting-icon").click(function()	{ 
		if($('#theme-setting').hasClass('open'))	{
			$('#theme-setting').removeClass('open');
			$('#theme-setting-icon').removeClass('open');
		}
		else	{
			$('#theme-setting').addClass('open');
			$('#theme-setting-icon').addClass('open');
		}

		return false;
	});
	
	$('#sidebarToggleLG').click(function()	{
		if($('.wrapper').hasClass('display-right'))	{
			$('.wrapper').removeClass('display-right');
			$('.sidebar-right').removeClass('active');
		}
		else	{
			//$('.nav-header').toggleClass('hide');
			$('.top-nav').toggleClass('sidebar-mini');
			$('aside').toggleClass('sidebar-mini');
			$('footer').toggleClass('sidebar-mini');
			$('.main-container').toggleClass('sidebar-mini');
			
			$('.main-menu').find('.openable').removeClass('open');
			$('.main-menu').find('.submenu').removeAttr('style');
		}		
	});
	
	$('#sidebarToggleSM').click(function()	{
		$('aside').toggleClass('active');
		$('.wrapper').toggleClass('display-left');
	});
	
	$('.sidebarRight-toggle').click(function()	{
		$('.sidebar-right').toggleClass('active');
		$('.wrapper').toggleClass('display-right');
		$('footer').toggleClass('display-right');

		return false;
	});
	
	$('.dropdown-menu input').click(function(e) {
        e.stopPropagation(); //This will prevent the event from bubbling up and close the dropdown when you type/click on text boxes.
    });
	
	//to do list
	$('.task-finish').click(function()	{ 
		if($(this).is(':checked'))	{
			$(this).parent().parent().addClass('selected');					
		}
		else	{
			$(this).parent().parent().removeClass('selected');
		}
	});

	//Delete to do list
	$('.task-del').click(function()	{			
		var activeList = $(this).parent().parent();

		activeList.addClass('removed');
				
		setTimeout(function() {
			activeList.remove();
		}, 1000);
			
		return false;
	});
	
	var $activeWidget = '';
	var $activeWidgetHeader;
	var $headerHeight;
	var $screenHeight;
	var $widgetHeight;
	var $borderHeight = 3;

	//Smart Widget

	// Refresh Widget
	$('.widget-refresh-option').click(function()	{

		$activeWidget = $(this).parent().parent().parent();
		
		var $activeSpinIcon = $activeWidget.find('.refresh-icon-animated').fadeIn();

		setTimeout(function() {
			$activeSpinIcon.fadeOut();
		},2000);

		return false;
	});

	// Collasible Widget
	$('.widget-collapse-option').click(function()	{
		$activeWidget = $(this).parent().parent().parent();

		$activeWidget.find('.smart-widget-inner').slideToggle();
		$activeWidget.toggleClass('smart-widget-collapsed');

		var $activeSpinIcon = $activeWidget.find('.refresh-icon-animated').fadeIn();

		setTimeout(function() {
			$activeSpinIcon.fadeOut();
		},500);

		$activeWidget = '';

		return false;
	});

	//Changing Widget Color
	$('.widget-toggle-hidden-option').click(function()	{
		$activeWidget = $(this).parent().parent().parent();

		$activeWidget.find('.smart-widget-hidden-section').slideToggle();	

		var $activeSpinIcon = $activeWidget.find('.refresh-icon-animated').fadeIn();

		setTimeout(function() {
			$activeSpinIcon.fadeOut();
		},500);


		$activeWidget = '';			

		return false;
	});

	//Changing Widget Header Background
	$('.widget-color-list li').click(function()	{
		$activeWidget = $(this).parent().parent().parent().parent();
		$selectedColor = $(this).data('color');

		$activeWidget.removeClass('widget-light-grey');
		$activeWidget.removeClass('widget-dark');
		$activeWidget.removeClass('widget-dark-blue');
		$activeWidget.removeClass('widget-blue');
		$activeWidget.removeClass('widget-green');
		$activeWidget.removeClass('widget-yellow');
		$activeWidget.removeClass('widget-orange');
		$activeWidget.removeClass('widget-red');
		$activeWidget.removeClass('widget-purple');

		if($selectedColor != 'reset')
			$activeWidget.addClass($selectedColor);
		
		return false;
	});

	// Remove Widget
	$('.widget-remove-option').click(function()	{

		$activeWidget = $(this).parent().parent().parent();

		$('#deleteWidgetConfirm').popup('show');

		return false;

	});

	//$('.remove-widget-btn').click(function()	{
	//	//$('#deleteWidgetConfirm').popup('hide');
	//	//var data = {
	//	//
	//	//}
     //   //
     //   //$.ajax({
	//		//url: '/blogdelete',
	//		//type: 'get',
	//		////data: mood_id_,
	//		//success: function(status) {
     //   //
	//		//	if (status == 'success') {
	//		//		////alert('添加成功');
	//		//		// $("#morris-one-line-chart").prepend(successTip.format('添加新闻成功！'));
	//		//		$activeWidget.fadeOut();
	//		//		location.href = 'blog';
     //   //
	//		//	}
	//		//},
	//		//error: function( status) {
	//		//	if (status == 'error') {
	//		//		console.log(data, status);
	//		//		///$("#morris-one-line-chart").prepend(errorTip.format('添加新闻失败！'));
	//		//		///location.href = '';
	//		//	}
	//		//}
     //   //});
	//	////$activeWidget.fadeOut();
    //
	//	/////$activeWidget = '';
    //
	//	return false;
	//});

	//Scroll to Top
	$(".scroll-to-top").click(function()	{
		$("html, body").animate({ scrollTop: 0 }, 600);
		 return false;
	});

	// Popover
    $("[data-toggle=popover]").popover();
	
	// Tooltip
    $("[data-toggle=tooltip]").tooltip();
	$("[rel=tooltip]").tooltip();
});


$(window).load(function() {
	$('body').removeClass('overflow-hidden');

	//Enable animation
	$('.wrapper').removeClass('preload');

	//Chat Notification on top navigation
	setTimeout(function() {
		$('.chat-notification').find('.badge').addClass('active');
		$('.chat-alert').addClass('active');
	}, 3000);

	setTimeout(function() {
		$('.chat-alert').removeClass('active');
	}, 8000);
});

// Toggle Scroll to Top button
$(window).scroll(function(){
		
	 var position = $(window).scrollTop();
	
	 if(position >= 200)	{
		$('.scroll-to-top').addClass('active')
	 }
	 else	{
		$('.scroll-to-top').removeClass('active')
	 }
});;/**
 * Created by Administrator on 16-2-15.
 */
$(function() {
    $('.chart').easyPieChart({
        easing: 'easeOutBounce',
        size: '140',
        lineWidth: '7',
        barColor: '#7266ba',
        onStep: function (from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });

    $('.sortable-list').sortable();

    $('.todo-checkbox').click(function () {

        var _activeCheckbox = $(this).find('input[type="checkbox"]');

        if (_activeCheckbox.is(':checked')) {
            $(this).parent().addClass('selected');
        }
        else {
            $(this).parent().removeClass('selected');
        }

    });


    ///////天气状况

    ////北京天气
    $.simpleWeather({
        location: 'beijing',
        woeid: '',
        unit: 'c',
        success: function(weather) {

            ///html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
            //html += '<div class="col-md-3"><div class="panel panel-default weather-widget">';
            html = '<div class="panel panel-default weather-widget"><div class="panel-body bg-success text-white"><div class="h4 text-white text-center">今日天气</div><div class="m-top-md m-bottom-md text-center"> <i id="skycon1" class="icon-'+weather.code+'" width="120" height="120"></i> </div><div class="degree-text text-center">'+weather.temp+'&deg;'+weather.units.temp+'</div>';
            ///html += '<div class="h4 text-upper">'+weather.city+', '+weather.region+ '<i class="fa fa-map-marker"></i></div>';
            //////////html = '<div class="col-md-3"><div class="panel panel-default weather-widget"><div class="panel-body bg-warning text-white"><div class="h4 text-white text-center">今日天气</div><div class="m-top-md m-bottom-md text-center"> <canvas id="skycon1" class="icon-'+weather.code+'" width="120" height="120"></canvas> </div><div class="degree-text text-center">'+weather.temp+'&deg;'+weather.units.temp+'</div></div>';

            ///html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
            //html += '<li class="currently">'+weather.currently+'</li>';
            html += '<div class="panel-footer bg-white text-center padding-md"><div class="h4 text-upper">'+weather.city+', '+weather.region+'<i class="fa fa-map-marker"></i></div> <div class="text-muted font-12 m-top-xs">'+weather.currently+'</div></div></div></div>';
            ///html += '<li>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>';
            //html += '</div></div>';

            $(".md-3").html(html);
        },
        error: function(error) {
            $(".md-3").html('<p>'+error+'</p>');
        }
    });
    //广州天气
    $.simpleWeather({
        location: 'guangzhou',
        woeid: '',
        unit: 'c',
        success: function(weather) {


            ///html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
            //html += '<div class="col-md-3"><div class="panel panel-default weather-widget">';
            html = '<div class="panel panel-default weather-widget"><div class="panel-body bg-warning text-white"><div class="h4 text-white text-center">今日天气</div><div class="m-top-md m-bottom-md text-center"> <i id="skycon1" class="icon-'+weather.code+'" width="120" height="120"></i> </div><div class="degree-text text-center">'+weather.temp+'&deg;'+weather.units.temp+'</div>';
            ///html += '<div class="h4 text-upper">'+weather.city+', '+weather.region+ '<i class="fa fa-map-marker"></i></div>';

            ///html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
            //html += '<li class="currently">'+weather.currently+'</li>';
            html += '<div class="panel-footer bg-white text-center padding-md"><div class="h4 text-upper">'+weather.city+', '+weather.region+'<i class="fa fa-map-marker"></i></div> <div class="text-muted font-12 m-top-xs">'+weather.currently+'</div></div></div></div>';
            ///html += '<li>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>';
            //html += '</div></div>';

            $(".md-4").html(html);
        },
        error: function(error) {
            $(".md-4").html('<p>'+error+'</p>');
        }
    });
    //上海天气
    $.simpleWeather({
        location: 'shanghai',
        woeid: '',
        unit: 'c',
        success: function(weather) {


            ///html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
            //html += '<div class="col-md-3"><div class="panel panel-default weather-widget">';
            html = '<div class="panel panel-default weather-widget"><div class="panel-body bg-danger text-white"><div class="h4 text-white text-center">今日天气</div><div class="m-top-md m-bottom-md text-center"> <i id="skycon1" class="icon-'+weather.code+'" width="120" height="120"></i> </div><div class="degree-text text-center">'+weather.temp+'&deg;'+weather.units.temp+'</div>';
            ///html += '<div class="h4 text-upper">'+weather.city+', '+weather.region+ '<i class="fa fa-map-marker"></i></div>';

            ///html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
            //html += '<li class="currently">'+weather.currently+'</li>';
            html += '<div class="panel-footer bg-white text-center padding-md"><div class="h4 text-upper">'+weather.city+', '+weather.region+'<i class="fa fa-map-marker"></i></div> <div class="text-muted font-12 m-top-xs">'+weather.currently+'</div></div></div></div>';
            ///html += '<li>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>';
            //html += '</div></div>';

            $(".md-5").html(html);
        },
        error: function(error) {
            $(".md-5").html('<p>'+error+'</p>');
        }
    });
    ///深圳天气
    $.simpleWeather({
        location: 'shenzhen',
        woeid: '',
        unit: 'c',
        success: function(weather) {


            ///html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
            //html += '<div class="col-md-3"><div class="panel panel-default weather-widget">';
            html = '<div class="panel panel-default weather-widget"><div class="panel-body bg-info text-white"><div class="h4 text-white text-center">今日天气</div><div class="m-top-md m-bottom-md text-center"> <i id="skycon1" class="icon-'+weather.code+'" width="120" height="120"></i> </div><div class="degree-text text-center">'+weather.temp+'&deg;'+weather.units.temp+'</div>';
            ///html += '<div class="h4 text-upper">'+weather.city+', '+weather.region+ '<i class="fa fa-map-marker"></i></div>';

            ///html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
            //html += '<li class="currently">'+weather.currently+'</li>';
            html += '<div class="panel-footer bg-white text-center padding-md"><div class="h4 text-upper">'+weather.city+', '+weather.region+'<i class="fa fa-map-marker"></i></div> <div class="text-muted font-12 m-top-xs">'+weather.currently+'</div></div></div></div>';
            ///html += '<li>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>';
            //html += '</div></div>';

            $(".md-6").html(html);
        },
        error: function(error) {
            $(".md-6").html('<p>'+error+'</p>');
        }
    });

/////定位当前城市
    var myprovince = remote_ip_info['province'];
    var mycity = remote_ip_info['city'];
    var mydistrict = remote_ip_info['district'];

        $(".localction").html(myprovince+' '+mycity);
});
;////////登录验证

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
});;/**
 * Created by Administrator on 16-2-10.
 */
//////////图片背景轮播
$(document).ready(function() {
    var length,
        currentIndex = 0,
        interval,
        hasStarted = false, //是否已经开始轮播
        t = 3000; //轮播时间间隔
    length = $('.bg-item').length;
    //将除了第一张图片隐藏
    $('.bg-item:not(:first)').hide();
    //将第一个slider-item设为激活状态
    //$('.sp-box-dotnav a:first').addClass('cur');
    ////隐藏向前、向后翻按钮

    //鼠标上悬时显示向前、向后翻按钮,停止滑动，鼠标离开时隐藏向前、向后翻按钮，开始滑动
    $('.con-img-scroll').hover(function() {
        stop();

    }, function() {

        start();
    });


    //向前翻页
    function pre() {
        var preIndex = currentIndex;
        currentIndex = (--currentIndex + length) % length;
        play(preIndex, currentIndex);
    }
    //向后翻页


    function next() {
        var preIndex = currentIndex;
        currentIndex = ++currentIndex % length;
        play(preIndex, currentIndex);
    }
    /**
     * 从preIndex页翻到currentIndex页
     * preIndex 整数，翻页的起始页
     * currentIndex 整数，翻到的那页
     */
    function play(preIndex, currentIndex) {
        $('.bg-item').eq(preIndex).fadeOut(500)
            .parent().children().eq(currentIndex).fadeIn(1000);

    }

    //开始轮播

    function start() {
        if (!hasStarted) {
            hasStarted = true;
            interval = setInterval(next, t);
        }
    }

    // 停止轮播

    function stop() {
        clearInterval(interval);
        hasStarted = false;
    }
    //开始轮播
    start();
});
/////功能介绍翻页
$(document).ready(function() {
    var length2,
        currentIndex2 = 0,
        interval2,
        hasStarted2 = false, //是否已经开始轮播
        t2 = 3000; //轮播时间间隔
    length2 = $('.Introduction').length;
    //将除了第一张图片隐藏
    $('.Introduction:not(:first)').hide();
    //将第一个slider-item设为激活状态
    //$('.sp-box-dotnav a:first').addClass('cur');
    ////隐藏向前、向后翻按钮

    //鼠标上悬时显示向前、向后翻按钮,停止滑动，鼠标离开时隐藏向前、向后翻按钮，开始滑动

    $('.left-arrow').unbind('click');
    $('.left-arrow').bind('click', function() {
        pre();
    });
    $('.right-arrow').unbind('click');
    $('.right-arrow').bind('click', function() {
        next();
    });

    //向前翻页
    function pre() {
        var preIndex = currentIndex2;
        currentIndex2 = (--currentIndex2 + length2) % length2;
        play(preIndex, currentIndex2);
    }
    //向后翻页


    function next() {
        var preIndex = currentIndex2;
        currentIndex2 = ++currentIndex2 % length2;
        play(preIndex, currentIndex2);
    }
    /**
     * 从preIndex页翻到currentIndex页
     * preIndex 整数，翻页的起始页
     * currentIndex 整数，翻到的那页
     */

    function play(preIndex, currentIndex2) {
        $('.Introduction').eq(preIndex).fadeOut(500)
            .parent().children().eq(currentIndex2).fadeIn(1000);
        $('.page-item').removeClass('active');
        $('.page-item').eq(currentIndex2).addClass('active');
    }

    //开始轮播

    function start() {
        if (!hasStarted2) {
            hasStarted2 = true;
            interval2 = setInterval(next, t2);
        }
    }

    // 停止轮播

    function stop() {
        clearInterval(interval2);
        hasStarted2 = false;
    }
    //开始轮播
    ///start();
});







;//个人资料
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
});;
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
});;/**
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

});;///////个人资料
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
;//发布文章
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