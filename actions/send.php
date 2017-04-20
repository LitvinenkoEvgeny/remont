<?php
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
    $subject = 'запрос на обратный звонок mosstroiuyut.ru';
    // $body =  $name . ' прислал сообщение: ' . $message . ' номер: ' .$phone;

    $body = <<<EOT
      <b>$name </b> прислал сообщение<br/>
      -------------------------
      <br/>$message<br/>
      -------------------------
      <br/>Номер для обратной связи: <b>$phone</b><br/>
EOT;

    $headers = "Content-Type: text/html; charset=UTF-8";
    if (mail ('mosstroiyut@mail.ru', $subject, $body, $headers)) {
       echo $message;
     } else {
       echo $phone;
     }
?>
