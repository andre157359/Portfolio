<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$email = $_POST['user_email'];
$tel = $_POST['user_tel'];
$message = $_POST['user_message'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'smtp_ilon_mask@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'Ha1VnqBt'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('smtp_ilon_mask@mail.ru'); // от кого будет уходить письмо?
$mail->addAddress('gaa2009@mail.ru');     // Кому будет уходить письмо 
$mail->addAddress('andre157359@yandex.ru');  
$mail->addAddress('rybin98@yandex.ru');
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка от работодателя';
$mail->Body    = 'Имя работодателя который ставил заявку: ' .$name . '<br> Почта работодателя: ' .$email. '<br> Телефон: ' .$tel . '<br> Сообщение: ' .$message;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: thank-you.html');
}



?>
