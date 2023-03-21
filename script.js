var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');
let quadrante=[];
let x,y;
pincel.fillStyle = 'lightgray';
pincel.fillRect(0, 0, 600, 400);

//desenhando o quadrante
pincel.fillStyle='white'
pincel.strokeStyle = 'black';
pincel.lineWidth=2;
pincel.fillRect(150,50,100,100);
pincel.strokeRect(150,50,100,100);
pincel.fillRect(250,50,100,100);
pincel.strokeRect(250,50,100,100);
pincel.fillRect(350,50,100,100);
pincel.strokeRect(350,50,100,100);
pincel.fillRect(150,150,100,100);
pincel.strokeRect(150,150,100,100);
pincel.fillRect(250,150,100,100);
pincel.strokeRect(250,150,100,100);
pincel.fillRect(350,150,100,100);
pincel.strokeRect(350,150,100,100);

function chamarX(evento)
{
  x = evento.pageX - tela.offsetLeft;
  y = evento.pageY - tela.offsetTop;
  pincel.beginPath();
  pincel.moveTo(0,0);
  pincel.lineTo(50,50);
  pincel.moveTo(0, 50);
  pincel.lineTo(50, 0);
  pincel.stroke(); 
}
function clicarQuadrante(evento)
{
    x = evento.pageX - tela.offsetLeft;
    y = evento.pageY - tela.offsetTop;
  alert(x+','+y);
  /*if((x > 150 && x <250)&& (y <150 ))
  {
    alert('dentro');
  }else{
    alert('fora');
  }*/
}

tela.onmousedown = chamarX;