var x;
x=$(document);
x.ready(inicializarEventos);

function inicializarEventos()
{
  var x;
  x=$(".cambio");
  x.click(presionBoton1);
}

function presionBoton1()
{
  $('.mod').css('background-color', 'grey');
  $('.mod').css('color', 'black');
}
