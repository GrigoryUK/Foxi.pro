/** bxSlider 4.2.12 */

!function(t){var e={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,wrapperClass:"bx-wrapper",touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,ariaLive:!0,ariaHidden:!0,keyboardEnabled:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",stopAutoOnClick:!1,autoHover:!1,autoDelay:0,autoSlideForOnePage:!1,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,shrinkItems:!1,onSliderLoad:function(){return!0},onSlideBefore:function(){return!0},onSlideAfter:function(){return!0},onSlideNext:function(){return!0},onSlidePrev:function(){return!0},onSliderResize:function(){return!0},onAutoChange:function(){return!0}};t.fn.bxSlider=function(n){if(0===this.length)return this;if(this.length>1)return this.each(function(){t(this).bxSlider(n)}),this;var s={},o=this,r=t(window).width(),a=t(window).height();if(!t(o).data("bxSlider")){var l=function(){t(o).data("bxSlider")||(s.settings=t.extend({},e,n),s.settings.slideWidth=parseInt(s.settings.slideWidth),s.children=o.children(s.settings.slideSelector),s.children.length<s.settings.minSlides&&(s.settings.minSlides=s.children.length),s.children.length<s.settings.maxSlides&&(s.settings.maxSlides=s.children.length),s.settings.randomStart&&(s.settings.startSlide=Math.floor(Math.random()*s.children.length)),s.active={index:s.settings.startSlide},s.carousel=s.settings.minSlides>1||s.settings.maxSlides>1,s.carousel&&(s.settings.preloadImages="all"),s.minThreshold=s.settings.minSlides*s.settings.slideWidth+(s.settings.minSlides-1)*s.settings.slideMargin,s.maxThreshold=s.settings.maxSlides*s.settings.slideWidth+(s.settings.maxSlides-1)*s.settings.slideMargin,s.working=!1,s.controls={},s.interval=null,s.animProp="vertical"===s.settings.mode?"top":"left",s.usingCSS=s.settings.useCSS&&"fade"!==s.settings.mode&&function(){for(var t=document.createElement("div"),e=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"],i=0;i<e.length;i++)if(void 0!==t.style[e[i]])return s.cssPrefix=e[i].replace("Perspective","").toLowerCase(),s.animProp="-"+s.cssPrefix+"-transform",!0;return!1}(),"vertical"===s.settings.mode&&(s.settings.maxSlides=s.settings.minSlides),o.data("origStyle",o.attr("style")),o.children(s.settings.slideSelector).each(function(){t(this).data("origStyle",t(this).attr("style"))}),d())},d=function(){var e=s.children.eq(s.settings.startSlide);o.wrap('<div class="'+s.settings.wrapperClass+'"><div class="bx-viewport"></div></div>'),s.viewport=o.parent(),s.settings.ariaLive&&!s.settings.ticker&&s.viewport.attr("aria-live","polite"),s.loader=t('<div class="bx-loading" />'),s.viewport.prepend(s.loader),o.css({width:"horizontal"===s.settings.mode?1e3*s.children.length+215+"%":"auto",position:"relative"}),s.usingCSS&&s.settings.easing?o.css("-"+s.cssPrefix+"-transition-timing-function",s.settings.easing):s.settings.easing||(s.settings.easing="swing"),s.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),s.viewport.parent().css({maxWidth:u()}),s.children.css({float:"horizontal"===s.settings.mode?"left":"none",listStyle:"none",position:"relative"}),s.children.css("width",h()),"horizontal"===s.settings.mode&&s.settings.slideMargin>0&&s.children.css("marginRight",s.settings.slideMargin),"vertical"===s.settings.mode&&s.settings.slideMargin>0&&s.children.css("marginBottom",s.settings.slideMargin),"fade"===s.settings.mode&&(s.children.css({position:"absolute",zIndex:0,display:"none"}),s.children.eq(s.settings.startSlide).css({zIndex:s.settings.slideZIndex,display:"block"})),s.controls.el=t('<div class="bx-controls" />'),s.settings.captions&&P(),s.active.last=s.settings.startSlide===f()-1,s.settings.video&&o.fitVids(),("all"===s.settings.preloadImages||s.settings.ticker)&&(e=s.children),s.settings.ticker?s.settings.pager=!1:(s.settings.controls&&C(),s.settings.auto&&s.settings.autoControls&&T(),s.settings.pager&&w(),(s.settings.controls||s.settings.autoControls||s.settings.pager)&&s.viewport.after(s.controls.el)),c(e,g)},c=function(e,i){var n=e.find('img:not([src=""]), iframe').length,s=0;if(0===n)return void i();e.find('img:not([src=""]), iframe').each(function(){t(this).one("load error",function(){++s===n&&i()}).each(function(){(this.complete||""==this.src)&&t(this).trigger("load")})})},g=function(){if(s.settings.infiniteLoop&&"fade"!==s.settings.mode&&!s.settings.ticker){var e="vertical"===s.settings.mode?s.settings.minSlides:s.settings.maxSlides,i=s.children.slice(0,e).clone(!0).addClass("bx-clone"),n=s.children.slice(-e).clone(!0).addClass("bx-clone");s.settings.ariaHidden&&(i.attr("aria-hidden",!0),n.attr("aria-hidden",!0)),o.append(i).prepend(n)}s.loader.remove(),m(),"vertical"===s.settings.mode&&(s.settings.adaptiveHeight=!0),s.viewport.height(p()),o.redrawSlider(),s.settings.onSliderLoad.call(o,s.active.index),s.initialized=!0,s.settings.responsive&&t(window).bind("resize",U),s.settings.auto&&s.settings.autoStart&&(f()>1||s.settings.autoSlideForOnePage)&&L(),s.settings.ticker&&O(),s.settings.pager&&I(s.settings.startSlide),s.settings.controls&&D(),s.settings.touchEnabled&&!s.settings.ticker&&Y(),s.settings.keyboardEnabled&&!s.settings.ticker&&t(document).keydown(X)},p=function(){var e=0,n=t();if("vertical"===s.settings.mode||s.settings.adaptiveHeight)if(s.carousel){var o=1===s.settings.moveSlides?s.active.index:s.active.index*x();for(n=s.children.eq(o),i=1;i<=s.settings.maxSlides-1;i++)n=o+i>=s.children.length?n.add(s.children.eq(i-1)):n.add(s.children.eq(o+i))}else n=s.children.eq(s.active.index);else n=s.children;return"vertical"===s.settings.mode?(n.each(function(i){e+=t(this).outerHeight()}),s.settings.slideMargin>0&&(e+=s.settings.slideMargin*(s.settings.minSlides-1))):e=Math.max.apply(Math,n.map(function(){return t(this).outerHeight(!1)}).get()),"border-box"===s.viewport.css("box-sizing")?e+=parseFloat(s.viewport.css("padding-top"))+parseFloat(s.viewport.css("padding-bottom"))+parseFloat(s.viewport.css("border-top-width"))+parseFloat(s.viewport.css("border-bottom-width")):"padding-box"===s.viewport.css("box-sizing")&&(e+=parseFloat(s.viewport.css("padding-top"))+parseFloat(s.viewport.css("padding-bottom"))),e},u=function(){var t="100%";return s.settings.slideWidth>0&&(t="horizontal"===s.settings.mode?s.settings.maxSlides*s.settings.slideWidth+(s.settings.maxSlides-1)*s.settings.slideMargin:s.settings.slideWidth),t},h=function(){var t=s.settings.slideWidth,e=s.viewport.width();if(0===s.settings.slideWidth||s.settings.slideWidth>e&&!s.carousel||"vertical"===s.settings.mode)t=e;else if(s.settings.maxSlides>1&&"horizontal"===s.settings.mode){if(e>s.maxThreshold)return t;e<s.minThreshold?t=(e-s.settings.slideMargin*(s.settings.minSlides-1))/s.settings.minSlides:s.settings.shrinkItems&&(t=Math.floor((e+s.settings.slideMargin)/Math.ceil((e+s.settings.slideMargin)/(t+s.settings.slideMargin))-s.settings.slideMargin))}return t},v=function(){var t=1,e=null;return"horizontal"===s.settings.mode&&s.settings.slideWidth>0?s.viewport.width()<s.minThreshold?t=s.settings.minSlides:s.viewport.width()>s.maxThreshold?t=s.settings.maxSlides:(e=s.children.first().width()+s.settings.slideMargin,t=Math.floor((s.viewport.width()+s.settings.slideMargin)/e)||1):"vertical"===s.settings.mode&&(t=s.settings.minSlides),t},f=function(){var t=0,e=0,i=0;if(s.settings.moveSlides>0){if(!s.settings.infiniteLoop){for(;e<s.children.length;)++t,e=i+v(),i+=s.settings.moveSlides<=v()?s.settings.moveSlides:v();return i}t=Math.ceil(s.children.length/x())}else t=Math.ceil(s.children.length/v());return t},x=function(){return s.settings.moveSlides>0&&s.settings.moveSlides<=v()?s.settings.moveSlides:v()},m=function(){var t,e,i;s.children.length>s.settings.maxSlides&&s.active.last&&!s.settings.infiniteLoop?"horizontal"===s.settings.mode?(e=s.children.last(),t=e.position(),S(-(t.left-(s.viewport.width()-e.outerWidth())),"reset",0)):"vertical"===s.settings.mode&&(i=s.children.length-s.settings.minSlides,t=s.children.eq(i).position(),S(-t.top,"reset",0)):(t=s.children.eq(s.active.index*x()).position(),s.active.index===f()-1&&(s.active.last=!0),void 0!==t&&("horizontal"===s.settings.mode?S(-t.left,"reset",0):"vertical"===s.settings.mode&&S(-t.top,"reset",0)))},S=function(e,i,n,r){var a,l;s.usingCSS?(l="vertical"===s.settings.mode?"translate3d(0, "+e+"px, 0)":"translate3d("+e+"px, 0, 0)",o.css("-"+s.cssPrefix+"-transition-duration",n/1e3+"s"),"slide"===i?(o.css(s.animProp,l),0!==n?o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(e){t(e.target).is(o)&&(o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),A())}):A()):"reset"===i?o.css(s.animProp,l):"ticker"===i&&(o.css("-"+s.cssPrefix+"-transition-timing-function","linear"),o.css(s.animProp,l),0!==n?o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(e){t(e.target).is(o)&&(o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),S(r.resetValue,"reset",0),F())}):(S(r.resetValue,"reset",0),F()))):(a={},a[s.animProp]=e,"slide"===i?o.animate(a,n,s.settings.easing,function(){A()}):"reset"===i?o.css(s.animProp,e):"ticker"===i&&o.animate(a,n,"linear",function(){S(r.resetValue,"reset",0),F()}))},b=function(){for(var e="",i="",n=f(),o=0;o<n;o++)i="",s.settings.buildPager&&t.isFunction(s.settings.buildPager)||s.settings.pagerCustom?(i=s.settings.buildPager(o),s.pagerEl.addClass("bx-custom-pager")):(i=o+1,s.pagerEl.addClass("bx-default-pager")),e+='<div class="bx-pager-item"><a href="" data-slide-index="'+o+'" class="bx-pager-link">'+i+"</a></div>";s.pagerEl.html(e)},w=function(){s.settings.pagerCustom?s.pagerEl=t(s.settings.pagerCustom):(s.pagerEl=t('<div class="bx-pager" />'),s.settings.pagerSelector?t(s.settings.pagerSelector).html(s.pagerEl):s.controls.el.addClass("bx-has-pager").append(s.pagerEl),b()),s.pagerEl.on("click touchend","a",z)},C=function(){s.controls.next=t('<a class="bx-next" href="">'+s.settings.nextText+"</a>"),s.controls.prev=t('<a class="bx-prev" href="">'+s.settings.prevText+"</a>"),s.controls.next.bind("click touchend",k),s.controls.prev.bind("click touchend",E),s.settings.nextSelector&&t(s.settings.nextSelector).append(s.controls.next),s.settings.prevSelector&&t(s.settings.prevSelector).append(s.controls.prev),s.settings.nextSelector||s.settings.prevSelector||(s.controls.directionEl=t('<div class="bx-controls-direction" />'),s.controls.directionEl.append(s.controls.prev).append(s.controls.next),s.controls.el.addClass("bx-has-controls-direction").append(s.controls.directionEl))},T=function(){s.controls.start=t('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+s.settings.startText+"</a></div>"),s.controls.stop=t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+s.settings.stopText+"</a></div>"),s.controls.autoEl=t('<div class="bx-controls-auto" />'),s.controls.autoEl.on("click",".bx-start",M),s.controls.autoEl.on("click",".bx-stop",y),s.settings.autoControlsCombine?s.controls.autoEl.append(s.controls.start):s.controls.autoEl.append(s.controls.start).append(s.controls.stop),s.settings.autoControlsSelector?t(s.settings.autoControlsSelector).html(s.controls.autoEl):s.controls.el.addClass("bx-has-controls-auto").append(s.controls.autoEl),q(s.settings.autoStart?"stop":"start")},P=function(){s.children.each(function(e){var i=t(this).find("img:first").attr("title");void 0!==i&&(""+i).length&&t(this).append('<div class="bx-caption"><span>'+i+"</span></div>")})},k=function(t){t.preventDefault(),s.controls.el.hasClass("disabled")||(s.settings.auto&&s.settings.stopAutoOnClick&&o.stopAuto(),o.goToNextSlide())},E=function(t){t.preventDefault(),s.controls.el.hasClass("disabled")||(s.settings.auto&&s.settings.stopAutoOnClick&&o.stopAuto(),o.goToPrevSlide())},M=function(t){o.startAuto(),t.preventDefault()},y=function(t){o.stopAuto(),t.preventDefault()},z=function(e){var i,n;e.preventDefault(),s.controls.el.hasClass("disabled")||(s.settings.auto&&s.settings.stopAutoOnClick&&o.stopAuto(),i=t(e.currentTarget),void 0!==i.attr("data-slide-index")&&(n=parseInt(i.attr("data-slide-index")))!==s.active.index&&o.goToSlide(n))},I=function(e){var i=s.children.length;if("short"===s.settings.pagerType)return s.settings.maxSlides>1&&(i=Math.ceil(s.children.length/s.settings.maxSlides)),void s.pagerEl.html(e+1+s.settings.pagerShortSeparator+i);s.pagerEl.find("a").removeClass("active"),s.pagerEl.each(function(i,n){t(n).find("a").eq(e).addClass("active")})},A=function(){if(s.settings.infiniteLoop){var t="";0===s.active.index?t=s.children.eq(0).position():s.active.index===f()-1&&s.carousel?t=s.children.eq((f()-1)*x()).position():s.active.index===s.children.length-1&&(t=s.children.eq(s.children.length-1).position()),t&&("horizontal"===s.settings.mode?S(-t.left,"reset",0):"vertical"===s.settings.mode&&S(-t.top,"reset",0))}s.working=!1,s.settings.onSlideAfter.call(o,s.children.eq(s.active.index),s.oldIndex,s.active.index)},q=function(t){s.settings.autoControlsCombine?s.controls.autoEl.html(s.controls[t]):(s.controls.autoEl.find("a").removeClass("active"),s.controls.autoEl.find("a:not(.bx-"+t+")").addClass("active"))},D=function(){1===f()?(s.controls.prev.addClass("disabled"),s.controls.next.addClass("disabled")):!s.settings.infiniteLoop&&s.settings.hideControlOnEnd&&(0===s.active.index?(s.controls.prev.addClass("disabled"),s.controls.next.removeClass("disabled")):s.active.index===f()-1?(s.controls.next.addClass("disabled"),s.controls.prev.removeClass("disabled")):(s.controls.prev.removeClass("disabled"),s.controls.next.removeClass("disabled")))},H=function(){o.startAuto()},W=function(){o.stopAuto()},L=function(){if(s.settings.autoDelay>0){setTimeout(o.startAuto,s.settings.autoDelay)}else o.startAuto(),t(window).focus(H).blur(W);s.settings.autoHover&&o.hover(function(){s.interval&&(o.stopAuto(!0),s.autoPaused=!0)},function(){s.autoPaused&&(o.startAuto(!0),s.autoPaused=null)})},O=function(){var e,i,n,r,a,l,d,c,g=0;"next"===s.settings.autoDirection?o.append(s.children.clone().addClass("bx-clone")):(o.prepend(s.children.clone().addClass("bx-clone")),e=s.children.first().position(),g="horizontal"===s.settings.mode?-e.left:-e.top),S(g,"reset",0),s.settings.pager=!1,s.settings.controls=!1,s.settings.autoControls=!1,s.settings.tickerHover&&(s.usingCSS?(r="horizontal"===s.settings.mode?4:5,s.viewport.hover(function(){i=o.css("-"+s.cssPrefix+"-transform"),n=parseFloat(i.split(",")[r]),S(n,"reset",0)},function(){c=0,s.children.each(function(e){c+="horizontal"===s.settings.mode?t(this).outerWidth(!0):t(this).outerHeight(!0)}),a=s.settings.speed/c,l="horizontal"===s.settings.mode?"left":"top",d=a*(c-Math.abs(parseInt(n))),F(d)})):s.viewport.hover(function(){o.stop()},function(){c=0,s.children.each(function(e){c+="horizontal"===s.settings.mode?t(this).outerWidth(!0):t(this).outerHeight(!0)}),a=s.settings.speed/c,l="horizontal"===s.settings.mode?"left":"top",d=a*(c-Math.abs(parseInt(o.css(l)))),F(d)})),F()},F=function(t){var e,i,n,r=t?t:s.settings.speed,a={left:0,top:0},l={left:0,top:0};"next"===s.settings.autoDirection?a=o.find(".bx-clone").first().position():l=s.children.first().position(),e="horizontal"===s.settings.mode?-a.left:-a.top,i="horizontal"===s.settings.mode?-l.left:-l.top,n={resetValue:i},S(e,"ticker",r,n)},N=function(e){var i=t(window),n={top:i.scrollTop(),left:i.scrollLeft()},s=e.offset();return n.right=n.left+i.width(),n.bottom=n.top+i.height(),s.right=s.left+e.outerWidth(),s.bottom=s.top+e.outerHeight(),!(n.right<s.left||n.left>s.right||n.bottom<s.top||n.top>s.bottom)},X=function(t){var e=document.activeElement.tagName.toLowerCase();if(null==new RegExp(e,["i"]).exec("input|textarea")&&N(o)){if(39===t.keyCode)return k(t),!1;if(37===t.keyCode)return E(t),!1}},Y=function(){s.touch={start:{x:0,y:0},end:{x:0,y:0}},s.viewport.bind("touchstart MSPointerDown pointerdown",V),s.viewport.on("click",".bxslider a",function(t){s.viewport.hasClass("click-disabled")&&(t.preventDefault(),s.viewport.removeClass("click-disabled"))})},V=function(t){if(s.controls.el.addClass("disabled"),s.working)t.preventDefault(),s.controls.el.removeClass("disabled");else{s.touch.originalPos=o.position();var e=t.originalEvent,i=void 0!==e.changedTouches?e.changedTouches:[e];s.touch.start.x=i[0].pageX,s.touch.start.y=i[0].pageY,s.viewport.get(0).setPointerCapture&&(s.pointerId=e.pointerId,s.viewport.get(0).setPointerCapture(s.pointerId)),s.viewport.bind("touchmove MSPointerMove pointermove",Z),s.viewport.bind("touchend MSPointerUp pointerup",B),s.viewport.bind("MSPointerCancel pointercancel",R)}},R=function(t){S(s.touch.originalPos.left,"reset",0),s.controls.el.removeClass("disabled"),s.viewport.unbind("MSPointerCancel pointercancel",R),s.viewport.unbind("touchmove MSPointerMove pointermove",Z),s.viewport.unbind("touchend MSPointerUp pointerup",B),s.viewport.get(0).releasePointerCapture&&s.viewport.get(0).releasePointerCapture(s.pointerId)},Z=function(t){var e=t.originalEvent,i=void 0!==e.changedTouches?e.changedTouches:[e],n=Math.abs(i[0].pageX-s.touch.start.x),o=Math.abs(i[0].pageY-s.touch.start.y),r=0,a=0;3*n>o&&s.settings.preventDefaultSwipeX?t.preventDefault():3*o>n&&s.settings.preventDefaultSwipeY&&t.preventDefault(),"fade"!==s.settings.mode&&s.settings.oneToOneTouch&&("horizontal"===s.settings.mode?(a=i[0].pageX-s.touch.start.x,r=s.touch.originalPos.left+a):(a=i[0].pageY-s.touch.start.y,r=s.touch.originalPos.top+a),S(r,"reset",0))},B=function(t){s.viewport.unbind("touchmove MSPointerMove pointermove",Z),s.controls.el.removeClass("disabled");var e=t.originalEvent,i=void 0!==e.changedTouches?e.changedTouches:[e],n=0,r=0;s.touch.end.x=i[0].pageX,s.touch.end.y=i[0].pageY,"fade"===s.settings.mode?(r=Math.abs(s.touch.start.x-s.touch.end.x))>=s.settings.swipeThreshold&&(s.touch.start.x>s.touch.end.x?o.goToNextSlide():o.goToPrevSlide(),o.stopAuto()):("horizontal"===s.settings.mode?(r=s.touch.end.x-s.touch.start.x,n=s.touch.originalPos.left):(r=s.touch.end.y-s.touch.start.y,n=s.touch.originalPos.top),!s.settings.infiniteLoop&&(0===s.active.index&&r>0||s.active.last&&r<0)?S(n,"reset",200):Math.abs(r)>=s.settings.swipeThreshold?(r<0?o.goToNextSlide():o.goToPrevSlide(),o.stopAuto()):S(n,"reset",200)),s.viewport.unbind("touchend MSPointerUp pointerup",B),s.viewport.get(0).releasePointerCapture&&s.viewport.get(0).releasePointerCapture(s.pointerId)},U=function(e){if(s.initialized)if(s.working)window.setTimeout(U,10);else{var i=t(window).width(),n=t(window).height();r===i&&a===n||(r=i,a=n,o.redrawSlider(),s.settings.onSliderResize.call(o,s.active.index))}},j=function(t){var e=v();s.settings.ariaHidden&&!s.settings.ticker&&(s.children.attr("aria-hidden","true"),s.children.slice(t,t+e).attr("aria-hidden","false"))},Q=function(t){return t<0?s.settings.infiniteLoop?f()-1:s.active.index:t>=f()?s.settings.infiniteLoop?0:s.active.index:t};return o.goToSlide=function(e,i){var n,r,a,l,d=!0,c=0,g={left:0,top:0},u=null;if(s.oldIndex=s.active.index,s.active.index=Q(e),!s.working&&s.active.index!==s.oldIndex){if(s.working=!0,void 0!==(d=s.settings.onSlideBefore.call(o,s.children.eq(s.active.index),s.oldIndex,s.active.index))&&!d)return s.active.index=s.oldIndex,void(s.working=!1);"next"===i?s.settings.onSlideNext.call(o,s.children.eq(s.active.index),s.oldIndex,s.active.index)||(d=!1):"prev"===i&&(s.settings.onSlidePrev.call(o,s.children.eq(s.active.index),s.oldIndex,s.active.index)||(d=!1)),s.active.last=s.active.index>=f()-1,(s.settings.pager||s.settings.pagerCustom)&&I(s.active.index),s.settings.controls&&D(),"fade"===s.settings.mode?(s.settings.adaptiveHeight&&s.viewport.height()!==p()&&s.viewport.animate({height:p()},s.settings.adaptiveHeightSpeed),s.children.filter(":visible").fadeOut(s.settings.speed).css({zIndex:0}),s.children.eq(s.active.index).css("zIndex",s.settings.slideZIndex+1).fadeIn(s.settings.speed,function(){t(this).css("zIndex",s.settings.slideZIndex),A()})):(s.settings.adaptiveHeight&&s.viewport.height()!==p()&&s.viewport.animate({height:p()},s.settings.adaptiveHeightSpeed),!s.settings.infiniteLoop&&s.carousel&&s.active.last?"horizontal"===s.settings.mode?(u=s.children.eq(s.children.length-1),g=u.position(),c=s.viewport.width()-u.outerWidth()):(n=s.children.length-s.settings.minSlides,g=s.children.eq(n).position()):s.carousel&&s.active.last&&"prev"===i?(r=1===s.settings.moveSlides?s.settings.maxSlides-x():(f()-1)*x()-(s.children.length-s.settings.maxSlides),u=o.children(".bx-clone").eq(r),g=u.position()):"next"===i&&0===s.active.index?(g=o.find("> .bx-clone").eq(s.settings.maxSlides).position(),s.active.last=!1):e>=0&&(l=e*parseInt(x()),g=s.children.eq(l).position()),void 0!==g&&(a="horizontal"===s.settings.mode?-(g.left-c):-g.top,S(a,"slide",s.settings.speed)),s.working=!1),s.settings.ariaHidden&&j(s.active.index*x())}},o.goToNextSlide=function(){if((s.settings.infiniteLoop||!s.active.last)&&1!=s.working){var t=parseInt(s.active.index)+1;o.goToSlide(t,"next")}},o.goToPrevSlide=function(){if((s.settings.infiniteLoop||0!==s.active.index)&&1!=s.working){var t=parseInt(s.active.index)-1;o.goToSlide(t,"prev")}},o.startAuto=function(t){s.interval||(s.interval=setInterval(function(){"next"===s.settings.autoDirection?o.goToNextSlide():o.goToPrevSlide()},s.settings.pause),s.settings.onAutoChange.call(o,!0),s.settings.autoControls&&t!==!0&&q("stop"))},o.stopAuto=function(t){s.interval&&(clearInterval(s.interval),s.interval=null,s.settings.onAutoChange.call(o,!1),s.settings.autoControls&&t!==!0&&q("start"))},o.getCurrentSlide=function(){return s.active.index},o.getCurrentSlideElement=function(){return s.children.eq(s.active.index)},o.getSlideElement=function(t){return s.children.eq(t)},o.getSlideCount=function(){return s.children.length},o.isWorking=function(){return s.working},o.redrawSlider=function(){s.children.add(o.find(".bx-clone")).outerWidth(h()),s.viewport.css("height",p()),s.settings.ticker||m(),s.active.last&&(s.active.index=f()-1),s.active.index>=f()&&(s.active.last=!0),s.settings.pager&&!s.settings.pagerCustom&&(b(),I(s.active.index)),s.settings.ariaHidden&&j(s.active.index*x())},o.destroySlider=function(){s.initialized&&(s.initialized=!1,t(".bx-clone",this).remove(),s.children.each(function(){void 0!==t(this).data("origStyle")?t(this).attr("style",t(this).data("origStyle")):t(this).removeAttr("style")}),void 0!==t(this).data("origStyle")?this.attr("style",t(this).data("origStyle")):t(this).removeAttr("style"),t(this).unwrap().unwrap(),s.controls.el&&s.controls.el.remove(),s.controls.next&&s.controls.next.remove(),s.controls.prev&&s.controls.prev.remove(),s.pagerEl&&s.settings.controls&&!s.settings.pagerCustom&&s.pagerEl.remove(),t(".bx-caption",this).remove(),s.controls.autoEl&&s.controls.autoEl.remove(),clearInterval(s.interval),s.settings.responsive&&t(window).unbind("resize",U),s.settings.keyboardEnabled&&t(document).unbind("keydown",X),t(this).removeData("bxSlider"),t(window).off("blur",W).off("focus",H))},o.reloadSlider=function(e){void 0!==e&&(n=e),o.destroySlider(),l(),t(o).data("bxSlider",this)},l(),t(o).data("bxSlider",this),this}}}(jQuery);

/** scrollTo 2.1.3 */

;(function(f){"use strict";"function"===typeof define&&define.amd?define(["jquery"],f):"undefined"!==typeof module&&module.exports?module.exports=f(require("jquery")):f(jQuery)})(function($){"use strict";function n(a){return!a.nodeName||-1!==$.inArray(a.nodeName.toLowerCase(),["iframe","#document","html","body"])}function h(a){return $.isFunction(a)||$.isPlainObject(a)?a:{top:a,left:a}}var p=$.scrollTo=function(a,d,b){return $(window).scrollTo(a,d,b)};p.defaults={axis:"xy",duration:0,limit:!0};$.fn.scrollTo=function(a,d,b){"object"=== typeof d&&(b=d,d=0);"function"===typeof b&&(b={onAfter:b});"max"===a&&(a=9E9);b=$.extend({},p.defaults,b);d=d||b.duration;var u=b.queue&&1<b.axis.length;u&&(d/=2);b.offset=h(b.offset);b.over=h(b.over);return this.each(function(){function k(a){var k=$.extend({},b,{queue:!0,duration:d,complete:a&&function(){a.call(q,e,b)}});r.animate(f,k)}if(null!==a){var l=n(this),q=l?this.contentWindow||window:this,r=$(q),e=a,f={},t;switch(typeof e){case "number":case "string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(e)){e= h(e);break}e=l?$(e):$(e,q);case "object":if(e.length===0)return;if(e.is||e.style)t=(e=$(e)).offset()}var v=$.isFunction(b.offset)&&b.offset(q,e)||b.offset;$.each(b.axis.split(""),function(a,c){var d="x"===c?"Left":"Top",m=d.toLowerCase(),g="scroll"+d,h=r[g](),n=p.max(q,c);t?(f[g]=t[m]+(l?0:h-r.offset()[m]),b.margin&&(f[g]-=parseInt(e.css("margin"+d),10)||0,f[g]-=parseInt(e.css("border"+d+"Width"),10)||0),f[g]+=v[m]||0,b.over[m]&&(f[g]+=e["x"===c?"width":"height"]()*b.over[m])):(d=e[m],f[g]=d.slice&& "%"===d.slice(-1)?parseFloat(d)/100*n:d);b.limit&&/^\d+$/.test(f[g])&&(f[g]=0>=f[g]?0:Math.min(f[g],n));!a&&1<b.axis.length&&(h===f[g]?f={}:u&&(k(b.onAfterFirst),f={}))});k(b.onAfter)}})};p.max=function(a,d){var b="x"===d?"Width":"Height",h="scroll"+b;if(!n(a))return a[h]-$(a)[b.toLowerCase()]();var b="client"+b,k=a.ownerDocument||a.document,l=k.documentElement,k=k.body;return Math.max(l[h],k[h])-Math.min(l[b],k[b])};$.Tween.propHooks.scrollLeft=$.Tween.propHooks.scrollTop={get:function(a){return $(a.elem)[a.prop]()}, set:function(a){var d=this.get(a);if(a.options.interrupt&&a._last&&a._last!==d)return $(a.elem).stop();var b=Math.round(a.now);d!==b&&($(a.elem)[a.prop](b),a._last=this.get(a))}};return p});

/** Smoothscroll */

!function(){var s,i,c,a,o={frameRate:150,animationTime:400,stepSize:100,pulseAlgorithm:!0,pulseScale:4,pulseNormalize:1,accelerationDelta:50,accelerationMax:3,keyboardSupport:!0,arrowScroll:50,fixedBackground:!0,excluded:""},p=o,u=!1,d=!1,l={x:0,y:0},f=!1,m=document.documentElement,h=[],w=/^Mac/.test(navigator.platform),v={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},y={37:1,38:1,39:1,40:1};function b(){if(!f&&document.body){f=!0;var e=document.body,t=document.documentElement,o=window.innerHeight,n=e.scrollHeight;if(m=0<=document.compatMode.indexOf("CSS")?t:e,s=e,p.keyboardSupport&&Y("keydown",D),top!=self)d=!0;else if(Q&&o<n&&(e.offsetHeight<=o||t.offsetHeight<=o)){var r,a=document.createElement("div");a.style.cssText="position:absolute; z-index:-10000; top:0; left:0; right:0; height:"+m.scrollHeight+"px",document.body.appendChild(a),c=function(){r||(r=setTimeout(function(){u||(a.style.height="0",a.style.height=m.scrollHeight+"px",r=null)},500))},setTimeout(c,10),Y("resize",c);if((i=new R(c)).observe(e,{attributes:!0,childList:!0,characterData:!1}),m.offsetHeight<=o){var l=document.createElement("div");l.style.clear="both",e.appendChild(l)}}p.fixedBackground||u||(e.style.backgroundAttachment="scroll",t.style.backgroundAttachment="scroll")}}var g=[],S=!1,x=Date.now();function k(d,f,m){var e,t;if(e=0<(e=f)?1:-1,t=0<(t=m)?1:-1,(l.x!==e||l.y!==t)&&(l.x=e,l.y=t,g=[],x=0),1!=p.accelerationMax){var o=Date.now()-x;if(o<p.accelerationDelta){var n=(1+50/o)/2;1<n&&(n=Math.min(n,p.accelerationMax),f*=n,m*=n)}x=Date.now()}if(g.push({x:f,y:m,lastX:f<0?.99:-.99,lastY:m<0?.99:-.99,start:Date.now()}),!S){var r=q(),h=d===r||d===document.body;null==d.$scrollBehavior&&function(e){var t=M(e);if(null==B[t]){var o=getComputedStyle(e,"")["scroll-behavior"];B[t]="smooth"==o}return B[t]}(d)&&(d.$scrollBehavior=d.style.scrollBehavior,d.style.scrollBehavior="auto");var w=function(e){for(var t=Date.now(),o=0,n=0,r=0;r<g.length;r++){var a=g[r],l=t-a.start,i=l>=p.animationTime,c=i?1:l/p.animationTime;p.pulseAlgorithm&&(c=F(c));var s=a.x*c-a.lastX>>0,u=a.y*c-a.lastY>>0;o+=s,n+=u,a.lastX+=s,a.lastY+=u,i&&(g.splice(r,1),r--)}h?window.scrollBy(o,n):(o&&(d.scrollLeft+=o),n&&(d.scrollTop+=n)),f||m||(g=[]),g.length?j(w,d,1e3/p.frameRate+1):(S=!1,null!=d.$scrollBehavior&&(d.style.scrollBehavior=d.$scrollBehavior,d.$scrollBehavior=null))};j(w,d,0),S=!0}}function e(e){f||b();var t=e.target;if(e.defaultPrevented||e.ctrlKey)return!0;if(N(s,"embed")||N(t,"embed")&&/\.pdf/i.test(t.src)||N(s,"object")||t.shadowRoot)return!0;var o=-e.wheelDeltaX||e.deltaX||0,n=-e.wheelDeltaY||e.deltaY||0;w&&(e.wheelDeltaX&&K(e.wheelDeltaX,120)&&(o=e.wheelDeltaX/Math.abs(e.wheelDeltaX)*-120),e.wheelDeltaY&&K(e.wheelDeltaY,120)&&(n=e.wheelDeltaY/Math.abs(e.wheelDeltaY)*-120)),o||n||(n=-e.wheelDelta||0),1===e.deltaMode&&(o*=40,n*=40);var r=z(t);return r?!!function(e){if(!e)return;h.length||(h=[e,e,e]);e=Math.abs(e),h.push(e),h.shift(),clearTimeout(a),a=setTimeout(function(){try{localStorage.SS_deltaBuffer=h.join(",")}catch(e){}},1e3);var t=120<e&&P(e);return!P(120)&&!P(100)&&!t}(n)||(1.2<Math.abs(o)&&(o*=p.stepSize/120),1.2<Math.abs(n)&&(n*=p.stepSize/120),k(r,o,n),e.preventDefault(),void C()):!d||!W||(Object.defineProperty(e,"target",{value:window.frameElement}),parent.wheel(e))}function D(e){var t=e.target,o=e.ctrlKey||e.altKey||e.metaKey||e.shiftKey&&e.keyCode!==v.spacebar;document.body.contains(s)||(s=document.activeElement);var n=/^(button|submit|radio|checkbox|file|color|image)$/i;if(e.defaultPrevented||/^(textarea|select|embed|object)$/i.test(t.nodeName)||N(t,"input")&&!n.test(t.type)||N(s,"video")||function(e){var t=e.target,o=!1;if(-1!=document.URL.indexOf("www.youtube.com/watch"))do{if(o=t.classList&&t.classList.contains("html5-video-controls"))break}while(t=t.parentNode);return o}(e)||t.isContentEditable||o)return!0;if((N(t,"button")||N(t,"input")&&n.test(t.type))&&e.keyCode===v.spacebar)return!0;if(N(t,"input")&&"radio"==t.type&&y[e.keyCode])return!0;var r=0,a=0,l=z(s);if(!l)return!d||!W||parent.keydown(e);var i=l.clientHeight;switch(l==document.body&&(i=window.innerHeight),e.keyCode){case v.up:a=-p.arrowScroll;break;case v.down:a=p.arrowScroll;break;case v.spacebar:a=-(e.shiftKey?1:-1)*i*.9;break;case v.pageup:a=.9*-i;break;case v.pagedown:a=.9*i;break;case v.home:l==document.body&&document.scrollingElement&&(l=document.scrollingElement),a=-l.scrollTop;break;case v.end:var c=l.scrollHeight-l.scrollTop-i;a=0<c?c+10:0;break;case v.left:r=-p.arrowScroll;break;case v.right:r=p.arrowScroll;break;default:return!0}k(l,r,a),e.preventDefault(),C()}function t(e){s=e.target}var n,r,M=(n=0,function(e){return e.uniqueID||(e.uniqueID=n++)}),E={},T={},B={};function C(){clearTimeout(r),r=setInterval(function(){E=T=B={}},1e3)}function H(e,t,o){for(var n=o?E:T,r=e.length;r--;)n[M(e[r])]=t;return t}function z(e){var t=[],o=document.body,n=m.scrollHeight;do{var r=(!1?E:T)[M(e)];if(r)return H(t,r);if(t.push(e),n===e.scrollHeight){var a=O(m)&&O(o)||X(m);if(d&&L(m)||!d&&a)return H(t,q())}else if(L(e)&&X(e))return H(t,e)}while(e=e.parentElement)}function L(e){return e.clientHeight+10<e.scrollHeight}function O(e){return"hidden"!==getComputedStyle(e,"").getPropertyValue("overflow-y")}function X(e){var t=getComputedStyle(e,"").getPropertyValue("overflow-y");return"scroll"===t||"auto"===t}function Y(e,t,o){window.addEventListener(e,t,o||!1)}function A(e,t,o){window.removeEventListener(e,t,o||!1)}function N(e,t){return e&&(e.nodeName||"").toLowerCase()===t.toLowerCase()}if(window.localStorage&&localStorage.SS_deltaBuffer)try{h=localStorage.SS_deltaBuffer.split(",")}catch(e){}function K(e,t){return Math.floor(e/t)==e/t}function P(e){return K(h[0],e)&&K(h[1],e)&&K(h[2],e)}var $,j=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e,t,o){window.setTimeout(e,o||1e3/60)},R=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,q=($=document.scrollingElement,function(){if(!$){var e=document.createElement("div");e.style.cssText="height:10000px;width:1px;",document.body.appendChild(e);var t=document.body.scrollTop;document.documentElement.scrollTop,window.scrollBy(0,3),$=document.body.scrollTop!=t?document.body:document.documentElement,window.scrollBy(0,-3),document.body.removeChild(e)}return $});function V(e){var t;return((e*=p.pulseScale)<1?e-(1-Math.exp(-e)):(e-=1,(t=Math.exp(-1))+(1-Math.exp(-e))*(1-t)))*p.pulseNormalize}function F(e){return 1<=e?1:e<=0?0:(1==p.pulseNormalize&&(p.pulseNormalize/=V(1)),V(e))}var I=window.navigator.userAgent,_=/Edge/.test(I),W=/chrome/i.test(I)&&!_,U=/safari/i.test(I)&&!_,G=/mobile/i.test(I),J=/Windows NT 6.1/i.test(I)&&/rv:11/i.test(I),Q=U&&(/Version\/8/i.test(I)||/Version\/9/i.test(I)),Z=(W||U||J)&&!G,ee=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){ee=!0}}))}catch(e){}var te=!!ee&&{passive:!1},oe="onwheel"in document.createElement("div")?"wheel":"mousewheel";function ne(e){for(var t in e)o.hasOwnProperty(t)&&(p[t]=e[t])}oe&&Z&&(Y(oe,e,te),Y("mousedown",t),Y("load",b)),ne.destroy=function(){i&&i.disconnect(),A(oe,e),A("mousedown",t),A("keydown",D),A("resize",c),A("load",b)},window.SmoothScrollOptions&&ne(window.SmoothScrollOptions),"function"==typeof define&&define.amd?define(function(){return ne}):"object"==typeof exports?module.exports=ne:window.SmoothScroll=ne}();

// jquery-match-height 0.7.2 

!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){var e=-1,o=-1,n=function(t){return parseFloat(t)||0},a=function(e){var o=1,a=t(e),i=null,r=[];return a.each(function(){var e=t(this),a=e.offset().top-n(e.css("margin-top")),s=r.length>0?r[r.length-1]:null;null===s?r.push(e):Math.floor(Math.abs(i-a))<=o?r[r.length-1]=s.add(e):r.push(e),i=a}),r},i=function(e){var o={
byRow:!0,property:"height",target:null,remove:!1};return"object"==typeof e?t.extend(o,e):("boolean"==typeof e?o.byRow=e:"remove"===e&&(o.remove=!0),o)},r=t.fn.matchHeight=function(e){var o=i(e);if(o.remove){var n=this;return this.css(o.property,""),t.each(r._groups,function(t,e){e.elements=e.elements.not(n)}),this}return this.length<=1&&!o.target?this:(r._groups.push({elements:this,options:o}),r._apply(this,o),this)};r.version="0.7.2",r._groups=[],r._throttle=80,r._maintainScroll=!1,r._beforeUpdate=null,
r._afterUpdate=null,r._rows=a,r._parse=n,r._parseOptions=i,r._apply=function(e,o){var s=i(o),h=t(e),l=[h],c=t(window).scrollTop(),p=t("html").outerHeight(!0),u=h.parents().filter(":hidden");return u.each(function(){var e=t(this);e.data("style-cache",e.attr("style"))}),u.css("display","block"),s.byRow&&!s.target&&(h.each(function(){var e=t(this),o=e.css("display");"inline-block"!==o&&"flex"!==o&&"inline-flex"!==o&&(o="block"),e.data("style-cache",e.attr("style")),e.css({display:o,"padding-top":"0",
"padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px",overflow:"hidden"})}),l=a(h),h.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||"")})),t.each(l,function(e,o){var a=t(o),i=0;if(s.target)i=s.target.outerHeight(!1);else{if(s.byRow&&a.length<=1)return void a.css(s.property,"");a.each(function(){var e=t(this),o=e.attr("style"),n=e.css("display");"inline-block"!==n&&"flex"!==n&&"inline-flex"!==n&&(n="block");var a={
display:n};a[s.property]="",e.css(a),e.outerHeight(!1)>i&&(i=e.outerHeight(!1)),o?e.attr("style",o):e.css("display","")})}a.each(function(){var e=t(this),o=0;s.target&&e.is(s.target)||("border-box"!==e.css("box-sizing")&&(o+=n(e.css("border-top-width"))+n(e.css("border-bottom-width")),o+=n(e.css("padding-top"))+n(e.css("padding-bottom"))),e.css(s.property,i-o+"px"))})}),u.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||null)}),r._maintainScroll&&t(window).scrollTop(c/p*t("html").outerHeight(!0)),
this},r._applyDataApi=function(){var e={};t("[data-match-height], [data-mh]").each(function(){var o=t(this),n=o.attr("data-mh")||o.attr("data-match-height");n in e?e[n]=e[n].add(o):e[n]=o}),t.each(e,function(){this.matchHeight(!0)})};var s=function(e){r._beforeUpdate&&r._beforeUpdate(e,r._groups),t.each(r._groups,function(){r._apply(this.elements,this.options)}),r._afterUpdate&&r._afterUpdate(e,r._groups)};r._update=function(n,a){if(a&&"resize"===a.type){var i=t(window).width();if(i===e)return;e=i;
}n?o===-1&&(o=setTimeout(function(){s(a),o=-1},r._throttle)):s(a)},t(r._applyDataApi);var h=t.fn.on?"on":"bind";t(window)[h]("load",function(t){r._update(!1,t)}),t(window)[h]("resize orientationchange",function(t){r._update(!0,t)})});

