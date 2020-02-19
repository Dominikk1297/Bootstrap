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
  $('body').css('background-color', 'rgb(47, 45, 45)');
  $('body').css('color', 'white');
}
