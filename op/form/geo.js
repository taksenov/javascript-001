



/*
<script src="http://api-maps.yandex.ru/2.0-stable/?load=package.standard&lang=ru-RU" type="text/javascript"></script>





$('.first_iphone_city').html('first_iphone_city'+ymaps.geolocation.city);



*/









/*  window.onload = function () {
    
	  
$('#geo').html('Ваше месторасположение: <b>'+ymaps.geolocation.city+'</b>')
$('.geotext').html('<b>Бесплатная доставка</b> в город: <b>'+ymaps.geolocation.city+'</b> за 24 часа');
$('#geo_4u2').html('Подбор элитной недвижимости <br>  за 1 день в городе '+ymaps.geolocation.city+' <br> с выгодой до 2 679 000 рублей.')


	  
	  
	  //МОСКВА
if(ymaps.geolocation.city=='Москва'){ 
$('#bg_city').css('background','url(img/city/moscow.jpg)');
$('#bg_city').css('background-position','center top');
$('#bg_city').animate({"opacity":1},600);
$('#bg_text').html('Мы знаем, что Вы из <b> Столицы России. </b>Тогда вы тем более оцените качество нашего сайта и специально для вас у нас есть уникальное предложение!');
//
$("#bg_text").slideUp()
$('#bg_text').animate({"opacity":1},300);
$("#bg_text").slideDown();
$('#bg_button').delay(1800).animate({"opacity":1},300);
 }
	  
	  //Дзержинск
if(ymaps.geolocation.city=='Дзержинск'){ 
$('#bg_city').css('background','url(img/city/dzerjinsk.jpg)');
$('#bg_city').css('background-position','center top');
$('#bg_city').animate({"opacity":1},600);
$('#bg_text').html('Мы знаем, что Вы из <b> Дзержинска</b> и для Вас у нас есть специальное предложение!');
//
$("#bg_text").slideUp();
$('#bg_text').animate({"opacity":1},300);
$("#bg_text").slideDown();
$('#bg_button').delay(1800).animate({"opacity":1},300);
 }	  
	
	
		  //Нижний Новгород
if(ymaps.geolocation.city=='Нижний Новгород'){ 
$('#bg_city').css('background','url(img/city/nijnii_novgorod.jpg)');
$('#bg_city').animate({"opacity":1},600);
$('#bg_text').html('Мы знаем, что Вы из <b>Нижнего Новгорода - родины великого писателя Максима Горького</b>. И специально для вас у нас есть уникальное предложение!');
//
$("#bg_text").slideUp();
$('#bg_text').delay(300).animate({"opacity":1},100);
$("#bg_text").slideDown();
$('#bg_button').delay(1800).animate({"opacity":1},300);
 }	 
	
	
		 //Санкт-Петербург
if(ymaps.geolocation.city=='Санкт-Петербург'){ 
$('#bg_city').css('background','url(img/city/snp.jpg)');
$('#bg_city').animate({"opacity":1},600);
$('#bg_text').html('Мы знаем, что Вы из <b>Санкт-Петербурга - культурной столицы нашей страны</b>. И специально для вас у нас есть уникальное предложение!');
//
$("#bg_text").slideUp();
$('#bg_text').delay(300).animate({"opacity":1},100);
$("#bg_text").slideDown();
$('#bg_button').delay(1800).animate({"opacity":1},300);
 }	
	
	
	
	
	
	
}
  
  
  
 
  
  
  
  
  
  
  
/*  $(window).bind('load', function() {
        $('#system-load').fadeOut('slow').remove();
        $('body').animate({opacity: 1}, 'fast');
    });*/
  
  

/*function parseGetParams() { 
   var $_GET = {}; 
   var __GET = window.location.search.substring(1).split("&"); 
   for(var i=0; i<__GET.length; i++) { 
      var getVar = __GET[i].split("="); 
      $_GET[getVar[0]] = typeof(getVar[1])=="undefined" ? "" : getVar[1]; 
   } 
   return $_GET; 
} 
var GETArr = parseGetParams(); */

//alert(GETArr.var1);*/
  
  

