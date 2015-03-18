<?php
$mailTo = 'egor.lapushkin@yandex.ru';

$mailFrom = htmlspecialchars( strip_tags( $_POST['emailFrom'] ) );//email
$utm= htmlspecialchars( strip_tags( $_POST['utm'] ) );//email
$nameFrom = htmlspecialchars( strip_tags( $_POST['nameFrom'] ) );//name
$subj = htmlspecialchars( strip_tags( $_POST['subject'] ) );//mob
$body = htmlspecialchars( strip_tags( $_POST['message'] ) );

$sender = base64_encode('+ Оборудование для телеинспекции');
$sender = "=?utf-8?B?{$sender}?=";

$headers = "From: {$sender} <egor.lapushkin@yandex.ru>\r\n".
'Content-Type: text/html; charset=utf-8
Content-Transfer-Encoding: base64
X-Mailer: OrderForm (PHP)';

$subject = base64_encode('LP "Оборудование для телеинспекции" -' .$body);
$subject = "=?utf-8?B?{$subject}?=";
$today = date("Y-m-d H:i:s"); 
//if( !empty( $body ) )
	//$body = ' и сообщение:' . "\r\n" . $body;

if( !empty( $nameFrom ) )
	$nameFrom = ' (' . $nameFrom . ')';

$body = base64_encode('Дата: ' . $today . '<br>' .'Блок: '.$body.  '<br><br>'.'Имя: ' . ' ' . $nameFrom . '<br>'.' Тел.: ' . $subj.'<br>'.' Вопрос клиента: ' .$utm. $mailFrom );

if( mail($mailTo, $subject, $body, $headers) )
{
	echo '1';
}
else
{
	echo '0';
}




// var_dump( $_POST, $mailFrom, $nameFrom, $subj, $body );


?>

