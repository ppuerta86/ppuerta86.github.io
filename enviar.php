<?php 

$varNombre = $_POST["nombre"];
$nombre = $_REQUEST['nombre'];
$email = $_REQUEST['correo'];
$asunto = $_REQUEST['asunto'];

	
	$correo = $email;
	
	$sfrom= $correo ; //cuenta que envia 
				
	$ssubject="Web Personal - ". $asunto; //asunto 
	// mensaje
		$shtml ="<div id='header'><img src='http://www.pedropuerta.com/img/logo.png'></div>";
	$shtml .= "Nombre: <strong>". $nombre ."</strong><br>";
    $shtml .= "Correo:<strong>" . $email . "</strong><br>";
	$shtml .= "Mensaje:<strong>" . $asunto . "</strong><br><br>";
	$shtml .= "Este Mensaje ha sido enviado automaticamente desde pedropuerta.com luego de haber completado el formulario de cotizacion o informacion<br><br>";
	$shtml .= "<strong>Si desconoce el origen de este email notifiquelo inmediatamente a: ppuerta@pedropuerta.com</strong><br>";
	//echo $shtml;
				
				
	$sheader="From:".$sfrom."\nReply-To:".$sfrom."\n"; 
	$sheader=$sheader."X-Mailer:PHP/".phpversion()."\n"; 
	$sheader=$sheader."Mime-Version: 1.0\n"; 
	$sheader=$sheader."Content-Type: text/html"; 
				
	$sdestinatario="ppuerta@pedropuerta.com"; //cuenta destino 
	mail($sdestinatario,$ssubject,$shtml,$sheader); 
    


echo 'Gracias por Escribirme Sr(a) <strong>'.$varNombre.',</strong> Lo contactaremos lo mas pronto posible';

 
  ?>
