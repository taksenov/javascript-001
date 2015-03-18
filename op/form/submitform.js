jQuery(document).ready(function(){

	jQuery(".orderSubmit").click(function(){
		
	
	
		var defaultName, defaultEmail, defaultPhone, defaultMsg;
		
		defaultName = 'Иван';
		defaultEmail = 'Текст отзыва';
		defaultPhone = 'Введите ваш номер телефона';
		defaultMsg = 'Дополнительная информация...';
		
		// metrika
		
		// yaCounter20837122.reachGoal('order');
		
		// setup form
		
		var form = jQuery(this).closest(".orderForm");
		
		var position = form.attr('id');
		
		form.find('.orderError').remove();
		
		var hasError = false;
		
		// name
		
		var name = form.find(".clientName").val();
		
		// console.log( name );
		
		if( typeof name != 'undefined' )
		{
			if( name == '' || name == defaultName || name == 'Введите ваше имя')
			{
				form.find(".clientName").css('color','red');
				form.find(".clientName").css('border-color','red');
				hasError = true;
			}
		}
		else
		{
			name = '';
		}
	
		// email
		
		var email = form.find(".clientEmail").val();
		
		// console.log( email );
		
		if( typeof email != 'undefined' )
		{
			if( email == '' || email == defaultEmail || email == 'Введите текст отзыва')
			{
				
				form.find(".clientEmail").css('border-color','red');
				form.find(".clientEmail").css('color','red');
				hasError = true;
			}
		}
		else
		{
			email = '';
		}
		
		// phone
		
		var phone = form.find(".clientPhone").val();
		
		// console.log( phone );
		
		if( typeof phone != 'undefined' )
		{
			if( phone == '' || phone == defaultPhone || phone == 'Введите ваш телефон')
			{
				
				
			form.find(".clientPhone").before('<div class="help">Введите номер телефона</div>');
$('.help').each( function() {$(this).delay(2000).animate({opacity:0},500);});
				
				form.find(".clientPhone").css('border-color','red');
				hasError = true;	
				
//	$(this).animate({"opacity":0},0);
/*ays.animate({
color:'#656465'
}, 500);*/
				
			
				
/*var hue = 'rgb(255,0,0)';
var hue1 = 'rgb(151,29,129)';


setTimeout(function spectrum() {
ays.animate({
color: hue
}, 500).animate({color: hue1},500);
spectrum();
},250)

*/



				
				
			}
		}
		else
		{
			phone = '';
		}
		
		// msg
		
		var message = form.find(".clientMessage").val();
		
		// console.log( message );
		
		if( typeof message == 'undefined' || message == defaultMsg )
		{
			message = '';
		}
		
		// error handle
		
		if( hasError == false )
		{
			jQuery(this).hide();
			
			jQuery(this).after('<div class="orderLoading" style="text-align: center;"><img src="form/loading.gif" alt="Отправка" /></div>');

			// console.log( email, name, phone );
	
			var orderRequest = jQuery.post(
				'http://superior-lab.ru/op/assets/templates/op/form/sendemail.php',
				{
					'emailFrom': email,
   					'nameFrom': name,
					'subject': phone,
					'message': attrib
					
				},
   				function( data )
				{				
							
					
					location.href = 'http://superior-lab.ru/op/assets/templates/op/final.html';

					console.log( data );

					form.fadeOut( 600, function(){
						form.empty();

						// CUSTOM
						form.parent().find(".modal-title").hide();

						form.fadeIn( 600, function(){
							form.html('<div class="orderSuccess" style="color:#333;"><h1>Спасибо!</h1><div>Мы свяжемся с вами<br />в течении дня <br /><br /> </div></div>');											
						});
					});
   				}
			)
			.fail(function(){
				form.fadeOut( 600, function(){
					form.empty();

					// CUSTOM
					form.parent().find(".modal-title").hide();

					form.fadeIn( 600, function(){
						form.html('<div class="orderSuccess" style="color:#333;"><h1>Упс!</h1><div>Не удалось отправить ваш заказ. Пожалуйста, свяжитесь с нами по телефону в начале этой страницы.</div></div>');											
					});
				});
			});
		}
		
		return false;
	});						   
});