const phrase = document.getElementById("content");
const author = document.getElementById("author");

const phrases = [
	"Todo lo que puedas imaginar es real.",
	"El poder de la imaginación nos hace infinitos.",
	"Dentro de un año puede que desees haber empezado hoy.",
	"Nunca dejes ir a quien toca más tu alma que tu cuerpo.",
	"En lo que pensamos, nos convertimos.",
	"La única forma de salir del laberinto del sufrimiento es perdonar.",
	"La vida no es un problema que hay que resolver, si no una realidad que hay que experimentar.",
	"El conociemiento es poder",
	"Si tus acciones inspiran a otros a soñar más, aprender más, hacer más y llegar a ser más, eres un líder.",
	"Fallas el 100% de los tiros que no intentas.",
	"El propósito de nuestras vidas es ser felices.",
	"Recuerda que la felicidad no depende de quién eres o qué tienes; depende únicamente en lo que piensas.",
	"Si no sueltas el pasado, ¿Con qué mano agarras el futuro?.",
	"No hay camino para la verdad, la verdad es el camino.",
	"El hombre que no ha amado apasionadamente ignora la mitad más bella de la vida.",
	"El éxito no se mide en el dinero, sino en la diferencia que marca en las personas.",
	"El tiempo no borra, ubica.",
	"No pienses en el comienzo de la carrera, piensa en el final.",
	"Nunca sabes lo fuerte que eres, hasta que ser fuerte es la única opción que te queda.",
	"La vida no se juzga por el tiempo, sino por los recuerdos de los momentos especiales que vivimos.",
	"La vida es la constante sorpresa de saber que existo.",
	"No lastimes a los demás con lo que te causa dolor a ti mismo.",
	"El que busca amigos sin defectos se queda sin amigos.",
	"No puedo enseñar nada a nadie. Solo puedo hacerles pensar.",
	"La educación e el arma más poderosa que puede usar para cambiar le mundo.",
	"Por la ignorancia nos equivocamos, y por las equivocaciones aprendemos.",
	"El único modo de hacer un gran trabajo es amor lo que haces.",
	"La vida es 10% lo que me ocurre y 90% cómo reacciono ante ello.",
	"Lo que no te mata, te hace más fuerte.",
	"El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
];

const authors = [
	"Pablo Picasso",
	"John Muir",
	"Karen Lamb",
	"Anónimo",
	"Buda",
	"John Green",
	"Søren Kierkegaard",
	"Francis Bacon",
	"John Quincy Adams",
	"Wayne Gretzky",
	"Dalai Lama",
	"Dale Carnegie",
	"Anónimo",
	"Mahatma Gandhi",
	"Stendhal",
	"Michelle Obama",
	"Anónimo",
	"Usain Bolt",
	"Bob Marley",
	"Leonid S. Sukhorukov",
	"R. Tagore",
	"Buda",
	"Proverbio Turco",
	"Sócrates",
	"Nelson Mandela",
	"Proverbio Romano",
	"Steve Jobs",
	"Charles R. Swindoll",
	"Friedrich Nietzsche",
	"Robert Collier",
]


function mostrarPhrase() {
// Obtener el dia
	const diaActual = new Date().getDate();

	const phraseDelDia = phrases[diaActual -1];
	const authorDelDia = authors[diaActual -1]

	phrase.textContent = phraseDelDia;
	author.textContent = authorDelDia;
}


mostrarPhrase()


setInterval(mostrarPhrase, 24 * 60 * 60 * 1000);
