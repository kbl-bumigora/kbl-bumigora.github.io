function navigation(){
    var window_top = $(window).scrollTop;
    var div_top = $('.navbar-fixed').offset().top;
    if (window_top > div_top) {
		$('.nav-wrapper blue').css('top', window_top - div_top);
		$('.container').addClass("padding");
	} else {
		$('.nav-wrapper blue').css('top', '0px');
		$('.container').removeClass("padding");
	}
}

//Placed at bottom of functions
$(document).ready(function() {
	$.backstretch([
		"http://fc03.deviantart.net/fs71/f/2012/137/c/0/hd_wallpaper___minecraft_jungle_by_popliop-d5049ci.png", 
		"http://www.ipadniks.com/wallpaper/anime-minecraft-fondos-pantallas-imagenes_261228.jpg", 
		"http://th01.deviantart.net/fs71/PRE/f/2012/362/a/1/minecraft_woodenfloor_wallpaper_by_lpzdesign-d5phzax.jpg"
	], {duration: 3000, fade: 750});
	$('body').scroll(navigation);
  navigation();	
	var $root = $('html, body');
	$('a').click(function() {
			$root.animate({
					scrollTop: $( $(this).attr('href') ).offset().top
			}, 500);
			return false;
	});
});