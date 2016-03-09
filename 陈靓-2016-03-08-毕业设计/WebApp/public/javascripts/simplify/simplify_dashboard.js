$(function	()	{

  	////Flot Chart (Total Sales)
	//var d1 = [];
	//for (var i = 0; i <= 10; i += 1) {
	//	//d1.push([i, parseInt(Math.random() * 30)]);
	//	d1 = [[0,40],[1,50],[2,60],[3,70],[4,80],[5,90],[6,100],[7,110],[8,120],[9,130],[10,140]];
	//}
    //
	//function plotWithOptions() {
	//	$.plot("#placeholder", [d1], {
	//		series: {
	//			lines: {
	//				show: true,
	//				fill: true,
	//				fillColor: '#eee',
	//				steps: false,
    //
	//			},
	//			points: {
	//				show: true,
	//				fill: false
	//			}
	//		},
    //
	//		grid: {
	//			color: '#fff',
	//			hoverable: true,
    	//		autoHighlight: true,
	//		},
	//		colors: [ '#bbb'],
	//	});
	//}
    //
	//$("<div id='tooltip'></div>").css({
	//	position: "absolute",
	//	display: "none",
	//	border: "1px solid #222",
	//	padding: "4px",
	//	color: "#fff",
	//	"border-radius": "4px",
	//	"background-color": "rgb(0,0,0)",
	//	opacity: 0.90
	//}).appendTo("body");

	//$("#placeholder").bind("plothover", function (event, pos, item) {
    //
	//	var str = "(" + pos.x.toFixed(2) + ", " + pos.y.toFixed(2) + ")";
	//	$("#hoverdata").text(str);
	//
	//	if (item) {
	//		var x = item.datapoint[0],
	//			y = item.datapoint[1];
	//
	//			$("#tooltip").html("Total Sales : " + y)
	//			.css({top: item.pageY+5, left: item.pageX+5})
	//			.fadeIn(200);
	//	} else {
	//		$("#tooltip").hide();
	//	}
	//});

	//plotWithOptions();

	//Morris Chart (Total Visits)
	//var totalVisitChart = Morris.Bar({
	//  element: 'totalSalesChart',
	//  data: [
	//    { y: '2010', a: 100, b: 90 },
	//    { y: '2011', a: 75,  b: 65 },
	//    { y: '2012', a: 50,  b: 40 },
	//    { y: '2013', a: 75,  b: 65 },
	//    { y: '2014', a: 50,  b: 40 },
	//    { y: '2015', a: 75,  b: 65 },
	//    { y: '2016', a: 100, b: 90 }
	//  ],
	//  xkey: 'y',
	//  ykeys: ['a', 'b'],
	//  labels: ['Total Visits', 'Bounce Rate'],
	//  barColors: ['#999', '#eee'],
	//  grid: false,
	//  gridTextColor: '#777',
	//});

	Date.prototype.format = function(format)
	{
		var o = {
			"M+" : this.getMonth()+1, //month
			"d+" : this.getDate(),    //day
			"h+" : this.getHours(),   //hour
			"m+" : this.getMinutes(), //minute
			"s+" : this.getSeconds(), //second
			"q+" : Math.floor((this.getMonth()+3)/3),  //quarter
			"S" : this.getMilliseconds() //millisecond
		}
		if(/(y+)/.test(format)) format=format.replace(RegExp.$1,
			(this.getFullYear()+"").substr(4 - RegExp.$1.length));
		for(var k in o)if(new RegExp("("+ k +")").test(format))
			format = format.replace(RegExp.$1,
				RegExp.$1.length==1 ? o[k] :
					("00"+ o[k]).substr((""+ o[k]).length));
		return format;
	}
	var datenew= new Date().format('yyyy-MM-dd');
	//Datepicker
	$('#calendar').DatePicker({
		flat: true,

		date: datenew
    	//onSelect: function(dateText, inst) {
	//	var month = $("#ui-datepicker-div .ui-datepicker-month :selected").val();
	//	var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
	//	$(this).datepicker('setDate', new Date(year, month, 1));
	//	if(operation == 'update'){
    //
	//		getBasisIndexData();
	//	};
	//},
	///current: new Date(),
		//calendars: 1,
	//	dataformat: 'Y-m-d',
		///starts: 1

	});

	//Skycon
	var icons = new Skycons({"color": "white"});
    icons.set("skycon1", "sleet");
    icons.set("skycon2", "partly-cloudy-day");
    icons.set("skycon3", "wind");
    icons.set("skycon4", "clear-day");
    icons.play();

	//Scrollable Chat Widget
	$('#chatScroll').slimScroll({
		height:'230px'
	});

	//Chat notification
	setTimeout(function() {
		$('.chat-notification').find('.badge').addClass('active');
		$('.chat-alert').addClass('active');
	}, 3000);

	setTimeout(function() {
		$('.chat-alert').removeClass('active');
	}, 8000);
	//
	//$(window).resize(function(e)	{
	//	// Redraw All Chart
	//	setTimeout(function() {
	//		totalVisitChart.redraw();
	//		plotWithOptions();
	//	},500);
	//});

	//$('#sidebarToggleLG').click(function()	{
	//	// Redraw All Chart
	//	setTimeout(function() {
	//		totalVisitChart.redraw();
	//		plotWithOptions();
	//	},500);
	//});

	//$('#sidebarToggleSM').click(function()	{
	//	// Redraw All Chart
	//	setTimeout(function() {
	//		totalVisitChart.redraw();
	//		plotWithOptions();
	//	},500);
	//});
});
