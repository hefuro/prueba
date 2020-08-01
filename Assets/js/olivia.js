$(function(){
	$("a").click(function(event) {
		if (this.hash !== "") {
			event.preventDefault();

			var gato = this.hash;

			$('html, body').animate({
			scrollTop: $(gato).offset().top
			}, 800, function(){
			window.location.hash = gato;
		});
		} 
	});
});

// funcion poover //

$(function () {
  $('[data-toggle="popover"]').popover()
})


// Funcion ventana modal //
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

// funcion tooltips //

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})