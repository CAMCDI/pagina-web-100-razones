document.addEventListener("DOMContentLoaded", () => {
  const btnIniciar = document.getElementById("btn-iniciar");
  const pantallaInicial = document.getElementById("pantalla-inicial");
  const contenido = document.getElementById("contenido");

  const reasonEl = document.getElementById("reason");
  const countEl = document.getElementById("count");
  const imageEl = document.getElementById("image");
  const videoEl = document.getElementById("video");
  const videoSource = videoEl.querySelector("source");
  const audio = document.getElementById("background-audio");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const spotifyContainer = document.getElementById("spotify-container");
  const spotifyIframe = document.getElementById("spotify-iframe");

// Lista de razones
const reasons = [
  "Porque tu carita me encanta y no me canso de verla",
"Porque tu risa me hace sentir bien sin importar cómo esté mi día",
"Porque tu voz me tranquiliza y me gusta escucharla",
"Porque aunque a veces seas seria, tienes momentos en los que te dejas ver más tierna, amoooo esooo",
"Porque eres única y no hay nadie como tu",
"Porque me gusta cómo te arreglas, incluso cuando dices que no te esforzaste mucho te ves perfecta",
"Porque me gusta tu forma de hablar, tu dulce voz",
"Porque contigo aprendí lo que es querer a alguien de verdad",
"Porque me haces sentir cosas que nunca antes senti por nadie",
"Porque aunque a veces me desesperes, no dejo de quererte",
"Porque me gusta tu cabello y cómo se ve con cualquier peinado",
"Porque tus ojos tienen algo que me atrapa, ese brillo tan hermoso",
"Porque aunque no lo digas, se que te importo",
"Porque me haces querer ser mejor para ti",
"Porque cuando estamos juntos, el tiempo pasa mas rápido",
"Porque me importa más tu felicidad que la mía, la mia es verte feliz jiji",
"Porque me gusta verte feliz ",
"Porque cuando me hablas bonito, se me olvida todo lo malo",
"Porque aunque a veces no seas expresiva, se que sientes algo por mi",
"Porque tu forma de ser me atrapó desde el primer día",
"Porque me gusta cuidarte y protegerte",
"Porque eres fuerte, aunque a veces no lo creas",
"Porque me gustan tus caras que haces por todo son tan bonitas y raras jeje",
"Porque cuando sonríes, todo a tu alrededor se ve mejor",
"Porque contigo nada me da pena",
"Porque eres diferente a todas las personas que he conocido",
"Porque me haces sentir especial, aunque no te des cuenta",
"Porque me das ganas de seguir adelante sin importar los problemas :) ",
"Porque aunque no siempre me digas lo que sientes, sé que me quieres a tu manera rarita",
"Porque cuando estoy contigo, el resto del mundo deja de importar",
"Porque aunque no siempre me des lo que quiero, sigues siendo lo que más quiero",
"Porque tienes una forma especial de ver las cosas (estas loca)",
"Porque eres inteligente y eso me gusta de ti",
"Porque me encanta cuando te emocionas por algo, eres hermosaaaaa",
"Porque aunque no siempre lo note, me prestas atención, bueno a veces jeje",
"Porque a tu lado siento que todo es más sencillo",
"Porque me gusta ver tus mensajes y saber que estás ahí para mi",
"Porque no necesito que seas perfecta para amarte, te amo tan cual eres",
"Porque incluso en tus momentos de enojo me pareces linda, (somos enojones)",
"Porque me das razones para seguir luchando por ti cada dia ",
"Porque aunque me hagas enojar a veces, no puedo dejar de amarte. asi de simple",
"Porque tu forma de ver la vida es interesante (curiosa como tu)",
"Porque contigo quiero compartir el resto de mis dias ",
"Porque me gusta cuando me dices que te caigo bien",
"Porque cuando estoy contigo, no quiero estar en otro lugar solo en tu brazos",
"Porque simplemente no hay nadie más que me haga sentir esto que siento",
"Porque me gusta que te esfuerces, aunque no lo diga",
"Porque tus detalles, por pequeños que sean, significan mucho para mí",
"porque te ves bonita, incluso cuando estas enfermita ",
"Porque tu presencia me da paz",
"Porque eres igual de rarita que yo",
"Porque me gusta la forma en que me ves, me da pena jsjsjs",
"Porque tu olor me gusta y se queda en mi mente",
"Porque cuando estamos juntos, no quiero que el tiempo pase quiero quedarme contigo",
"Porque me gusta tu voz cuando estás media dormida",
"Porque me gusta cuando me dices cosas bonitas, aunque sea raro en ti",
"Porque contigo puedo ser yo mismo",
"Porque me gusta la forma en que me escuchas",
"Porque aunque a veces parezcas distante,pero sé que me piensas",
"Porque me gusta que me cuentes cosas de tu día",
"Porque me gusta tu forma de reír cuando algo te da mucha risa",
"Porque aunque a veces dudes de nosotros, yo sigo aquí para ti (siempre)",
"Porque te veo en cada lugar y en cada momento",
"Porque me gusta tu forma de vestirte",
"Porque tus buenas noches me dan paz",
"Porque me gustan tus manos todas lindas y bonitas",
"Porque me gusta cuando me demuestras cariño sin que yo te lo pida",
"Porque me gusta tu manera de hablar cuando estás seria -_-",
"Porque me gusta cuando me llamas por mi nombre, no siempre pero si",
"Porque me gusta cuando estás en modo linda y tierna",
"Porque cuando me dices que me quieres, me haces feliz",
"Porque no hay un solo día en el que no piense en ti",
"Porque me gusta tu cuerpo",
"Porque eres la única persona por la que doy todo",
"Porque me gusta la manera en que te preocupas por mi",
"Porque aunque sea difícil, quiero que funcione lo nuestro",
"Porque cuando te extraño, estas en mi mente y en mi corazon",
"Porque tus abrazos deben ser los mejores, y son los mejores",
"Porque me gusta tu personalidad, incluso con todo lo complicado",
"Porque me gusta ver tu lado más sincero",
"Porque tu manera de ver el amor es única",
"Porque me gusta que seas tú, sin importar qué pase",
"Porque cuando te veo, todo lo demás deja de importar",
"Porque aunque a veces me duela lo que haces, no dejo de amarte",
"Porque me haces sentir que todo puede valer la pena",
"Porque estoy orgulloso de la mujer que eres",
"Porque a tu lado me siento completo",
"Porque cuando me dices algo bonito, se me queda grabado",
"Porque contigo aprendí lo que es la paciencia",
"Porque no me importa esperar lo que sea por ti",
"Porque aunque haya días difíciles, quiero seguir contigo",
"Porque se que nos vamos a amar mucho",
"Porque cada día me das una nueva razón para quererte más",
"Porque no imagino mi vida sin ti",
"Porque contigo quiero un futuro, una vida, una historia",
"porque todo nuestro trayecto que tenemos es lo mejor de mi vida",
"porque me gustan tus besos, tus mordidas, tus golpes, tus caricias",
"porque tienes el control sobre mi",
"porque a pesar de todo, se que vamos a estar mucho tiempo juntos, lo se...",
"Porque simplemente te amo, sin importar nada más... sin importar nadie mas"
];



  const images = reasons.map((_, i) => `imagenes/${i + 1}.jpg`);



  const spotifyLinks = {
    21: "https://open.spotify.com/embed/track/0SRddBTphQwQcfqw4Br1uX?utm_source=generator" 
  };

  let count = 1;

  function updatePage() {
    countEl.textContent = count;
    reasonEl.textContent = reasons[count - 1];
    imageEl.src = images[count - 1];

    // Ocultar todo
    imageEl.style.display = "block";
    videoEl.style.display = "none";
    spotifyContainer.style.display = "none";
    videoEl.pause();
    spotifyIframe.src = "";
    videoSource.src = "";

    if (spotifyLinks[count]) {
      spotifyContainer.style.display = "block";
      spotifyIframe.src = spotifyLinks[count];
      imageEl.style.display = "none";
      audio.pause();
    } else if (videoSources[count]) {
      videoSource.src = videoSources[count];
      videoEl.style.display = "block";
      videoEl.load();
      imageEl.style.display = "none";
      audio.pause();
    } else {
      audio.play().catch(() => {});
    }

    prevBtn.disabled = count === 1;
    nextBtn.textContent = count === reasons.length ? "Fin 💖" : "Siguiente";
  }

  prevBtn.addEventListener("click", () => {
    if (count > 1) {
      count--;
      updatePage();
    }
  });

  nextBtn.addEventListener("click", () => {
    if (count < reasons.length) {
      count++;
      updatePage();
    } else {
      mostrarPantallaFinal();
    }
  });

  btnIniciar.addEventListener("click", () => {
    pantallaInicial.style.display = "none";
    contenido.style.display = "block";
    audio.play().catch(() => {});
    updatePage();
  });

  function mostrarPantallaFinal() {
    const finalDiv = document.createElement("div");
    finalDiv.style.position = "fixed";
    finalDiv.style.top = 0;
    finalDiv.style.left = 0;
    finalDiv.style.width = "100%";
    finalDiv.style.height = "100%";
    finalDiv.style.background = "linear-gradient(to bottom, #ff7eb3, #ff758c)";
    finalDiv.style.display = "flex";
    finalDiv.style.alignItems = "center";
    finalDiv.style.justifyContent = "center";
    finalDiv.style.color = "white";
    finalDiv.style.fontSize = "2rem";
    finalDiv.style.zIndex = 9999;
    finalDiv.innerHTML = "<p style='padding: 30px; text-align: center;'>Te amo con todo mi ser, mi pequeña 💖</p>";
    document.body.appendChild(finalDiv);
    contenido.style.display = "none";
    audio.pause();
  }

  videoEl.onended = () => {
    audio.play().catch(() => {});
  };
});
