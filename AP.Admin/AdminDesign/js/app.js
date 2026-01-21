// colors used in complete templete for jQuery
var info 	= "rgba(91, 202, 255, 1)";
var success = "rgba(76, 217, 100, 1)";
var primary = "rgba(52, 172, 220, 1)";
var danger 	= "rgba(255, 76, 64, 1)";
var warning = "rgba(249, 158, 30, 1)";
var inverse = "rgba(112, 114, 113, 1)";
var defalt 	= "rgba(245, 240, 240, 1)";

// windows height 
var windowheight = $(window).height();

// Dynamically adding the loader to all inner pages
$("body").append('<div id="loader-wrapper">    <div id="loader"></div></div> <div class="buynow fixed"> <a href="https://themeforest.net/item/csk-admin-attractive-admin-dashboard-responsive-admin-dashboard-single-line-linking-options/17652087?license=regular&open_purchase_for_item_id=16750820&purchasable=source" target="_new"> <img src="datas/images/buynow.png" class="img-responsive">				</a>			</div></div>');
$(window).on("load", function () {
	// Loader in pahes
	$("#loader-wrapper").fadeOut();

	// Full-width Script
	$('.full-width').attr('title', 'Extend').tooltip('fixTitle'); 
	$('.full-width').on('click', function () {
		$(this).closest('[class^="col-"]').toggleClass('full-width-box');
		window.dispatchEvent(new Event('resize'));
	});
	$('.minimize').on('click', function(){
		$(this).closest('.panel').find('.panel-body').toggleClass('hidden');
	});
	$('.panel-close').on('click', function(){
		$(this).siblings('[class^="col-"]').toggleClass('full-width-box');
		$(this).closest('.panel').parent('[class^="col-"]').remove();
	});

	// Metis Menu
	$('#menu').metisMenu();
	$('#menu2').metisMenu({
		toggle: false
	});
	$('#menu3').metisMenu({
		doubleTapToGo: true
	});
	$('#menu4').metisMenu();
	$("#menu-toggle").on('click', function(e) {
		e.preventDefault();
		window.dispatchEvent(new Event('resize'));
		$("#wrapper").toggleClass("toggled");
		$(".navbar-header").toggleClass("toggled");
	});
	$('.notification .dropdown-menu li').on('click', function(event){
		//The event won't be propagated to the document NODE and 
		// therefore events delegated to document won't be fired
		event.stopPropagation();
	});
	$('.notification .dropdown-menu li').on('click', function(event){
		//The event won't be propagated to the document NODE and 
		// therefore events delegated to document won't be fired
		event.stopPropagation();
	});
	$('.notification .dropdown-menu > ul > li > a').on('click', function(event){
		event.stopPropagation();
		$(this).tab('show')
	});
	// Dropdown Select
	$('.dropdown-select li').on('click', function(){
		$(this).closest('div.input-group').find('.dropdown-input').val($(this).text());
	});

	// Slim Scroll
	$(function(){
		$('#notification').slimScroll({
			width: '100%',
			height: '300px',
			size: '3px',
			color: inverse
		});
		$('#sidebarscroll').slimScroll({
			height: windowheight -100 + 'px',
			size: '3px',
			color: inverse
		});
		$('.tab-content.contacts').slimScroll({
			height: '270px',
			size: '3px',
			color: danger
		});
		$('.message-body, .notification-body').slimScroll({
			width: '100%',
			height: '270px',
			size: '3px',
			color: inverse
		});
		
		$('.list_of_items').slimScroll({
			width: '100%',
			height: '370px',
			size: '3px',
			color: info
		});
		$('.chat_messages').slimScroll({
			width: '100%',
			height: '250px',
			size: '3px',
			color: inverse,
		});
		$('.ptc').slimScroll({
			width: '100%',
			height: '250px',
			size: '3px',
			color: inverse,
		});
		$('.emails-from').slimScroll({
			width: '100%',
			height: '700px',
			size: '5px',
			color: inverse
		});
		$('.form-control.multiselect').slimScroll({
			width: '100%',
			height: '200px',
			size: '3px',
			color: inverse,
		});
	});

	// Checkall for checkboxes
	$(".checkAll").change(function () {
		$( '.checkallinput input[type="checkbox"]' ).prop('checked', this.checked)
	});


	// Tool Tip Integration
	$(function () {
		$('[data-toggle="tooltip"]').tooltip();
	});
	// Appending ring to new-update class
	$(".new-update").append('<div class="ring"></div>');
	// onclick on new-update destroy
	$(".new-update").on('click', function(){
		$(this).find('.ring').remove();
	});

	// Ripple-effect animation
	$(".ripple button, .ripple a").on('click', function(e){  //remove it after completing the active classes in sidebars
		var rippler = $(this);

		// create .ink element if it doesn't exist
		if(rippler.find(".ink").length == 0) {
			$("a .animate").remove();
			rippler.append("<span class='ink'></span>");
		}
		var ink = rippler.find(".ink");
		// prevent quick double clicks
		ink.removeClass("animate");
		// set .ink diametr
		if(!ink.height() && !ink.width())
		{
			var d = Math.max(rippler.outerWidth(), rippler.outerHeight());
			ink.css({height: d, width: d});
		}
		// get click coordinates
		var x = e.pageX - rippler.offset().left - ink.width()/2;
		var y = e.pageY - rippler.offset().top - ink.height()/2;
		// set .ink position and add class .animate
		ink.css({
		  top: y+'px',
		  left:x+'px'
		}).addClass("animate");
	});
})
// Appending hide menu in panel heading
$(".panel-with-options .panel-heading .panel-title").append(
	'<div class="dropdown">'
		+'<button class="btn dropdown-toggle pull-right circle-btn setting-icon-menu" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"> <i class="fa fa-cog setting-icon"></i></button>' 
		+'<ul class="dropdown-menu panel-settings" aria-labelledby="dropdownMenu1">' 
			+'<li><a class="" href="#Update" id="reloadBar">	<i class="glyphicon glyphicon-refresh"></i>Update</a> </li>' 
			+'<li>	<a class="minimize" href="#Minimize"> <i class="fa fa-history"></i> Minimize</a></li> ' 
			+'<li>	<a class="full-width" href="#Full-width">	<i class="fa fa-arrows-h"></i> Full Screen 	</a>	</li>' 
			+'<li>	<a class="panel-close" href="#remove">	<i class="fa fa-share-alt"></i> Remove	</a>	</li>' 
		+'</ul>' 
	+ '</div>');