$(document).ready(inicio);

function inicio(){
	$("#enviar").click(envio);
}
function envio(){
	
	var datos = $("#form1").serialize();

	$.ajax({
		async:true,
		type:"POST",
		dataType:"html",
		contentType:"application/x-www-form-urlencoded",
		url:"enviar.php",
		data:datos,
		beforeSend:enviando,
		success:recibirDatos,
		timeout:5000,
		error:errorEnvio
	});

	return false;
}
function enviando(){
	$("#comprobar").text("Cargando Informacion....");
}
function recibirDatos(datos){
	$("#comprobar").html(datos);
}
function errorEnvio(datos){
	$("#comprobar").text("error cargando Informacion....");
}