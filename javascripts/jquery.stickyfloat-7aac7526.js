/*
 * stickyfloat - jQuery plugin for verticaly floating anything in a constrained area
 *
 * Example: jQuery('#menu').stickyfloat({duration: 400});
 * parameters:
 * 		duration 	(200)	 - the duration of the animation
 *		startOffset (number) - the amount of scroll offset after the animations kicks in
 *		offsetY		(number) - the offset from the top when the object is animated
 *		lockBottom	(true)	 - set to false if you don't want your floating box to stop at parent's bottom
 *		delay		(0)		 - delay in milliseconds  until the animnations starts
		easing		(linear) - easing function (jQuery has by default only 'swing' & 'linear')
 * $Version: 08.10.2011 r2
 * $Version: 05.16.2009 r1
 * Copyright (c) 2009 Yair Even-Or
 * vsync.design@gmail.com
 */
!function(t){t.fn.stickyfloat=function(o){function s(){a.duration>40?(clearTimeout(p),p=setTimeout(function(){Math.abs(u.scrollTop()-d)>0&&(d=u.scrollTop(),e())},40)):e()}function e(){n.stop(),f=u.scrollTop()>a.startOffset,l=n.offset().top>g,r=n.outerHeight()<t(window).height(),(f||l)&&r&&(c=u.scrollTop()-g+a.offsetY,c>i&&(c=i),u.scrollTop()<a.startOffset&&(c=h),n.delay(a.delay).animate({top:c},a.duration,a.easing))}var n=this;if(0!=n.length){var a,i,f,l,r,c,p,u=t(document),d=u.scrollTop(),h=parseInt(n.parent().css("padding-top")),g=n.parent().offset().top;t.extend(t.fn.stickyfloat.opts,o,{startOffset:g,offsetY:h}),a=t.fn.stickyfloat.opts,n.css({position:"absolute"}),a.lockBottom&&(i=n.parent().height()-n.outerHeight()+h)<0&&(i=0),t(window).scroll(s)}},t.fn.stickyfloat.opts={duration:200,lockBottom:!0,delay:0,easing:"linear"}}(jQuery);