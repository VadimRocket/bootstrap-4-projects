var Singleton = (function(){
	var instance;

	var SERVER = 'local';

	function Singleton(){
		if (!instance) {
			instance = this;
		}else{
			return instance;
		}
	}

Singleton.prototype.connect = (first_argument) => {
	console.log('Connect' + ' ' + SERVER);
  };

Singleton.prototype.changeheightNavbar = function(){

	$(window).scroll(function(){
			var styleNavMemuMin = {
		      padding: "0px 1rem",
		    };
			var styleNavMenuNorm = {
		      padding: "0.5rem 1rem",
		    };
		    if ($(window).scrollTop() > 100) {
	        $('.navbar').addClass('navbarmin').css(styleNavMemuMin);
		    }
		    else {
		        $('.navbar').removeClass('navbarmin').css(styleNavMenuNorm);

		    }
		});
};

Singleton.prototype.changeNavClass = function(){
	$(document).on("scroll", onScroll);
	//smoothscroll
	$('a[href^="#"]').on('click', function (e) {
			e.preventDefault();
			$(document).off("scroll");

			$('a').each(function () {
					$(this).removeClass('active');
			})
			$(this).addClass('active');

			var target = this.hash,
					menu = target;
			$target = $(target);
			$('html, body').stop().animate({
					'scrollTop': $target.offset().top + 3
			}, 500, 'swing', function () {
					window.location.hash = target;
					$(document).on("scroll", onScroll);
			});
	});

	function onScroll(event){
			var scrollPos = $(document).scrollTop();
			$('#navbarNav a').each(function () {
					var currLink = $(this);
					var refElement = $(currLink.attr("href"));
					if (refElement.position().top <= scrollPos + 150 && refElement.position().top + refElement.height() > scrollPos ) {
						$('#navbarNav ul li a').removeClass("active");
						currLink.addClass("active");
					}
					else{
						currLink.removeClass("active");
					}
			});
	}

};
return Singleton;
}());

var sp = new Singleton();
sp.changeheightNavbar();
sp.changeNavClass();
