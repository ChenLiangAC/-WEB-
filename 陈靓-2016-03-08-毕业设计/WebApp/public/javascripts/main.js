/**
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
