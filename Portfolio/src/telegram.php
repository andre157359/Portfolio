<?php

/* https://api.telegram.org/bot810761726:AAGjtUB-VstG6WZfbl5EADuElOrhkkAYcyU/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['user_name'];
$phone = $_POST['user_tel'];
$email = $_POST['user_email'];
$token = "810761726:AAGjtUB-VstG6WZfbl5EADuElOrhkkAYcyU";
$chat_id = "-369081598";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Email' => $email
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thank-you.html');
} else {
  echo "Error";
}
?>