/* == jquery mousewheel plugin == Version: 3.1.13, License: MIT License (MIT) */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});

/* == malihu jquery custom scrollbar plugin == Version: 3.1.5, License: MIT License (MIT) */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"undefined"!=typeof module&&module.exports?module.exports=e:e(jQuery,window,document)}(function(e){!function(t){var o="function"==typeof define&&define.amd,a="undefined"!=typeof module&&module.exports,n="https:"==document.location.protocol?"https:":"http:",i="cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js";o||(a?require("jquery-mousewheel")(e):e.event.special.mousewheel||e("head").append(decodeURI("%3Cscript src="+n+"//"+i+"%3E%3C/script%3E"))),t()}(function(){var t,o="mCustomScrollbar",a="mCS",n=".mCustomScrollbar",i={setTop:0,setLeft:0,axis:"y",scrollbarPosition:"inside",scrollInertia:950,autoDraggerLength:!0,alwaysShowScrollbar:0,snapOffset:0,mouseWheel:{enable:!0,scrollAmount:"auto",axis:"y",deltaFactor:"auto",disableOver:["select","option","keygen","datalist","textarea"]},scrollButtons:{scrollType:"stepless",scrollAmount:"auto"},keyboard:{enable:!0,scrollType:"stepless",scrollAmount:"auto"},contentTouchScroll:25,documentTouchScroll:!0,advanced:{autoScrollOnFocus:"input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",updateOnContentResize:!0,updateOnImageLoad:"auto",autoUpdateTimeout:60},theme:"light",callbacks:{onTotalScrollOffset:0,onTotalScrollBackOffset:0,alwaysTriggerOffsets:!0}},r=0,l={},s=window.attachEvent&&!window.addEventListener?1:0,c=!1,d=["mCSB_dragger_onDrag","mCSB_scrollTools_onDrag","mCS_img_loaded","mCS_disabled","mCS_destroyed","mCS_no_scrollbar","mCS-autoHide","mCS-dir-rtl","mCS_no_scrollbar_y","mCS_no_scrollbar_x","mCS_y_hidden","mCS_x_hidden","mCSB_draggerContainer","mCSB_buttonUp","mCSB_buttonDown","mCSB_buttonLeft","mCSB_buttonRight"],u={init:function(t){var t=e.extend(!0,{},i,t),o=f.call(this);if(t.live){var s=t.liveSelector||this.selector||n,c=e(s);if("off"===t.live)return void m(s);l[s]=setTimeout(function(){c.mCustomScrollbar(t),"once"===t.live&&c.length&&m(s)},500)}else m(s);return t.setWidth=t.set_width?t.set_width:t.setWidth,t.setHeight=t.set_height?t.set_height:t.setHeight,t.axis=t.horizontalScroll?"x":p(t.axis),t.scrollInertia=t.scrollInertia>0&&t.scrollInertia<17?17:t.scrollInertia,"object"!=typeof t.mouseWheel&&1==t.mouseWheel&&(t.mouseWheel={enable:!0,scrollAmount:"auto",axis:"y",preventDefault:!1,deltaFactor:"auto",normalizeDelta:!1,invert:!1}),t.mouseWheel.scrollAmount=t.mouseWheelPixels?t.mouseWheelPixels:t.mouseWheel.scrollAmount,t.mouseWheel.normalizeDelta=t.advanced.normalizeMouseWheelDelta?t.advanced.normalizeMouseWheelDelta:t.mouseWheel.normalizeDelta,t.scrollButtons.scrollType=g(t.scrollButtons.scrollType),h(t),e(o).each(function(){var o=e(this);if(!o.data(a)){o.data(a,{idx:++r,opt:t,scrollRatio:{y:null,x:null},overflowed:null,contentReset:{y:null,x:null},bindEvents:!1,tweenRunning:!1,sequential:{},langDir:o.css("direction"),cbOffsets:null,trigger:null,poll:{size:{o:0,n:0},img:{o:0,n:0},change:{o:0,n:0}}});var n=o.data(a),i=n.opt,l=o.data("mcs-axis"),s=o.data("mcs-scrollbar-position"),c=o.data("mcs-theme");l&&(i.axis=l),s&&(i.scrollbarPosition=s),c&&(i.theme=c,h(i)),v.call(this),n&&i.callbacks.onCreate&&"function"==typeof i.callbacks.onCreate&&i.callbacks.onCreate.call(this),e("#mCSB_"+n.idx+"_container img:not(."+d[2]+")").addClass(d[2]),u.update.call(null,o)}})},update:function(t,o){var n=t||f.call(this);return e(n).each(function(){var t=e(this);if(t.data(a)){var n=t.data(a),i=n.opt,r=e("#mCSB_"+n.idx+"_container"),l=e("#mCSB_"+n.idx),s=[e("#mCSB_"+n.idx+"_dragger_vertical"),e("#mCSB_"+n.idx+"_dragger_horizontal")];if(!r.length)return;n.tweenRunning&&Q(t),o&&n&&i.callbacks.onBeforeUpdate&&"function"==typeof i.callbacks.onBeforeUpdate&&i.callbacks.onBeforeUpdate.call(this),t.hasClass(d[3])&&t.removeClass(d[3]),t.hasClass(d[4])&&t.removeClass(d[4]),l.css("max-height","none"),l.height()!==t.height()&&l.css("max-height",t.height()),_.call(this),"y"===i.axis||i.advanced.autoExpandHorizontalScroll||r.css("width",x(r)),n.overflowed=y.call(this),M.call(this),i.autoDraggerLength&&S.call(this),b.call(this),T.call(this);var c=[Math.abs(r[0].offsetTop),Math.abs(r[0].offsetLeft)];"x"!==i.axis&&(n.overflowed[0]?s[0].height()>s[0].parent().height()?B.call(this):(G(t,c[0].toString(),{dir:"y",dur:0,overwrite:"none"}),n.contentReset.y=null):(B.call(this),"y"===i.axis?k.call(this):"yx"===i.axis&&n.overflowed[1]&&G(t,c[1].toString(),{dir:"x",dur:0,overwrite:"none"}))),"y"!==i.axis&&(n.overflowed[1]?s[1].width()>s[1].parent().width()?B.call(this):(G(t,c[1].toString(),{dir:"x",dur:0,overwrite:"none"}),n.contentReset.x=null):(B.call(this),"x"===i.axis?k.call(this):"yx"===i.axis&&n.overflowed[0]&&G(t,c[0].toString(),{dir:"y",dur:0,overwrite:"none"}))),o&&n&&(2===o&&i.callbacks.onImageLoad&&"function"==typeof i.callbacks.onImageLoad?i.callbacks.onImageLoad.call(this):3===o&&i.callbacks.onSelectorChange&&"function"==typeof i.callbacks.onSelectorChange?i.callbacks.onSelectorChange.call(this):i.callbacks.onUpdate&&"function"==typeof i.callbacks.onUpdate&&i.callbacks.onUpdate.call(this)),N.call(this)}})},scrollTo:function(t,o){if("undefined"!=typeof t&&null!=t){var n=f.call(this);return e(n).each(function(){var n=e(this);if(n.data(a)){var i=n.data(a),r=i.opt,l={trigger:"external",scrollInertia:r.scrollInertia,scrollEasing:"mcsEaseInOut",moveDragger:!1,timeout:60,callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},s=e.extend(!0,{},l,o),c=Y.call(this,t),d=s.scrollInertia>0&&s.scrollInertia<17?17:s.scrollInertia;c[0]=X.call(this,c[0],"y"),c[1]=X.call(this,c[1],"x"),s.moveDragger&&(c[0]*=i.scrollRatio.y,c[1]*=i.scrollRatio.x),s.dur=ne()?0:d,setTimeout(function(){null!==c[0]&&"undefined"!=typeof c[0]&&"x"!==r.axis&&i.overflowed[0]&&(s.dir="y",s.overwrite="all",G(n,c[0].toString(),s)),null!==c[1]&&"undefined"!=typeof c[1]&&"y"!==r.axis&&i.overflowed[1]&&(s.dir="x",s.overwrite="none",G(n,c[1].toString(),s))},s.timeout)}})}},stop:function(){var t=f.call(this);return e(t).each(function(){var t=e(this);t.data(a)&&Q(t)})},disable:function(t){var o=f.call(this);return e(o).each(function(){var o=e(this);if(o.data(a)){o.data(a);N.call(this,"remove"),k.call(this),t&&B.call(this),M.call(this,!0),o.addClass(d[3])}})},destroy:function(){var t=f.call(this);return e(t).each(function(){var n=e(this);if(n.data(a)){var i=n.data(a),r=i.opt,l=e("#mCSB_"+i.idx),s=e("#mCSB_"+i.idx+"_container"),c=e(".mCSB_"+i.idx+"_scrollbar");r.live&&m(r.liveSelector||e(t).selector),N.call(this,"remove"),k.call(this),B.call(this),n.removeData(a),$(this,"mcs"),c.remove(),s.find("img."+d[2]).removeClass(d[2]),l.replaceWith(s.contents()),n.removeClass(o+" _"+a+"_"+i.idx+" "+d[6]+" "+d[7]+" "+d[5]+" "+d[3]).addClass(d[4])}})}},f=function(){return"object"!=typeof e(this)||e(this).length<1?n:this},h=function(t){var o=["rounded","rounded-dark","rounded-dots","rounded-dots-dark"],a=["rounded-dots","rounded-dots-dark","3d","3d-dark","3d-thick","3d-thick-dark","inset","inset-dark","inset-2","inset-2-dark","inset-3","inset-3-dark"],n=["minimal","minimal-dark"],i=["minimal","minimal-dark"],r=["minimal","minimal-dark"];t.autoDraggerLength=e.inArray(t.theme,o)>-1?!1:t.autoDraggerLength,t.autoExpandScrollbar=e.inArray(t.theme,a)>-1?!1:t.autoExpandScrollbar,t.scrollButtons.enable=e.inArray(t.theme,n)>-1?!1:t.scrollButtons.enable,t.autoHideScrollbar=e.inArray(t.theme,i)>-1?!0:t.autoHideScrollbar,t.scrollbarPosition=e.inArray(t.theme,r)>-1?"outside":t.scrollbarPosition},m=function(e){l[e]&&(clearTimeout(l[e]),$(l,e))},p=function(e){return"yx"===e||"xy"===e||"auto"===e?"yx":"x"===e||"horizontal"===e?"x":"y"},g=function(e){return"stepped"===e||"pixels"===e||"step"===e||"click"===e?"stepped":"stepless"},v=function(){var t=e(this),n=t.data(a),i=n.opt,r=i.autoExpandScrollbar?" "+d[1]+"_expand":"",l=["<div id='mCSB_"+n.idx+"_scrollbar_vertical' class='mCSB_scrollTools mCSB_"+n.idx+"_scrollbar mCS-"+i.theme+" mCSB_scrollTools_vertical"+r+"'><div class='"+d[12]+"'><div id='mCSB_"+n.idx+"_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>","<div id='mCSB_"+n.idx+"_scrollbar_horizontal' class='mCSB_scrollTools mCSB_"+n.idx+"_scrollbar mCS-"+i.theme+" mCSB_scrollTools_horizontal"+r+"'><div class='"+d[12]+"'><div id='mCSB_"+n.idx+"_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],s="yx"===i.axis?"mCSB_vertical_horizontal":"x"===i.axis?"mCSB_horizontal":"mCSB_vertical",c="yx"===i.axis?l[0]+l[1]:"x"===i.axis?l[1]:l[0],u="yx"===i.axis?"<div id='mCSB_"+n.idx+"_container_wrapper' class='mCSB_container_wrapper' />":"",f=i.autoHideScrollbar?" "+d[6]:"",h="x"!==i.axis&&"rtl"===n.langDir?" "+d[7]:"";i.setWidth&&t.css("width",i.setWidth),i.setHeight&&t.css("height",i.setHeight),i.setLeft="y"!==i.axis&&"rtl"===n.langDir?"989999px":i.setLeft,t.addClass(o+" _"+a+"_"+n.idx+f+h).wrapInner("<div id='mCSB_"+n.idx+"' class='mCustomScrollBox mCS-"+i.theme+" "+s+"'><div id='mCSB_"+n.idx+"_container' class='mCSB_container' style='position:relative; top:"+i.setTop+"; left:"+i.setLeft+";' dir='"+n.langDir+"' /></div>");var m=e("#mCSB_"+n.idx),p=e("#mCSB_"+n.idx+"_container");"y"===i.axis||i.advanced.autoExpandHorizontalScroll||p.css("width",x(p)),"outside"===i.scrollbarPosition?("static"===t.css("position")&&t.css("position","relative"),t.css("overflow","visible"),m.addClass("mCSB_outside").after(c)):(m.addClass("mCSB_inside").append(c),p.wrap(u)),w.call(this);var g=[e("#mCSB_"+n.idx+"_dragger_vertical"),e("#mCSB_"+n.idx+"_dragger_horizontal")];g[0].css("min-height",g[0].height()),g[1].css("min-width",g[1].width())},x=function(t){var o=[t[0].scrollWidth,Math.max.apply(Math,t.children().map(function(){return e(this).outerWidth(!0)}).get())],a=t.parent().width();return o[0]>a?o[0]:o[1]>a?o[1]:"100%"},_=function(){var t=e(this),o=t.data(a),n=o.opt,i=e("#mCSB_"+o.idx+"_container");if(n.advanced.autoExpandHorizontalScroll&&"y"!==n.axis){i.css({width:"auto","min-width":0,"overflow-x":"scroll"});var r=Math.ceil(i[0].scrollWidth);3===n.advanced.autoExpandHorizontalScroll||2!==n.advanced.autoExpandHorizontalScroll&&r>i.parent().width()?i.css({width:r,"min-width":"100%","overflow-x":"inherit"}):i.css({"overflow-x":"inherit",position:"absolute"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({width:Math.ceil(i[0].getBoundingClientRect().right+.4)-Math.floor(i[0].getBoundingClientRect().left),"min-width":"100%",position:"relative"}).unwrap()}},w=function(){var t=e(this),o=t.data(a),n=o.opt,i=e(".mCSB_"+o.idx+"_scrollbar:first"),r=oe(n.scrollButtons.tabindex)?"tabindex='"+n.scrollButtons.tabindex+"'":"",l=["<a href='#' class='"+d[13]+"' "+r+" />","<a href='#' class='"+d[14]+"' "+r+" />","<a href='#' class='"+d[15]+"' "+r+" />","<a href='#' class='"+d[16]+"' "+r+" />"],s=["x"===n.axis?l[2]:l[0],"x"===n.axis?l[3]:l[1],l[2],l[3]];n.scrollButtons.enable&&i.prepend(s[0]).append(s[1]).next(".mCSB_scrollTools").prepend(s[2]).append(s[3])},S=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")],l=[n.height()/i.outerHeight(!1),n.width()/i.outerWidth(!1)],c=[parseInt(r[0].css("min-height")),Math.round(l[0]*r[0].parent().height()),parseInt(r[1].css("min-width")),Math.round(l[1]*r[1].parent().width())],d=s&&c[1]<c[0]?c[0]:c[1],u=s&&c[3]<c[2]?c[2]:c[3];r[0].css({height:d,"max-height":r[0].parent().height()-10}).find(".mCSB_dragger_bar").css({"line-height":c[0]+"px"}),r[1].css({width:u,"max-width":r[1].parent().width()-10})},b=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")],l=[i.outerHeight(!1)-n.height(),i.outerWidth(!1)-n.width()],s=[l[0]/(r[0].parent().height()-r[0].height()),l[1]/(r[1].parent().width()-r[1].width())];o.scrollRatio={y:s[0],x:s[1]}},C=function(e,t,o){var a=o?d[0]+"_expanded":"",n=e.closest(".mCSB_scrollTools");"active"===t?(e.toggleClass(d[0]+" "+a),n.toggleClass(d[1]),e[0]._draggable=e[0]._draggable?0:1):e[0]._draggable||("hide"===t?(e.removeClass(d[0]),n.removeClass(d[1])):(e.addClass(d[0]),n.addClass(d[1])))},y=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=null==o.overflowed?i.height():i.outerHeight(!1),l=null==o.overflowed?i.width():i.outerWidth(!1),s=i[0].scrollHeight,c=i[0].scrollWidth;return s>r&&(r=s),c>l&&(l=c),[r>n.height(),l>n.width()]},B=function(){var t=e(this),o=t.data(a),n=o.opt,i=e("#mCSB_"+o.idx),r=e("#mCSB_"+o.idx+"_container"),l=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")];if(Q(t),("x"!==n.axis&&!o.overflowed[0]||"y"===n.axis&&o.overflowed[0])&&(l[0].add(r).css("top",0),G(t,"_resetY")),"y"!==n.axis&&!o.overflowed[1]||"x"===n.axis&&o.overflowed[1]){var s=dx=0;"rtl"===o.langDir&&(s=i.width()-r.outerWidth(!1),dx=Math.abs(s/o.scrollRatio.x)),r.css("left",s),l[1].css("left",dx),G(t,"_resetX")}},T=function(){function t(){r=setTimeout(function(){e.event.special.mousewheel?(clearTimeout(r),W.call(o[0])):t()},100)}var o=e(this),n=o.data(a),i=n.opt;if(!n.bindEvents){if(I.call(this),i.contentTouchScroll&&D.call(this),E.call(this),i.mouseWheel.enable){var r;t()}P.call(this),U.call(this),i.advanced.autoScrollOnFocus&&H.call(this),i.scrollButtons.enable&&F.call(this),i.keyboard.enable&&q.call(this),n.bindEvents=!0}},k=function(){var t=e(this),o=t.data(a),n=o.opt,i=a+"_"+o.idx,r=".mCSB_"+o.idx+"_scrollbar",l=e("#mCSB_"+o.idx+",#mCSB_"+o.idx+"_container,#mCSB_"+o.idx+"_container_wrapper,"+r+" ."+d[12]+",#mCSB_"+o.idx+"_dragger_vertical,#mCSB_"+o.idx+"_dragger_horizontal,"+r+">a"),s=e("#mCSB_"+o.idx+"_container");n.advanced.releaseDraggableSelectors&&l.add(e(n.advanced.releaseDraggableSelectors)),n.advanced.extraDraggableSelectors&&l.add(e(n.advanced.extraDraggableSelectors)),o.bindEvents&&(e(document).add(e(!A()||top.document)).unbind("."+i),l.each(function(){e(this).unbind("."+i)}),clearTimeout(t[0]._focusTimeout),$(t[0],"_focusTimeout"),clearTimeout(o.sequential.step),$(o.sequential,"step"),clearTimeout(s[0].onCompleteTimeout),$(s[0],"onCompleteTimeout"),o.bindEvents=!1)},M=function(t){var o=e(this),n=o.data(a),i=n.opt,r=e("#mCSB_"+n.idx+"_container_wrapper"),l=r.length?r:e("#mCSB_"+n.idx+"_container"),s=[e("#mCSB_"+n.idx+"_scrollbar_vertical"),e("#mCSB_"+n.idx+"_scrollbar_horizontal")],c=[s[0].find(".mCSB_dragger"),s[1].find(".mCSB_dragger")];"x"!==i.axis&&(n.overflowed[0]&&!t?(s[0].add(c[0]).add(s[0].children("a")).css("display","block"),l.removeClass(d[8]+" "+d[10])):(i.alwaysShowScrollbar?(2!==i.alwaysShowScrollbar&&c[0].css("display","none"),l.removeClass(d[10])):(s[0].css("display","none"),l.addClass(d[10])),l.addClass(d[8]))),"y"!==i.axis&&(n.overflowed[1]&&!t?(s[1].add(c[1]).add(s[1].children("a")).css("display","block"),l.removeClass(d[9]+" "+d[11])):(i.alwaysShowScrollbar?(2!==i.alwaysShowScrollbar&&c[1].css("display","none"),l.removeClass(d[11])):(s[1].css("display","none"),l.addClass(d[11])),l.addClass(d[9]))),n.overflowed[0]||n.overflowed[1]?o.removeClass(d[5]):o.addClass(d[5])},O=function(t){var o=t.type,a=t.target.ownerDocument!==document&&null!==frameElement?[e(frameElement).offset().top,e(frameElement).offset().left]:null,n=A()&&t.target.ownerDocument!==top.document&&null!==frameElement?[e(t.view.frameElement).offset().top,e(t.view.frameElement).offset().left]:[0,0];switch(o){case"pointerdown":case"MSPointerDown":case"pointermove":case"MSPointerMove":case"pointerup":case"MSPointerUp":return a?[t.originalEvent.pageY-a[0]+n[0],t.originalEvent.pageX-a[1]+n[1],!1]:[t.originalEvent.pageY,t.originalEvent.pageX,!1];case"touchstart":case"touchmove":case"touchend":var i=t.originalEvent.touches[0]||t.originalEvent.changedTouches[0],r=t.originalEvent.touches.length||t.originalEvent.changedTouches.length;return t.target.ownerDocument!==document?[i.screenY,i.screenX,r>1]:[i.pageY,i.pageX,r>1];default:return a?[t.pageY-a[0]+n[0],t.pageX-a[1]+n[1],!1]:[t.pageY,t.pageX,!1]}},I=function(){function t(e,t,a,n){if(h[0].idleTimer=d.scrollInertia<233?250:0,o.attr("id")===f[1])var i="x",s=(o[0].offsetLeft-t+n)*l.scrollRatio.x;else var i="y",s=(o[0].offsetTop-e+a)*l.scrollRatio.y;G(r,s.toString(),{dir:i,drag:!0})}var o,n,i,r=e(this),l=r.data(a),d=l.opt,u=a+"_"+l.idx,f=["mCSB_"+l.idx+"_dragger_vertical","mCSB_"+l.idx+"_dragger_horizontal"],h=e("#mCSB_"+l.idx+"_container"),m=e("#"+f[0]+",#"+f[1]),p=d.advanced.releaseDraggableSelectors?m.add(e(d.advanced.releaseDraggableSelectors)):m,g=d.advanced.extraDraggableSelectors?e(!A()||top.document).add(e(d.advanced.extraDraggableSelectors)):e(!A()||top.document);m.bind("contextmenu."+u,function(e){e.preventDefault()}).bind("mousedown."+u+" touchstart."+u+" pointerdown."+u+" MSPointerDown."+u,function(t){if(t.stopImmediatePropagation(),t.preventDefault(),ee(t)){c=!0,s&&(document.onselectstart=function(){return!1}),L.call(h,!1),Q(r),o=e(this);var a=o.offset(),l=O(t)[0]-a.top,u=O(t)[1]-a.left,f=o.height()+a.top,m=o.width()+a.left;f>l&&l>0&&m>u&&u>0&&(n=l,i=u),C(o,"active",d.autoExpandScrollbar)}}).bind("touchmove."+u,function(e){e.stopImmediatePropagation(),e.preventDefault();var a=o.offset(),r=O(e)[0]-a.top,l=O(e)[1]-a.left;t(n,i,r,l)}),e(document).add(g).bind("mousemove."+u+" pointermove."+u+" MSPointerMove."+u,function(e){if(o){var a=o.offset(),r=O(e)[0]-a.top,l=O(e)[1]-a.left;if(n===r&&i===l)return;t(n,i,r,l)}}).add(p).bind("mouseup."+u+" touchend."+u+" pointerup."+u+" MSPointerUp."+u,function(){o&&(C(o,"active",d.autoExpandScrollbar),o=null),c=!1,s&&(document.onselectstart=null),L.call(h,!0)})},D=function(){function o(e){if(!te(e)||c||O(e)[2])return void(t=0);t=1,b=0,C=0,d=1,y.removeClass("mCS_touch_action");var o=I.offset();u=O(e)[0]-o.top,f=O(e)[1]-o.left,z=[O(e)[0],O(e)[1]]}function n(e){if(te(e)&&!c&&!O(e)[2]&&(T.documentTouchScroll||e.preventDefault(),e.stopImmediatePropagation(),(!C||b)&&d)){g=K();var t=M.offset(),o=O(e)[0]-t.top,a=O(e)[1]-t.left,n="mcsLinearOut";if(E.push(o),W.push(a),z[2]=Math.abs(O(e)[0]-z[0]),z[3]=Math.abs(O(e)[1]-z[1]),B.overflowed[0])var i=D[0].parent().height()-D[0].height(),r=u-o>0&&o-u>-(i*B.scrollRatio.y)&&(2*z[3]<z[2]||"yx"===T.axis);if(B.overflowed[1])var l=D[1].parent().width()-D[1].width(),h=f-a>0&&a-f>-(l*B.scrollRatio.x)&&(2*z[2]<z[3]||"yx"===T.axis);r||h?(U||e.preventDefault(),b=1):(C=1,y.addClass("mCS_touch_action")),U&&e.preventDefault(),w="yx"===T.axis?[u-o,f-a]:"x"===T.axis?[null,f-a]:[u-o,null],I[0].idleTimer=250,B.overflowed[0]&&s(w[0],R,n,"y","all",!0),B.overflowed[1]&&s(w[1],R,n,"x",L,!0)}}function i(e){if(!te(e)||c||O(e)[2])return void(t=0);t=1,e.stopImmediatePropagation(),Q(y),p=K();var o=M.offset();h=O(e)[0]-o.top,m=O(e)[1]-o.left,E=[],W=[]}function r(e){if(te(e)&&!c&&!O(e)[2]){d=0,e.stopImmediatePropagation(),b=0,C=0,v=K();var t=M.offset(),o=O(e)[0]-t.top,a=O(e)[1]-t.left;if(!(v-g>30)){_=1e3/(v-p);var n="mcsEaseOut",i=2.5>_,r=i?[E[E.length-2],W[W.length-2]]:[0,0];x=i?[o-r[0],a-r[1]]:[o-h,a-m];var u=[Math.abs(x[0]),Math.abs(x[1])];_=i?[Math.abs(x[0]/4),Math.abs(x[1]/4)]:[_,_];var f=[Math.abs(I[0].offsetTop)-x[0]*l(u[0]/_[0],_[0]),Math.abs(I[0].offsetLeft)-x[1]*l(u[1]/_[1],_[1])];w="yx"===T.axis?[f[0],f[1]]:"x"===T.axis?[null,f[1]]:[f[0],null],S=[4*u[0]+T.scrollInertia,4*u[1]+T.scrollInertia];var y=parseInt(T.contentTouchScroll)||0;w[0]=u[0]>y?w[0]:0,w[1]=u[1]>y?w[1]:0,B.overflowed[0]&&s(w[0],S[0],n,"y",L,!1),B.overflowed[1]&&s(w[1],S[1],n,"x",L,!1)}}}function l(e,t){var o=[1.5*t,2*t,t/1.5,t/2];return e>90?t>4?o[0]:o[3]:e>60?t>3?o[3]:o[2]:e>30?t>8?o[1]:t>6?o[0]:t>4?t:o[2]:t>8?t:o[3]}function s(e,t,o,a,n,i){e&&G(y,e.toString(),{dur:t,scrollEasing:o,dir:a,overwrite:n,drag:i})}var d,u,f,h,m,p,g,v,x,_,w,S,b,C,y=e(this),B=y.data(a),T=B.opt,k=a+"_"+B.idx,M=e("#mCSB_"+B.idx),I=e("#mCSB_"+B.idx+"_container"),D=[e("#mCSB_"+B.idx+"_dragger_vertical"),e("#mCSB_"+B.idx+"_dragger_horizontal")],E=[],W=[],R=0,L="yx"===T.axis?"none":"all",z=[],P=I.find("iframe"),H=["touchstart."+k+" pointerdown."+k+" MSPointerDown."+k,"touchmove."+k+" pointermove."+k+" MSPointerMove."+k,"touchend."+k+" pointerup."+k+" MSPointerUp."+k],U=void 0!==document.body.style.touchAction&&""!==document.body.style.touchAction;I.bind(H[0],function(e){o(e)}).bind(H[1],function(e){n(e)}),M.bind(H[0],function(e){i(e)}).bind(H[2],function(e){r(e)}),P.length&&P.each(function(){e(this).bind("load",function(){A(this)&&e(this.contentDocument||this.contentWindow.document).bind(H[0],function(e){o(e),i(e)}).bind(H[1],function(e){n(e)}).bind(H[2],function(e){r(e)})})})},E=function(){function o(){return window.getSelection?window.getSelection().toString():document.selection&&"Control"!=document.selection.type?document.selection.createRange().text:0}function n(e,t,o){d.type=o&&i?"stepped":"stepless",d.scrollAmount=10,j(r,e,t,"mcsLinearOut",o?60:null)}var i,r=e(this),l=r.data(a),s=l.opt,d=l.sequential,u=a+"_"+l.idx,f=e("#mCSB_"+l.idx+"_container"),h=f.parent();f.bind("mousedown."+u,function(){t||i||(i=1,c=!0)}).add(document).bind("mousemove."+u,function(e){if(!t&&i&&o()){var a=f.offset(),r=O(e)[0]-a.top+f[0].offsetTop,c=O(e)[1]-a.left+f[0].offsetLeft;r>0&&r<h.height()&&c>0&&c<h.width()?d.step&&n("off",null,"stepped"):("x"!==s.axis&&l.overflowed[0]&&(0>r?n("on",38):r>h.height()&&n("on",40)),"y"!==s.axis&&l.overflowed[1]&&(0>c?n("on",37):c>h.width()&&n("on",39)))}}).bind("mouseup."+u+" dragend."+u,function(){t||(i&&(i=0,n("off",null)),c=!1)})},W=function(){function t(t,a){if(Q(o),!z(o,t.target)){var r="auto"!==i.mouseWheel.deltaFactor?parseInt(i.mouseWheel.deltaFactor):s&&t.deltaFactor<100?100:t.deltaFactor||100,d=i.scrollInertia;if("x"===i.axis||"x"===i.mouseWheel.axis)var u="x",f=[Math.round(r*n.scrollRatio.x),parseInt(i.mouseWheel.scrollAmount)],h="auto"!==i.mouseWheel.scrollAmount?f[1]:f[0]>=l.width()?.9*l.width():f[0],m=Math.abs(e("#mCSB_"+n.idx+"_container")[0].offsetLeft),p=c[1][0].offsetLeft,g=c[1].parent().width()-c[1].width(),v="y"===i.mouseWheel.axis?t.deltaY||a:t.deltaX;else var u="y",f=[Math.round(r*n.scrollRatio.y),parseInt(i.mouseWheel.scrollAmount)],h="auto"!==i.mouseWheel.scrollAmount?f[1]:f[0]>=l.height()?.9*l.height():f[0],m=Math.abs(e("#mCSB_"+n.idx+"_container")[0].offsetTop),p=c[0][0].offsetTop,g=c[0].parent().height()-c[0].height(),v=t.deltaY||a;"y"===u&&!n.overflowed[0]||"x"===u&&!n.overflowed[1]||((i.mouseWheel.invert||t.webkitDirectionInvertedFromDevice)&&(v=-v),i.mouseWheel.normalizeDelta&&(v=0>v?-1:1),(v>0&&0!==p||0>v&&p!==g||i.mouseWheel.preventDefault)&&(t.stopImmediatePropagation(),t.preventDefault()),t.deltaFactor<5&&!i.mouseWheel.normalizeDelta&&(h=t.deltaFactor,d=17),G(o,(m-v*h).toString(),{dir:u,dur:d}))}}if(e(this).data(a)){var o=e(this),n=o.data(a),i=n.opt,r=a+"_"+n.idx,l=e("#mCSB_"+n.idx),c=[e("#mCSB_"+n.idx+"_dragger_vertical"),e("#mCSB_"+n.idx+"_dragger_horizontal")],d=e("#mCSB_"+n.idx+"_container").find("iframe");d.length&&d.each(function(){e(this).bind("load",function(){A(this)&&e(this.contentDocument||this.contentWindow.document).bind("mousewheel."+r,function(e,o){t(e,o)})})}),l.bind("mousewheel."+r,function(e,o){t(e,o)})}},R=new Object,A=function(t){var o=!1,a=!1,n=null;if(void 0===t?a="#empty":void 0!==e(t).attr("id")&&(a=e(t).attr("id")),a!==!1&&void 0!==R[a])return R[a];if(t){try{var i=t.contentDocument||t.contentWindow.document;n=i.body.innerHTML}catch(r){}o=null!==n}else{try{var i=top.document;n=i.body.innerHTML}catch(r){}o=null!==n}return a!==!1&&(R[a]=o),o},L=function(e){var t=this.find("iframe");if(t.length){var o=e?"auto":"none";t.css("pointer-events",o)}},z=function(t,o){var n=o.nodeName.toLowerCase(),i=t.data(a).opt.mouseWheel.disableOver,r=["select","textarea"];return e.inArray(n,i)>-1&&!(e.inArray(n,r)>-1&&!e(o).is(":focus"))},P=function(){var t,o=e(this),n=o.data(a),i=a+"_"+n.idx,r=e("#mCSB_"+n.idx+"_container"),l=r.parent(),s=e(".mCSB_"+n.idx+"_scrollbar ."+d[12]);s.bind("mousedown."+i+" touchstart."+i+" pointerdown."+i+" MSPointerDown."+i,function(o){c=!0,e(o.target).hasClass("mCSB_dragger")||(t=1)}).bind("touchend."+i+" pointerup."+i+" MSPointerUp."+i,function(){c=!1}).bind("click."+i,function(a){if(t&&(t=0,e(a.target).hasClass(d[12])||e(a.target).hasClass("mCSB_draggerRail"))){Q(o);var i=e(this),s=i.find(".mCSB_dragger");if(i.parent(".mCSB_scrollTools_horizontal").length>0){if(!n.overflowed[1])return;var c="x",u=a.pageX>s.offset().left?-1:1,f=Math.abs(r[0].offsetLeft)-u*(.9*l.width())}else{if(!n.overflowed[0])return;var c="y",u=a.pageY>s.offset().top?-1:1,f=Math.abs(r[0].offsetTop)-u*(.9*l.height())}G(o,f.toString(),{dir:c,scrollEasing:"mcsEaseInOut"})}})},H=function(){var t=e(this),o=t.data(a),n=o.opt,i=a+"_"+o.idx,r=e("#mCSB_"+o.idx+"_container"),l=r.parent();r.bind("focusin."+i,function(){var o=e(document.activeElement),a=r.find(".mCustomScrollBox").length,i=0;o.is(n.advanced.autoScrollOnFocus)&&(Q(t),clearTimeout(t[0]._focusTimeout),t[0]._focusTimer=a?(i+17)*a:0,t[0]._focusTimeout=setTimeout(function(){var e=[ae(o)[0],ae(o)[1]],a=[r[0].offsetTop,r[0].offsetLeft],s=[a[0]+e[0]>=0&&a[0]+e[0]<l.height()-o.outerHeight(!1),a[1]+e[1]>=0&&a[0]+e[1]<l.width()-o.outerWidth(!1)],c="yx"!==n.axis||s[0]||s[1]?"all":"none";"x"===n.axis||s[0]||G(t,e[0].toString(),{dir:"y",scrollEasing:"mcsEaseInOut",overwrite:c,dur:i}),"y"===n.axis||s[1]||G(t,e[1].toString(),{dir:"x",scrollEasing:"mcsEaseInOut",overwrite:c,dur:i})},t[0]._focusTimer))})},U=function(){var t=e(this),o=t.data(a),n=a+"_"+o.idx,i=e("#mCSB_"+o.idx+"_container").parent();i.bind("scroll."+n,function(){0===i.scrollTop()&&0===i.scrollLeft()||e(".mCSB_"+o.idx+"_scrollbar").css("visibility","hidden")})},F=function(){var t=e(this),o=t.data(a),n=o.opt,i=o.sequential,r=a+"_"+o.idx,l=".mCSB_"+o.idx+"_scrollbar",s=e(l+">a");s.bind("contextmenu."+r,function(e){e.preventDefault()}).bind("mousedown."+r+" touchstart."+r+" pointerdown."+r+" MSPointerDown."+r+" mouseup."+r+" touchend."+r+" pointerup."+r+" MSPointerUp."+r+" mouseout."+r+" pointerout."+r+" MSPointerOut."+r+" click."+r,function(a){function r(e,o){i.scrollAmount=n.scrollButtons.scrollAmount,j(t,e,o)}if(a.preventDefault(),ee(a)){var l=e(this).attr("class");switch(i.type=n.scrollButtons.scrollType,a.type){case"mousedown":case"touchstart":case"pointerdown":case"MSPointerDown":if("stepped"===i.type)return;c=!0,o.tweenRunning=!1,r("on",l);break;case"mouseup":case"touchend":case"pointerup":case"MSPointerUp":case"mouseout":case"pointerout":case"MSPointerOut":if("stepped"===i.type)return;c=!1,i.dir&&r("off",l);break;case"click":if("stepped"!==i.type||o.tweenRunning)return;r("on",l)}}})},q=function(){function t(t){function a(e,t){r.type=i.keyboard.scrollType,r.scrollAmount=i.keyboard.scrollAmount,"stepped"===r.type&&n.tweenRunning||j(o,e,t)}switch(t.type){case"blur":n.tweenRunning&&r.dir&&a("off",null);break;case"keydown":case"keyup":var l=t.keyCode?t.keyCode:t.which,s="on";if("x"!==i.axis&&(38===l||40===l)||"y"!==i.axis&&(37===l||39===l)){if((38===l||40===l)&&!n.overflowed[0]||(37===l||39===l)&&!n.overflowed[1])return;"keyup"===t.type&&(s="off"),e(document.activeElement).is(u)||(t.preventDefault(),t.stopImmediatePropagation(),a(s,l))}else if(33===l||34===l){if((n.overflowed[0]||n.overflowed[1])&&(t.preventDefault(),t.stopImmediatePropagation()),"keyup"===t.type){Q(o);var f=34===l?-1:1;if("x"===i.axis||"yx"===i.axis&&n.overflowed[1]&&!n.overflowed[0])var h="x",m=Math.abs(c[0].offsetLeft)-f*(.9*d.width());else var h="y",m=Math.abs(c[0].offsetTop)-f*(.9*d.height());G(o,m.toString(),{dir:h,scrollEasing:"mcsEaseInOut"})}}else if((35===l||36===l)&&!e(document.activeElement).is(u)&&((n.overflowed[0]||n.overflowed[1])&&(t.preventDefault(),t.stopImmediatePropagation()),"keyup"===t.type)){if("x"===i.axis||"yx"===i.axis&&n.overflowed[1]&&!n.overflowed[0])var h="x",m=35===l?Math.abs(d.width()-c.outerWidth(!1)):0;else var h="y",m=35===l?Math.abs(d.height()-c.outerHeight(!1)):0;G(o,m.toString(),{dir:h,scrollEasing:"mcsEaseInOut"})}}}var o=e(this),n=o.data(a),i=n.opt,r=n.sequential,l=a+"_"+n.idx,s=e("#mCSB_"+n.idx),c=e("#mCSB_"+n.idx+"_container"),d=c.parent(),u="input,textarea,select,datalist,keygen,[contenteditable='true']",f=c.find("iframe"),h=["blur."+l+" keydown."+l+" keyup."+l];f.length&&f.each(function(){e(this).bind("load",function(){A(this)&&e(this.contentDocument||this.contentWindow.document).bind(h[0],function(e){t(e)})})}),s.attr("tabindex","0").bind(h[0],function(e){t(e)})},j=function(t,o,n,i,r){function l(e){u.snapAmount&&(f.scrollAmount=u.snapAmount instanceof Array?"x"===f.dir[0]?u.snapAmount[1]:u.snapAmount[0]:u.snapAmount);var o="stepped"!==f.type,a=r?r:e?o?p/1.5:g:1e3/60,n=e?o?7.5:40:2.5,s=[Math.abs(h[0].offsetTop),Math.abs(h[0].offsetLeft)],d=[c.scrollRatio.y>10?10:c.scrollRatio.y,c.scrollRatio.x>10?10:c.scrollRatio.x],m="x"===f.dir[0]?s[1]+f.dir[1]*(d[1]*n):s[0]+f.dir[1]*(d[0]*n),v="x"===f.dir[0]?s[1]+f.dir[1]*parseInt(f.scrollAmount):s[0]+f.dir[1]*parseInt(f.scrollAmount),x="auto"!==f.scrollAmount?v:m,_=i?i:e?o?"mcsLinearOut":"mcsEaseInOut":"mcsLinear",w=!!e;return e&&17>a&&(x="x"===f.dir[0]?s[1]:s[0]),G(t,x.toString(),{dir:f.dir[0],scrollEasing:_,dur:a,onComplete:w}),e?void(f.dir=!1):(clearTimeout(f.step),void(f.step=setTimeout(function(){l()},a)))}function s(){clearTimeout(f.step),$(f,"step"),Q(t)}var c=t.data(a),u=c.opt,f=c.sequential,h=e("#mCSB_"+c.idx+"_container"),m="stepped"===f.type,p=u.scrollInertia<26?26:u.scrollInertia,g=u.scrollInertia<1?17:u.scrollInertia;switch(o){case"on":if(f.dir=[n===d[16]||n===d[15]||39===n||37===n?"x":"y",n===d[13]||n===d[15]||38===n||37===n?-1:1],Q(t),oe(n)&&"stepped"===f.type)return;l(m);break;case"off":s(),(m||c.tweenRunning&&f.dir)&&l(!0)}},Y=function(t){var o=e(this).data(a).opt,n=[];return"function"==typeof t&&(t=t()),t instanceof Array?n=t.length>1?[t[0],t[1]]:"x"===o.axis?[null,t[0]]:[t[0],null]:(n[0]=t.y?t.y:t.x||"x"===o.axis?null:t,n[1]=t.x?t.x:t.y||"y"===o.axis?null:t),"function"==typeof n[0]&&(n[0]=n[0]()),"function"==typeof n[1]&&(n[1]=n[1]()),n},X=function(t,o){if(null!=t&&"undefined"!=typeof t){var n=e(this),i=n.data(a),r=i.opt,l=e("#mCSB_"+i.idx+"_container"),s=l.parent(),c=typeof t;o||(o="x"===r.axis?"x":"y");var d="x"===o?l.outerWidth(!1)-s.width():l.outerHeight(!1)-s.height(),f="x"===o?l[0].offsetLeft:l[0].offsetTop,h="x"===o?"left":"top";switch(c){case"function":return t();case"object":var m=t.jquery?t:e(t);if(!m.length)return;return"x"===o?ae(m)[1]:ae(m)[0];case"string":case"number":if(oe(t))return Math.abs(t);if(-1!==t.indexOf("%"))return Math.abs(d*parseInt(t)/100);if(-1!==t.indexOf("-="))return Math.abs(f-parseInt(t.split("-=")[1]));if(-1!==t.indexOf("+=")){var p=f+parseInt(t.split("+=")[1]);return p>=0?0:Math.abs(p)}if(-1!==t.indexOf("px")&&oe(t.split("px")[0]))return Math.abs(t.split("px")[0]);if("top"===t||"left"===t)return 0;if("bottom"===t)return Math.abs(s.height()-l.outerHeight(!1));if("right"===t)return Math.abs(s.width()-l.outerWidth(!1));if("first"===t||"last"===t){var m=l.find(":"+t);return"x"===o?ae(m)[1]:ae(m)[0]}return e(t).length?"x"===o?ae(e(t))[1]:ae(e(t))[0]:(l.css(h,t),void u.update.call(null,n[0]))}}},N=function(t){function o(){return clearTimeout(f[0].autoUpdate),0===l.parents("html").length?void(l=null):void(f[0].autoUpdate=setTimeout(function(){return c.advanced.updateOnSelectorChange&&(s.poll.change.n=i(),s.poll.change.n!==s.poll.change.o)?(s.poll.change.o=s.poll.change.n,void r(3)):c.advanced.updateOnContentResize&&(s.poll.size.n=l[0].scrollHeight+l[0].scrollWidth+f[0].offsetHeight+l[0].offsetHeight+l[0].offsetWidth,s.poll.size.n!==s.poll.size.o)?(s.poll.size.o=s.poll.size.n,void r(1)):!c.advanced.updateOnImageLoad||"auto"===c.advanced.updateOnImageLoad&&"y"===c.axis||(s.poll.img.n=f.find("img").length,s.poll.img.n===s.poll.img.o)?void((c.advanced.updateOnSelectorChange||c.advanced.updateOnContentResize||c.advanced.updateOnImageLoad)&&o()):(s.poll.img.o=s.poll.img.n,void f.find("img").each(function(){n(this)}))},c.advanced.autoUpdateTimeout))}function n(t){function o(e,t){return function(){
return t.apply(e,arguments)}}function a(){this.onload=null,e(t).addClass(d[2]),r(2)}if(e(t).hasClass(d[2]))return void r();var n=new Image;n.onload=o(n,a),n.src=t.src}function i(){c.advanced.updateOnSelectorChange===!0&&(c.advanced.updateOnSelectorChange="*");var e=0,t=f.find(c.advanced.updateOnSelectorChange);return c.advanced.updateOnSelectorChange&&t.length>0&&t.each(function(){e+=this.offsetHeight+this.offsetWidth}),e}function r(e){clearTimeout(f[0].autoUpdate),u.update.call(null,l[0],e)}var l=e(this),s=l.data(a),c=s.opt,f=e("#mCSB_"+s.idx+"_container");return t?(clearTimeout(f[0].autoUpdate),void $(f[0],"autoUpdate")):void o()},V=function(e,t,o){return Math.round(e/t)*t-o},Q=function(t){var o=t.data(a),n=e("#mCSB_"+o.idx+"_container,#mCSB_"+o.idx+"_container_wrapper,#mCSB_"+o.idx+"_dragger_vertical,#mCSB_"+o.idx+"_dragger_horizontal");n.each(function(){Z.call(this)})},G=function(t,o,n){function i(e){return s&&c.callbacks[e]&&"function"==typeof c.callbacks[e]}function r(){return[c.callbacks.alwaysTriggerOffsets||w>=S[0]+y,c.callbacks.alwaysTriggerOffsets||-B>=w]}function l(){var e=[h[0].offsetTop,h[0].offsetLeft],o=[x[0].offsetTop,x[0].offsetLeft],a=[h.outerHeight(!1),h.outerWidth(!1)],i=[f.height(),f.width()];t[0].mcs={content:h,top:e[0],left:e[1],draggerTop:o[0],draggerLeft:o[1],topPct:Math.round(100*Math.abs(e[0])/(Math.abs(a[0])-i[0])),leftPct:Math.round(100*Math.abs(e[1])/(Math.abs(a[1])-i[1])),direction:n.dir}}var s=t.data(a),c=s.opt,d={trigger:"internal",dir:"y",scrollEasing:"mcsEaseOut",drag:!1,dur:c.scrollInertia,overwrite:"all",callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},n=e.extend(d,n),u=[n.dur,n.drag?0:n.dur],f=e("#mCSB_"+s.idx),h=e("#mCSB_"+s.idx+"_container"),m=h.parent(),p=c.callbacks.onTotalScrollOffset?Y.call(t,c.callbacks.onTotalScrollOffset):[0,0],g=c.callbacks.onTotalScrollBackOffset?Y.call(t,c.callbacks.onTotalScrollBackOffset):[0,0];if(s.trigger=n.trigger,0===m.scrollTop()&&0===m.scrollLeft()||(e(".mCSB_"+s.idx+"_scrollbar").css("visibility","visible"),m.scrollTop(0).scrollLeft(0)),"_resetY"!==o||s.contentReset.y||(i("onOverflowYNone")&&c.callbacks.onOverflowYNone.call(t[0]),s.contentReset.y=1),"_resetX"!==o||s.contentReset.x||(i("onOverflowXNone")&&c.callbacks.onOverflowXNone.call(t[0]),s.contentReset.x=1),"_resetY"!==o&&"_resetX"!==o){if(!s.contentReset.y&&t[0].mcs||!s.overflowed[0]||(i("onOverflowY")&&c.callbacks.onOverflowY.call(t[0]),s.contentReset.x=null),!s.contentReset.x&&t[0].mcs||!s.overflowed[1]||(i("onOverflowX")&&c.callbacks.onOverflowX.call(t[0]),s.contentReset.x=null),c.snapAmount){var v=c.snapAmount instanceof Array?"x"===n.dir?c.snapAmount[1]:c.snapAmount[0]:c.snapAmount;o=V(o,v,c.snapOffset)}switch(n.dir){case"x":var x=e("#mCSB_"+s.idx+"_dragger_horizontal"),_="left",w=h[0].offsetLeft,S=[f.width()-h.outerWidth(!1),x.parent().width()-x.width()],b=[o,0===o?0:o/s.scrollRatio.x],y=p[1],B=g[1],T=y>0?y/s.scrollRatio.x:0,k=B>0?B/s.scrollRatio.x:0;break;case"y":var x=e("#mCSB_"+s.idx+"_dragger_vertical"),_="top",w=h[0].offsetTop,S=[f.height()-h.outerHeight(!1),x.parent().height()-x.height()],b=[o,0===o?0:o/s.scrollRatio.y],y=p[0],B=g[0],T=y>0?y/s.scrollRatio.y:0,k=B>0?B/s.scrollRatio.y:0}b[1]<0||0===b[0]&&0===b[1]?b=[0,0]:b[1]>=S[1]?b=[S[0],S[1]]:b[0]=-b[0],t[0].mcs||(l(),i("onInit")&&c.callbacks.onInit.call(t[0])),clearTimeout(h[0].onCompleteTimeout),J(x[0],_,Math.round(b[1]),u[1],n.scrollEasing),!s.tweenRunning&&(0===w&&b[0]>=0||w===S[0]&&b[0]<=S[0])||J(h[0],_,Math.round(b[0]),u[0],n.scrollEasing,n.overwrite,{onStart:function(){n.callbacks&&n.onStart&&!s.tweenRunning&&(i("onScrollStart")&&(l(),c.callbacks.onScrollStart.call(t[0])),s.tweenRunning=!0,C(x),s.cbOffsets=r())},onUpdate:function(){n.callbacks&&n.onUpdate&&i("whileScrolling")&&(l(),c.callbacks.whileScrolling.call(t[0]))},onComplete:function(){if(n.callbacks&&n.onComplete){"yx"===c.axis&&clearTimeout(h[0].onCompleteTimeout);var e=h[0].idleTimer||0;h[0].onCompleteTimeout=setTimeout(function(){i("onScroll")&&(l(),c.callbacks.onScroll.call(t[0])),i("onTotalScroll")&&b[1]>=S[1]-T&&s.cbOffsets[0]&&(l(),c.callbacks.onTotalScroll.call(t[0])),i("onTotalScrollBack")&&b[1]<=k&&s.cbOffsets[1]&&(l(),c.callbacks.onTotalScrollBack.call(t[0])),s.tweenRunning=!1,h[0].idleTimer=0,C(x,"hide")},e)}}})}},J=function(e,t,o,a,n,i,r){function l(){S.stop||(x||m.call(),x=K()-v,s(),x>=S.time&&(S.time=x>S.time?x+f-(x-S.time):x+f-1,S.time<x+1&&(S.time=x+1)),S.time<a?S.id=h(l):g.call())}function s(){a>0?(S.currVal=u(S.time,_,b,a,n),w[t]=Math.round(S.currVal)+"px"):w[t]=o+"px",p.call()}function c(){f=1e3/60,S.time=x+f,h=window.requestAnimationFrame?window.requestAnimationFrame:function(e){return s(),setTimeout(e,.01)},S.id=h(l)}function d(){null!=S.id&&(window.requestAnimationFrame?window.cancelAnimationFrame(S.id):clearTimeout(S.id),S.id=null)}function u(e,t,o,a,n){switch(n){case"linear":case"mcsLinear":return o*e/a+t;case"mcsLinearOut":return e/=a,e--,o*Math.sqrt(1-e*e)+t;case"easeInOutSmooth":return e/=a/2,1>e?o/2*e*e+t:(e--,-o/2*(e*(e-2)-1)+t);case"easeInOutStrong":return e/=a/2,1>e?o/2*Math.pow(2,10*(e-1))+t:(e--,o/2*(-Math.pow(2,-10*e)+2)+t);case"easeInOut":case"mcsEaseInOut":return e/=a/2,1>e?o/2*e*e*e+t:(e-=2,o/2*(e*e*e+2)+t);case"easeOutSmooth":return e/=a,e--,-o*(e*e*e*e-1)+t;case"easeOutStrong":return o*(-Math.pow(2,-10*e/a)+1)+t;case"easeOut":case"mcsEaseOut":default:var i=(e/=a)*e,r=i*e;return t+o*(.499999999999997*r*i+-2.5*i*i+5.5*r+-6.5*i+4*e)}}e._mTween||(e._mTween={top:{},left:{}});var f,h,r=r||{},m=r.onStart||function(){},p=r.onUpdate||function(){},g=r.onComplete||function(){},v=K(),x=0,_=e.offsetTop,w=e.style,S=e._mTween[t];"left"===t&&(_=e.offsetLeft);var b=o-_;S.stop=0,"none"!==i&&d(),c()},K=function(){return window.performance&&window.performance.now?window.performance.now():window.performance&&window.performance.webkitNow?window.performance.webkitNow():Date.now?Date.now():(new Date).getTime()},Z=function(){var e=this;e._mTween||(e._mTween={top:{},left:{}});for(var t=["top","left"],o=0;o<t.length;o++){var a=t[o];e._mTween[a].id&&(window.requestAnimationFrame?window.cancelAnimationFrame(e._mTween[a].id):clearTimeout(e._mTween[a].id),e._mTween[a].id=null,e._mTween[a].stop=1)}},$=function(e,t){try{delete e[t]}catch(o){e[t]=null}},ee=function(e){return!(e.which&&1!==e.which)},te=function(e){var t=e.originalEvent.pointerType;return!(t&&"touch"!==t&&2!==t)},oe=function(e){return!isNaN(parseFloat(e))&&isFinite(e)},ae=function(e){var t=e.parents(".mCSB_container");return[e.offset().top-t.offset().top,e.offset().left-t.offset().left]},ne=function(){function e(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)if(e[t]+"Hidden"in document)return e[t]+"Hidden";return null}var t=e();return t?document[t]:!1};e.fn[o]=function(t){return u[t]?u[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):u.init.apply(this,arguments)},e[o]=function(t){return u[t]?u[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):u.init.apply(this,arguments)},e[o].defaults=i,window[o]=!0,e(window).bind("load",function(){e(n)[o](),e.extend(e.expr[":"],{mcsInView:e.expr[":"].mcsInView||function(t){var o,a,n=e(t),i=n.parents(".mCSB_container");if(i.length)return o=i.parent(),a=[i[0].offsetTop,i[0].offsetLeft],a[0]+ae(n)[0]>=0&&a[0]+ae(n)[0]<o.height()-n.outerHeight(!1)&&a[1]+ae(n)[1]>=0&&a[1]+ae(n)[1]<o.width()-n.outerWidth(!1)},mcsInSight:e.expr[":"].mcsInSight||function(t,o,a){var n,i,r,l,s=e(t),c=s.parents(".mCSB_container"),d="exact"===a[3]?[[1,0],[1,0]]:[[.9,.1],[.6,.4]];if(c.length)return n=[s.outerHeight(!1),s.outerWidth(!1)],r=[c[0].offsetTop+ae(s)[0],c[0].offsetLeft+ae(s)[1]],i=[c.parent()[0].offsetHeight,c.parent()[0].offsetWidth],l=[n[0]<i[0]?d[0]:d[1],n[1]<i[1]?d[0]:d[1]],r[0]-i[0]*l[0][0]<0&&r[0]+n[0]-i[0]*l[0][1]>=0&&r[1]-i[1]*l[1][0]<0&&r[1]+n[1]-i[1]*l[1][1]>=0},mcsOverflow:e.expr[":"].mcsOverflow||function(t){var o=e(t).data(a);if(o)return o.overflowed[0]||o.overflowed[1]}})})})});

