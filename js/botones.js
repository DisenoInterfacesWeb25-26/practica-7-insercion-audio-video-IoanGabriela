let medio, play, reiniciar, retrasar, adelantar, silenciar, menosVolumen, masVolumen;

function accionPlay()
{
	if(!medio.paused && !medio.ended) 
	{
		medio.pause();
		play.value='\u25BA'; //\u25BA
    	document.body.style.backgroundColor = '#fff';
	}
	else
	{
		medio.play();
		play.value='||';
    	document.body.style.backgroundColor = 'grey';
	}
}

function accionReiniciar()
{
	medio.currentTime = 0; //Usar propiedad .currentTime
	medio.play(); //Reproducir el vídeo
	play.value ='||'; //Cambiar el valor del botón a ||
}

function accionRetrasar()
{
	medio.currentTime=Math.max(0, medio.currentTime - 5); //Usar propiedad .curentTime
	//Contemplar que no existen valores negativos
}

function accionAdelantar()
{
	medio.currentTime=Math.min(medio.duration, medio.currentTime + 5); //Contemplar que no existen valores mayores a medio.duration	
}

function accionSilenciar()
{
	//Utilizar medio.muted = true; o medio.muted = false;
	if(medio.muted) {
		medio.muted = false;
		silenciar.value = "silenciar";
	} else {
		medio.muted = true;
		silenciar.value = "escuchar";
	}
}

function accionMasVolumen()
{
	//Contemplar que el valor máximo de volumen es 1
	medio.volume=Math.min(1, medio.volume + 0.1);
}

function accionMenosVolumen()
{
	//Contemplar que el valor mínimo de volumen es 0
	medio.volume=Math.max(0, medio.volume - 0.1);
}

function iniciar() 
{
	medio=document.getElementById('medio');
	play=document.getElementById('play');
	reiniciar=document.getElementById('reiniciar');
	retrasar=document.getElementById('retrasar');
	adelantar=document.getElementById('adelantar');
	silenciar=document.getElementById('silenciar');
	menosVolumen=document.getElementById('menosVolumen');
	masVolumen=document.getElementById('masVolumen');

	play.addEventListener('click', accionPlay);
	reiniciar.addEventListener('click', accionReiniciar);
	retrasar.addEventListener('click', accionRetrasar);
	adelantar.addEventListener('click', accionAdelantar);
	silenciar.addEventListener('click', accionSilenciar);
	menosVolumen.addEventListener('click', accionMenosVolumen);
	masVolumen.addEventListener('click', accionMasVolumen);
}

window.addEventListener('load', iniciar, false);