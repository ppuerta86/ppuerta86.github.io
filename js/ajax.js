$(document).ready(inicio);

          // Waypoints
       $('.post_article').waypoint(  
        function(direction) {
        if (direction ==='down') {            
            var wayID = $(this).attr('id');            
        } else {
            var previous = $(this).prev();
            var wayID = $(previous).attr('id');                    
        }
            $('.hover').removeClass('hover');
            $('header ul li a[href=#'+wayID+']').addClass('hover');
        }, { offset: '40%' });
        





function inicio(){
	$("#enviar").click(envio);
}
function envio(){
    
$("#comprobar-nombre").text("");
$("#comprobar-email").text("");
$("#comprobar-mensaje").text("");
    
   var nombre = $("#nombre").val();
    var email = $("#email").val();
        var mensaje = $("#mensaje").val();
    if (nombre === "") {
                   $("#comprobar-nombre").text("Completar el Campo Nombre");
                    return false;
                }
      if (email === "") {
                   $("#comprobar-email").text("Completar el Campo Email");
                    return false;
                }
        if (email.indexOf('@', 0) == -1 || email.indexOf('.', 0) == -1) {
        $("#comprobar-email").text("El Campo Email no es Correcto");
            return false;
        }
    

      if (mensaje === "") {
                   $("#comprobar-mensaje").text("Completar el Campo Mensaje");
                    return false;
                }
    
    
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