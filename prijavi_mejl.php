<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        
     
        $to = $email;
        $subject = "Prijava za obaveštenja - Amber Alert Srbija";
        $message = "Hvala što ste se prijavili za obaveštenja o nestalim osobama. Bićete obavešteni kada dođe nova prijava nestale osobe.";
        $headers = "From: no-reply@amberalert.rs";

        if (mail($to, $subject, $message, $headers)) {
            echo "Uspešno ste se prijavili za obaveštenja! Proverite svoj email za potvrdu.";
        } else {
            echo "Došlo je do greške pri slanju emaila.";
        }
    } else {
        echo "Nevalidan email. Molimo unesite ispravan email.";
    }
}
?>
