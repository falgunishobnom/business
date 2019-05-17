/**/
/* on load event */
/**/
"use strict";
jQuery(document).ready( function (){
	if ( !is_mobile_device () ) {
		$('body').append('<div id="tuner" class="tuner"> <div class="colors"> <p>Color Skin</p> <div id="color-1" class="color-picker" data-color="#28A6EC" style="background-color:#28A6EC;"></div><div id="color-2" class="color-picker" data-color="#f9b91e" style="background-color:#f9b91e;"></div><div id="color-3" class="color-picker" data-color="#F56363" style="background-color:#F56363;"></div><div id="color-4" class="color-picker" data-color="#43C5B8" style="background-color:#43C5B8;"></div><div id="color-5" class="color-picker" data-color="#2EB851" style="background-color:#2EB851;"></div><div id="color-6" class="color-picker" data-color="#C744FD" style="background-color:#C744FD;"></div> </div><div class="layout-style"><p>Layout Style</p><div class="page-style wide active">Wide</div><div class="page-style boxed">Boxed</div></div><i id="tuner-switcher" class="flaticon-cogwheels10"></i> </div> <div id="tuner-style-1" class="tuner-style" style="display: none;"> /* Colors for: main color */   input[type="number"], p a, ins, ul.icon-style li .list-icon, h2 span, h3 span, .inner-nav ul li a:hover, .inner-nav ul li a.active, .mobile_nav ul li a:hover, .mobile_nav ul.mn-sub li a:hover, .site-top-panel .lang-wrap .icon-lang, .breadcrumbs .breadcrumbs-item a:hover, .cws-button, .cws-button.alt:hover, .cws-button.white:hover, .cws-icon.main-color, .cws-icon.border-icon, .cws-icon.border-icon.alt:hover, .service-item:hover .cws-icon.border-icon.alt, .service-item.opacity:hover h3, .cws-icon.type-3:hover:before, .cws-icon.type-3.alt:before, .service-item:hover .cws-icon.type-3:before, .cws-social:hover:before, .service-center-icon .cws-icon, .accordion.style-3 dt.active i.accordion-icon:before, .accordion.style-4 dt.active i.accordion-icon:before, .toggle dt.active i.accordion-icon:before, .accordion.style-4 dt i.accordion-icon:before, .toggle dt i.accordion-icon:before, .toggle dt.active, .call-out-box.with-icon i, .alert.alert-info .alert-icon, .alert.alert-info .close, .counter-block .counter-icon, .counter-block .counter, .pic .links .link-icon.alt, .carousel-container .carousel-nav .prev:hover, .carousel-container .carousel-nav .next:hover, .comment-container .button-reply, .widget-footer .recent-item h4, .widget-footer address h4, .blog-item .blog-item-data .blog-title a, .nav-blog .prev:hover, .nav-blog .next:hover, .blog-date .date .month, .widget-search form .search-submit:hover, .widget-subscribe form .submit:hover, .widget-title i, .widget-categories ul li:hover, .widget-archive ul li:hover, .widget-categories ul li:hover:before, .widget-categories ul li:hover a, .widget-archive ul li:hover:before, .widget-archive ul li:hover a, .widget-tes-item .author-info .name, .ui-datepicker-calendar thead th, .project-details .description .link, .project-details .description .social:hover, #list-or-grid .switch-button.active, .product .price-review .button-groups, .size-filter .size:hover, .size-filter .size.active, input[type="checkbox"]:before, .shipping .amount, .woocommerce-shipping-fields #ship-to-different-address label, abbr, .contact-address p span, .twitter-1 .twitt-icon { color: #<span>cws_theme_main#</span>; }      .twitter-1 .twitt-icon, ul.style-3 li:before, .cws-button, .cws-icon.only-border, .cws-icon.border-icon:hover, .cws-icon.border-icon.alt, .service-item:hover .cws-icon.border-icon, .cws-icon.type-3:after, .cws-icon.type-3.alt:hover, .cws-icon.type-3.alt:hover:after, .service-item:hover .cws-icon.type-3.alt, .service-item:hover .cws-icon.type-3.alt:after, .cws-social:hover, .accordion dt.active i.accordion-icon, .toggle dt.active i.accordion-icon, .accordion.style-2 dt i.accordion-icon, .accordion.style-2 dt.active, .accordion.style-4 dt i.accordion-icon, .toggle dt i.accordion-icon, .accordion.style-4 dt.active, .toggle dt.active, .toggle.style-2 dt.active, .call-out-box.with-icon i, .alert.alert-info, .alert.alert-info.alt, .counter-block, .pricing-tables, .tabs .tabs-btn:hover, .tabs .tabs-btn.active, .pic .links .link-icon.alt, .pagination li a:hover, .pagination li a:focus, .carousel-container .carousel-nav .prev:hover, .carousel-container .carousel-nav .next:hover, .author img, .widget-search form .search-submit, .widget-subscribe form .submit, .widget-tags .tag:hover, .widget-tes-item .avatar-author, .carousel-pag.main-color .owl-page.active, .pagiation-carousel.main-color .owl-page.active, .contact-form .cws-button, .contact-form .cws-button:hover, .avatar-author, .filter-button.active, .filter-button:hover, #list-or-grid .switch-button.active, .price_slider .ui-slider-handle:before, .size-filter .size:hover, .size-filter .size.active { border-color: #<span>cws_theme_main#</span>; }     ul.style-3 li:before, .inner-nav .mobile_menu_switcher, .main-nav:not(.transparent) .inner-nav.desktop-nav.switch-menu .menu-bar .ham, .main-nav:not(.transparent) .inner-nav.desktop-nav.switch-menu .menu-bar .ham:before, .main-nav:not(.transparent) .inner-nav.desktop-nav.switch-menu .menu-bar .ham:after, .cws-button:hover, .cws-button.alt, .cws-icon.border-icon:hover, .cws-icon.border-icon.alt, .service-item:hover .cws-icon.border-icon, .cws-icon.type-3:after, .cws-icon.type-3.alt:hover:after, .service-item:hover .cws-icon.type-3.alt:after, .service-bg-icon:before, .service-center-icon:before, .accordion dt.active i.accordion-icon:before, .toggle dt.active i.accordion-icon:before, .accordion dd, .toggle dd, .accordion.style-2 dt i.accordion-icon:before, .accordion.style-2 dt i.accordion-icon:after, .accordion.style-2 dt.active, .toggle.style-2 dt.active, .alert.alert-info.alt, .counter-block.alt, .pricing-tables .header-pt, .skill-bar .bar span, .tabs .tabs-btn:hover, .tabs .tabs-btn.active, .divider, .pic .hover-effect, .pagination li a:hover, .pagination li a:focus, .blog-date .date:before, .widget-search form .search-submit, .widget-subscribe form .submit, .widget-categories ul li:hover a span, .widget-archive ul li:hover a span, .widget-tags .tag:hover, .widget-social .social-icon, .carousel-pag.main-color .owl-page.active, .pagiation-carousel.main-color .owl-page.active, .ui-datepicker-header, .contact-form .cws-button:hover, .message-form .cws-button:hover, .filter-button.active, .filter-button:hover, .product .action, .price_slider .ui-slider-range, .color-filter a.main-color { background-color: #<span>cws_theme_main#</span>; }     .border-t, .map-full-width.border-t { border-top-color: #<span>cws_theme_main#</span>; }     .accordion dd:before, .toggle dd:before, .border-b{ border-bottom-color: #<span>cws_theme_main#</span>; }    .call-out-box { border-left-color: #<span>cws_theme_main#</span>; } </div> <div id="tuner-style-2" class="tuner-style" style="display: none;"> /* Colors for: middle content (the sand color) */  p a.color-2, ul.style-4 li:before, .cws-button.color-2, .cws-button.color-2.alt:hover, .cws-icon.border-icon.color-2, .cws-icon.border-icon.color-2.alt:hover, .service-item:hover .cws-icon.border-icon.color-2.alt, .cws-icon.type-3.color-2:hover:before, .cws-icon.type-3.color-2.alt:before, .service-item:hover .cws-icon.type-3.color-2:before, .accordion.style-3.color-2 dt.active i.accordion-icon:before, .accordion.style-4.color-2 dt.active i.accordion-icon:before, .toggle.color-2 dt.active i.accordion-icon:before, .toggle.color-2 dt.active, .call-out-box.style-color-2 i, .alert.alert-warning .alert-icon, .alert.alert-warning .close, .counter-block.st-color-2 .counter-icon, .counter-block.st-color-2 .counter, blockquote.without-img footer, .widget-title i.color-2, .widget-post .item-recent .title a:hover, .widget-post .item-top-sellers .title a:hover, .widget-top-sellers .item-recent .title a:hover, .widget-top-sellers .item-top-sellers .title a:hover, .star-rating > span:before, .stars .stars-active, .shop table tbody .cart_item:hover .product-name{ color: #<span>cws_theme_second#</span>; }       .tx-color-2 { color: #<span>cws_theme_second#</span> !important; }    ul.style-2 li:before, .inner-nav ul li.menu-shop-card i span, .cws-button.color-2:hover, .cws-button.color-2.alt, .cws-icon.border-icon.color-2:hover, .cws-icon.border-icon.color-2.alt, .service-item:hover .cws-icon.border-icon.color-2, .cws-icon.type-3.color-2, .cws-icon.type-3.color-2:after, .cws-icon.type-3.color-2.alt:hover:after, .service-item:hover .cws-icon.type-3.color-2.alt:after, .service-bg-icon.color-2:before, .service-center-icon.color-2:before, .accordion.color-2 dt.active i.accordion-icon:before, .toggle.color-2 dt.active i.accordion-icon:before, .accordion.style-2.color-2 dt.active, .alert.alert-warning.alt, .counter-block.st-color-2.alt, .pricing-tables.st-color-2 .header-pt, .skill-bar.st-color-2 .bar span, .divider.color-2, .carousel-pag .owl-pagination .owl-page.active, .pagiation-carousel .owl-pagination .owl-page.active, .product .action.sale, .color-filter a.color-2{ background-color: #<span>cws_theme_second#</span>; }      .cws-button.color-2, ul.style-2 li:before, ul.color-2 li:before, .cws-icon.border-icon.color-2:hover, .cws-icon.border-icon.color-2.alt, .service-item:hover .cws-icon.border-icon.color-2, .cws-icon.type-3.color-2:after, .cws-icon.type-3.color-2.alt:hover, .cws-icon.type-3.color-2.alt:hover:after, .service-item:hover .cws-icon.type-3.color-2.alt, .service-item:hover .cws-icon.type-3.color-2.alt:after, .accordion.color-2 dt.active i.accordion-icon, .toggle.color-2 dt.active i.accordion-icon, .accordion.style-2.color-2 dt.active, .accordion.style-4.color-2 dt.active, .toggle.color-2 dt.active, .call-out-box.style-color-2 i, .alert.alert-warning, .alert.alert-warning.alt, .counter-block.st-color-2, .pricing-tables.st-color-2, .author img.color-2, .carousel-pag .owl-pagination .owl-page, .pagiation-carousel .owl-pagination .owl-page, .avatar-author.color-2 { border-color: #<span>cws_theme_second#</span>; }    .call-out-box.style-color-2 { border-left-color: #<span>cws_theme_second#</span>; } </div> <div id="tuner-style-4" class="tuner-style" style="display: none;">/* Colors for: three */ p a.color-4, .cws-button.color-4, .cws-button.color-4.alt:hover, .cws-button.white.color-4:hover, .cws-icon.border-icon.color-4, .cws-icon.border-icon.color-4.alt:hover, .service-item:hover .cws-icon.border-icon.color-4.alt, .cws-icon.type-3.color-4:hover:before, .cws-icon.type-3.color-4.alt:before, .service-item:hover .cws-icon.type-3.color-4:before, .counter-block.st-color-4 .counter-icon, .counter-block.st-color-4 .counter, .tags-blog a:hover, .widget-title i.color-4, .project-details .description .tag:hover, .single-product .post-number a:hover,   .single-product .category-line a:hover,   .single-product .tags-line a:hover { color: #<span>cws_theme_three#</span>; }      .tx-color-4 { color: #<span>cws_theme_three#</span> !important; }    .cws-button.color-4:hover, .cws-button.color-4.alt, .cws-icon.border-icon.color-4:hover, .cws-icon.border-icon.color-4.alt, .service-item:hover .cws-icon.border-icon.color-4, .cws-icon.type-3.color-4:after, .cws-icon.type-3.color-4.alt:hover:after, .service-item:hover .cws-icon.type-3.color-4.alt:after, .service-bg-icon.color-4:before,   .service-center-icon.color-4:before,   .alert.alert-useful.alt,   .counter-block.st-color-4.alt,   .pricing-tables.st-color-4 .header-pt,   .skill-bar.st-color-4 .bar span,   .divider.color-4,   .color-filter a.color-4,   .banner-section { background-color: #<span>cws_theme_three#</span>; }    ul li:before, .cws-button.color-4, .cws-icon.border-icon.color-4:hover, .cws-icon.border-icon.color-4.alt, .service-item:hover .cws-icon.border-icon.color-4, .cws-icon.type-3.color-4, .cws-icon.type-3.color-4:after, .cws-icon.type-3.color-4.alt:hover, .cws-icon.type-3.color-4.alt:hover:after, .service-item:hover .cws-icon.type-3.color-4.alt, .service-item:hover .cws-icon.type-3.color-4.alt:after, .alert.alert-useful.alt, .counter-block.st-color-4, .pricing-tables.st-color-4, .author img.color-4, .avatar-author.color-4 { border-color: #<span>cws_theme_three#</span>; }  </div> <div id="tuner-style-3" class="tuner-style" style="display: none;"> /* Colors for: three */  p a.color-3, .cws-button.color-3, .cws-button.color-3.alt:hover, .cws-icon.border-icon.color-3, .cws-icon.border-icon.color-3.alt:hover, .service-item:hover .cws-icon.border-icon.color-3.alt, .cws-icon.type-3.color-3:hover:before, .cws-icon.type-3.color-3.alt:before, .service-item:hover .cws-icon.type-3.color-3:before, .alert.alert-danger .close, .counter-block.st-color-3 .counter-icon, .counter-block.st-color-3 .counter, .widget-title i.color-3, .widget-post .item-recent .price, .widget-post .item-top-sellers .price, .widget-top-sellers .item-recent .price, .widget-top-sellers .item-top-sellers .price, a.ui-datepicker-prev.ui-corner-all:hover, a.ui-datepicker-next.ui-corner-all:hover, .ui-datepicker-calendar thead th:last-child, .shop-data .result-count span, .product.hot .price, .product.sale .price, .single-product .price, .review-status .out-stock, .order-total .amount, .cart-subtotal .amount, .woocommerce table tbody .cart_item:hover .product-price, .woocommerce table tbody .cart_item:hover .product-subtotal { color: #<span>cws_theme_three#</span>; }       .tx-color-3 { color: #<span>cws_theme_three#</span> !important; }    .cws-button.color-3:hover, .cws-button.color-3.alt, .cws-icon.border-icon.color-3:hover, .cws-icon.border-icon.color-3.alt, .service-item:hover .cws-icon.border-icon.color-3, .cws-icon.type-3.color-3:after, .cws-icon.type-3.color-3.alt:hover:after, .service-item:hover .cws-icon.type-3.color-3.alt:after, .service-bg-icon.color-3:before, .service-center-icon.color-3:before, .alert.alert-danger.alt, .counter-block.st-color-3.alt, .pricing-tables.st-color-3 .header-pt, .skill-bar.st-color-3 .bar span, .divider.color-3, td.ui-datepicker-today:before, .product .action.hot, .color-filter a.color-3 { background-color: #<span>cws_theme_three#</span>; }          .avatar-author.color-3, .cws-button.color-3, .cws-icon.border-icon.color-3:hover, .cws-icon.border-icon.color-3.alt, .service-item:hover .cws-icon.border-icon.color-3, .cws-icon.type-3.color-3, .cws-icon.type-3.color-3:after, .cws-icon.type-3.color-3.alt:hover, .cws-icon.type-3.color-3.alt:hover:after, .service-item:hover .cws-icon.type-3.color-3.alt, .service-item:hover .cws-icon.type-3.color-3.alt:after, .alert.alert-danger, .alert.alert-danger.alt, .counter-block.st-color-3, .pricing-tables.st-color-3, .author img.color-3, .widget-contact-form input.error, .widget-contact-form textarea.error { border-color: #<span>cws_theme_three#</span>; }</div>  <style id="cws-cp-1"></style> <style id="cws-cp-2"></style> <style id="cws-cp-3"></style><style id="cws-cp-4"></style><style id="cws-cp-5"></style><style id="cws-cp-6"></style>')
		$('body').append('<div id="tuner-style-5" class="tuner-style" style="display: none;"> /* Colors for: main five */ p a.color-5, .cws-icon.border-icon.color-5, .cws-icon.border-icon.color-5.alt:hover, .service-item:hover .cws-icon.border-icon.color-5.alt, .cws-icon.type-3.color-5:hover:before, .cws-icon.type-3.color-5.alt:before, .service-item:hover .cws-icon.type-3.color-5:before, .alert.alert-success .close, .widget-title i.color-5, .product .price-review .button-groups .added-to-cart, .review-status .in-stock { color: #<span>cws_theme_five#</span>; }     .cws-icon.border-icon.color-5:hover, .cws-icon.border-icon.color-5.alt, .service-item:hover .cws-icon.border-icon.color-5, .cws-icon.type-3.color-5:after, .cws-icon.type-3.color-5.alt:hover:after, .service-item:hover .cws-icon.type-3.color-5.alt:after, .service-bg-icon.color-5:before, .service-center-icon.color-5:before, .alert.alert-success.alt, .skill-bar.st-color-5 .bar span, .color-filter a.color-5  { background-color: #<span>cws_theme_five#</span>; }   .cws-icon.border-icon.color-5:hover, .cws-icon.border-icon.color-5.alt, .service-item:hover .cws-icon.border-icon.color-5, .cws-icon.type-3.color-5, .cws-icon.type-3.color-5:after, .cws-icon.type-3.color-5.alt:hover, .cws-icon.type-3.color-5.alt:hover:after, .service-item:hover .cws-icon.type-3.color-5.alt, .service-item:hover .cws-icon.type-3.color-5.alt:after, .alert.alert-success, .alert.alert-success.alt, .author img.color-5, .avatar-author.color-5  { border-color: #<span>cws_theme_five#</span>; }  </div><div id="tuner-style-6" class="tuner-style" style="display: none;"> /* Colors for: main five */ p a.color-6, .cws-icon.border-icon.color-6, .cws-icon.border-icon.color-6.alt:hover, .service-item:hover .cws-icon.border-icon.color-6.alt, .cws-icon.type-3.color-6:hover:before, .cws-icon.type-3.color-6.alt:before, .service-item:hover .cws-icon.type-3.color-6:before, .widget-title i.color-6 { color: #<span>cws_theme_color_six#</span>; }   .cws-icon.border-icon.color-6:hover, .cws-icon.border-icon.color-6.alt, .service-item:hover .cws-icon.border-icon.color-6, .cws-icon.type-3.color-6:after, .cws-icon.type-3.color-6.alt:hover:after, .service-item:hover .cws-icon.type-3.color-6.alt:after, .service-bg-icon.color-6:before, .service-center-icon.color-6:before, .skill-bar.st-color-6 .bar span, .color-filter a.color-6 { background-color: #<span>cws_theme_color_six#</span>; }   .cws-icon.border-icon.color-6:hover, .cws-icon.border-icon.color-6.alt, .service-item:hover .cws-icon.border-icon.color-6, .cws-icon.type-3.color-6, .cws-icon.type-3.color-6:after, .cws-icon.type-3.color-6.alt:hover, .cws-icon.type-3.color-6.alt:hover:after, .service-item:hover .cws-icon.type-3.color-6.alt, .service-item:hover .cws-icon.type-3.color-6.alt:after, .author img.color-6, .avatar-author.color-6{ border-color: #<span>cws_theme_color_six#</span>; }  </div> ')

		jQuery('#tuner-switcher').on('click', function()
		{
			jQuery('#tuner').toggleClass('tuner-visible');
		});

		jQuery('.color-picker').each( function(){
			var el = jQuery(this);
			var def_color = el.data( 'color' );
			var id = el.attr('id');
			var matches = /color-(\d+)/.exec( id );
			if ( matches != null ){
				var index = matches[1];
				var tuner_id = 'tuner-style-' + index;
				var style_id = 'cws-cp-' + index;
				var tuner_el = jQuery( '#' + tuner_id );
				var style_el = jQuery( '#' + style_id );
				if ( tuner_el.length && style_el.length ){
					
					el.ColorPicker({
						color: def_color,
						onShow: function(colpkr)
						{
							jQuery(colpkr).fadeIn(300);
							return false;
						},
						onHide: function(colpkr)
						{
							jQuery(colpkr).fadeOut(300);
							return false;
						},
						onChange: function (hsb, hex, rgb) {
							el.css('background-color', '#' + hex);
							tuner_el.find('span').text(hex);
							tuner_el.find('span.darknest').text(cws_Hex2RGBwithdark(hex,1.14));
							style_el.text(tuner_el.text());
						}
					});
				}

			}
		});
		$("html").addClass("t-pattern-1");
		jQuery('#tuner').on('click', '.patterns li', function()
		{
			jQuery(".tuner .patterns li").removeClass('active');
			jQuery(this).addClass("active");
			var body_el, body_cls, matches, old_pattern, new_pattern_index, new_pattern;
			body_el = jQuery('html');
			body_cls = body_el.attr('class');
			matches = /t-pattern-(\d+)/.exec( body_cls );
			if ( matches != null ){
				old_pattern = matches[0];
				body_el.removeClass(old_pattern);
			}
			new_pattern_index = jQuery(this).data('pattern');
			new_pattern = "t-pattern-" + new_pattern_index;
			body_el.addClass(new_pattern);
		});
		jQuery('#tuner').on('click', '.page-style', function() {
			$('.tuner .page-style').removeClass('active');
			$(this).addClass("active");
			if ( $(this).hasClass("boxed") ) {
				$("body").addClass("boxed");
			} else {
				$("body").removeClass("boxed");
			}
			width_sticky ();
			$(window).resize(function(){
				width_sticky();
			})
		})
	}
});
function width_sticky () {
	if ( $("body").hasClass("boxed") ) {
		var width_body = $("body").innerWidth();
		$("body.boxed .sticky-menu").css({"width":width_body+"px"});
	} else {
		$("body .sticky-menu").css({"width":"100%","left":"0"});
	}
}
function cws_Hex2RGBwithdark(hex,coef_color) {

  var coef_color = coef_color == undefined ? 1 : coef_color;
  var hex = hex.replace("#", "");

  var color = '';

  if (hex.length == 3) {
   color = Math.round(hexdec(hex.substr(0,1))/coef_color)+',';
   color = color + Math.round(hexdec(hex.substr(1,1))/coef_color)+',';
   color = color + Math.round(hexdec(hex.substr(2,1))/coef_color);
  }else if(hex.length == 6){
   color = Math.round(hexdec(hex.substr(0,2))/coef_color)+',';
   color = color + Math.round(hexdec(hex.substr(2,2))/coef_color)+',';
   color = color + Math.round(hexdec(hex.substr(4,2))/coef_color);
  }
  return color;
 }
 function hexdec(hex_string) {
  hex_string = (hex_string + '')
  .replace(/[^a-f0-9]/gi, '');
  return parseInt(hex_string, 16);
 }