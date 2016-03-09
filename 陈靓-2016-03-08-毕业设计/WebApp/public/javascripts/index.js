/**
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