/*! selectize.js - v0.12.4 | https://github.com/selectize/selectize.js | Apache License (v2) */

!function(a,b){"function"==typeof define&&define.amd?define("sifter",b):"object"==typeof exports?module.exports=b():a.Sifter=b()}(this,function(){var a=function(a,b){this.items=a,this.settings=b||{diacritics:!0}};a.prototype.tokenize=function(a){if(a=e(String(a||"").toLowerCase()),!a||!a.length)return[];var b,c,d,g,i=[],j=a.split(/ +/);for(b=0,c=j.length;b<c;b++){if(d=f(j[b]),this.settings.diacritics)for(g in h)h.hasOwnProperty(g)&&(d=d.replace(new RegExp(g,"g"),h[g]));i.push({string:j[b],regex:new RegExp(d,"i")})}return i},a.prototype.iterator=function(a,b){var c;c=g(a)?Array.prototype.forEach||function(a){for(var b=0,c=this.length;b<c;b++)a(this[b],b,this)}:function(a){for(var b in this)this.hasOwnProperty(b)&&a(this[b],b,this)},c.apply(a,[b])},a.prototype.getScoreFunction=function(a,b){var c,e,f,g,h;c=this,a=c.prepareSearch(a,b),f=a.tokens,e=a.options.fields,g=f.length,h=a.options.nesting;var i=function(a,b){var c,d;return a?(a=String(a||""),d=a.search(b.regex),d===-1?0:(c=b.string.length/a.length,0===d&&(c+=.5),c)):0},j=function(){var a=e.length;return a?1===a?function(a,b){return i(d(b,e[0],h),a)}:function(b,c){for(var f=0,g=0;f<a;f++)g+=i(d(c,e[f],h),b);return g/a}:function(){return 0}}();return g?1===g?function(a){return j(f[0],a)}:"and"===a.options.conjunction?function(a){for(var b,c=0,d=0;c<g;c++){if(b=j(f[c],a),b<=0)return 0;d+=b}return d/g}:function(a){for(var b=0,c=0;b<g;b++)c+=j(f[b],a);return c/g}:function(){return 0}},a.prototype.getSortFunction=function(a,c){var e,f,g,h,i,j,k,l,m,n,o;if(g=this,a=g.prepareSearch(a,c),o=!a.query&&c.sort_empty||c.sort,m=function(a,b){return"$score"===a?b.score:d(g.items[b.id],a,c.nesting)},i=[],o)for(e=0,f=o.length;e<f;e++)(a.query||"$score"!==o[e].field)&&i.push(o[e]);if(a.query){for(n=!0,e=0,f=i.length;e<f;e++)if("$score"===i[e].field){n=!1;break}n&&i.unshift({field:"$score",direction:"desc"})}else for(e=0,f=i.length;e<f;e++)if("$score"===i[e].field){i.splice(e,1);break}for(l=[],e=0,f=i.length;e<f;e++)l.push("desc"===i[e].direction?-1:1);return j=i.length,j?1===j?(h=i[0].field,k=l[0],function(a,c){return k*b(m(h,a),m(h,c))}):function(a,c){var d,e,f;for(d=0;d<j;d++)if(f=i[d].field,e=l[d]*b(m(f,a),m(f,c)))return e;return 0}:null},a.prototype.prepareSearch=function(a,b){if("object"==typeof a)return a;b=c({},b);var d=b.fields,e=b.sort,f=b.sort_empty;return d&&!g(d)&&(b.fields=[d]),e&&!g(e)&&(b.sort=[e]),f&&!g(f)&&(b.sort_empty=[f]),{options:b,query:String(a||"").toLowerCase(),tokens:this.tokenize(a),total:0,items:[]}},a.prototype.search=function(a,b){var c,d,e,f,g=this;return d=this.prepareSearch(a,b),b=d.options,a=d.query,f=b.score||g.getScoreFunction(d),a.length?g.iterator(g.items,function(a,e){c=f(a),(b.filter===!1||c>0)&&d.items.push({score:c,id:e})}):g.iterator(g.items,function(a,b){d.items.push({score:1,id:b})}),e=g.getSortFunction(d,b),e&&d.items.sort(e),d.total=d.items.length,"number"==typeof b.limit&&(d.items=d.items.slice(0,b.limit)),d};var b=function(a,b){return"number"==typeof a&&"number"==typeof b?a>b?1:a<b?-1:0:(a=i(String(a||"")),b=i(String(b||"")),a>b?1:b>a?-1:0)},c=function(a,b){var c,d,e,f;for(c=1,d=arguments.length;c<d;c++)if(f=arguments[c])for(e in f)f.hasOwnProperty(e)&&(a[e]=f[e]);return a},d=function(a,b,c){if(a&&b){if(!c)return a[b];for(var d=b.split(".");d.length&&(a=a[d.shift()]););return a}},e=function(a){return(a+"").replace(/^\s+|\s+$|/g,"")},f=function(a){return(a+"").replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")},g=Array.isArray||"undefined"!=typeof $&&$.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)},h={a:"[aḀḁĂăÂâǍǎȺⱥȦȧẠạÄäÀàÁáĀāÃãÅåąĄÃąĄ]",b:"[b␢βΒB฿𐌁ᛒ]",c:"[cĆćĈĉČčĊċC̄c̄ÇçḈḉȻȼƇƈɕᴄＣｃ]",d:"[dĎďḊḋḐḑḌḍḒḓḎḏĐđD̦d̦ƉɖƊɗƋƌᵭᶁᶑȡᴅＤｄð]",e:"[eÉéÈèÊêḘḙĚěĔĕẼẽḚḛẺẻĖėËëĒēȨȩĘęᶒɆɇȄȅẾếỀềỄễỂểḜḝḖḗḔḕȆȇẸẹỆệⱸᴇＥｅɘǝƏƐε]",f:"[fƑƒḞḟ]",g:"[gɢ₲ǤǥĜĝĞğĢģƓɠĠġ]",h:"[hĤĥĦħḨḩẖẖḤḥḢḣɦʰǶƕ]",i:"[iÍíÌìĬĭÎîǏǐÏïḮḯĨĩĮįĪīỈỉȈȉȊȋỊịḬḭƗɨɨ̆ᵻᶖİiIıɪＩｉ]",j:"[jȷĴĵɈɉʝɟʲ]",k:"[kƘƙꝀꝁḰḱǨǩḲḳḴḵκϰ₭]",l:"[lŁłĽľĻļĹĺḶḷḸḹḼḽḺḻĿŀȽƚⱠⱡⱢɫɬᶅɭȴʟＬｌ]",n:"[nŃńǸǹŇňÑñṄṅŅņṆṇṊṋṈṉN̈n̈ƝɲȠƞᵰᶇɳȵɴＮｎŊŋ]",o:"[oØøÖöÓóÒòÔôǑǒŐőŎŏȮȯỌọƟɵƠơỎỏŌōÕõǪǫȌȍՕօ]",p:"[pṔṕṖṗⱣᵽƤƥᵱ]",q:"[qꝖꝗʠɊɋꝘꝙq̃]",r:"[rŔŕɌɍŘřŖŗṘṙȐȑȒȓṚṛⱤɽ]",s:"[sŚśṠṡṢṣꞨꞩŜŝŠšŞşȘșS̈s̈]",t:"[tŤťṪṫŢţṬṭƮʈȚțṰṱṮṯƬƭ]",u:"[uŬŭɄʉỤụÜüÚúÙùÛûǓǔŰűŬŭƯưỦủŪūŨũŲųȔȕ∪]",v:"[vṼṽṾṿƲʋꝞꝟⱱʋ]",w:"[wẂẃẀẁŴŵẄẅẆẇẈẉ]",x:"[xẌẍẊẋχ]",y:"[yÝýỲỳŶŷŸÿỸỹẎẏỴỵɎɏƳƴ]",z:"[zŹźẐẑŽžŻżẒẓẔẕƵƶ]"},i=function(){var a,b,c,d,e="",f={};for(c in h)if(h.hasOwnProperty(c))for(d=h[c].substring(2,h[c].length-1),e+=d,a=0,b=d.length;a<b;a++)f[d.charAt(a)]=c;var g=new RegExp("["+e+"]","g");return function(a){return a.replace(g,function(a){return f[a]}).toLowerCase()}}();return a}),function(a,b){"function"==typeof define&&define.amd?define("microplugin",b):"object"==typeof exports?module.exports=b():a.MicroPlugin=b()}(this,function(){var a={};a.mixin=function(a){a.plugins={},a.prototype.initializePlugins=function(a){var c,d,e,f=this,g=[];if(f.plugins={names:[],settings:{},requested:{},loaded:{}},b.isArray(a))for(c=0,d=a.length;c<d;c++)"string"==typeof a[c]?g.push(a[c]):(f.plugins.settings[a[c].name]=a[c].options,g.push(a[c].name));else if(a)for(e in a)a.hasOwnProperty(e)&&(f.plugins.settings[e]=a[e],g.push(e));for(;g.length;)f.require(g.shift())},a.prototype.loadPlugin=function(b){var c=this,d=c.plugins,e=a.plugins[b];if(!a.plugins.hasOwnProperty(b))throw new Error('Unable to find "'+b+'" plugin');d.requested[b]=!0,d.loaded[b]=e.fn.apply(c,[c.plugins.settings[b]||{}]),d.names.push(b)},a.prototype.require=function(a){var b=this,c=b.plugins;if(!b.plugins.loaded.hasOwnProperty(a)){if(c.requested[a])throw new Error('Plugin has circular dependency ("'+a+'")');b.loadPlugin(a)}return c.loaded[a]},a.define=function(b,c){a.plugins[b]={name:b,fn:c}}};var b={isArray:Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)}};return a}),function(a,b){"function"==typeof define&&define.amd?define("selectize",["jquery","sifter","microplugin"],b):"object"==typeof exports?module.exports=b(require("jquery"),require("sifter"),require("microplugin")):a.Selectize=b(a.jQuery,a.Sifter,a.MicroPlugin)}(this,function(a,b,c){"use strict";var d=function(a,b){if("string"!=typeof b||b.length){var c="string"==typeof b?new RegExp(b,"i"):b,d=function(a){var b=0;if(3===a.nodeType){var e=a.data.search(c);if(e>=0&&a.data.length>0){var f=a.data.match(c),g=document.createElement("span");g.className="highlight";var h=a.splitText(e),i=(h.splitText(f[0].length),h.cloneNode(!0));g.appendChild(i),h.parentNode.replaceChild(g,h),b=1}}else if(1===a.nodeType&&a.childNodes&&!/(script|style)/i.test(a.tagName))for(var j=0;j<a.childNodes.length;++j)j+=d(a.childNodes[j]);return b};return a.each(function(){d(this)})}};a.fn.removeHighlight=function(){return this.find("span.highlight").each(function(){this.parentNode.firstChild.nodeName;var a=this.parentNode;a.replaceChild(this.firstChild,this),a.normalize()}).end()};var e=function(){};e.prototype={on:function(a,b){this._events=this._events||{},this._events[a]=this._events[a]||[],this._events[a].push(b)},off:function(a,b){var c=arguments.length;return 0===c?delete this._events:1===c?delete this._events[a]:(this._events=this._events||{},void(a in this._events!=!1&&this._events[a].splice(this._events[a].indexOf(b),1)))},trigger:function(a){if(this._events=this._events||{},a in this._events!=!1)for(var b=0;b<this._events[a].length;b++)this._events[a][b].apply(this,Array.prototype.slice.call(arguments,1))}},e.mixin=function(a){for(var b=["on","off","trigger"],c=0;c<b.length;c++)a.prototype[b[c]]=e.prototype[b[c]]};var f=/Mac/.test(navigator.userAgent),g=65,h=13,i=27,j=37,k=38,l=80,m=39,n=40,o=78,p=8,q=46,r=16,s=f?91:17,t=f?18:17,u=9,v=1,w=2,x=!/android/i.test(window.navigator.userAgent)&&!!document.createElement("input").validity,y=function(a){return"undefined"!=typeof a},z=function(a){return"undefined"==typeof a||null===a?null:"boolean"==typeof a?a?"1":"0":a+""},A=function(a){return(a+"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},B={};B.before=function(a,b,c){var d=a[b];a[b]=function(){return c.apply(a,arguments),d.apply(a,arguments)}},B.after=function(a,b,c){var d=a[b];a[b]=function(){var b=d.apply(a,arguments);return c.apply(a,arguments),b}};var C=function(a){var b=!1;return function(){b||(b=!0,a.apply(this,arguments))}},D=function(a,b){var c;return function(){var d=this,e=arguments;window.clearTimeout(c),c=window.setTimeout(function(){a.apply(d,e)},b)}},E=function(a,b,c){var d,e=a.trigger,f={};a.trigger=function(){var c=arguments[0];return b.indexOf(c)===-1?e.apply(a,arguments):void(f[c]=arguments)},c.apply(a,[]),a.trigger=e;for(d in f)f.hasOwnProperty(d)&&e.apply(a,f[d])},F=function(a,b,c,d){a.on(b,c,function(b){for(var c=b.target;c&&c.parentNode!==a[0];)c=c.parentNode;return b.currentTarget=c,d.apply(this,[b])})},G=function(a){var b={};if("selectionStart"in a)b.start=a.selectionStart,b.length=a.selectionEnd-b.start;else if(document.selection){a.focus();var c=document.selection.createRange(),d=document.selection.createRange().text.length;c.moveStart("character",-a.value.length),b.start=c.text.length-d,b.length=d}return b},H=function(a,b,c){var d,e,f={};if(c)for(d=0,e=c.length;d<e;d++)f[c[d]]=a.css(c[d]);else f=a.css();b.css(f)},I=function(b,c){if(!b)return 0;var d=a("<test>").css({position:"absolute",top:-99999,left:-99999,width:"auto",padding:0,whiteSpace:"pre"}).text(b).appendTo("body");H(c,d,["letterSpacing","fontSize","fontFamily","fontWeight","textTransform"]);var e=d.width();return d.remove(),e},J=function(a){var b=null,c=function(c,d){var e,f,g,h,i,j,k,l;c=c||window.event||{},d=d||{},c.metaKey||c.altKey||(d.force||a.data("grow")!==!1)&&(e=a.val(),c.type&&"keydown"===c.type.toLowerCase()&&(f=c.keyCode,g=f>=97&&f<=122||f>=65&&f<=90||f>=48&&f<=57||32===f,f===q||f===p?(l=G(a[0]),l.length?e=e.substring(0,l.start)+e.substring(l.start+l.length):f===p&&l.start?e=e.substring(0,l.start-1)+e.substring(l.start+1):f===q&&"undefined"!=typeof l.start&&(e=e.substring(0,l.start)+e.substring(l.start+1))):g&&(j=c.shiftKey,k=String.fromCharCode(c.keyCode),k=j?k.toUpperCase():k.toLowerCase(),e+=k)),h=a.attr("placeholder"),!e&&h&&(e=h),i=I(e,a)+4,i!==b&&(b=i,a.width(i),a.triggerHandler("resize")))};a.on("keydown keyup update blur",c),c()},K=function(a){var b=document.createElement("div");return b.appendChild(a.cloneNode(!0)),b.innerHTML},L=function(a,b){b||(b={});var c="Selectize";console.error(c+": "+a),b.explanation&&(console.group&&console.group(),console.error(b.explanation),console.group&&console.groupEnd())},M=function(c,d){var e,f,g,h,i=this;h=c[0],h.selectize=i;var j=window.getComputedStyle&&window.getComputedStyle(h,null);if(g=j?j.getPropertyValue("direction"):h.currentStyle&&h.currentStyle.direction,g=g||c.parents("[dir]:first").attr("dir")||"",a.extend(i,{order:0,settings:d,$input:c,tabIndex:c.attr("tabindex")||"",tagType:"select"===h.tagName.toLowerCase()?v:w,rtl:/rtl/i.test(g),eventNS:".selectize"+ ++M.count,highlightedValue:null,isOpen:!1,isDisabled:!1,isRequired:c.is("[required]"),isInvalid:!1,isLocked:!1,isFocused:!1,isInputHidden:!1,isSetup:!1,isShiftDown:!1,isCmdDown:!1,isCtrlDown:!1,ignoreFocus:!1,ignoreBlur:!1,ignoreHover:!1,hasOptions:!1,currentResults:null,lastValue:"",caretPos:0,loading:0,loadedSearches:{},$activeOption:null,$activeItems:[],optgroups:{},options:{},userOptions:{},items:[],renderCache:{},onSearchChange:null===d.loadThrottle?i.onSearchChange:D(i.onSearchChange,d.loadThrottle)}),i.sifter=new b(this.options,{diacritics:d.diacritics}),i.settings.options){for(e=0,f=i.settings.options.length;e<f;e++)i.registerOption(i.settings.options[e]);delete i.settings.options}if(i.settings.optgroups){for(e=0,f=i.settings.optgroups.length;e<f;e++)i.registerOptionGroup(i.settings.optgroups[e]);delete i.settings.optgroups}i.settings.mode=i.settings.mode||(1===i.settings.maxItems?"single":"multi"),"boolean"!=typeof i.settings.hideSelected&&(i.settings.hideSelected="multi"===i.settings.mode),i.initializePlugins(i.settings.plugins),i.setupCallbacks(),i.setupTemplates(),i.setup()};return e.mixin(M),"undefined"!=typeof c?c.mixin(M):L("Dependency MicroPlugin is missing",{explanation:'Make sure you either: (1) are using the "standalone" version of Selectize, or (2) require MicroPlugin before you load Selectize.'}),a.extend(M.prototype,{setup:function(){var b,c,d,e,g,h,i,j,k,l,m=this,n=m.settings,o=m.eventNS,p=a(window),q=a(document),u=m.$input;if(i=m.settings.mode,j=u.attr("class")||"",b=a("<div>").addClass(n.wrapperClass).addClass(j).addClass(i),c=a("<div>").addClass(n.inputClass).addClass("items").appendTo(b),d=a('<input type="text" autocomplete="off" />').appendTo(c).attr("tabindex",u.is(":disabled")?"-1":m.tabIndex),h=a(n.dropdownParent||b),e=a("<div>").addClass(n.dropdownClass).addClass(i).hide().appendTo(h),g=a("<div>").addClass(n.dropdownContentClass).appendTo(e),(l=u.attr("id"))&&(d.attr("id",l+"-selectized"),a("label[for='"+l+"']").attr("for",l+"-selectized")),m.settings.copyClassesToDropdown&&e.addClass(j),b.css({width:u[0].style.width}),m.plugins.names.length&&(k="plugin-"+m.plugins.names.join(" plugin-"),b.addClass(k),e.addClass(k)),(null===n.maxItems||n.maxItems>1)&&m.tagType===v&&u.attr("multiple","multiple"),m.settings.placeholder&&d.attr("placeholder",n.placeholder),!m.settings.splitOn&&m.settings.delimiter){var w=m.settings.delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&");m.settings.splitOn=new RegExp("\\s*"+w+"+\\s*")}u.attr("autocorrect")&&d.attr("autocorrect",u.attr("autocorrect")),u.attr("autocapitalize")&&d.attr("autocapitalize",u.attr("autocapitalize")),m.$wrapper=b,m.$control=c,m.$control_input=d,m.$dropdown=e,m.$dropdown_content=g,e.on("mouseenter","[data-selectable]",function(){return m.onOptionHover.apply(m,arguments)}),e.on("mousedown click","[data-selectable]",function(){return m.onOptionSelect.apply(m,arguments)}),F(c,"mousedown","*:not(input)",function(){return m.onItemSelect.apply(m,arguments)}),J(d),c.on({mousedown:function(){return m.onMouseDown.apply(m,arguments)},click:function(){return m.onClick.apply(m,arguments)}}),d.on({mousedown:function(a){a.stopPropagation()},keydown:function(){return m.onKeyDown.apply(m,arguments)},keyup:function(){return m.onKeyUp.apply(m,arguments)},keypress:function(){return m.onKeyPress.apply(m,arguments)},resize:function(){m.positionDropdown.apply(m,[])},blur:function(){return m.onBlur.apply(m,arguments)},focus:function(){return m.ignoreBlur=!1,m.onFocus.apply(m,arguments)},paste:function(){return m.onPaste.apply(m,arguments)}}),q.on("keydown"+o,function(a){m.isCmdDown=a[f?"metaKey":"ctrlKey"],m.isCtrlDown=a[f?"altKey":"ctrlKey"],m.isShiftDown=a.shiftKey}),q.on("keyup"+o,function(a){a.keyCode===t&&(m.isCtrlDown=!1),a.keyCode===r&&(m.isShiftDown=!1),a.keyCode===s&&(m.isCmdDown=!1)}),q.on("mousedown"+o,function(a){if(m.isFocused){if(a.target===m.$dropdown[0]||a.target.parentNode===m.$dropdown[0])return!1;m.$control.has(a.target).length||a.target===m.$control[0]||m.blur(a.target)}}),p.on(["scroll"+o,"resize"+o].join(" "),function(){m.isOpen&&m.positionDropdown.apply(m,arguments)}),p.on("mousemove"+o,function(){m.ignoreHover=!1}),this.revertSettings={$children:u.children().detach(),tabindex:u.attr("tabindex")},u.attr("tabindex",-1).hide().after(m.$wrapper),a.isArray(n.items)&&(m.setValue(n.items),delete n.items),x&&u.on("invalid"+o,function(a){a.preventDefault(),m.isInvalid=!0,m.refreshState()}),m.updateOriginalInput(),m.refreshItems(),m.refreshState(),m.updatePlaceholder(),m.isSetup=!0,u.is(":disabled")&&m.disable(),m.on("change",this.onChange),u.data("selectize",m),u.addClass("selectized"),m.trigger("initialize"),n.preload===!0&&m.onSearchChange("")},setupTemplates:function(){var b=this,c=b.settings.labelField,d=b.settings.optgroupLabelField,e={optgroup:function(a){return'<div class="optgroup">'+a.html+"</div>"},optgroup_header:function(a,b){return'<div class="optgroup-header">'+b(a[d])+"</div>"},option:function(a,b){return'<div class="option">'+b(a[c])+"</div>"},item:function(a,b){return'<div class="item">'+b(a[c])+"</div>"},option_create:function(a,b){return'<div class="create">Add <strong>'+b(a.input)+"</strong>&hellip;</div>"}};b.settings.render=a.extend({},e,b.settings.render)},setupCallbacks:function(){var a,b,c={initialize:"onInitialize",change:"onChange",item_add:"onItemAdd",item_remove:"onItemRemove",clear:"onClear",option_add:"onOptionAdd",option_remove:"onOptionRemove",option_clear:"onOptionClear",optgroup_add:"onOptionGroupAdd",optgroup_remove:"onOptionGroupRemove",optgroup_clear:"onOptionGroupClear",dropdown_open:"onDropdownOpen",dropdown_close:"onDropdownClose",type:"onType",load:"onLoad",focus:"onFocus",blur:"onBlur"};for(a in c)c.hasOwnProperty(a)&&(b=this.settings[c[a]],b&&this.on(a,b))},onClick:function(a){var b=this;b.isFocused||(b.focus(),a.preventDefault())},onMouseDown:function(b){var c=this,d=b.isDefaultPrevented();a(b.target);if(c.isFocused){if(b.target!==c.$control_input[0])return"single"===c.settings.mode?c.isOpen?c.close():c.open():d||c.setActiveItem(null),!1}else d||window.setTimeout(function(){c.focus()},0)},onChange:function(){this.$input.trigger("change")},onPaste:function(b){var c=this;return c.isFull()||c.isInputHidden||c.isLocked?void b.preventDefault():void(c.settings.splitOn&&setTimeout(function(){var b=c.$control_input.val();if(b.match(c.settings.splitOn))for(var d=a.trim(b).split(c.settings.splitOn),e=0,f=d.length;e<f;e++)c.createItem(d[e])},0))},onKeyPress:function(a){if(this.isLocked)return a&&a.preventDefault();var b=String.fromCharCode(a.keyCode||a.which);return this.settings.create&&"multi"===this.settings.mode&&b===this.settings.delimiter?(this.createItem(),a.preventDefault(),!1):void 0},onKeyDown:function(a){var b=(a.target===this.$control_input[0],this);if(b.isLocked)return void(a.keyCode!==u&&a.preventDefault());switch(a.keyCode){case g:if(b.isCmdDown)return void b.selectAll();break;case i:return void(b.isOpen&&(a.preventDefault(),a.stopPropagation(),b.close()));case o:if(!a.ctrlKey||a.altKey)break;case n:if(!b.isOpen&&b.hasOptions)b.open();else if(b.$activeOption){b.ignoreHover=!0;var c=b.getAdjacentOption(b.$activeOption,1);c.length&&b.setActiveOption(c,!0,!0)}return void a.preventDefault();case l:if(!a.ctrlKey||a.altKey)break;case k:if(b.$activeOption){b.ignoreHover=!0;var d=b.getAdjacentOption(b.$activeOption,-1);d.length&&b.setActiveOption(d,!0,!0)}return void a.preventDefault();case h:return void(b.isOpen&&b.$activeOption&&(b.onOptionSelect({currentTarget:b.$activeOption}),a.preventDefault()));case j:return void b.advanceSelection(-1,a);case m:return void b.advanceSelection(1,a);case u:return b.settings.selectOnTab&&b.isOpen&&b.$activeOption&&(b.onOptionSelect({currentTarget:b.$activeOption}),b.isFull()||a.preventDefault()),void(b.settings.create&&b.createItem()&&a.preventDefault());case p:case q:return void b.deleteSelection(a)}return!b.isFull()&&!b.isInputHidden||(f?a.metaKey:a.ctrlKey)?void 0:void a.preventDefault()},onKeyUp:function(a){var b=this;if(b.isLocked)return a&&a.preventDefault();var c=b.$control_input.val()||"";b.lastValue!==c&&(b.lastValue=c,b.onSearchChange(c),b.refreshOptions(),b.trigger("type",c))},onSearchChange:function(a){var b=this,c=b.settings.load;c&&(b.loadedSearches.hasOwnProperty(a)||(b.loadedSearches[a]=!0,b.load(function(d){c.apply(b,[a,d])})))},onFocus:function(a){var b=this,c=b.isFocused;return b.isDisabled?(b.blur(),a&&a.preventDefault(),!1):void(b.ignoreFocus||(b.isFocused=!0,"focus"===b.settings.preload&&b.onSearchChange(""),c||b.trigger("focus"),b.$activeItems.length||(b.showInput(),b.setActiveItem(null),b.refreshOptions(!!b.settings.openOnFocus)),b.refreshState()))},onBlur:function(a,b){var c=this;if(c.isFocused&&(c.isFocused=!1,!c.ignoreFocus)){if(!c.ignoreBlur&&document.activeElement===c.$dropdown_content[0])return c.ignoreBlur=!0,void c.onFocus(a);var d=function(){c.close(),c.setTextboxValue(""),c.setActiveItem(null),c.setActiveOption(null),c.setCaret(c.items.length),c.refreshState(),b&&b.focus&&b.focus(),c.ignoreFocus=!1,c.trigger("blur")};c.ignoreFocus=!0,c.settings.create&&c.settings.createOnBlur?c.createItem(null,!1,d):d()}},onOptionHover:function(a){this.ignoreHover||this.setActiveOption(a.currentTarget,!1)},onOptionSelect:function(b){var c,d,e=this;b.preventDefault&&(b.preventDefault(),b.stopPropagation()),d=a(b.currentTarget),d.hasClass("create")?e.createItem(null,function(){e.settings.closeAfterSelect&&e.close()}):(c=d.attr("data-value"),"undefined"!=typeof c&&(e.lastQuery=null,e.setTextboxValue(""),e.addItem(c),e.settings.closeAfterSelect?e.close():!e.settings.hideSelected&&b.type&&/mouse/.test(b.type)&&e.setActiveOption(e.getOption(c))))},onItemSelect:function(a){var b=this;b.isLocked||"multi"===b.settings.mode&&(a.preventDefault(),b.setActiveItem(a.currentTarget,a))},load:function(a){var b=this,c=b.$wrapper.addClass(b.settings.loadingClass);b.loading++,a.apply(b,[function(a){b.loading=Math.max(b.loading-1,0),a&&a.length&&(b.addOption(a),b.refreshOptions(b.isFocused&&!b.isInputHidden)),b.loading||c.removeClass(b.settings.loadingClass),b.trigger("load",a)}])},setTextboxValue:function(a){var b=this.$control_input,c=b.val()!==a;c&&(b.val(a).triggerHandler("update"),this.lastValue=a)},getValue:function(){return this.tagType===v&&this.$input.attr("multiple")?this.items:this.items.join(this.settings.delimiter)},setValue:function(a,b){var c=b?[]:["change"];E(this,c,function(){this.clear(b),this.addItems(a,b)})},setActiveItem:function(b,c){var d,e,f,g,h,i,j,k,l=this;if("single"!==l.settings.mode){if(b=a(b),!b.length)return a(l.$activeItems).removeClass("active"),l.$activeItems=[],void(l.isFocused&&l.showInput());if(d=c&&c.type.toLowerCase(),"mousedown"===d&&l.isShiftDown&&l.$activeItems.length){for(k=l.$control.children(".active:last"),g=Array.prototype.indexOf.apply(l.$control[0].childNodes,[k[0]]),h=Array.prototype.indexOf.apply(l.$control[0].childNodes,[b[0]]),g>h&&(j=g,g=h,h=j),e=g;e<=h;e++)i=l.$control[0].childNodes[e],l.$activeItems.indexOf(i)===-1&&(a(i).addClass("active"),l.$activeItems.push(i));c.preventDefault()}else"mousedown"===d&&l.isCtrlDown||"keydown"===d&&this.isShiftDown?b.hasClass("active")?(f=l.$activeItems.indexOf(b[0]),l.$activeItems.splice(f,1),b.removeClass("active")):l.$activeItems.push(b.addClass("active")[0]):(a(l.$activeItems).removeClass("active"),l.$activeItems=[b.addClass("active")[0]]);l.hideInput(),this.isFocused||l.focus()}},setActiveOption:function(b,c,d){var e,f,g,h,i,j=this;j.$activeOption&&j.$activeOption.removeClass("active"),j.$activeOption=null,b=a(b),b.length&&(j.$activeOption=b.addClass("active"),!c&&y(c)||(e=j.$dropdown_content.height(),f=j.$activeOption.outerHeight(!0),c=j.$dropdown_content.scrollTop()||0,g=j.$activeOption.offset().top-j.$dropdown_content.offset().top+c,h=g,i=g-e+f,g+f>e+c?j.$dropdown_content.stop().animate({scrollTop:i},d?j.settings.scrollDuration:0):g<c&&j.$dropdown_content.stop().animate({scrollTop:h},d?j.settings.scrollDuration:0)))},selectAll:function(){var a=this;"single"!==a.settings.mode&&(a.$activeItems=Array.prototype.slice.apply(a.$control.children(":not(input)").addClass("active")),a.$activeItems.length&&(a.hideInput(),a.close()),a.focus())},hideInput:function(){var a=this;a.setTextboxValue(""),a.$control_input.css({opacity:0,position:"absolute",left:a.rtl?1e4:-1e4}),a.isInputHidden=!0},showInput:function(){this.$control_input.css({opacity:1,position:"relative",left:0}),this.isInputHidden=!1},focus:function(){var a=this;a.isDisabled||(a.ignoreFocus=!0,a.$control_input[0].focus(),window.setTimeout(function(){a.ignoreFocus=!1,a.onFocus()},0))},blur:function(a){this.$control_input[0].blur(),this.onBlur(null,a)},getScoreFunction:function(a){return this.sifter.getScoreFunction(a,this.getSearchOptions())},getSearchOptions:function(){var a=this.settings,b=a.sortField;return"string"==typeof b&&(b=[{field:b}]),{fields:a.searchField,conjunction:a.searchConjunction,sort:b}},search:function(b){var c,d,e,f=this,g=f.settings,h=this.getSearchOptions();if(g.score&&(e=f.settings.score.apply(this,[b]),"function"!=typeof e))throw new Error('Selectize "score" setting must be a function that returns a function');if(b!==f.lastQuery?(f.lastQuery=b,d=f.sifter.search(b,a.extend(h,{score:e})),f.currentResults=d):d=a.extend(!0,{},f.currentResults),g.hideSelected)for(c=d.items.length-1;c>=0;c--)f.items.indexOf(z(d.items[c].id))!==-1&&d.items.splice(c,1);return d},refreshOptions:function(b){var c,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;"undefined"==typeof b&&(b=!0);var t=this,u=a.trim(t.$control_input.val()),v=t.search(u),w=t.$dropdown_content,x=t.$activeOption&&z(t.$activeOption.attr("data-value"));for(g=v.items.length,"number"==typeof t.settings.maxOptions&&(g=Math.min(g,t.settings.maxOptions)),h={},i=[],c=0;c<g;c++)for(j=t.options[v.items[c].id],k=t.render("option",j),l=j[t.settings.optgroupField]||"",m=a.isArray(l)?l:[l],e=0,f=m&&m.length;e<f;e++)l=m[e],t.optgroups.hasOwnProperty(l)||(l=""),h.hasOwnProperty(l)||(h[l]=document.createDocumentFragment(),i.push(l)),h[l].appendChild(k);for(this.settings.lockOptgroupOrder&&i.sort(function(a,b){var c=t.optgroups[a].$order||0,d=t.optgroups[b].$order||0;return c-d}),n=document.createDocumentFragment(),c=0,g=i.length;c<g;c++)l=i[c],t.optgroups.hasOwnProperty(l)&&h[l].childNodes.length?(o=document.createDocumentFragment(),o.appendChild(t.render("optgroup_header",t.optgroups[l])),o.appendChild(h[l]),n.appendChild(t.render("optgroup",a.extend({},t.optgroups[l],{html:K(o),dom:o})))):n.appendChild(h[l]);if(w.html(n),t.settings.highlight&&v.query.length&&v.tokens.length)for(w.removeHighlight(),c=0,g=v.tokens.length;c<g;c++)d(w,v.tokens[c].regex);if(!t.settings.hideSelected)for(c=0,g=t.items.length;c<g;c++)t.getOption(t.items[c]).addClass("selected");p=t.canCreate(u),p&&(w.prepend(t.render("option_create",{input:u})),s=a(w[0].childNodes[0])),t.hasOptions=v.items.length>0||p,t.hasOptions?(v.items.length>0?(r=x&&t.getOption(x),r&&r.length?q=r:"single"===t.settings.mode&&t.items.length&&(q=t.getOption(t.items[0])),q&&q.length||(q=s&&!t.settings.addPrecedence?t.getAdjacentOption(s,1):w.find("[data-selectable]:first"))):q=s,t.setActiveOption(q),b&&!t.isOpen&&t.open()):(t.setActiveOption(null),b&&t.isOpen&&t.close())},addOption:function(b){var c,d,e,f=this;if(a.isArray(b))for(c=0,d=b.length;c<d;c++)f.addOption(b[c]);else(e=f.registerOption(b))&&(f.userOptions[e]=!0,f.lastQuery=null,f.trigger("option_add",e,b))},registerOption:function(a){var b=z(a[this.settings.valueField]);return"undefined"!=typeof b&&null!==b&&!this.options.hasOwnProperty(b)&&(a.$order=a.$order||++this.order,this.options[b]=a,b)},registerOptionGroup:function(a){var b=z(a[this.settings.optgroupValueField]);return!!b&&(a.$order=a.$order||++this.order,this.optgroups[b]=a,b)},addOptionGroup:function(a,b){b[this.settings.optgroupValueField]=a,(a=this.registerOptionGroup(b))&&this.trigger("optgroup_add",a,b)},removeOptionGroup:function(a){this.optgroups.hasOwnProperty(a)&&(delete this.optgroups[a],this.renderCache={},this.trigger("optgroup_remove",a))},clearOptionGroups:function(){this.optgroups={},this.renderCache={},this.trigger("optgroup_clear")},updateOption:function(b,c){var d,e,f,g,h,i,j,k=this;if(b=z(b),f=z(c[k.settings.valueField]),null!==b&&k.options.hasOwnProperty(b)){if("string"!=typeof f)throw new Error("Value must be set in option data");j=k.options[b].$order,f!==b&&(delete k.options[b],g=k.items.indexOf(b),g!==-1&&k.items.splice(g,1,f)),c.$order=c.$order||j,k.options[f]=c,h=k.renderCache.item,i=k.renderCache.option,h&&(delete h[b],delete h[f]),i&&(delete i[b],delete i[f]),k.items.indexOf(f)!==-1&&(d=k.getItem(b),e=a(k.render("item",c)),d.hasClass("active")&&e.addClass("active"),d.replaceWith(e)),k.lastQuery=null,k.isOpen&&k.refreshOptions(!1)}},removeOption:function(a,b){var c=this;a=z(a);var d=c.renderCache.item,e=c.renderCache.option;d&&delete d[a],e&&delete e[a],delete c.userOptions[a],delete c.options[a],c.lastQuery=null,c.trigger("option_remove",a),c.removeItem(a,b)},clearOptions:function(){var a=this;a.loadedSearches={},a.userOptions={},a.renderCache={},a.options=a.sifter.items={},a.lastQuery=null,a.trigger("option_clear"),a.clear()},getOption:function(a){return this.getElementWithValue(a,this.$dropdown_content.find("[data-selectable]"))},getAdjacentOption:function(b,c){var d=this.$dropdown.find("[data-selectable]"),e=d.index(b)+c;return e>=0&&e<d.length?d.eq(e):a()},getElementWithValue:function(b,c){if(b=z(b),"undefined"!=typeof b&&null!==b)for(var d=0,e=c.length;d<e;d++)if(c[d].getAttribute("data-value")===b)return a(c[d]);return a()},getItem:function(a){return this.getElementWithValue(a,this.$control.children())},addItems:function(b,c){for(var d=a.isArray(b)?b:[b],e=0,f=d.length;e<f;e++)this.isPending=e<f-1,this.addItem(d[e],c)},addItem:function(b,c){var d=c?[]:["change"];E(this,d,function(){var d,e,f,g,h,i=this,j=i.settings.mode;return b=z(b),i.items.indexOf(b)!==-1?void("single"===j&&i.close()):void(i.options.hasOwnProperty(b)&&("single"===j&&i.clear(c),"multi"===j&&i.isFull()||(d=a(i.render("item",i.options[b])),h=i.isFull(),i.items.splice(i.caretPos,0,b),i.insertAtCaret(d),(!i.isPending||!h&&i.isFull())&&i.refreshState(),i.isSetup&&(f=i.$dropdown_content.find("[data-selectable]"),i.isPending||(e=i.getOption(b),g=i.getAdjacentOption(e,1).attr("data-value"),i.refreshOptions(i.isFocused&&"single"!==j),g&&i.setActiveOption(i.getOption(g))),!f.length||i.isFull()?i.close():i.positionDropdown(),i.updatePlaceholder(),i.trigger("item_add",b,d),i.updateOriginalInput({silent:c})))))})},removeItem:function(b,c){var d,e,f,g=this;d=b instanceof a?b:g.getItem(b),b=z(d.attr("data-value")),e=g.items.indexOf(b),e!==-1&&(d.remove(),d.hasClass("active")&&(f=g.$activeItems.indexOf(d[0]),g.$activeItems.splice(f,1)),g.items.splice(e,1),g.lastQuery=null,!g.settings.persist&&g.userOptions.hasOwnProperty(b)&&g.removeOption(b,c),e<g.caretPos&&g.setCaret(g.caretPos-1),g.refreshState(),g.updatePlaceholder(),g.updateOriginalInput({silent:c}),g.positionDropdown(),g.trigger("item_remove",b,d))},createItem:function(b,c){var d=this,e=d.caretPos;b=b||a.trim(d.$control_input.val()||"");var f=arguments[arguments.length-1];if("function"!=typeof f&&(f=function(){}),"boolean"!=typeof c&&(c=!0),!d.canCreate(b))return f(),!1;d.lock();var g="function"==typeof d.settings.create?this.settings.create:function(a){var b={};return b[d.settings.labelField]=a,b[d.settings.valueField]=a,b},h=C(function(a){if(d.unlock(),!a||"object"!=typeof a)return f();var b=z(a[d.settings.valueField]);return"string"!=typeof b?f():(d.setTextboxValue(""),d.addOption(a),d.setCaret(e),d.addItem(b),d.refreshOptions(c&&"single"!==d.settings.mode),void f(a))}),i=g.apply(this,[b,h]);return"undefined"!=typeof i&&h(i),!0},refreshItems:function(){this.lastQuery=null,this.isSetup&&this.addItem(this.items),this.refreshState(),this.updateOriginalInput()},refreshState:function(){this.refreshValidityState(),this.refreshClasses()},refreshValidityState:function(){if(!this.isRequired)return!1;var a=!this.items.length;this.isInvalid=a,this.$control_input.prop("required",a),this.$input.prop("required",!a)},refreshClasses:function(){var b=this,c=b.isFull(),d=b.isLocked;b.$wrapper.toggleClass("rtl",b.rtl),b.$control.toggleClass("focus",b.isFocused).toggleClass("disabled",b.isDisabled).toggleClass("required",b.isRequired).toggleClass("invalid",b.isInvalid).toggleClass("locked",d).toggleClass("full",c).toggleClass("not-full",!c).toggleClass("input-active",b.isFocused&&!b.isInputHidden).toggleClass("dropdown-active",b.isOpen).toggleClass("has-options",!a.isEmptyObject(b.options)).toggleClass("has-items",b.items.length>0),b.$control_input.data("grow",!c&&!d)},isFull:function(){return null!==this.settings.maxItems&&this.items.length>=this.settings.maxItems},updateOriginalInput:function(a){var b,c,d,e,f=this;if(a=a||{},f.tagType===v){for(d=[],b=0,c=f.items.length;b<c;b++)e=f.options[f.items[b]][f.settings.labelField]||"",d.push('<option value="'+A(f.items[b])+'" selected="selected">'+A(e)+"</option>");d.length||this.$input.attr("multiple")||d.push('<option value="" selected="selected"></option>'),
f.$input.html(d.join(""))}else f.$input.val(f.getValue()),f.$input.attr("value",f.$input.val());f.isSetup&&(a.silent||f.trigger("change",f.$input.val()))},updatePlaceholder:function(){if(this.settings.placeholder){var a=this.$control_input;this.items.length?a.removeAttr("placeholder"):a.attr("placeholder",this.settings.placeholder),a.triggerHandler("update",{force:!0})}},open:function(){var a=this;a.isLocked||a.isOpen||"multi"===a.settings.mode&&a.isFull()||(a.focus(),a.isOpen=!0,a.refreshState(),a.$dropdown.css({visibility:"hidden",display:"block"}),a.positionDropdown(),a.$dropdown.css({visibility:"visible"}),a.trigger("dropdown_open",a.$dropdown))},close:function(){var a=this,b=a.isOpen;"single"===a.settings.mode&&a.items.length&&(a.hideInput(),a.$control_input.blur()),a.isOpen=!1,a.$dropdown.hide(),a.setActiveOption(null),a.refreshState(),b&&a.trigger("dropdown_close",a.$dropdown)},positionDropdown:function(){var a=this.$control,b="body"===this.settings.dropdownParent?a.offset():a.position();b.top+=a.outerHeight(!0),this.$dropdown.css({width:a.outerWidth(),top:b.top,left:b.left})},clear:function(a){var b=this;b.items.length&&(b.$control.children(":not(input)").remove(),b.items=[],b.lastQuery=null,b.setCaret(0),b.setActiveItem(null),b.updatePlaceholder(),b.updateOriginalInput({silent:a}),b.refreshState(),b.showInput(),b.trigger("clear"))},insertAtCaret:function(b){var c=Math.min(this.caretPos,this.items.length);0===c?this.$control.prepend(b):a(this.$control[0].childNodes[c]).before(b),this.setCaret(c+1)},deleteSelection:function(b){var c,d,e,f,g,h,i,j,k,l=this;if(e=b&&b.keyCode===p?-1:1,f=G(l.$control_input[0]),l.$activeOption&&!l.settings.hideSelected&&(i=l.getAdjacentOption(l.$activeOption,-1).attr("data-value")),g=[],l.$activeItems.length){for(k=l.$control.children(".active:"+(e>0?"last":"first")),h=l.$control.children(":not(input)").index(k),e>0&&h++,c=0,d=l.$activeItems.length;c<d;c++)g.push(a(l.$activeItems[c]).attr("data-value"));b&&(b.preventDefault(),b.stopPropagation())}else(l.isFocused||"single"===l.settings.mode)&&l.items.length&&(e<0&&0===f.start&&0===f.length?g.push(l.items[l.caretPos-1]):e>0&&f.start===l.$control_input.val().length&&g.push(l.items[l.caretPos]));if(!g.length||"function"==typeof l.settings.onDelete&&l.settings.onDelete.apply(l,[g])===!1)return!1;for("undefined"!=typeof h&&l.setCaret(h);g.length;)l.removeItem(g.pop());return l.showInput(),l.positionDropdown(),l.refreshOptions(!0),i&&(j=l.getOption(i),j.length&&l.setActiveOption(j)),!0},advanceSelection:function(a,b){var c,d,e,f,g,h,i=this;0!==a&&(i.rtl&&(a*=-1),c=a>0?"last":"first",d=G(i.$control_input[0]),i.isFocused&&!i.isInputHidden?(f=i.$control_input.val().length,g=a<0?0===d.start&&0===d.length:d.start===f,g&&!f&&i.advanceCaret(a,b)):(h=i.$control.children(".active:"+c),h.length&&(e=i.$control.children(":not(input)").index(h),i.setActiveItem(null),i.setCaret(a>0?e+1:e))))},advanceCaret:function(a,b){var c,d,e=this;0!==a&&(c=a>0?"next":"prev",e.isShiftDown?(d=e.$control_input[c](),d.length&&(e.hideInput(),e.setActiveItem(d),b&&b.preventDefault())):e.setCaret(e.caretPos+a))},setCaret:function(b){var c=this;if(b="single"===c.settings.mode?c.items.length:Math.max(0,Math.min(c.items.length,b)),!c.isPending){var d,e,f,g;for(f=c.$control.children(":not(input)"),d=0,e=f.length;d<e;d++)g=a(f[d]).detach(),d<b?c.$control_input.before(g):c.$control.append(g)}c.caretPos=b},lock:function(){this.close(),this.isLocked=!0,this.refreshState()},unlock:function(){this.isLocked=!1,this.refreshState()},disable:function(){var a=this;a.$input.prop("disabled",!0),a.$control_input.prop("disabled",!0).prop("tabindex",-1),a.isDisabled=!0,a.lock()},enable:function(){var a=this;a.$input.prop("disabled",!1),a.$control_input.prop("disabled",!1).prop("tabindex",a.tabIndex),a.isDisabled=!1,a.unlock()},destroy:function(){var b=this,c=b.eventNS,d=b.revertSettings;b.trigger("destroy"),b.off(),b.$wrapper.remove(),b.$dropdown.remove(),b.$input.html("").append(d.$children).removeAttr("tabindex").removeClass("selectized").attr({tabindex:d.tabindex}).show(),b.$control_input.removeData("grow"),b.$input.removeData("selectize"),a(window).off(c),a(document).off(c),a(document.body).off(c),delete b.$input[0].selectize},render:function(b,c){var d,e,f="",g=!1,h=this;return"option"!==b&&"item"!==b||(d=z(c[h.settings.valueField]),g=!!d),g&&(y(h.renderCache[b])||(h.renderCache[b]={}),h.renderCache[b].hasOwnProperty(d))?h.renderCache[b][d]:(f=a(h.settings.render[b].apply(this,[c,A])),"option"===b||"option_create"===b?f.attr("data-selectable",""):"optgroup"===b&&(e=c[h.settings.optgroupValueField]||"",f.attr("data-group",e)),"option"!==b&&"item"!==b||f.attr("data-value",d||""),g&&(h.renderCache[b][d]=f[0]),f[0])},clearCache:function(a){var b=this;"undefined"==typeof a?b.renderCache={}:delete b.renderCache[a]},canCreate:function(a){var b=this;if(!b.settings.create)return!1;var c=b.settings.createFilter;return a.length&&("function"!=typeof c||c.apply(b,[a]))&&("string"!=typeof c||new RegExp(c).test(a))&&(!(c instanceof RegExp)||c.test(a))}}),M.count=0,M.defaults={options:[],optgroups:[],plugins:[],delimiter:",",splitOn:null,persist:!0,diacritics:!0,create:!1,createOnBlur:!1,createFilter:null,highlight:!0,openOnFocus:!0,maxOptions:1e3,maxItems:null,hideSelected:null,addPrecedence:!1,selectOnTab:!1,preload:!1,allowEmptyOption:!1,closeAfterSelect:!1,scrollDuration:60,loadThrottle:300,loadingClass:"loading",dataAttr:"data-data",optgroupField:"optgroup",valueField:"value",labelField:"text",optgroupLabelField:"label",optgroupValueField:"value",lockOptgroupOrder:!1,sortField:"$order",searchField:["text"],searchConjunction:"and",mode:null,wrapperClass:"selectize-control",inputClass:"selectize-input",dropdownClass:"selectize-dropdown",dropdownContentClass:"selectize-dropdown-content",dropdownParent:null,copyClassesToDropdown:!0,render:{}},a.fn.selectize=function(b){var c=a.fn.selectize.defaults,d=a.extend({},c,b),e=d.dataAttr,f=d.labelField,g=d.valueField,h=d.optgroupField,i=d.optgroupLabelField,j=d.optgroupValueField,k=function(b,c){var h,i,j,k,l=b.attr(e);if(l)for(c.options=JSON.parse(l),h=0,i=c.options.length;h<i;h++)c.items.push(c.options[h][g]);else{var m=a.trim(b.val()||"");if(!d.allowEmptyOption&&!m.length)return;for(j=m.split(d.delimiter),h=0,i=j.length;h<i;h++)k={},k[f]=j[h],k[g]=j[h],c.options.push(k);c.items=j}},l=function(b,c){var k,l,m,n,o=c.options,p={},q=function(a){var b=e&&a.attr(e);return"string"==typeof b&&b.length?JSON.parse(b):null},r=function(b,e){b=a(b);var i=z(b.val());if(i||d.allowEmptyOption)if(p.hasOwnProperty(i)){if(e){var j=p[i][h];j?a.isArray(j)?j.push(e):p[i][h]=[j,e]:p[i][h]=e}}else{var k=q(b)||{};k[f]=k[f]||b.text(),k[g]=k[g]||i,k[h]=k[h]||e,p[i]=k,o.push(k),b.is(":selected")&&c.items.push(i)}},s=function(b){var d,e,f,g,h;for(b=a(b),f=b.attr("label"),f&&(g=q(b)||{},g[i]=f,g[j]=f,c.optgroups.push(g)),h=a("option",b),d=0,e=h.length;d<e;d++)r(h[d],f)};for(c.maxItems=b.attr("multiple")?null:1,n=b.children(),k=0,l=n.length;k<l;k++)m=n[k].tagName.toLowerCase(),"optgroup"===m?s(n[k]):"option"===m&&r(n[k])};return this.each(function(){if(!this.selectize){var e,f=a(this),g=this.tagName.toLowerCase(),h=f.attr("placeholder")||f.attr("data-placeholder");h||d.allowEmptyOption||(h=f.children('option[value=""]').text());var i={placeholder:h,options:[],optgroups:[],items:[]};"select"===g?l(f,i):k(f,i),e=new M(f,a.extend(!0,{},c,i,b))}})},a.fn.selectize.defaults=M.defaults,a.fn.selectize.support={validity:x},M.define("drag_drop",function(b){if(!a.fn.sortable)throw new Error('The "drag_drop" plugin requires jQuery UI "sortable".');if("multi"===this.settings.mode){var c=this;c.lock=function(){var a=c.lock;return function(){var b=c.$control.data("sortable");return b&&b.disable(),a.apply(c,arguments)}}(),c.unlock=function(){var a=c.unlock;return function(){var b=c.$control.data("sortable");return b&&b.enable(),a.apply(c,arguments)}}(),c.setup=function(){var b=c.setup;return function(){b.apply(this,arguments);var d=c.$control.sortable({items:"[data-value]",forcePlaceholderSize:!0,disabled:c.isLocked,start:function(a,b){b.placeholder.css("width",b.helper.css("width")),d.css({overflow:"visible"})},stop:function(){d.css({overflow:"hidden"});var b=c.$activeItems?c.$activeItems.slice():null,e=[];d.children("[data-value]").each(function(){e.push(a(this).attr("data-value"))}),c.setValue(e),c.setActiveItem(b)}})}}()}}),M.define("dropdown_header",function(b){var c=this;b=a.extend({title:"Untitled",headerClass:"selectize-dropdown-header",titleRowClass:"selectize-dropdown-header-title",labelClass:"selectize-dropdown-header-label",closeClass:"selectize-dropdown-header-close",html:function(a){return'<div class="'+a.headerClass+'"><div class="'+a.titleRowClass+'"><span class="'+a.labelClass+'">'+a.title+'</span><a href="javascript:void(0)" class="'+a.closeClass+'">&times;</a></div></div>'}},b),c.setup=function(){var d=c.setup;return function(){d.apply(c,arguments),c.$dropdown_header=a(b.html(b)),c.$dropdown.prepend(c.$dropdown_header)}}()}),M.define("optgroup_columns",function(b){var c=this;b=a.extend({equalizeWidth:!0,equalizeHeight:!0},b),this.getAdjacentOption=function(b,c){var d=b.closest("[data-group]").find("[data-selectable]"),e=d.index(b)+c;return e>=0&&e<d.length?d.eq(e):a()},this.onKeyDown=function(){var a=c.onKeyDown;return function(b){var d,e,f,g;return!this.isOpen||b.keyCode!==j&&b.keyCode!==m?a.apply(this,arguments):(c.ignoreHover=!0,g=this.$activeOption.closest("[data-group]"),d=g.find("[data-selectable]").index(this.$activeOption),g=b.keyCode===j?g.prev("[data-group]"):g.next("[data-group]"),f=g.find("[data-selectable]"),e=f.eq(Math.min(f.length-1,d)),void(e.length&&this.setActiveOption(e)))}}();var d=function(){var a,b=d.width,c=document;return"undefined"==typeof b&&(a=c.createElement("div"),a.innerHTML='<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>',a=a.firstChild,c.body.appendChild(a),b=d.width=a.offsetWidth-a.clientWidth,c.body.removeChild(a)),b},e=function(){var e,f,g,h,i,j,k;if(k=a("[data-group]",c.$dropdown_content),f=k.length,f&&c.$dropdown_content.width()){if(b.equalizeHeight){for(g=0,e=0;e<f;e++)g=Math.max(g,k.eq(e).height());k.css({height:g})}b.equalizeWidth&&(j=c.$dropdown_content.innerWidth()-d(),h=Math.round(j/f),k.css({width:h}),f>1&&(i=j-h*(f-1),k.eq(f-1).css({width:i})))}};(b.equalizeHeight||b.equalizeWidth)&&(B.after(this,"positionDropdown",e),B.after(this,"refreshOptions",e))}),M.define("remove_button",function(b){b=a.extend({label:"&times;",title:"Remove",className:"remove",append:!0},b);var c=function(b,c){c.className="remove-single";var d=b,e='<a href="javascript:void(0)" class="'+c.className+'" tabindex="-1" title="'+A(c.title)+'">'+c.label+"</a>",f=function(a,b){return a+b};b.setup=function(){var g=d.setup;return function(){if(c.append){var h=a(d.$input.context).attr("id"),i=(a("#"+h),d.settings.render.item);d.settings.render.item=function(a){return f(i.apply(b,arguments),e)}}g.apply(b,arguments),b.$control.on("click","."+c.className,function(a){a.preventDefault(),d.isLocked||d.clear()})}}()},d=function(b,c){var d=b,e='<a href="javascript:void(0)" class="'+c.className+'" tabindex="-1" title="'+A(c.title)+'">'+c.label+"</a>",f=function(a,b){var c=a.search(/(<\/[^>]+>\s*)$/);return a.substring(0,c)+b+a.substring(c)};b.setup=function(){var g=d.setup;return function(){if(c.append){var h=d.settings.render.item;d.settings.render.item=function(a){return f(h.apply(b,arguments),e)}}g.apply(b,arguments),b.$control.on("click","."+c.className,function(b){if(b.preventDefault(),!d.isLocked){var c=a(b.currentTarget).parent();d.setActiveItem(c),d.deleteSelection()&&d.setCaret(d.items.length)}})}}()};return"single"===this.settings.mode?void c(this,b):void d(this,b)}),M.define("restore_on_backspace",function(a){var b=this;a.text=a.text||function(a){return a[this.settings.labelField]},this.onKeyDown=function(){var c=b.onKeyDown;return function(b){var d,e;return b.keyCode===p&&""===this.$control_input.val()&&!this.$activeItems.length&&(d=this.caretPos-1,d>=0&&d<this.items.length)?(e=this.options[this.items[d]],this.deleteSelection(b)&&(this.setTextboxValue(a.text.apply(this,[e])),this.refreshOptions(!0)),void b.preventDefault()):c.apply(this,arguments)}}()}),M});





