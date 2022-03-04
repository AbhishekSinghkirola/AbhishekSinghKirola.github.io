<?php

if(isset($_POST['submit'])) {
    include("admin/db-config.php");
    $YourName = $_POST['YourName'];
    $mobile = $_POST['mobile'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $to = "kirolaabhishek1234@gmail.com";
    $subject1 = "Subjects Here";
    $txt = "Name:".$YourName."\r\n"."Mobile:".$mobile."\r\n"."Email:".$email."\r\n"."Subject:".$subject."\r\n"."Message:".$message;

    $headers = "From:".$email;
    $header .= "MIME-Version: 1.0\r\n";
    $header .= "Conteent-type: text/html\r\n";

    if(mail($to.$subject1,$txt,$headers)) {

        header('<script> alert("Form Submitted Successfully..");</script>');
    }
    else {
        echo "mail not send";
    }
}
?>