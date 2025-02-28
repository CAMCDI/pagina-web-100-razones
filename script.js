const reasons = [
"Porque tu carita me encanta y no me canso de verla",
"Porque tu risa me hace sentir bien sin importar cómo esté mi día",
"Porque tu voz me tranquiliza y me gusta escucharla",
"Porque aunque a veces seas seria, tienes momentos en los que te dejas ver más tierna",
"Porque eres única y no hay nadie como tú",
"Porque me gusta cómo te arreglas, incluso cuando dices que no te esforzaste mucho",
"Porque me gusta tu forma de hablar",
"Porque contigo aprendí lo que es querer a alguien de verdad",
"Porque me haces sentir cosas que nunca antes sentí",
"Porque aunque a veces me desesperes, no dejo de quererte",
"Porque me gusta tu cabello y cómo se ve con cualquier peinado",
"Porque tus ojos tienen algo que me atrapa",
"Porque aunque no lo digas, sé que te importo",
"Porque me haces querer ser mejor",
"Porque cuando estamos juntos, el tiempo pasa mas rápido",
"Porque me importa más tu felicidad que la mía, la mia es verte feliz",
"Porque me gusta verte feliz",
"Porque cuando me hablas bonito, se me olvida todo lo malo",
"Porque aunque a veces no seas expresiva, sé que sientes algo por mí",
"Porque tu forma de ser me atrapó desde el primer día",
"Porque me gusta cuidarte y protegerte",
"Porque eres fuerte, aunque a veces no lo creas",
"Porque me gustan tus caras que hacer por todo ",
"Porque cuando sonríes, todo a tu alrededor se ve mejor",
"Porque me gusta tu forma de escribir y hasta tu letra",
"Porque eres diferente a todas las personas que he conocido",
"Porque me haces sentir especial, aunque no te des cuenta",
"Porque me das ganas de seguir adelante sin importar los problemas",
"Porque aunque no siempre me digas lo que sientes, sé que me quieres a tu manera",
"Porque cuando estoy contigo, el resto del mundo deja de importar",
"Porque aunque no siempre me des lo que quiero, sigues siendo lo que más quiero",
"Porque tienes una forma especial de ver las cosas",
"Porque eres inteligente y eso me gusta de ti",
"Porque me encanta cuando te emocionas por algo",
"Porque aunque no siempre lo note, me prestas atención",
"Porque a tu lado siento que todo es más sencillo",
"Porque me gusta ver tus mensajes y saber que estás ahí",
"Porque no necesito que seas perfecta para amarte",
"Porque incluso en tus momentos de enojo me pareces linda",
"Porque me das razones para seguir luchando por ti",
"Porque aunque me hagas enojar a veces, no puedo dejar de amarte",
"Porque tu forma de ver la vida es interesante",
"Porque contigo quiero compartir mis días",
"Porque me gusta que me hagas preguntas, aunque digas que no te gusta hacerlas",
"Porque cuando estoy contigo, no quiero estar en otro lugar",
"Porque simplemente no hay nadie más que me haga sentir esto",
"Porque me gusta que te esfuerces, aunque no lo diga",
"Porque tus detalles, por pequeños que sean, significan mucho para mí",
"porque te ves bonita, incluso cuando estas enfermita ",
"Porque tu presencia me da paz",
"Porque aunque a veces me ignores, sigo queriéndote",
"Porque me gusta la forma en que me ves, me da pena jsjsjs",
"Porque tu olor me gusta y se queda en mi mente",
"Porque cuando estamos juntos, no quiero que el tiempo pase",
"Porque me gusta tu voz cuando estás medio dormida",
"Porque me gusta cuando me dices cosas bonitas, aunque sea raro en ti",
"Porque contigo puedo ser yo mismo",
"Porque me gusta la forma en que me escuchas",
"Porque aunque a veces parezcas distante, sé que me piensas",
"Porque me gusta que me cuentes cosas de tu día",
"Porque me gusta tu forma de reír cuando algo te da mucha risa",
"Porque aunque a veces dudes de nosotros, yo sigo aquí para ti",
"Porque te veo en cada lugar y en cada momento",
"Porque me gusta tu forma de vestirte",
"Porque aunque me duela tu indiferencia a veces, sigo queriéndote igual",
"Porque me gustan tus manos todas lindas",
"Porque me gusta cuando me demuestras cariño sin que yo te lo pida",
"Porque me gusta tu manera de hablar cuando estás seria",
"Porque me gusta cuando me llamas por mi nombre, no siempre pero si",
"Porque me gusta cuando estás en modo linda y tierna",
"Porque cuando me dices que me quieres, me haces feliz",
"Porque no hay un solo día en el que no piense en ti",
"Porque me gusta tu forma de responder cuando te hago preguntas sobre ti",
"Porque eres la única persona por la que doy todo",
"Porque me gusta la manera en que te preocupas por mi",
"Porque aunque sea difícil, quiero que funcione lo nuestro",
"Porque cuando te extraño, estas en mi mente y en mi corazon",
"Porque tus abrazos deben ser los mejores, aunque aún no los haya recibido como quiero",
"Porque me gusta tu personalidad, incluso con todo lo complicado",
"Porque me gusta ver tu lado más sincero",
"Porque tu manera de ver el amor es única",
"Porque me gusta que seas tú, sin importar qué pase",
"Porque cuando te veo, todo lo demás deja de importar",
"Porque aunque a veces me duela lo que haces, no dejo de amarte",
"Porque me haces sentir que todo puede valer la pena",
"Porque me gusta tu forma de ver la vida, aunque sea diferente a la mía",
"Porque a tu lado me siento completo",
"Porque cuando me dices algo bonito, se me queda grabado",
"Porque contigo aprendí lo que es la paciencia",
"Porque no me importa esperar lo que sea por ti",
"Porque aunque haya días difíciles, quiero seguir contigo",
"Porque se que nos vamos a amar mucho",
"Porque cada día me das una nueva razón para quererte más",
"Porque no imagino mi vida sin ti",
"Porque contigo quiero un futuro",
"porque todo nuestro trayecto que tenemos es lo mejor de mi vida",
"porque me gustan tus besos",
"porque me gusta el tipo de mujer que eres",
"porque a pesar de todo, se que vamos a estar mucho tiempo juntos",
"Porque simplemente te amo, sin importar nada más..."


];

