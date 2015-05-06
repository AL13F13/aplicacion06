// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	
	$('#btnvibrar').on('tap', function(){
	navigator.vibrate (1000);
	
	$ ('#btnbeep').on ('tap', function(){
		navigator.notification.beep(1)	
		
		$('#izquierda').on ('swipeleft', function (){
			alert ("barrio a la izquierda");
			
			$ ('#derecha').on ('swiperight', function (){
				alert ("barrio a la derecha");
				
				document.addEventListener("pause",function () {
					
					$('#listado').append("<p>se pauso</p>");
					
					document.addEventListener("resume",function () {
						
						$('#listado').append("<p>se reinicio</p>");
						
						  $(window).on ('orientationchange',function (e){
							  
							  $('#listado').append("<p>orientacion: "+ e.orientation +"</p>");
			
			
			
});			
});//Reinicio			
});//Pausa
});//derecha
});// izquierda		
});//tap btnbeep
});//tap a btnvibrar
}); 
});

