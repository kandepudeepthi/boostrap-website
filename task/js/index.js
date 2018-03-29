$( document ).ready(function() {
		$('.your-class').slick({
									dots: false,
									infinite: true,
									speed: 300,
									slidesToShow: 1,
									autoplay: true,
									autoplaySpeed: 4000
								});
									$('.hero-slider').slick({
										infinite: true,
										dots: false,
										slidesToScroll: 1,
										autoplay: true,
										autoplaySpeed: 2000,
										arrows: false
									});
								$("#today_date").datetimepicker({
									format: "mm/dd/yyyy",
									minView: 2,
									autoclose: true,
									todayBtn: true,
									fontAwesome: true,
									endDate: '+0d',
									maxDate:new Date()
								});


$("#js-nonVeg").click(function(e){
      e.preventDefault();
     //alert("jnfdjafndjsfnds");
      $('.js-pizza').hide();
   $('.js-nonvegClick').show();
    $('.js-burClick').hide();
       $('.js-vegClick').hide();
    });
$("#js-pizza").click(function(e){
      e.preventDefault();
     //alert("jnfdjafndjsfnds");
      $('.js-nonvegClick').hide();
    $('.js-pizza').show();
     $('.js-burClick').hide();
    $('.js-vegClick').hide();
    });
$("#js-vegBir").click(function(e){
      e.preventDefault();
     //alert("jnfdjafndjsfnds");
      $('.js-nonvegClick').hide();
    $('.js-pizza').hide();
     $('.js-burClick').hide();
    $('.js-vegClick').show();
 });
$("#js-Burger").click(function(e){
      e.preventDefault();
     //alert("jnfdjafndjsfnds");
    $('.js-nonvegClick').hide();
    $('.js-pizza').hide();
     $('.js-vegClick').hide();
    $('.js-burClick').show();
    });

});