const images = [];
for (let i = 1; i <= 100; i++) {
    images.push(`imagenes/${i}.jpg`);
}

const videoSources = {
    21: "videos/21.mp4",
    50: "videos/50.mp4",
    100: "videos/100.mp4"
};

let count = 1;
const countElement = document.getElementById("count");
const reasonElement = document.getElementById("reason");
const pageElement = document.getElementById("page");
const imageElement = document.getElementById("image");
const videoElement = document.getElementById("video");
const videoSource = videoElement.querySelector("source");
const nextButton = document.getElementById("next-btn");
const prevButton = document.getElementById("prev-btn");

function updatePage() {
    countElement.textContent = count;
    reasonElement.textContent = reasons[count - 1];
    imageElement.src = images[count - 1];

    if (videoSources[count]) {
        videoSource.src = videoSources[count];
        videoElement.style.display = "block";
        videoElement.load();
    } else {
        videoElement.style.display = "none";
    }

    prevButton.disabled = count === 1;
    nextButton.disabled = count === reasons.length;
    nextButton.textContent = count === reasons.length ? "Fin 💖" : "Siguiente";
}

nextButton.addEventListener("click", () => {
    if (count < reasons.length) {
        pageElement.style.opacity = "0";
        setTimeout(() => {
            count++;
            updatePage();
            pageElement.style.opacity = "1";
        }, 500);
    }
});

prevButton.addEventListener("click", () => {
    if (count > 1) {
        pageElement.style.opacity = "0";
        setTimeout(() => {
            count--;
            updatePage();
            pageElement.style.opacity = "1";
        }, 500);
    }
});

prevButton.disabled = true;
updatePage();

const audioElement = document.getElementById("background-audio");

function startAudio() {
    audioElement.play();
}

function stopAudio() {
    audioElement.pause();
}

// Reproducir el audio al hacer clic por primera vez en "Siguiente"
nextButton.addEventListener("click", () => {
    if (count === 1) {
        startAudio();
    }

    if (count < reasons.length) {
        pageElement.style.opacity = "0";
        setTimeout(() => {
            count++;
            updatePage();
            pageElement.style.opacity = "1";
        }, 500);
    }
});

// Detener el audio cuando se reproduce un video
videoElement.addEventListener("play", () => {
    stopAudio();
});

// Reanudar el audio cuando el video termine
videoElement.addEventListener("ended", () => {
    startAudio();
});

// Detener el audio cuando llegamos al final y mostrar la otra ventana
nextButton.addEventListener("click", () => {
    if (count === reasons.length) {
        stopAudio();
        window.open("otra_ventana.html", "_self"); // O la ruta que necesites
    }
});
