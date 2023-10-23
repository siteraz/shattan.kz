function t_sldsInit(t,e){var s="object"==typeof t?t[0]:document.querySelector("#rec"+t);if(s){var i=s.querySelector(".t-slds__items-wrapper");if(i)if(!i.getAttribute("data-slider-initialized")){var r=i.classList.contains("js-feed-container"),d=s.querySelectorAll(".t-slds__item:not(.t-slds__item_dummy)");if(d){var a=d.length,l=d[0],o=d[d.length-1],n=window.innerWidth,c=parseInt(i.getAttribute("data-slider-items-in-row"),10)||0,u=i.getAttribute("data-slider-with-cycle"),_=parseFloat(i.getAttribute("data-slider-transition")),p=i.getAttribute("data-slider-stop"),y=1;if(Array.prototype.forEach.call(d,function(t,e){t.setAttribute("data-slide-index",e+1),window.t_slds__isiOS&&(t.style.transform="translateZ(0)")}),_||0===_||(_=300),"true"==p)return!1;isNaN(_)&&i.setAttribute("data-slider-transition","300"),i.classList.contains("t-slds_animated-fast")||i.classList.contains("t-slds_animated-slow")||i.classList.contains("t-slds_animated-none")||i.classList.add("t-slds_animated-fast");var m=c;t_slds_setItemsInRow(t),t_slds_changeImageUrl(t);var f=window.navigator.userAgent,d=f.indexOf("MSIE"),_=!1;0<d&&(8!=(p=parseInt(f.substring(d+5,f.indexOf(".",d))))&&9!=p||(_=!0)),!0===_&&(i.classList.remove("t-slds_animated-fast"),i.classList.remove("t-slds_animated-slow"),i.classList.add("t-slds_animated-none"),i.classList.add("t-slds_ie"),i.setAttribute("data-slider-correct-height","true"),i.setAttribute("data-slider-items-in-row",1)),i.setAttribute("data-slider-initialized","true"),i.getAttribute("data-slider-totalslides")||i.setAttribute("data-slider-totalslides",a);p=i.getAttribute("data-slider-pos");p?y=parseInt(p,10):i.setAttribute("data-slider-pos",1),i.setAttribute("data-slider-curr-pos",1),i.setAttribute("data-slider-cycle",""),i.setAttribute("data-slider-animated",""),r||t_slds__createDummies(l,o,i),c=parseInt(i.getAttribute("data-slider-items-in-row"),10)||0;o=s.querySelectorAll(".t-slds__arrow_wrapper-right");0<o.length&&Array.prototype.forEach.call(o,function(t){t.style.display="false"===u&&a-c<=0?"none":""}),r||t_slds_SliderWidth(t),"true"==i.getAttribute("data-slider-correct-height")&&t_slds_SliderHeight(t),t_slds_SliderArrowsHeight(t),t_slds_ActiveSlide(t,y,a),t_slds_ActiveCaption(t,y,a),r?960<n&&("true"===i.getAttribute("data-feeds-posts-loaded")?(t_slds__initFeedsSlider(t,s,e),t_slds_initSliderControls(t,e)):document.addEventListener("feedsLoadPosts",function(){t_slds__initFeedsSlider(t,s,e),t_slds_initSliderControls(t,e)})):(_||t_slds_onHammerLoad("Hammer",function(){t_slds_initSliderSwipe(t,a,n)}),t_slds_initSliderControls(t,e),t_slds_updateSlider(t)),0<i.getAttribute("data-slider-timeout")?t_slds_initAutoPlay(t,y,a,e):i.addEventListener("slideAutoplayTimerReady",function(){0<i.getAttribute("data-slider-timeout")&&t_slds_initAutoPlay(t,y,a,e)}),s.querySelectorAll(".t-slds__item-loaded").length<a+2&&t_slds_UpdateImages(t,y),"yes"==i.getAttribute("data-slider-arrows-nearpic")&&t_slds_positionArrows(t);_=s.querySelectorAll(".t-slds");0<_.length&&Array.prototype.forEach.call(_,function(t){t.style.visibility=""}),t_slds__setTabindexForFocusableElements(t),s.removeEventListener("displayChanged",t_slds_updateOnDisplayChange),s.addEventListener("displayChanged",t_slds_updateOnDisplayChange(t,m)),r&&(s.removeEventListener("displayChanged",t_slds_updateFeedsSliderOnResize),s.addEventListener("displayChanged",function(){t_slds_updateFeedsSliderOnResize(t,s,e)})),window.addEventListener("resize",t_throttle(function(){setTimeout(function(){t_slds_setItemsInRow(t,m),t_slds_updateSlider(t),t_slds_positionArrows(t),r&&t_slds_updateFeedsSliderOnResize(t,s,e)},100)})),window.t_slds__isiOS&&"complete"===document.readyState?t_slds__hideMobileSlides(s.querySelector(".t-slds__item_active")):window.t_slds__isiOS&&window.addEventListener("load",function(){t_slds__hideMobileSlides(s.querySelector(".t-slds__item_active"))}),window.addEventListener("load",function(){"true"==i.getAttribute("data-slider-correct-height")&&t_slds_UpdateSliderHeight(t),t_slds_UpdateSliderArrowsHeight(t)}),setTimeout(function(){t_slds_UpdateSliderArrowsHeight(t)},500);_=document.querySelector("#allrecords");_&&_.addEventListener("allRecPaddingInit",function(){t_slds_updateSlider(t)}),document.removeEventListener("click",t_slds__removeAutoplayByVideo),document.addEventListener("click",t_slds__removeAutoplayByVideo)}}}}function t_slds__removeAutoplayByVideo(t){t=t.target.closest("[data-slider-video-type]");!t||(t=t.closest(".t-slds__items-wrapper"))&&t.getAttribute("data-slider-interval-id")&&(t.setAttribute("data-slider-stopped","yes"),t.setAttribute("data-slider-stopped-by-video","y"))}function t_slds__initFeedsSlider(t,e){var s=e.querySelector(".t-slds__items-wrapper"),i=e.querySelectorAll(".t-slds__item:not(.t-slds__item_dummy)"),r=s.getAttribute("data-slider-totalslides"),d=i[0],i=i[i.length-1],a=s.getAttribute("data-slider-with-cycle");t_slds__createDummies(d,i,s),t_slds_updateSlider(t);var l=parseInt(s.getAttribute("data-slider-items-in-row"),10)||0,e=e.querySelectorAll(".t-slds__arrow_wrapper-right");0<e.length&&Array.prototype.forEach.call(e,function(t){t.style.display="false"===a&&r-l<=0?"none":""}),"true"==s.getAttribute("data-slider-correct-height")&&t_slds_SliderHeight(t)}function t_slds__createDummies(t,e,s){var i,r,d,a,l=s.querySelectorAll(".t-slds__item:not(.t-slds__item_dummy)").length,o=parseInt(s.getAttribute("data-slider-items-in-row"),10)||0,n=s.getAttribute("data-slider-with-cycle"),c=s.classList.contains("js-feed-container"),u=!1,_=!1;if(!t||(i=t.querySelector('[data-zoomable="yes"]'))&&(u=!0,i.classList.contains("t-zoomable")&&i.classList.remove("t-zoomable"),i.removeAttribute("data-zoomable")),!e||(r=e.querySelector('[data-zoomable="yes"]'))&&(_=!0,r.classList.contains("t-zoomable")&&r.classList.remove("t-zoomable"),r.removeAttribute("data-zoomable")),e&&0==s.querySelectorAll('.t-slds__item[data-slide-index="0"]').length&&((d=e.cloneNode(!0)).setAttribute("data-slide-index","0"),d.setAttribute("aria-hidden","true"),(a=t.parentNode).insertBefore(d,t),0<(a=a.querySelectorAll('[data-slide-index="0"] [field]')).length&&Array.prototype.forEach.call(a,function(t){t.removeAttribute("field")})),!c&&t&&!s.querySelector('.t-slds__item[data-slide-index="'+(l+1)+'"]')){s=t.cloneNode(!0);if(s.setAttribute("data-slide-index",l+1),s.classList.remove("t-slds__item_active"),s.setAttribute("aria-hidden","true"),e.insertAdjacentElement("afterend",s),e.classList.add("t-slds__item-loaded"),0<o&&"true"===n)for(var p=t,y=e,m=0;m<o-1;m++){var f=p.nextElementSibling.cloneNode(!0);f.setAttribute("data-slide-index",l+m+1),y.nextElementSibling.insertAdjacentElement("afterend",f),y=y.nextElementSibling,p=p.nextElementSibling}}u&&(i.classList.add("t-zoomable"),i.setAttribute("data-zoomable","yes")),_&&(r.classList.add("t-zoomable"),r.setAttribute("data-zoomable","yes"))}function t_slds__hideMobileSlides(t){if(t){var e=t.closest(".t-slds__items-wrapper"),s=e&&getComputedStyle(e);if(!s||"scroll"!==s.overflowX||"flex"!==s.display){var i=Array.prototype.slice.call(e.querySelectorAll(".t-slds__item:not(.t-slds__item_dummy)")),r=960<document.documentElement.clientWidth?5:3;if(!(i.length<=2*r)){for(var d=t.getAttribute("data-slide-index"),a=[d=parseInt(d,10)],l=1;l<r;l++)d+l<=i.length?a.push(d+l):a.push(l),0<d-l?a.push(d-l):a.push(i.length+1-l);var o="t-slds__item-innactive";i.forEach(function(e){a.some(function(t){return parseInt(e.getAttribute("data-slide-index"),10)===t})?e.classList.remove(o):e.classList.add(o)})}}}}function t_slds_updateOnDisplayChange(t,e){t_throttle(function(){t_slds_setItemsInRow(t,e),t_slds_updateSlider(t),t_slds_positionArrows(t)})}function t_slds_updateFeedsSliderOnResize(t,e,s){var i=e.querySelector(".t-slds__items-wrapper");i.classList.contains("js-feed-container")&&(960<window.innerWidth?"true"===i.getAttribute("data-feeds-posts-loaded")?(t_slds__initFeedsSlider(t,e,s),t_slds_initSliderControls(t,s)):document.addEventListener("feedsLoadPosts",function(){t_slds__initFeedsSlider(t,e,s),t_slds_initSliderControls(t,s)}):i.style.transform="translateX(0)")}function t_slds_setItemsInRow(t,e){var s,t="object"==typeof t?t[0]:document.querySelector("#rec"+t);!t||(t=t.querySelector(".t-slds__items-wrapper"))&&((t.getAttribute("data-slider-items-in-row")||0)&&(window.innerWidth<=960&&(s=2),window.innerWidth<=640&&(s=1),960<window.innerWidth&&(s=e)),s&&t.setAttribute("data-slider-items-in-row",s))}function t_slds_initSliderControls(a,l){var o="object"==typeof a?a[0]:document.querySelector("#rec"+a);if(o){var n=o.querySelector(".t-slds__items-wrapper");if(n){var t=n.getAttribute("data-slider-items-in-row")||0,e=o.querySelector(".t-slds__container .t-slds__item"),s=o.querySelector(".t-slds__container"),s=(0<t&&e&&s?e:s).offsetWidth;if("true"==n.getAttribute("data-slider-stop"))return!1;n.style.transform="translateX(-"+s+"px)";s=o.querySelectorAll(".t-slds__arrow_wrapper");0<s.length&&Array.prototype.forEach.call(s,function(t){t.addEventListener("click",function(){var t=t_slds_getCurrentTranslate(o),e=n.getAttribute("data-slider-animated"),s=parseFloat(n.getAttribute("data-slider-pos")),i=parseFloat(n.getAttribute("data-slider-totalslides")),r=n.getAttribute("data-slider-with-cycle"),d="";""==e&&(n.setAttribute("data-slider-animated","yes"),"left"===this.getAttribute("data-slide-direction")?"false"==r&&1==s?s=1:s--:"false"==r&&s==i?s=i:s++,n.setAttribute("data-slider-pos",s),s!=i+1&&0!=s||(d="yes"),n.setAttribute("data-slider-cycle",d),t_slideMoveWithoutAnimation(a,!1,l,t)),t_slds_updateSlider(a)})});s=o.querySelectorAll(".t-slds__bullet");0<s.length&&Array.prototype.forEach.call(s,function(s){s.addEventListener("click",function(){var t,e=parseInt(s.getAttribute("data-slide-bullet-for"),10);parseInt(n.getAttribute("data-slider-pos"),10)!==e&&(t=t_slds_getCurrentTranslate(o),n.setAttribute("data-slider-pos",e),t_slideMoveWithoutAnimation(a,!1,l,t),t_slds_updateSlider(a))})})}}}function t_slds_animate(i,r,d){var a=performance.now();requestAnimationFrame(function t(e){var s=(e-a)/d;1<s&&(s=1);e=i(s);r(e),s<1?requestAnimationFrame(t):"y"!==window.lazy&&"yes"!==document.querySelector("#allrecords").getAttribute("data-tilda-lazy")||t_slds_onHammerLoad("t_lazyload_update",function(){t_lazyload_update()})})}function t_slide_MoveAnimation(e,t,s,i){var r,d;e&&(e.style.transition="height ease-in-out .5s, transform ease-in-out 0s",s=-Math.abs(t*s),r=-parseInt(getComputedStyle(e).transform.match(/\d+/)[0]),0!=(d=r-s)&&t_slds_animate(function(t){return t},function(t){e.style.transform="translateX("+(r-d*t)+"px)"},i))}function t_slideMoveWithoutAnimation(t,e,s){var i,r,d,a,l,o,n,c="object"==typeof t?t[0]:document.querySelector("#rec"+t);!c||(i=c.querySelector(".t-slds__items-wrapper"))&&(r=parseFloat(i.getAttribute("data-slider-pos")),d=(0<(i.getAttribute("data-slider-items-in-row")||0)?c.querySelector(".t-slds__container .t-slds__item"):c.querySelector(".t-slds__container")).offsetWidth,parseFloat(i.getAttribute("data-slider-totalslides"))+1<r&&(r=1),(a=i.classList.contains("t-slds_animated-none"))&&(l=c.querySelector(".t-slds__item_active"),o=c.querySelectorAll(".t-slds__item"),l&&0===c.querySelectorAll(".t-slds__item_dummy").length&&((n=l.cloneNode(!0)).classList.add("t-slds__item_dummy"),n.style.position="absolute",n.style.left=d*r+"px",i.appendChild(n),(c.classList.contains("js-product")?c:c.querySelector(".t-store")||c.querySelector(".js-product"))?(t_slds_fadeOut(n,150,function(){null!==n.parentNode&&n.parentNode.removeChild(n)}),Array.prototype.forEach.call(o,function(t){t_slds_fadeIn(t,150)})):(Array.prototype.forEach.call(o,function(t){t.style.opacity=0}),t_slds_fadeOut(n,400,function(){null!==n.parentNode&&n.parentNode.removeChild(n)}),setTimeout(function(){Array.prototype.forEach.call(o,function(t){t_slds_fadeIn(t)})},50))),i.classList.add("t-slds_animated-cancel")),t_slideMove(t,e,s),a&&i.classList.remove("t-slds_animated-cancel"))}function t_slideMoveInstantly(t,e,s){var i,r,d,a,l,o="object"==typeof t?t[0]:document.querySelector("#rec"+t);!o||(i=o.querySelector(".t-slds__items-wrapper"))&&(r=parseFloat(i.getAttribute("data-slider-pos")),d=(0<(i.getAttribute("data-slider-items-in-row")||0)?o.querySelector(".t-slds__container .t-slds__item"):o.querySelector(".t-slds__container")).offsetWidth,parseFloat(i.getAttribute("data-slider-totalslides"))+1<r&&(r=1),i.classList.contains("t-slds_animated-none")&&(a=o.querySelector(".t-slds__item_active"))&&0===o.querySelectorAll(".t-slds__item_dummy").length&&((l=a.cloneNode(!0)).classList.add("t-slds__item_dummy"),l.style.position="absolute",l.style.left=d*r+"px",i.appendChild(l),t_slds_fadeOut(l,400,function(){null!==l.parentNode&&l.parentNode.removeChild(l)})),i.classList.add("t-slds_animated"),i.classList.add("t-slds_animated-cancel"),t_slideMove(t,e,s),i.classList.remove("t-slds_animated"),i.classList.remove("t-slds_animated-cancel"))}function t_slideMove(t,e,s){var i="object"==typeof t?t[0]:document.querySelector("#rec"+t);if(i){var r=i.querySelector(".t-slds__items-wrapper");if(r){var d=i.querySelectorAll(".t-slds__item:not(.t-slds__item_dummy)"),a=r.classList.contains("js-feed-container"),l=parseInt(r.getAttribute("data-slider-items-in-row")||0),o=parseInt(r.getAttribute("data-feed-show-count")||0),n=(0<l?i.querySelector(".t-slds__container .t-slds__item"):i.querySelector(".t-slds__container")).offsetWidth,c=parseFloat(r.getAttribute("data-slider-transition")),u=parseFloat(r.getAttribute("data-slider-pos")),_=parseFloat(r.getAttribute("data-slider-totalslides")),p=(r.getAttribute("data-slider-cycle"),r.classList.contains("t-slds_animated-none")),y=0<r.getAttribute("data-slider-timeout"),m=r.getAttribute("data-slider-stop"),f=i.querySelector(".t-slds__arrow_wrapper-right"),g=i.querySelector(".t-slds__arrow_wrapper-left");"off"===r.getAttribute("aria-live")&&r.setAttribute("aria-live","polite");var A,b=0;!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||null!==(A=navigator.appVersion.match(/Version\/(\d+)\.(\d+)\.?(\d+)? Safari/))&&(b=parseInt(A[1],10));var S=!!navigator.userAgent.match("CriOS");if(c||0===c||(c=300),_+1<u&&(u=1,r.setAttribute("data-slider-pos",1)),"true"==m)return!1;f&&(a?(d=d[d.length-1],d=parseInt(d.getAttribute("data-slide-index"),10),l<_&&t_slds_fadeIn(f,300),d<_&&0<l&&(u==d-o+1||d===o)?((o=document.createEvent("Event")).initEvent("feedsLastSlide",!0,!0),r.dispatchEvent(o),document.addEventListener("feedsLoadSlide",function(){t_slds_updateSlider(t),"function"==typeof t_animate__startAnimation&&t_animate__startAnimation()}),t_slds_fadeIn(f,300)):d===_&&u===_-l+1&&t_slds_fadeOut(f,300)):("false"==r.getAttribute("data-slider-with-cycle")&&(u==_||1<l&&u==_-l+1)?t_slds_fadeOut:t_slds_fadeIn)(f,300)),g&&("false"==r.getAttribute("data-slider-with-cycle")&&1==u?t_slds_fadeOut:t_slds_fadeIn)(g,300),r.classList.add("t-slds_animated"),13<=b&&S&&!p?t_slide_MoveAnimation(r,u,n,c):r.style.transform="translateX(-"+n*u+"px)",setTimeout(function(){r.classList.remove("t-slds_animated"),r.setAttribute("data-slider-animated",""),"yes"==r.getAttribute("data-slider-cycle")&&(u==_+1&&(u=1),0==u&&(u=_),13<=b&&S&&!p?t_slide_MoveAnimation(r,u,n,0):r.style.transform="translateX(-"+n*u+"px)",!0!==p&&t_slds_ActiveSlide(t,u,_,s),r.setAttribute("data-slider-pos",u)),("y"===window.lazy||document.querySelector("#allrecords")&&"yes"===document.querySelector("#allrecords").getAttribute("data-tilda-lazy"))&&t_slds_onHammerLoad("t_lazyload_update",function(){t_lazyload_update()}),!e&&y&&t_slds_initAutoPlay(t,u,_,s)},c),t_slds_ActiveBullet(t,u,_,s),t_slds_ActiveSlide(t,u,_),"true"==r.getAttribute("data-slider-correct-height")&&t_slds_SliderHeight(t),t_slds_SliderArrowsHeight(t),t_slds_ActiveCaption(t,u,_),i.querySelectorAll(".t-slds__item-loaded").length<_+2&&t_slds_UpdateImages(t,u),r.getAttribute("data-slider-curr-pos",u)}}}function t_slds_updateSlider(t){var e,s,i,r,d,a,l="object"==typeof t?t[0]:document.querySelector("#rec"+t);l&&(t_slds_SliderWidth(t),(e=l.querySelector(".t-slds__items-wrapper"))&&(s=e.getAttribute("data-slider-items-in-row")||0,d=l.querySelector(".t-slds__container .t-slds__item"),a=l.querySelector(".t-slds__container"),i=(0<s&&a&&d?d:a).offsetWidth,r=parseInt(e.getAttribute("data-slider-pos"),10),d=parseInt(e.getAttribute("data-slider-totalslides"),10),a=e.getAttribute("data-slider-with-cycle"),l=l.querySelector(".t-slds__arrow_wrapper-right"),d+1<r&&(r=1,e.setAttribute("data-slider-pos",1)),l&&(l.style.display="false"===a&&(d-s<=0||r===d)?"none":""),e.style.transform="translateX(-"+i*r+"px)","true"==e.getAttribute("data-slider-correct-height")&&t_slds_UpdateSliderHeight(t),t_slds_UpdateSliderArrowsHeight(t)))}function t_slds_UpdateImages(t,e){t="object"==typeof t?t[0]:document.querySelector("#rec"+t);!t||(e=t.querySelector('.t-slds__item[data-slide-index="'+e+'"]'))&&(e.classList.add("t-slds__item-loaded"),e.nextElementSibling&&e.nextElementSibling.classList.add("t-slds__item-loaded"),e.previousElementSibling&&e.previousElementSibling.classList.add("t-slds__item-loaded"))}function t_slds_ActiveCaption(t,e,s){var i,r="object"==typeof t?t[0]:document.querySelector("#rec"+t);r&&(i=r.querySelectorAll(".t-slds__caption"),t=r.querySelector('.t-slds__caption[data-slide-caption="'+e+'"]'),Array.prototype.forEach.call(i,function(t){t.classList.remove("t-slds__caption-active")}),0==e?t=r.querySelector('.t-slds__caption[data-slide-caption="'+s+'"]'):e==s+1&&(t=r.querySelector('.t-slds__caption[data-slide-caption="1"]')),t&&t.classList.add("t-slds__caption-active"))}function t_slds_scrollImages(t,e){t="object"==typeof t?t[0]:document.querySelector("#rec"+t);t&&(e=(e<0?"":"-")+Math.abs(e).toString(),t.querySelector(".t-slds__items-wrapper").style.transform="translateX("+e+"px)")}function t_slds_ActiveBullet(t,e,s,i){var r;i&&i.thumbsbulletGallery&&(a=parseInt(i.storeOptions.popup_opts.columns),d=+i.storeOptions.slider_slidesOpts.ratio,r=t_store_prodPopup_gallery_calcMaxThumbsCount(a,d,60,10));var d,a="object"==typeof t?t[0]:document.querySelector("#rec"+t);a&&(d=a.querySelectorAll(".t-slds__bullet"),t=a.querySelector('.t-slds__bullet[data-slide-bullet-for="'+e+'"]'),Array.prototype.forEach.call(d,function(t){t.classList.remove("t-slds__bullet_active");t=t.querySelector(".t-slds__bullet_body");t&&t.removeAttribute("aria-current")}),i&&i.thumbsbulletGallery&&r<=e&&e!=s+1||r<=s&&0==e?t=a.querySelector('.t-slds__bullet[data-slide-bullet-for="'+r+'"]'):0==e?t=a.querySelector('.t-slds__bullet[data-slide-bullet-for="'+s+'"]'):e==s+1&&(t=a.querySelector('.t-slds__bullet[data-slide-bullet-for="1"]')),t&&(t.classList.add("t-slds__bullet_active"),(t=t.querySelector(".t-slds__bullet_body"))&&t.setAttribute("aria-current",!0)))}function t_slds_ActiveSlide(t,e,s){var i,r,d,a,l,o="object"==typeof t?t[0]:document.querySelector("#rec"+t);o&&(a=o.querySelector(".t-slds__items-wrapper"),l=o.querySelectorAll(".t-slds__item"),i=o.querySelector('.t-slds__item[data-slide-index="'+e+'"]'),r=!!a&&a.classList.contains("t-slds_animated-none"),d=o.querySelectorAll("iframe"),a=o.querySelectorAll("video"),Array.prototype.forEach.call(d,function(t){t.src&&(-1!==t.src.indexOf("&enablejsapi=1")&&t.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*"),-1===t.src.indexOf("vimeo")||-1===t.src.indexOf("&amp;api=1")&&-1===t.src.indexOf("&api=1")||t.contentWindow.postMessage('{"method":"pause","value":"true"}',"*"))}),Array.prototype.forEach.call(a,function(t){t.pause()}),Array.prototype.forEach.call(l,function(t){t.classList.remove("t-slds__item_active"),t.setAttribute("aria-hidden","true")}),0==e&&!1===r?(o.querySelector('.t-slds__item[data-slide-index="'+s+'"]').classList.add("t-slds__item_active"),o.setAttribute("aria-hidden","false")):0==e&&!0===r?i=o.querySelector('.t-slds__item[data-slide-index="'+s+'"]'):e==s+1&&!1===r?(l=o.querySelector('.t-slds__item[data-slide-index="1"]'))&&(l.classList.add("t-slds__item_active"),l.setAttribute("aria-hidden","false")):e==s+1&&!0===r&&(i=o.querySelector('.t-slds__item[data-slide-index="1"]')),i&&(i.classList.add("t-slds__item_active"),i.setAttribute("aria-hidden","false")),window.t_slds__isiOS&&t_slds__hideMobileSlides(i),t_slds__setTabindexForFocusableElements(t))}function t_slds__setTabindexForFocusableElements(t){var e,s="object"==typeof t?t[0]:document.querySelector("#rec"+t);s&&(e=s.querySelector(".t-slds__items-wrapper"),(t=s.querySelector(".t-slds__item_active"))&&(s='a, button, input:not([type="hidden"]), select, textarea, video, iframe',e=e.querySelectorAll(s),Array.prototype.forEach.call(e,function(t){t.setAttribute("tabindex","-1")}),s=t.querySelectorAll(s),Array.prototype.forEach.call(s,function(t){t.setAttribute("tabindex","0")})))}function t_slds_SliderWidth(t){var e="object"==typeof t?t[0]:document.querySelector("#rec"+t);if(e){var s=e.querySelector(".t-slds__container");if(s){var i=parseInt(getComputedStyle(s).paddingLeft)||0,r=parseInt(getComputedStyle(s).paddingRight)||0,d=s.clientWidth-(i+r),t=e.querySelectorAll(".t-slds__item:not(.t-slds__item_dummy)").length,s=e.querySelector(".t-slds__items-wrapper"),i=0;if(s){r=s.getAttribute("data-slider-stop"),i=s.getAttribute("data-slider-items-in-row");if("true"==r)return!1;s.style.width=d*t+"px"}window.innerWidth<=640?i=1:window.innerWidth<=960&&1<i&&(i=2);var a=1<i?d/i:d;0<a&&(e=e.querySelectorAll(".t-slds__item"),s&&(e=s.querySelectorAll(".t-slds__item")),Array.prototype.forEach.call(e,function(t){t.style.width=a+"px"}))}}}function t_slds_SliderHeight(t){var e,s,i,r="object"==typeof t?t[0]:document.querySelector("#rec"+t);!r||(e=r.querySelector('.t-slds__items-wrapper:not([data-slider-correct-height="false"])'))&&(s=e.classList.contains("js-feed-container"),(t=r.querySelector(".t-slds__item_active"))&&(r=parseInt(getComputedStyle(t).paddingTop)||0,i=parseInt(getComputedStyle(t).paddingBottom)||0,i=t.clientHeight-(r+i)),i&&e&&(e.style.height=s?"":i+"px"))}function t_slds_UpdateSliderHeight(t){var e,s,i,r="object"==typeof t?t[0]:document.querySelector("#rec"+t);!r||(e=r.querySelector('.t-slds__items-wrapper:not([data-slider-correct-height="false"])'))&&(s=e.classList.contains("js-feed-container"),(t=r.querySelector(".t-slds__item_active"))&&(r=parseInt(getComputedStyle(t).paddingTop)||0,i=parseInt(getComputedStyle(t).paddingBottom)||0,i=t.clientHeight-(r+i)),0!==i&&e&&(e.style.height=s?"":i+"px"))}function t_slds_SliderArrowsHeight(t){var e,s,i,r,d,a="object"==typeof t?t[0]:document.querySelector("#rec"+t);a&&(e=a.querySelector(".t-slds__item_active"),s=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),e&&(i=0,e.querySelector("[data-slider-video-type]")&&s&&(i=40),t=parseInt(getComputedStyle(e).paddingTop)||0,d=parseInt(getComputedStyle(e).paddingBottom)||0,r=e.clientHeight-(t+d)-i),d=a.querySelectorAll(".t-slds__arrow_wrapper"),r&&0<d.length&&Array.prototype.forEach.call(d,function(t){t.style.height=r+"px";t=t.querySelector(".t-slds__arrow");t&&(t.style.marginTop=i/2+"px")}),t_slds_fixArrowsInCatalog(a,e,d,s))}function t_slds_UpdateSliderArrowsHeight(t){var e,s,i,r,d,a="object"==typeof t?t[0]:document.querySelector("#rec"+t);a&&(e=a.querySelector(".t-slds__item_active"),s=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),e&&(i=0,e.querySelector("[data-slider-video-type]")&&s&&(i=40),t=parseInt(getComputedStyle(e).paddingTop)||0,d=parseInt(getComputedStyle(e).paddingBottom)||0,r=e.clientHeight-(t+d)-i),d=a.querySelectorAll(".t-slds__arrow_wrapper"),r&&0<d.length&&Array.prototype.forEach.call(d,function(t){t.style.height=r+"px";t=t.querySelector(".t-slds__arrow");t&&(t.style.marginTop=i/2+"px")}),t_slds_fixArrowsInCatalog(a,e,d,s))}function t_slds_fixArrowsInCatalog(t,e,s,i){var r;e&&i&&t.classList.contains("t-store__relevants-grid-cont")&&(r=e.querySelector(".js-product-img").offsetHeight,Array.prototype.forEach.call(s,function(t){var e=t.offsetHeight,e=(r-e)/2;t.style.top=e+"px",t.style.transform="translateY(0)"}))}function t_slds_initAutoPlay(r,d,a,l){var i="object"==typeof r,o=i?r[0]:document.querySelector("#rec"+r);if(o){var t=o.querySelector(".t-slds"),n=o.querySelector(".t-slds__items-wrapper");if(n){var e=parseFloat(n.getAttribute("data-slider-timeout")),c="",s=n.getAttribute("data-slider-stop"),u=n.getAttribute("data-slider-interval-id");if(u&&clearInterval(u),"true"==s)return!1;!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&t&&(t.addEventListener("mouseover",function(){n.setAttribute("data-slider-stopped","yes")}),t.addEventListener("mouseout",function(){"y"!==n.getAttribute("data-slider-stopped-by-video")&&n.setAttribute("data-slider-stopped","")}));var _,p,y=o.getBoundingClientRect().top+window.pageYOffset;o.offsetHeight;window.addEventListener("resize",t_throttle(function(){y=o.getBoundingClientRect().top+window.pageYOffset,o.offsetHeight})),void 0!==document.hidden?(_="hidden",p="visibilitychange"):void 0!==document.msHidden?(_="msHidden",p="msvisibilitychange"):void 0!==document.webkitHidden&&(_="webkitHidden",p="webkitvisibilitychange"),document.addEventListener(p,function(){var t,e,s;document[_]?n.setAttribute("data-slider-stopped","yes"):(t=getComputedStyle(o).display,s=(e=window.pageYOffset)+window.innerHeight,y=o.getBoundingClientRect().top+window.pageYOffset,e<y+o.offsetHeight&&y<s&&"none"!==t&&"y"!==n.getAttribute("data-slider-stopped-by-video")&&n.setAttribute("data-slider-stopped",""))},!1),1===o.length&&window.bind("scroll",t_throttle(function(){var t=getComputedStyle(o).display,e=window.pageYOffset,s=e+window.innerHeight;"none"!==t?(y=o.getBoundingClientRect().top+window.pageYOffset,e<y+o.offsetHeight&&y<s&&"y"!==n.getAttribute("data-slider-stopped-by-video")?n.setAttribute("data-slider-stopped",""):""===n.getAttribute("data-slider-stopped")&&n.setAttribute("data-slider-stopped","yes")):i||n.setAttribute("data-slider-stopped","yes")}));e=setInterval(function(){var t=n.getAttribute("data-slider-stopped"),e=n.getAttribute("data-slider-autoplay-ignore-hover"),s=n.getAttribute("data-slider-touch"),i=t_slds_getCurrentTranslate(o);"yes"!=t&&"yes"!=e&&"yes"!=s&&("false"==n.getAttribute("data-slider-with-cycle")&&d==a?d=a:d++,n.setAttribute("data-slider-pos",d),d!=a+1&&0!=d||(c="yes"),t_slideMoveWithoutAnimation(r,!0,l,i),t_slds_updateSlider(r),"yes"==c&&(d==a+1&&(d=1),0==d&&(d=a),n.setAttribute("data-slider-pos",d)),n.setAttribute("data-slider-cycle",c))},e);n.setAttribute("data-slider-interval-id",e)}}}function t_slds_positionArrows(t){var e,s,i="object"==typeof t?t[0]:document.querySelector("#rec"+t);i&&(e=i.querySelector(".t-slds__arrow_container-outside"),(s=i.querySelector(".t-slds__item"))&&(t=s.offsetWidth,s=i.querySelector(".t-slds__arrow-left")?i.querySelector(".t-slds__arrow-left").offsetWidth:0,i=i.querySelector(".t-slds__arrow-right")?i.querySelector(".t-slds__arrow-right").offsetWidth:0,e&&(e.style.maxWidth=s+i+t+120+"px")))}function t_slds_initSliderSwipe(c,t,e,u){var _="object"==typeof c?c[0]:document.querySelector("#rec"+c);if(_){var s=_.querySelector(".t-slds__main");if(s){var i=_.querySelector(".t-slds__items-wrapper");if(i){var r,d=i.getAttribute("data-slider-stop"),a=i.getAttribute("data-swiper-initialized"),p=!1,y=!1;if("true"==d)return!1;if("true"==a)return!1;delete Hammer.defaults.cssProps.userSelect,hammer=new Hammer(s,{domEvents:!0,inputClass:Hammer.TouchInput,recognizers:[[Hammer.Pan,{direction:Hammer.DIRECTION_HORIZONTAL}]]}),i.setAttribute("data-swiper-initialized","true");function l(t){window.pageYOffset>_.getBoundingClientRect().bottom+window.pageYOffset||window.pageYOffset+document.documentElement.clientHeight<_.getBoundingClientRect().top+window.pageYOffset?i.setAttribute(t,"yes"):"y"!==i.getAttribute("data-slider-stopped-by-video")&&i.setAttribute(t,"")}var o="ontouchend"in document?"data-slider-touch":"data-slider-stopped";if("IntersectionObserver"in window?new IntersectionObserver(function(t){t=t[0];i.setAttribute(o,t.isIntersecting?"":"yes")}).observe(_):(l(o),window.addEventListener("scroll",function(){p=!0,clearTimeout(r),r=setTimeout(function(){l(o),p=!1},250)})),1==t)return!1;t=function(t){if(y)return t.preventDefault(),!1};window.removeEventListener("touchmove",t,{passive:!1}),window.addEventListener("touchmove",t,{passive:!1}),hammer.on("pan",function(t){if(p)return!1;y=!0;var e=_.querySelector(".t-slds__items-wrapper"),s=e.getAttribute("data-slider-items-in-row")||0,i=1<s,r=(i?_.querySelector(".t-slds__container .t-slds__item"):_.querySelector(".t-slds__container")).offsetWidth,d=parseFloat(e.getAttribute("data-slider-pos")),a=parseFloat(e.getAttribute("data-slider-totalslides")),l="",o=t.deltaX,n=100/a*t.deltaX/window.innerWidth;if("true"==e.getAttribute("data-slider-stop"))return!1;e.setAttribute("data-slider-touch","yes"),t_slds_scrollImages(c,r*d-o),t.isFinal&&(.4<t.velocityX?("false"==e.getAttribute("data-slider-with-cycle")&&1==d?d=1:d--,e.setAttribute("data-slider-pos",d),0==d&&(l="yes"),e.setAttribute("data-slider-cycle",l)):t.velocityX<-.4?("false"==e.getAttribute("data-slider-with-cycle")&&(d==a||i&&d==a-s+1)?d=i?a-s:a:(t=(t=_.querySelectorAll(".t-slds__item:not(.t-slds__item_dummy)"))[t.length-1],(t=parseFloat(t.getAttribute("data-slide-index"),10))<a&&d==t&&((t=document.createEvent("Event")).initEvent("feedsLastSlide",!0,!0),e.dispatchEvent(t),document.addEventListener("feedsLoadSlide",function(){t_slds_updateSlider(c)})),d++),e.setAttribute("data-slider-pos",d),d==a+1&&(l="yes"),e.setAttribute("data-slider-cycle",l)):n<=-30/a?("false"==e.getAttribute("data-slider-with-cycle")&&(d==a||i&&d==a-s+1)?d=i?a-s:a:d++,e.setAttribute("data-slider-pos",d),d==a+1&&(l="yes"),e.setAttribute("data-slider-cycle",l)):30/a<=n&&("false"==e.getAttribute("data-slider-with-cycle")&&1==d?d=1:d--,e.setAttribute("data-slider-pos",d),0==d&&(l="yes"),e.setAttribute("data-slider-cycle",l)),t_slideMove(c,!1,u),e.setAttribute("data-slider-touch",""),y=!1)}),hammer.on("panend",function(){t_slideMove(c,!1,u),y=!1})}}}}function t_slds_getCurrentTranslate(t){t=t.querySelector(".t-slds__items-wrapper");if(t){t=getComputedStyle(t).transform;if(void 0!==t&&""!==t){t=t.match(/\d+/g);if(null!==t)return parseInt(t[0],10)}}}function t_slds_changeImageUrl(t){var e=document.getElementById("allrecords"),e=e&&"yes"===e.getAttribute("data-tilda-lazy"),t="object"==typeof t?t[0]:document.querySelector("#rec"+t);t&&(t=e?t.querySelectorAll(".t-slds__img:not([data-original])"):t.querySelectorAll(".t-slds__img"),Array.prototype.forEach.call(t,function(t){var e=t.getAttribute("data-src");e&&(t.setAttribute("src",e),t.removeAttribute("data-src"))}))}function t_slds_onHammerLoad(s,i,r){var d;"function"==typeof window[s]?i():(d=Date.now(),setTimeout(function t(){var e=Date.now();if("function"!=typeof window[s]){if(7e3<e-d)throw new Error(s+" is undefined");setTimeout(t,r||100)}else i()}))}function t_slds_fadeOut(t,e,s){var i,r;"none"!==t.style.display&&(t.getAttribute("data-fadeout-timeout")||(i=1,e=parseInt(e),r=setInterval(function(){t.style.opacity=i,(i-=.1)<=.1&&(clearInterval(r),t.removeAttribute("data-fadeout-timeout"),t.style.display="none","function"==typeof s&&s())},0<e?e/10:40),t.setAttribute("data-fadeout-timeout",r)))}function t_slds_fadeIn(t,e,s){var i,r;("1"!==getComputedStyle(t).opacity&&""!==getComputedStyle(t).opacity||"none"===getComputedStyle(t).display)&&(t.getAttribute("data-fadein-timeout")||(e=(i=0)<(e=parseInt(e))?e/10:40,t.style.opacity=i,t.style.display="block",r=setInterval(function(){t.style.opacity=i,1<=(i+=.1)&&(clearInterval(r),t.removeAttribute("data-fadein-timeout"),"function"==typeof s&&s())},e),t.setAttribute("data-fadein-timeout",r)))}window.t_slds__isiOS=/iPhone|iPad|iPod/i.test(navigator.userAgent)||navigator.userAgent.indexOf("Macintosh")&&"ontouchend"in document;