jQuery(function($) {

var screenw = $(window).width();
var screenh = $(window).height();
var scrolltop = $(window).scrollTop();

var is_it_home = $('body.home').length;
var is_it_search = $('body.search').length;
var is_it_inform = $('body.inform.single').length;
var is_it_product = $('body.product.single').length;
var is_headcart_full = $('.cart_out .cart_item').length;
var is_there_sticky_box = $('.sticky_box').length;
var is_there_custom_sbox = $('.custom_selects_box').length;
var is_there_woof_price3 = $('.woof_price3_search_container').length;

var is_popup_scrolled = 0;
var main_layout_fixedh = 0;



$('.contacts_mob_nav_item').click(function() {
  var navout = $(this).attr('data-navout');
  $('.contacts_mob_nav_item').removeClass('active');
  $(this).addClass('active');
  $('.contacts_mob_out').css('display','none');
  $('.contacts_mob_out_'+navout+'').fadeIn(200);
});



// Кастомный селект в категориях

function is_there_custom_selects_box() {
  if ( is_there_woof_price3 ) {
    $('.subcat_container').addClass('with_price');
  };
  if ( is_there_custom_sbox ) {
    $('.subcat_container').addClass('with_custom_selects_box');
  };
};

is_there_custom_selects_box();


$('.custom_select_wrap').click(function() {
  $(".custom_select_wrap").not($(this).parent()[0]).removeClass('opened');
  $(this).toggleClass('opened');
  return false;
});

$(document).click(function(e){
  that = e.target;
  if ($(that).closest(".custom_select_wrap").length < 1 && !$(that).hasClass("custom_select_wrap")) $(".custom_select_wrap").removeClass('opened');
});



$('.woof_select').selectize({
  onInitialize: function (value) {  
  },
  onChange: function (value) {
  }
});
 


// Проверяем какой блок с товарами виден и присваиваем класс элементу навигации

function products_visible() {
  $('.products_row').each(function(){
    var this_offset = $(this).offset();
    var this_top = this_offset.top - screenh + 300;
    if ( scrolltop > this_top ) {
      $(this).animate({opacity: 1}, 400);
      $(this).find('.catalog_item').css('height','auto');
    }
  });
}



// Обертываем товары

function products_to_rows() {

  var products = $('.subcat_container .products .catalog_item');
  products.prependTo('.subcat_container .products').removeClass('item1 item2 item3 item4');
  $('.products_row').remove();

  if ( screenw < 750 ) {
    var inrow = 2;
  };
  if ( screenw > 750 && screenw < 1100 ) {
    var inrow = 3;
  };
  if ( screenw > 1100 ) {
    var inrow = 4;
  };

  for(var i = 0; i < products.length; i+=inrow) {
    products.slice(i, i+inrow).wrapAll("<div class='products_row'></div>");
  }

  $('.products_row').each(function(index){
    var nomer = index + 1;
    $(this).addClass('products_row'+ nomer);
    $(this).find('.catalog_item').each(function(index2){
      var nomer2 = index2 + 1;
      $(this).addClass('item'+ nomer2);
    });
  });

  $('.products_row').append('<div class="spacer"></div>');
  products.css('opacity','1');
  $('.content_main .preloader').css('display','none');

};



// Кнопка "Купить" или "В корзине"

function price_show_hide() {
  $('.cart_out .cart_item').each(function() {
    var product_id = $(this).attr('product_id');
    var catalog_item = $('.catalog_buy_wrap'+product_id+'');
    catalog_item.find('.catalog_buy').css({
      'opacity':'0',
      'z-index':'990'
    });
    catalog_item.find('.buy_already').css({
      'opacity':'1',
      'z-index':'991'
    });
  });
  $('.catalog_buy_wrap').css('opacity','1');
};



// Кросселы

function crossels() {
  var cross_sells_in_items = $('.cross_sells_in .catalog_item').length;
  if ( cross_sells_in_items ) {
    $('.cross_sells_in .catalog_item').prependTo('.crossells_out');
    $('.crossells_out').append('<div class="spacer"></div>');
    number_box();
    equal_height();
    $('.crossells_container .crossells_block').css('display','block');
  };  
};




// Появление, скрытие, габариты мобильного меню и списки в нем

function main_layout_fixed_h() {
  main_layout_fixedh = $('.mob_menu').outerHeight();
};

$('.mob_menu_back').click(function() {
  $(this).fadeOut(200);
  $('.mob_menu').css('left','-280px');
  setTimeout(function() {
  	$('.main_layout_wrap').css({
      'max-height':'none',
      'overflow':'auto'
    });
  }, 200); 
});

$('.mob_menu_in').click(function() {
  $('.mob_menu_back').fadeIn(200);
  $('.mob_menu').css('left','0');
  setTimeout(function() {
  	main_layout_change_h();
  }, 200);
});

function main_layout_change_h() {
  $('.main_layout_wrap').css({
    'max-height':''+main_layout_fixedh+'px',
    'overflow':'hidden'
  });	
};

$('.mob_menu .mob_menu_cat .lvl1url').click(function() {
  if ( $(this).is('.active') ) {
    $('.mob_menu .mob_menu_cat .subcats_box').css('display','none');
  	$(this).removeClass('active');
  } else {
    $('.mob_menu .mob_menu_cat .lvl1url').removeClass('active');
    $('.mob_menu .mob_menu_cat .subcats_box').css('display','none');
    $(this).parent().find('.subcats_box').fadeIn(200);
  	$(this).addClass('active');
  };
  main_layout_fixed_h();
  main_layout_change_h();
});	



// Сортировка

$('.sorting_option .option').click(function() {
  var sort_option = $(this).attr('sort_option');
  var current_url = window.location.href;
      current_url = current_url.replace("&orderby=", "");
      current_url = current_url.replace("?orderby=", "");
      current_url = current_url.replace("price", "");
      current_url = current_url.replace("rating", "");
      current_url = current_url.replace("-desc", "");
      current_url = current_url.replace("date", "");
  if ( current_url.indexOf('?') !== -1 ) {
    var new_url = current_url+'&orderby='+sort_option;
  } else {
    var new_url = current_url+'?orderby='+sort_option;
  };
  window.location = new_url;
});	



// Показываем сортировку в мобильной версии

$('body.woof_search_is_going .show_filters').addClass('active');

$('.show_filters').click(function() {
  $('.mob_sorting').css('display','none');
  $('.show_sorting').removeClass('active');
  if ( $(this).is('.active') ) {
    $('.content_side').css('display','none');
    $(this).removeClass('active');
  } else {
    $('.content_side').fadeIn(200);
    $(this).addClass('active');
  };
});	

$('.show_sorting').click(function() {
  $('.content_side').css('display','none');
  $('.show_filters').removeClass('active');
  if ( $(this).is('.active') ) {
    $('.mob_sorting').css('display','none');
    $(this).removeClass('active');
  } else {
    $('.mob_sorting').fadeIn(200);
    $(this).addClass('active');
  };
});	



// Убираем пустую пагинацию

$('.pagination_box').each(function() {
  var current_pag = $(this).find('.current').length;
  if ( current_pag ) { } else {
  	$(this).remove();
  }
});	



// Габариты домашнего слайда

function home_slider_sizes() {
  var parent = $('.home_slider_box_wrap');
  var parent_width = parent.outerWidth();
  var parent_height = parent.outerHeight();
  parent.find('.slide').css({
    'width':''+parent_width+'px',
    'height':''+parent_height+'px'
  });
};



// Юридическое лицо является индивидуальным предпринимателем

$('#myfield25_field label').click(function() {
  var parent = $(this).parent();
  if ( parent.is('.checked') ) {
    $('#myfield25').val('');
    parent.removeClass('checked');
  } else {
  	$('#myfield25').val('Юридическое лицо является индивидуальным предпринимателем');
    parent.addClass('checked');
  };
});



// Прилипание стики бокса

function products_sticky_fix() {
  if ( screenw > 950 ) {
    if ( is_there_sticky_box ) {
      var postbox = $('.content_main');
      var nav = $('.sticky_box');
      var nav_height = nav.outerHeight();
      var postbox_offset = postbox.offset();
      var start = postbox_offset.top ;
      var postbox_height = postbox.outerHeight();
      var stop = ( postbox_height + start ) - nav_height - 30;
      
      if ( scrolltop < ''+start+'' ) {
        $(nav).css({'top':'0','bottom':'auto'}).removeClass('stop').removeClass('fixed').addClass('free');
      };
      
      if ( scrolltop >= ''+start+'' && scrolltop < stop ) {
        $(nav).css({'top':'0','bottom':'auto'}).removeClass('stop').removeClass('free').addClass('fixed');
      };
  
      if ( scrolltop >= stop ) {
        $(nav).css({'top':'auto','bottom':'30px'}).removeClass('fixed').removeClass('free').addClass('stop');
      };
  
    }
  }
}



// Выбор варианта доставки

var address_fields = $('#billing_city_field, #billing_myfield7_field, #billing_myfield8_field, #billing_myfield9_field, #billing_myfield10_field, #billing_myfield17_field');

$('.shipping_method.disabled').click(function() {
  $('.popup_back, .popup_disabledshipping').fadeIn(300);
});

$('.shipping_method input').click(function() {
  var shipping_method = $(this).parent();

  $('.shipping_method').removeClass('checked');
  $(this).parent().addClass('checked');
  
  if ( shipping_method.is('.local_pickup') ) {
	  
  	address_fields.css('display','none');
    $('.offices_box').css('display','block');
    $('.place-order .delivery_block').css('display','none');
    $('.delivery_pseudo_submit').css('display','none');
  
  } else if($(this).val() == "flat_rate:9"){
  
  	address_fields.css('display','inline-block');
    $('.offices_box').css('display','none');
    $('#billing_city_field').css('display','none');
    delivery_block_status();
    	  
} else {
  	address_fields.css('display','inline-block');
    $('.offices_box').css('display','none');
    $('#billing_city_field').css('display','inline-block');
    delivery_block_status();
  };
  

});

function shipping_method_start() {
  $('#shipping_method .shipping_method').each(function() {
  	if ( $(this).find('input').is(':checked')) {
  	  $(this).addClass('checked');
  	  if ( $(this).is('.free_shipping') && $(this).is('.active') ) {
  	    address_fields.css('display','inline-block');
        $('.offices_box').css('display','none');
  	  };
  	  
  	  if ( $(this).is('.flat_rate') && $(this).is('.active') ) {
  	    address_fields.css('display','inline-block');
        $('.offices_box').css('display','none');
  	  };
  	  
  	  if ( $(this).is('.local_pickup') ) {
  	    address_fields.css('display','none');
        $('.offices_box').css('display','block');
  	  };
  	};
  });
  if ( $('.shipping_method.checked').is('.local_pickup') ) {
    $('.delivery_pseudo_submit').css('display','none');
  
   } else if($('.shipping_method.checked').find("input").val() == "flat_rate:9"){
  
  	address_fields.css('display','inline-block');
    $('.offices_box').css('display','none');
    $('#billing_city_field').css('display','none');
    delivery_block_status();
    	  

  } else {
    $('.delivery_pseudo_submit').css('display','block');
  };
};

function delivery_block_status() {
  
  var delivery_pseudo_submit = $('.delivery_pseudo_submit');

  var street_field = $('#billing_myfield17');
  var street_field_val = street_field.val();
  var bldg_field = $('#billing_myfield7');
  var bldg_field_val = bldg_field.val();
  var apts_field = $('#billing_myfield9');
  var apts_field_val = apts_field.val();

  if ( $('.shipping_method.checked').is('.local_pickup') ) {
    delivery_pseudo_submit.css('display','none');
  } else {
    if ( street_field_val ) { } else {
      delivery_pseudo_submit.css('display','block');
    };
    if ( bldg_field_val ) { } else {
      delivery_pseudo_submit.css('display','block');
    };
    if ( apts_field_val ) { } else {
      delivery_pseudo_submit.css('display','block');
    };
    if ( street_field_val && bldg_field_val && apts_field_val ) {
      delivery_pseudo_submit.css('display','none');
    };
  };
};

delivery_block_status();

function check_address_fields() {
      
  var street_field = $('#billing_myfield17');
  var street_field_val = street_field.val();
  var bldg_field = $('#billing_myfield7');
  var bldg_field_val = bldg_field.val();
  var apts_field = $('#billing_myfield9');
  var apts_field_val = apts_field.val();
  
  if ( street_field_val ) { } else {
    street_field.addClass('error');
  };
  
  if ( bldg_field_val ) { } else {
    bldg_field.addClass('error');
  };
  
  if ( apts_field_val ) { } else {
    apts_field.addClass('error');
  };

};

$('.delivery_pseudo_submit').click(function() {
  check_address_fields();
  $.scrollTo(".checkout_container", 300 );
});

$('.form_field, .form-row input').bind('input propertychange', function() {
  if ( $(this).val() != '' ) {
    $(this).parent().find('.wpcf7-not-valid-tip').fadeOut(200);
    $(this).removeClass('error');
  };
  delivery_block_status();
});



// Реквизиты юридического лица

function check_company_fields_start() {
  var empty;
  if ( $('.payment_type.checked').is('.payment_ur_cash') || $('.payment_type.checked').is('.payment_ur_nocash') ) {

    $('.company_requisites .form-row').each(function() {
      if ( !$(this).is('#myfield19_field') 
      	&& !$(this).is('#myfield21_field') 
      	&& !$(this).is('#myfield22_field') 
      	&& !$(this).is('#myfield24_field') 
      	&& !$(this).is('#myfield11_field') 
      	&& !$(this).is('#myfield17_field') ) {
        var this_val = $(this).find('input').attr('value');
        $(this).removeClass('filled nofilled');
        if ( this_val != '' ) {
        	$(this).addClass('filled');
        } else {
        	empty = 1;
        }
      };
    });    

  } else {

    empty = 0;

  };

  if ( empty == 0 ) {
    $('.company_pseudo_submit').css('display','none');
  } else {
    $('.company_pseudo_submit').css('display','block');
  };
};


function check_company_fields() {

  if ( $('.payment_type.checked').is('.payment_ur_cash') 
  	|| $('.payment_type.checked').is('.payment_ur_nocash') ) {
    
    var empty = 0;

    $('.company_requisites .form-row').each(function() {
      if ( !$(this).is('#myfield19_field') 
      	&& !$(this).is('#myfield21_field') 
      	&& !$(this).is('#myfield22_field') 
      	&& !$(this).is('#myfield24_field') 
      	&& !$(this).is('#myfield11_field') 
      	&& !$(this).is('#myfield17_field') ) {
        var this_val = $(this).find('input').attr('value');
        $(this).removeClass('filled nofilled');
        if ( this_val != '' ) {
          $(this).addClass('filled');
        } else {
        	$(this).find('input').addClass('error');
          empty = 1;
        }
      };
    });
    if ( empty == 0 ) {
      $('.company_pseudo_submit').css('display','none');
    } else {
      $('.company_pseudo_submit').css('display','block');
    };

  } else {

    $('.company_pseudo_submit').css('display','none');

  };
};

$('.company_pseudo_submit').click(function() {
  check_company_fields();
  $.scrollTo(".company_requisites", 300 );
});

check_company_fields_start();

$('.company_requisites input').bind('input propertychange', function() {
  check_company_fields();
});



// Выбор варианта оплаты

$('.payment_type').click(function() {
  $('.payment_type').removeClass('checked');
  $(this).addClass('checked');
  payment_type_to_company();
  check_company_fields_start();

  if ( $('.payment_type.checked').is('.payment_ur_cash') 
  	|| $('.payment_type.checked').is('.payment_ur_nocash') ) {
    $('.company_requisites_block').fadeIn(300);
  } else {
    $('.company_requisites_block').css('display','none');
  };
});

function payment_type_to_company() {
  var data_payment_type = $('.payment_type.checked').attr('data_payment_type');
  $('input#billing_myfield12').val(''+data_payment_type+'');
};



// Копировать фактический адрес в юридический

function address_copy_click() {  
  $('.address_copy').click(function() {

    $('.company_requisites .requisites_step3 input').removeClass('error');

    $(this).addClass('checked');

    var myfield6_field_val = $('#myfield6').val();
    var myfield7_field_val = $('#myfield7').val();
    var myfield8_field_val = $('#myfield8').val();
    var myfield9_field_val = $('#myfield9').val();
    var myfield10_field_val = $('#myfield10').val();
    var myfield11_field_val = $('#myfield11').val();

    $('#myfield12').val(''+myfield6_field_val+'');
    $('#myfield13').val(''+myfield7_field_val+'');
    $('#myfield14').val(''+myfield8_field_val+'');
    $('#myfield15').val(''+myfield9_field_val+'');
    $('#myfield16').val(''+myfield10_field_val+'');
    $('#myfield17').val(''+myfield11_field_val+'');

  });
};


// Кастомный чекбокс в шиппинг полях

function form_row_checkbox_start() {  
  $('.form-row .checkbox').each(function() {
    if ( $(this).find('input').is(':checked') ){
      $(this).parent().removeClass('checked');
    } else {
      $(this).parent().addClass('checked');
    };
  });
}

$('.form-row .checkbox').click(function() {
  if ( $(this).find('input').is(':checked') ){
    $(this).parent().removeClass('checked');
  } else {
    $(this).parent().addClass('checked');
  };
});



// Оформляем форму реквизитов юр лиц

function company_requisites_start() {  
  $('#myfield25_field, #myfield1_field, #myfield2_field, #myfield3_field, #myfield4_field, #myfield5_field').wrapAll('<div class="requisites_step requisites_step1"></div>');
  $('#myfield6_field, #myfield7_field, #myfield8_field, #myfield9_field, #myfield10_field, #myfield11_field').wrapAll('<div class="requisites_step requisites_step2"></div>');
  $('#myfield12_field, #myfield13_field, #myfield14_field, #myfield15_field, #myfield16_field, #myfield17_field').wrapAll('<div class="requisites_step requisites_step3"></div>');
  $('#myfield18_field, #myfield19_field, #myfield20_field, #myfield21_field, #myfield22_field, #myfield23_field, #myfield24_field').wrapAll('<div class="requisites_step requisites_step4"></div>');
  $('.requisites_step1').prependTo('.company_requisites .col_left');
  $('.requisites_step2').appendTo('.company_requisites .col_left');
  $('.requisites_step3').prependTo('.company_requisites .col_right').prepend('<div class="address_copy iconfont">Скопировать из фактического адреса</div>');
  $('.requisites_step4').appendTo('.company_requisites .col_right');
  $('.company_requisites .requisites_step').append('<div class="spacer"></div>');
  address_copy_click();
};




// Кастомный чекбокс в фильтрах

$('.woof_checkbox_instock_container input, .woof_checkbox_sales_container input').click(function() {
  if ( $(this).is(':checked')) {
    $(this).parent().addClass('checked');
  } else {
    $(this).parent().removeClass('checked');
  };
});

$('.woof_checkbox_instock_container input, .woof_checkbox_sales_container input').each(function() {
  if ( $(this).is(':checked')) {
    $(this).parent().addClass('checked');
  } else {
    $(this).parent().removeClass('checked');
  };
});


// Кастомный скролл в фильтрах

function chosen_customscroll() {  
  $('.selectize-dropdown').mCustomScrollbar({
    verticalScroll:true,
    horizontalScroll:false,
    documentTouchScroll:false
  });
};



// Клик по кнопке Полный каталог

$('.full_catalog').click(function() {
  if ( $(this).is('.active') ) {
  	$('.fullcatalog_container').fadeOut(200);
    $(this).removeClass('active');
  } else {
  	$('.fullcatalog_container').fadeIn(300);
    $(this).addClass('active');
  };
});



// Клик по поиску

$('.header_container .search_box .pseudo_button').click(function() {
  $(this).parent().addClass('active');
  $(this).css('z-index','990');
  $('.header_container .search_box .search_form .search_field').focus();
});

$('.header_container .search_form').click(function() {
  $(this).addClass('active');
});

$('.other_than_head').click(function() {
  $('.header_container .search_form').removeClass('active');
});



// Спиннер количества

function spinner_launch() {   
  $('.quantity').each(function() {
    var min = parseInt($(this).attr('min'));
    var max = parseInt($(this).attr('max'));
    var step = parseInt($(this).attr('step'));
    $(this).spinner({
      min: min,
      max: max,
      step: step,
      spin: function( event, ui ) {
        $('.product_item').removeClass('checked');
        $(this).closest('.product_item').addClass('checked');
        $('.product_item:not(.checked) input.quantity').attr({
        	'aria-valuenow':'1',
        	'value':'1'
        });
      }
    });
  }); 
};



// Клик по полю

$('.form-row input').click(function() {
  $('.form-row input').removeClass('active');
  $(this).addClass('active');
});



// Кнопка КУПИТЬ страница товара

$('.single_page_buy').click(function() {
  var product_title = $('.content_main .product_title').text();

  if ( $('.content_container').is('.variable') ) {

    var checked_item = $('.product_item.checked');
    var product_id = checked_item.attr('var_id');
    var quantity = checked_item.find('input.quantity').attr('value');
    var this_img = $('.gallery_nav li[var_id="'+product_id+'"] img').attr('src');
    
  } else {

    var product_id = $('.content_main').attr('data_productid');
  	var this_img = $('.content_container').attr('data_img');
  	var quantity = $('input.quantity').attr('value');
  	var max = $('input.quantity').attr('max');
  	var new_max = max - quantity;
  	if ( new_max < 1 ) {
  	  $('.single_page_buy').remove();
  	} else {
  	  $('input.quantity').spinner({
        min: 1,
        max: new_max,
        step: 1,
        spin: function( event, ui ) {
        
        }
      });
  	};
  	
  };

  $('.popup_buysuccess .product_thumb').attr('src',''+this_img+'').css('display','block');
  $('.popup_buysuccess .product_title').text(''+product_title+'');
  $('.popup_back, .popup_buysuccess').fadeIn(300);
});



// Кнопка КУПИТЬ в архиве

$('.catalog_item .catalog_buy').click(function() {
  var product_id = $(this).attr('product_id');
  var catalog_item = $(this).closest('.catalog_item');
  var var_id = '-';

  if ( $(this).is('.disabled')) {

    if ( catalog_item.is('.variable')) {
      var_id = catalog_item.attr('data_varid');
      product_id = catalog_item.attr('data_productid');
    };

    var this_title = catalog_item.find('.catalog_title:last').text();

    $('.popup_back, .popup_stocknotify').fadeIn(300);
    $('.popup_stocknotify .product_title').text(''+this_title+'');
    $('.wpcf7-form-control-wrap.productid input').val(''+product_id+'');
    $('.wpcf7-form-control-wrap.variationid input').val(''+var_id+'');
    $('.popup_back, .popup_stocknotify').fadeIn(300);

  } else {

  	if ( $(this).is('.stock_managable') ) {
  	  var max_quantity = $(this).attr('max_quantity');
  	  var max_quantity = max_quantity - 1;
  	  $(this).attr('max_quantity',''+max_quantity+'');
  	  if ( max_quantity == 0 ) {
  	  	$(this).addClass('disabled');
  	  };
  	};
    var this_quantity = $(this).attr('quantity');
    var products_array = [];
    products_array.push(product_id);
    var array_length = products_array.length;
    
    if ( catalog_item.is('.variable')) {
      var_id = catalog_item.attr('data_varid');
      var this_img = catalog_item.find('.catalog_img_box li[var_id="'+var_id+'"] img').attr('src');
    } else {
      var this_img = catalog_item.attr('data_img');
    }
    var this_title = catalog_item.find('.catalog_title:last').text();
    
    $('.popup_buysuccess .product_thumb').attr('src',''+this_img+'').css('display','block');
    $('.popup_buysuccess .product_title').text(''+this_title+'');
    $('.popup_back, .popup_buysuccess').fadeIn(300);

  };

});



// Проверяем куки даты последнего захода

$('.instock_notify').click(function(){
  var product_title = $('.content_main .product_title').text();
  var product_varid = $('.popup_nav_item.active').attr('var_id');
  var product_id = $('.content_main').attr('data_productid');
  $('.popup_back, .popup_stocknotify').fadeIn(300);
  $('.popup_stocknotify .product_title').text(''+product_title+'');
  $('.wpcf7-form-control-wrap.productid input').val(''+product_id+'');
  $('.wpcf7-form-control-wrap.variationid input').val(''+product_varid+'');
});



// Проверяем куки даты последнего захода

function check_items_cookie() {
  
  var current_timestamp = $('body').attr('data-timestamp');
  var visit_timestamp = Cookies.get('visit_timestamp');
  var visit_timestamp_edited = visit_timestamp - 86400;

  if ( visit_timestamp !== undefined ) {
    $('.catalog_item').each(function(){
      var item_publishdate = $(this).attr('publish_date');
      if ( item_publishdate > visit_timestamp_edited ) {
      	$(this).find('.label_new').css('display','block');
      }
    });
  };

  set_items_cookie();
};

function set_items_cookie() {
  var current_timestamp = $('body').attr('data-timestamp');
  Cookies.set('visit_timestamp', ''+current_timestamp+'', { expires: 365 });
};



// Попап галереи

$('.gallery_slider_wrap').click(function(){
  $('.popup_gallery_back, .popup_gallery').fadeIn(300);
});

$('.popup_gallery_back, .popup_gallery_close').click(function(){
  $('.popup_gallery_back, .popup_gallery').fadeOut(300);
  var item_index = $('.popup_nav_item.active').attr('data_index');
  gallery_slider.goToSlide(item_index);
  gallery_nav_slider.goToSlide(item_index);
});



// Создаем галерею в попапе

function popup_gallery_start() {
  if ( is_it_product ) {
    nav_num = 6;

    var popup_nav = $('.popup_gallery .popup_nav');
    var popup_nav_box = $('.popup_nav_box');
    var itemsnum = parseInt(popup_nav.attr('data_itemsnum'));
  
    if ( itemsnum > nav_num ) {

      popup_nav.addClass('scroll');
      is_popup_scrolled = 1;

      $('.popup_nav_arrow').css('display','block');
      var e = $('.popup_nav_item');
      for (var i = 0; i < 10; i++) {
        e.clone().removeClass('origin').prependTo(popup_nav_box);
        e.clone().removeClass('origin').appendTo(popup_nav_box);
      };
  
      var new_total = popup_nav_box.find('.popup_nav_item').length;
      var startslide = parseInt($('.content_gallery').attr('data_startimg'));
      var start_preline = ( itemsnum * 10 * 110 ) + ( startslide * 110 );
      
      popup_nav_box.css('top','-'+start_preline+'px');
      popup_nav.attr('data_top',''+start_preline+'');

    } else {

      popup_nav.addClass('no_scroll');

    };

    popup_nav_item_click();
  };
};



// Слайдер галереи

if ( is_it_product ) {

  var data_startimg = $('.content_gallery').attr('data_startimg');

  var gallery_mobslider = $('.gallery_mobslider').bxSlider({
    auto: false, 
    startSlide: data_startimg,
    minSlides: 1, 
    maxSlides: 1, 
    slideMargin: 0, 
    ticker: false,  
    speed: 500, 
    moveSlides: 1, 
    pager: true,
    prevText: '', 
    nextText: '',
    adaptiveHeight: true,
    responsive: true,
    touchEnabled: true
  });

  var is_there_gallery_nav_slider = $('.gallery_nav').length;

  var gallery_slider = $('.gallery_slider').bxSlider({
    auto: false, 
    startSlide: data_startimg,
    minSlides: 1, 
    maxSlides: 1, 
    slideMargin: 0, 
    ticker: false,  
    speed: 500, 
    moveSlides: 1, 
    pagerCustom: '.gallery_nav',
    prevText: '', 
    nextText: '',
    adaptiveHeight: true,
    responsive: true,
    touchEnabled: false
  });

  var parentbox_width = $('.gallery_navbox').outerWidth();
  
  if ( screenw < 900 ) { var slides_num = 3;  } 
  if ( screenw > 900 && screenw < 1300 ) { var slides_num = 4; }
  if ( screenw > 1300 ) { var slides_num = 5; }

  var slide_width = parentbox_width / slides_num;
  
  if ( is_there_gallery_nav_slider ) {
    var gallery_nav_slider = $('.gallery_nav').bxSlider({
      auto: false, 
      startSlide: data_startimg,
      minSlides: slides_num, 
      maxSlides: slides_num, 
      slideMargin: 10, 
      ticker: false, 
      slideWidth: slide_width, 
      speed: 500, 
      pause: 5000,  
      moveSlides: 1, 
      pager: false, 
      prevText: '', 
      nextText: '',
      infiniteLoop: true,
      adaptiveHeight: true,
      responsive: true,
      touchEnabled: false,
      onSliderLoad: function(currentIndex){ 
        $('.gallery_navbox .slide').removeClass('active');
        $('.gallery_navbox .slide'+currentIndex+'').addClass('active');
        popup_nav_item_click();
        gallery_nav_click();
      },
      onSlideBefore: function($slideElement, oldIndex, newIndex){ 
        $('.gallery_navbox .slide').removeClass('active');
        $slideElement.addClass('active');
        gallery_slider.goToSlide(newIndex);
        siblings_height();
  
        $('.popup_gallery .variant, .popup_gallery .gallery_img').css('display','none');
        $('.popup_gallery .popup_nav_item').removeClass('active');
  
        if ( $('.content_container').is('.variable') ) {
          var var_id = $slideElement.attr('var_id');
          $('.popup_gallery .variant_'+var_id+', .popup_gallery .gallery_img_'+var_id+'').css('display','block');
          $('.popup_gallery .popup_nav_item_'+var_id+'.origin').addClass('active');
          if ( is_popup_scrolled == 1 ) {
            var indexof = $('.popup_gallery .popup_nav_item_'+var_id+'.origin').index();
            var start_preline = indexof * 110;
            $('.popup_nav_box').css('top','-'+start_preline+'px');
            $('.popup_nav').attr('data_top',''+start_preline+'');
          };
          product_list_item = $('.product_list .product_item[var_id="'+var_id+'"]');
          if ( product_list_item.is('.outofstock')) { } else {
            $('.product_list .product_item').removeClass('checked');
            product_list_item.addClass('checked');
          };
        } else {
          $('.popup_gallery .gallery_img_'+newIndex+'').css('display','block');
          $('.popup_gallery .popup_nav_item_'+newIndex+'').addClass('active');
          if ( is_popup_scrolled == 1 ) {
            var start_preline = parseInt(newIndex) * 110;
            $('.popup_nav_box').css('top','-'+start_preline+'px');
            $('.popup_nav').attr('data_top',''+start_preline+'');
          };
        };
      }
    });
  };

  $(window).resize(function() {
    
    var parentbox_width = $('.gallery_navbox').outerWidth();

    if ( screenw < 900 ) { var slides_num = 3;  }   
    if ( screenw > 900 && screenw < 1300 ) { var slides_num = 4;  }
    if ( screenw > 1300 ) { var slides_num = 5; }
   
    var slide_width = parentbox_width / slides_num;
    

    if ( is_there_gallery_nav_slider ) {
      gallery_nav_slider.reloadSlider({
        auto: false, 
        startSlide: data_startimg,
        minSlides: slides_num, 
        maxSlides: slides_num, 
        slideMargin: 10, 
        ticker: false, 
        slideWidth: slide_width, 
        speed: 500, 
        pause: 5000,  
        moveSlides: 1, 
        pager: false, 
        prevText: '', 
        nextText: '',
        infiniteLoop: true,
        adaptiveHeight: true,
        responsive: true,
        touchEnabled: false,
        onSliderLoad: function(currentIndex){ 
          $('.gallery_navbox .slide').removeClass('active');
          $('.gallery_navbox .slide'+currentIndex+'').addClass('active');
          popup_nav_item_click();
          gallery_nav_click();
        },
        onSlideBefore: function($slideElement, oldIndex, newIndex){ 
          $('.gallery_navbox .slide').removeClass('active');
          $slideElement.addClass('active');
          gallery_slider.goToSlide(newIndex);
          siblings_height();
    
          $('.popup_gallery .variant, .popup_gallery .gallery_img').css('display','none');
          $('.popup_gallery .popup_nav_item').removeClass('active');
    
          if ( $('.content_container').is('.variable') ) {
            var var_id = $slideElement.attr('var_id');
            $('.popup_gallery .variant_'+var_id+', .popup_gallery .gallery_img_'+var_id+'').css('display','block');
            $('.popup_gallery .popup_nav_item_'+var_id+'.origin').addClass('active');
            if ( is_popup_scrolled == 1 ) {
              var indexof = $('.popup_gallery .popup_nav_item_'+var_id+'.origin').index();
              var start_preline = indexof * 110;
              $('.popup_nav_box').css('top','-'+start_preline+'px');
              $('.popup_nav').attr('data_top',''+start_preline+'');
            };
            product_list_item = $('.product_list .product_item[var_id="'+var_id+'"]');
            if ( product_list_item.is('.outofstock')) { } else {
              $('.product_list .product_item').removeClass('checked');
              product_list_item.addClass('checked');
            };
          } else {
            $('.popup_gallery .gallery_img_'+newIndex+'').css('display','block');
            $('.popup_gallery .popup_nav_item_'+newIndex+'').addClass('active');
            if ( is_popup_scrolled == 1 ) {
              var start_preline = parseInt(newIndex) * 110;
              $('.popup_nav_box').css('top','-'+start_preline+'px');
              $('.popup_nav').attr('data_top',''+start_preline+'');
            };
          };
        }
      });
    };

  });


  function popup_nav_item_click() {
    $('.popup_nav_item').click(function(){
      var item_index = $(this).attr('data_index');
      var true_index = $(this).index();

      $('.popup_gallery .variant, .popup_gallery .gallery_img').css('display','none');

      if ( $('.content_container').is('.variable') ) {
        var var_id = $(this).attr('var_id');
        $('.popup_gallery .variant_'+var_id+', .popup_gallery .gallery_img_'+var_id+'').css('display','block');
        product_list_item = $('.product_list .product_item[var_id="'+var_id+'"]');
        if ( product_list_item.is('.outofstock')) { } else {
          $('.product_list .product_item').removeClass('checked');
          product_list_item.addClass('checked');
        };
      } else {
        $('.popup_gallery .gallery_img_'+item_index+'').css('display','block');
      };

      if ( is_popup_scrolled == 1 ) {
        var start_preline = parseInt(true_index) * 110;
        $('.popup_nav_box').css('top','-'+start_preline+'px');
        $('.popup_nav').attr('data_top',''+start_preline+'');
      };

      $('.popup_gallery .popup_nav_item').removeClass('active');
      $(this).addClass('active');
    });
  };


  function gallery_nav_click() {
    $('.slide').click(function(){
      $('.popup_gallery .variant, .popup_gallery .gallery_img').css('display','none');
      $('.popup_gallery .popup_nav_item').removeClass('active');

      if ( $('.content_container').is('.variable') ) {
        var var_id = $(this).attr('var_id');
        $('.popup_gallery .variant_'+var_id+', .popup_gallery .gallery_img_'+var_id+'').css('display','block');
        $('.popup_gallery .popup_nav_item_'+var_id+'').addClass('active');
        product_list_item = $('.product_list .product_item[var_id="'+var_id+'"]');
        if ( product_list_item.is('.outofstock')) { } else {
          $('.product_list .product_item').removeClass('checked');
          product_list_item.addClass('checked');
        };
      } else {
        var item_index = $(this).attr('data_index');
        $('.popup_gallery .gallery_img_'+item_index+'').css('display','block');
        $('.popup_gallery .popup_nav_item_'+item_index+'').addClass('active');
      };

      $('.gallery_navbox .slide').removeClass('active');
      $(this).addClass('active');

    });
  };


  // Выбор вариации на странице продукта
  
  $('.product_item .product_click').click(function(){
  	if ( $(this).parent().is('.outofstock') ) {

  	} else {

      var product_item = $(this).parent();
      var var_id = product_item.attr('var_id');
      var data_index = product_item.attr('data_index');
      var bx_data_index = data_index - 1;
  
      gallery_slider.goToSlide(bx_data_index);
      gallery_nav_slider.goToSlide(bx_data_index);

      $('.product_item').removeClass('checked');
      $(this).parent().addClass('checked');

    };
  });
  


  // Попап галереи - стрелки
  
  $('.popup_nav_arrow').click(function(){
    var data_top = parseInt($('.popup_nav').attr('data_top'));
  
    if ( $(this).is('.popup_nav_up') ) {
      var new_top = data_top - 110;
      var new_item = $('.popup_nav_item.active').prev();
    } else {
      var new_top = data_top + 110;
      var new_item = $('.popup_nav_item.active').next();
    };
    
    $('.popup_nav_item.active').removeClass('active');
    new_item.addClass('active');

    $('.popup_gallery .variant, .popup_gallery .gallery_img').css('display','none');

    if ( $('.content_container').is('.variable') ) {
      var new_var_id = new_item.attr('var_id');
      $('.popup_gallery .variant_'+new_var_id+', .popup_gallery .gallery_img_'+new_var_id+'').css('display','block');
    } else {
      var new_index = new_item.attr('data_index');
      $('.popup_gallery .gallery_img_'+new_index+'').css('display','block');
    };

    $('.popup_nav_box').css('top','-'+new_top+'px');
    $('.popup_nav').attr('data_top',''+new_top+'');
  });

};



// Инфо - характеристики - переключатель

$('.description_nav_box .description_nav_item').click(function(){
  var data_nav = $(this).attr('data_nav');
  $('.description_nav_box .description_nav_item').removeClass('active');
  $(this).addClass('active');
  $('.description_out').css('display','none');
  $('.description_out_'+data_nav+'').fadeIn(300);
});



// Класс колонкам таблиц

$('.chars_tr').each(function(){
  $(this).find('.chars_td:first').addClass('chars_td1');
  $(this).find('.chars_td:last').addClass('chars_td2');
});



// Выравнивание высоты блоков-близнецов

function siblings_height() {
  var is_there_siblings = $('.siblings').length;
  if ( is_there_siblings ) {
    $('.siblings').each(function(){
      var sibling1 = $(this).find('.sibling1');
      var sibling1_h = sibling1.outerHeight();
      var sibling2 = $(this).find('.sibling2');
      var sibling2_h = sibling2.outerHeight();
      if ( sibling1_h > sibling2_h ) {
        sibling2.css('min-height',''+sibling1_h+'px');
      } else {
        sibling1.css('min-height',''+sibling2_h+'px');
      };
    });
  };
};



// Показать все комментарии

$('.show_all_comments').click(function(){
  $(this).css('display','none');
  $('.comment').fadeIn(300);
  siblings_height();
});



// Показать форму комментариев

$('.show_commentform').click(function(){
  $(this).css('display','none');
  $('.comment-form').fadeIn(300);
  siblings_height();
});



// Статьи - Проверяем какой блок виден и присваиваем класс элементу навигации

function inform_visible() {
  if ( is_it_inform ) {

    $('.inform_block').each(function(){
      var index = $(this).attr('data-index');
      var this_offset = $(this).offset();
      var this_height = $(this).outerHeight();
      var this_top = this_offset.top - 100;
      var this_bottom = this_height + this_top - 100;
  
      if ( index > '1') {
        if ( scrolltop > this_top && scrolltop < this_bottom ) {
          $('.inform_nav li.item'+index+'').addClass('active');
        } else {
          $('.inform_nav li.item'+index+'').removeClass('active');
        }
      } else {
        if ( scrolltop >= 0 && scrolltop < this_bottom ) {
          $('.inform_nav li.item'+index+'').addClass('active');
        } else {
          $('.inform_nav li.item'+index+'').removeClass('active');
        }
      }
      
    });
  }
}



// Статьи - прилипание навигации

function inform_nav_fix() {

  if ( is_it_inform ) {
    var postbox = $('body.inform .content');
    var nav = postbox.find('.inform_nav');
    var nav_height = nav.outerHeight();
    var postbox_offset = postbox.offset();
    var start = postbox_offset.top + 130;
    var postbox_height = postbox.outerHeight();
    var stop = ( postbox_height + start ) - nav_height - 160;
    
    if ( scrolltop < ''+start+'' ) {
      $(nav).css({'top':'160px','bottom':'auto'}).removeClass('stop').removeClass('fixed').addClass('free');
    };
    
    if ( scrolltop >= ''+start+'' && scrolltop < stop ) {
      $(nav).css({'top':'30px','bottom':'auto'}).removeClass('stop').removeClass('free').addClass('fixed');
    };

    if ( scrolltop >= stop ) {
      $(nav).css({'top':'auto','bottom':'-1px'}).removeClass('fixed').removeClass('free').addClass('stop');
    };

  }
}



// Статьи - работа навигации

$('.inform_nav li').click(function() {
  var data_scrollto = $(this).attr('data-scrollto');
  $.scrollTo("#"+data_scrollto+"", 400 );
});



// Клик по городу в шапке

$('.header_city').click(function() {
  $('.popup_back, .popup_city').fadeIn(300);
});



// Закрытие попапа

$('.popup_back, .popup_close, .popup_actions .close').click(function() {
  popup_fadeout();
});

function popup_fadeout() { 
  $('.popup_back, .popup').fadeOut(300);
};



// Переход в корзину из шапки

$('.subhead_cart .button').click(function() {
  window.location.href = "/cart";
});



// Меняем итоговую сумму в корзине шапки

function head_cart_total() { 
  if ( is_headcart_full ) { 
  	var new_cart_count = 0;
  	var new_cart_total = 0;
    $('.subhead_cart .cart_item').each(function() {
      new_cart_count = new_cart_count + parseInt($(this).attr('quantity'));
      new_cart_total = new_cart_total + parseInt($(this).find('.price').text());
    });
    $('.subhead_cart .cart_count').text(''+new_cart_count+'');
    $('.subhead_cart .cart_total .price').text(''+new_cart_total+'');
  };
};



// Слайдеры продуктов

function catalog_item_gals() {
  $('.catalog_item').each(function() {
    var data_productid = $(this).attr('data_productid');
  
    var product_slider = $(this).find('.catalog_img_slider').bxSlider({
      auto: false, 
      minSlides: 1, 
      maxSlides: 1, 
      slideMargin: 0, 
      ticker: false,  
      speed: 500, 
      moveSlides: 1, 
      pagerCustom: '.catalog_img_nav_'+data_productid+'',
      prevText: '', 
      nextText: '',
      adaptiveHeight: true,
      responsive: true,
      touchEnabled: false
    });	
  
    var catalog_bottom_slider = $(this).find('.catalog_bottom_slider').bxSlider({
    	mode:'fade',
      auto: false, 
      minSlides: 1, 
      maxSlides: 1, 
      slideMargin: 0, 
      ticker: false,  
      speed: 0, 
      moveSlides: 1, 
      pagerCustom: '.catalog_img_nav_'+data_productid+'',
      prevText: '', 
      nextText: '',
      adaptiveHeight: true,
      responsive: true,
      touchEnabled: false
    });
  
    var item_width = $(this).outerWidth();
  
    if ( screenw < 1000 ) { margin_koef = 60 ;}
    if ( screenw > 1000 && screenw < 1500 ) { margin_koef = 70 ;}
    if ( screenw > 1500 ) { margin_koef = 80 ;}
  
    var item_width = item_width - margin_koef;
  
    if ( screenw < 750 ) { var slides_num = 2; }
    if ( screenw > 750 ) { var slides_num = 3; }
  
    var slide_width = item_width / 3;
    
    var catalog_img_nav_slider = $(this).find('.catalog_img_nav').bxSlider({
      auto: false, 
      minSlides: 3, 
      maxSlides: 3, 
      slideWidth: slide_width,
      slideMargin: 0, 
      ticker: false,  
      speed: 500, 
      moveSlides: 1, 
      pager: false,
      prevText: '', 
      nextText: '',
      infiniteLoop: true,
      adaptiveHeight: true,
      responsive: true,
      touchEnabled: false,
      onSlideBefore: function($slideElement, oldIndex, newIndex){ 
        product_slider.goToSlide(newIndex);
        catalog_bottom_slider.goToSlide(newIndex);
        var catalog_item = $(this).closest('.catalog_item');
        if ( catalog_item.is('.variable') ) {
          var var_id = $slideElement.attr('var_id');
          var product_url = catalog_item.attr('data_producturl');
          catalog_item.attr('data_varid',''+var_id+'');
          catalog_item.find('.catalog_content a').attr('href',''+product_url+'?variable_id='+var_id+'');
          catalog_item.find('.catalog_buy').attr('product_id',''+var_id+'');
        };
      }
    });
  
  });
  
  
  $('.catalog_img_navbox .catalog_img_nav_item').click(function(){
    var catalog_item = $(this).closest('.catalog_item');
    if ( catalog_item.is('.variable') ) {
      var var_id = $(this).attr('var_id');
      var product_url = catalog_item.attr('data_producturl');
      catalog_item.attr('data_varid',''+var_id+'');
      catalog_item.find('.catalog_content a').attr('href',''+product_url+'?variable_id='+var_id+'');
      catalog_item.find('.catalog_buy').attr('product_id',''+var_id+'');
    };  
  });
  
  
  
  // Товар - вариабельный - детально
  
  $('.catalog_item.variable .cover').click(function(){
    var catalog_item = $(this).closest('.catalog_item');
    var product_url = catalog_item.attr('data_producturl');
    var var_id = catalog_item.attr('data_varid');
    var new_url = product_url + '?variable_id='+var_id;
    window.location.href = ""+new_url+"";
  });

};


// Количество товаров в категории

function cats_total() {
  var cat_total = 0;
  $('.cats_li').each(function() {
  	var this_count = parseInt($(this).find('.count').text());
  	cat_total = cat_total + this_count;
  });
  $('.cat_total span').text(''+cat_total+'');
};



// Категории - разбиваем на колонки

function cats_col() {
  var cats_items = $(".cats_li");
  var total_cats = cats_items.length;
  var per_col = total_cats / 3;
  per_col = Math.ceil(per_col);

  cats_items.prependTo('.cats_list');
  $('.cats_col').remove();

  for(var i = 0; i < cats_items.length; i+=per_col) {
    cats_items.slice(i, i+per_col).wrapAll("<ul class='cats_col'></ul>");
  }

  $('.cats_col').each(function(){
    $(this).append("<div class='spacer'></div>");
  });
};



// Слайдер - на главной

$(window).load(function(){
  if ( is_it_home ) {
    $('.home_slider').bxSlider({
      auto: true, 
      speed: 800, 
      pause: 5000, 
      slideSelector: '.slide', 
      pager: true, 
      prevText: '', 
      nextText: '',
      adaptiveHeight: true,
      responsive: true,
      touchEnabled: false,
      infiniteLoop: true
    }); 

    $('.home_mobslider').bxSlider({
      auto: false,  
      ticker: false,  
      speed: 800, 
      slideSelector: '.slide',
      pager: true, 
      prevText: '', 
      nextText: '',
      adaptiveHeight: true,
      responsive: true,
      touchEnabled: true
    });
  };
});



// Показываем корзину

$('.subhead_cart').click(function() {
  $(".subhead_cart").not($(this).parent()[0]).removeClass('opened');
  $(this).toggleClass('opened');

  return false;
});

$(document).click(function(e){
  that = e.target;
  if ($(that).closest(".subhead_cart").length < 1 && !$(that).hasClass("subhead_cart")) $(".subhead_cart").removeClass('opened');
});

$('.cart_url').click(function() {
  window.location.href = "/cart";
}); 



// Выравниванием высоту элементов

function equal_height() {
  $('.height_item').css('height','auto');
  $('.height_box').each(function(){
    $(this).find('.height_item').matchHeight({
      byRow: false,
      property: 'height'
    });
  });
};



// Минимальная высота контента

function min_height() {
  var header_h = $('.header_container').outerHeight();
  var footer_h = $('.footer_container').outerHeight();
  if ( $('.topbox_container').length ) {
    var topbox_h = $('.topbox_container').outerHeight(); 
  } else {
  	var topbox_h = 0;
  }
  var min_height = screenh - ( header_h + footer_h + topbox_h );
 
  $('.min_height').css('min-height',''+min_height+'px');
};



// Минимальная высота сайд блока в продуктах

function product_side_min_height() {
  var sticky_box_h = $('.sticky_box').outerHeight();
  $('.product_side_min_height').css('min-height',''+sticky_box_h+'px');
};



// Присваиваем элементам порядковые номера

function number_box() {
  $('.number_box').each(function(){
    $(this).find('.item').each(function(index){
      var nomer = index + 1;
      $(this).addClass('item'+ nomer);
    });
    $(this).find('.comment').each(function(index){
      var nomer = index + 1;
      $(this).addClass('item'+ nomer);
    });
    $('.number_box .preloader').css('display','none');
    $('.catalog_item').css('opacity','1');
  });
};



// Нажатие на button_icon вызывает нажатие на button

$('.button_icon').click(function(){
  $(this).parent().find('.button').trigger('click');
});



// Появление и скрытие upscroll

function upscroll_show() {
  if ( scrolltop > 200 ) {
    $('.upscroll').fadeIn(300);
  } else{
    $('.upscroll').fadeOut(300);
  }
};
$('.upscroll').click(function(){
  $.scrollTo(".main_layout", 200);
});



// Скрытие корзины при скролле в мобильной версии

function mob_hide_cart() {
  if ( screenw < 700 ) {
    $(window).scroll(function(){
      $('.subhead_cart').removeClass('opened');
    });
  };
};



$('.woocommerce .products').append('<div class="spacer"></div>');



// Вызов функций после формирования DOM

$(document).ready(function(){
  scrolltop = $(window).scrollTop();
  
  crossels();
  mob_hide_cart();
  min_height();
  equal_height();
  cats_col();
  cats_total();
  spinner_launch();
  inform_nav_fix();
  inform_visible();
  siblings_height();
  check_items_cookie();
  popup_gallery_start();
  upscroll_show();
  payment_type_to_company();
  shipping_method_start();
  company_requisites_start();
  form_row_checkbox_start();
  products_sticky_fix();
  home_slider_sizes();
  number_box();
  main_layout_fixed_h();
  catalog_item_gals();
  products_to_rows();
  products_visible();
  product_side_min_height();

});



// Вызов функций после загрузки страницы

$(window).load(function(){
  
  $('body').addClass('loaded');
  $('.mob_preloader').fadeOut(300);

  chosen_customscroll();
  equal_height();
  products_sticky_fix();
  home_slider_sizes();
  product_side_min_height();
  min_height();

});



// Вызов функций при скролле

$(window).scroll(function(){
  scrolltop = $(window).scrollTop();

  inform_nav_fix();
  inform_visible();
  upscroll_show();
  products_sticky_fix();
  products_visible();

});



// Вызов функций, связанных с изменением размеров экрана

$(window).resize(function() {
  screenw = $(window).width();
  screenh = $(window).height();
  scrolltop = $(window).scrollTop();
  
  min_height();
  equal_height();
  cats_col();
  inform_nav_fix();
  inform_visible();
  siblings_height();
  products_sticky_fix();
  home_slider_sizes();
  main_layout_fixed_h();
  products_to_rows();
  product_side_min_height();

});

});
