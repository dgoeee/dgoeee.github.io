jQuery(document).ready(function ($) {

	$(".main-menu a").click(function () {
		var id = $(this).attr('class');
		id = id.split('-');
		$('a.active').removeClass('active');
		$(this).addClass('active');
		$("#menu-container .content").slideUp('slow');
		$("#menu-container #menu-" + id[1]).slideDown('slow');
		$("#menu-container .homepage").slideUp('slow');
		return false;
	});

	// 主页
	$(".main-menu a.homebutton").click(function () {
		$("#menu-container .content").slideUp('slow');
		$("#menu-container .homepage").slideDown('slow');
		return false;
	});

	// 关于
	$(".main-menu a.aboutbutton").click(function () {
		$("#menu-container .content").slideUp('slow');
		$("#menu-container .about-section").slideDown('slow');
		return false;
	});

	// 事件
	$(".main-menu a.projectbutton").click(function () {
		$("#menu-container .content").slideUp('slow');
		$("#menu-container .project-section").slideDown('slow');
		return false;
	});

	// 理论库
	$(".main-menu a.blogbutton").click(function () {
		$("#menu-container .content").slideUp('slow');
		$("#menu-container .blog-section").slideDown('slow');
		return false;
	});

	// 联系
	$(".main-menu a.contactbutton").click(function () {
		$("#menu-container .content").fadeOut();
		$("#menu-container .contact-section").slideDown('slow');
		loadScript();
		return false;
	});

	//////////////////////////////////////////////////////////////
	//这个区域是各种二级内容页面的跳转方式                            //
	//////////////////////////////////////////////////////////////
	//
/* 	// 这是js文件里应有的一段跳转规则，??????是目标页面的名字
	$(".main-menu a.??????button").click(function () {
		$("#menu-container .content").slideUp('slow');
		$("#menu-container .??????").slideDown('slow');
		return false;
	});

	// 写在html文件里，按下之后跳转到目标界面的按钮，??????是目标页面的名字
	<div class="main-menu">
		<a class="??????button post-button" href="#">前往</a>
	</div>

	// 写在html文件里，跳转之后的目标页面，??????是目标页面的名字
	<div class="content ?????? container">
		<div class="blog-header text-center">
			<h2 class="animated fadeInRight">主观经验汇总</h2>
			<p class="animated fadeInLeft">补充网络信息中少有提及的细枝末节</p>
			<a href="#" class="blog-button animated fadeInUp">确定</a>
		</div>
	</div>
 */
	//////////////////////////////////////////////////////////////
	//                                                          //
	//////////////////////////////////////////////////////////////

	// LunHua1
	$(".main-menu a.LunHua1button").click(function () {
		$("#menu-container .content").slideUp('slow');
		$("#menu-container .LunHua1").slideDown('slow');
		return false;
	});

	//////////////////////////////////////////////////////////////
	//                                                          //
	//////////////////////////////////////////////////////////////

	$('a.toggle-nav').click(function () {
		$('.menu-responsive').slideToggle();
	});

	$('.menu-responsive a').click(function () {
		$('.menu-responsive').slideToggle().hide();
	});

});


function loadScript() {
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
		'callback=initialize';
	document.body.appendChild(script);
}

function initialize() {
	var mapOptions = {
		zoom: 15,
		center: new google.maps.LatLng(16.8496189, 96.1288854)
	};
	var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
}