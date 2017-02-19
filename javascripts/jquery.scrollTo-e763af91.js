/**
 * jQuery.ScrollTo
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 5/25/2009
 *
 * @projectDescription Easy element scrolling using jQuery.
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 * Works with jQuery +1.2.6. Tested on FF 2/3, IE 6/7/8, Opera 9.5/6, Safari 3, Chrome 1 on WinXP.
 *
 * @author Ariel Flesler
 * @version 1.4.2
 *
 * @id jQuery.scrollTo
 * @id jQuery.fn.scrollTo
 * @param {String, Number, DOMElement, jQuery, Object} target Where to scroll the matched elements.
 *	  The different options for target are:
 *		- A number position (will be applied to all axes).
 *		- A string position ('44', '100px', '+=90', etc ) will be applied to all axes
 *		- A jQuery/DOM element ( logically, child of the element to scroll )
 *		- A string selector, that will be relative to the element to scroll ( 'li:eq(2)', etc )
 *		- A hash { top:x, left:y }, x and y can be any kind of number/string like above.
*		- A percentage of the container's dimension/s, for example: 50% to go to the middle.
 *		- The string 'max' for go-to-end. 
 * @param {Number} duration The OVERALL length of the animation, this argument can be the settings object instead.
 * @param {Object,Function} settings Optional set of settings or the onAfter callback.
 *	 @option {String} axis Which axis must be scrolled, use 'x', 'y', 'xy' or 'yx'.
 *	 @option {Number} duration The OVERALL length of the animation.
 *	 @option {String} easing The easing method for the animation.
 *	 @option {Boolean} margin If true, the margin of the target element will be deducted from the final position.
 *	 @option {Object, Number} offset Add/deduct from the end position. One number for both axes or { top:x, left:y }.
 *	 @option {Object, Number} over Add/deduct the height/width multiplied by 'over', can be { top:x, left:y } when using both axes.
 *	 @option {Boolean} queue If true, and both axis are given, the 2nd axis will only be animated after the first one ends.
 *	 @option {Function} onAfter Function to be called after the scrolling ends. 
 *	 @option {Function} onAfterFirst If queuing is activated, this function will be called after the first scrolling ends.
 * @return {jQuery} Returns the same jQuery object, for chaining.
 *
 * @desc Scroll to a fixed position
 * @example $('div').scrollTo( 340 );
 *
 * @desc Scroll relatively to the actual position
 * @example $('div').scrollTo( '+=340px', { axis:'y' } );
 *
 * @dec Scroll using a selector (relative to the scrolled element)
 * @example $('div').scrollTo( 'p.paragraph:eq(2)', 500, { easing:'swing', queue:true, axis:'xy' } );
 *
 * @ Scroll to a DOM element (same for jQuery object)
 * @example var second_child = document.getElementById('container').firstChild.nextSibling;
 *			$('#container').scrollTo( second_child, { duration:500, axis:'x', onAfter:function(){
 *				alert('scrolled!!');																   
 *			}});
 *
 * @desc Scroll on both axes, to different values
 * @example $('div').scrollTo( { top: 300, left:'+=200' }, { axis:'xy', offset:-20 } );
 */
!function(e){function t(e){return"object"==typeof e?e:{top:e,left:e}}var o=e.scrollTo=function(t,o,n){e(window).scrollTo(t,o,n)};o.defaults={axis:"xy",duration:parseFloat(e.fn.jquery)>=1.3?0:1},o.window=function(){return e(window)._scrollable()},e.fn._scrollable=function(){return this.map(function(){var t=this,o=!t.nodeName||-1!=e.inArray(t.nodeName.toLowerCase(),["iframe","#document","html","body"]);if(!o)return t;var n=(t.contentWindow||t).document||t.ownerDocument||t;return e.browser.safari||"BackCompat"==n.compatMode?n.body:n.documentElement})},e.fn.scrollTo=function(n,r,a){return"object"==typeof r&&(a=r,r=0),"function"==typeof a&&(a={onAfter:a}),"max"==n&&(n=9e9),a=e.extend({},o.defaults,a),r=r||a.speed||a.duration,a.queue=a.queue&&a.axis.length>1,a.queue&&(r/=2),a.offset=t(a.offset),a.over=t(a.over),this._scrollable().each(function(){function i(e){f.animate(l,r,a.easing,e&&function(){e.call(this,n,a)})}var s,c=this,f=e(c),u=n,l={},d=f.is("html,body");switch(typeof u){case"number":case"string":if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(u)){u=t(u);break}u=e(u,this);case"object":(u.is||u.style)&&(s=(u=e(u)).offset())}e.each(a.axis.split(""),function(e,t){var n="x"==t?"Left":"Top",r=n.toLowerCase(),m="scroll"+n,h=c[m],p=o.max(c,t);if(s)l[m]=s[r]+(d?0:h-f.offset()[r]),a.margin&&(l[m]-=parseInt(u.css("margin"+n))||0,l[m]-=parseInt(u.css("border"+n+"Width"))||0),l[m]+=a.offset[r]||0,a.over[r]&&(l[m]+=u["x"==t?"width":"height"]()*a.over[r]);else{var w=u[r];l[m]=w.slice&&"%"==w.slice(-1)?parseFloat(w)/100*p:w}/^\d+$/.test(l[m])&&(l[m]=l[m]<=0?0:Math.min(l[m],p)),!e&&a.queue&&(h!=l[m]&&i(a.onAfterFirst),delete l[m])}),i(a.onAfter)}).end()},o.max=function(t,o){var n="x"==o?"Width":"Height",r="scroll"+n;if(!e(t).is("html,body"))return t[r]-e(t)[n.toLowerCase()]();var a="client"+n,i=t.ownerDocument.documentElement,s=t.ownerDocument.body;return Math.max(i[r],s[r])-Math.min(i[a],s[a])}}(jQuery);