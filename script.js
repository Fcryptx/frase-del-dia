const phrase = document.getElementById("content");

const author = document.getElementById("author");

const phrases = [
  "El único modo de hacer un gran trabajo es amar lo que haces.",
  "La única forma de alcanzar lo imposible es creer que es posible.",
  "No importa cuántas veces fracases, lo importante es levantarte una vez más.",
  "El éxito no es la clave de la felicidad, la felicidad es la clave del éxito.",
  "Cree en ti mismo y todo será posible.",
  "El futuro pertenece a quienes creen en la belleza de sus sueños.",
  "La vida es 10% lo que nos sucede y 90% cómo reaccionamos ante ello.",
  "No cuentes los días, haz que los días cuenten.",
  "Todo lo que siempre has querido está al otro lado del miedo.",
  "Los grandes logros requieren tiempo, paciencia y esfuerzo.",
  "El único límite a nuestros logros de mañana son nuestras dudas y vacilaciones de hoy.",
  "Haz de cada día una oportunidad para mejorar.",
  "La vida comienza donde termina tu zona de confort.",
  "Nunca es tarde para ser quien podrías haber sido.",
  "El éxito no es definitivo, el fracaso no es fatal: lo que cuenta es el coraje de continuar.",
  "Hazlo con pasión o no lo hagas.",
  "Tu actitud, no tu aptitud, determinará tu altitud.",
  "El mayor placer en la vida es hacer lo que la gente dice que no puedes hacer.",
  "La diferencia entre lo que eres y lo que quieres ser es lo que haces.",
  "No importa lo despacio que vayas, siempre y cuando no te detengas.",
  "Cualquier cosa que puedas hacer o soñar, puedes comenzarla.",
  "El camino hacia el éxito está lleno de fracasos, pero lo importante es seguir intentándolo.",
  "Nunca subestimes el poder de tus sueños.",
  "Tú tienes el poder de crear la vida que deseas.",
  "El miedo es solo una oportunidad para aprender algo nuevo.",
  "Si no te desafía, no te cambia.",
  "Tu futuro depende de lo que hagas hoy, no mañana.",
  "En la vida, todo lo que deseas está del otro lado del miedo.",
  "No dejes que lo que no puedes hacer interfiera con lo que puedes hacer.",
  "Si crees en ti mismo, nada es imposible.",
  "Los grandes cambios vienen de pequeños pasos."
];

const authors = [
  "Steve Jobs",
  "Walt Disney",
  "Nelson Mandela",
  "Albert Schweitzer",
  "Ralph Waldo Emerson",
  "Eleanor Roosevelt",
  "Charles R. Swindoll",
  "Muhammad Ali",
  "George Addair",
  "Ralph Waldo Emerson",
  "Franklin D. Roosevelt",
  "Oprah Winfrey",
  "T. Harv Eker",
  "George Eliot",
  "Winston Churchill",
  "Wayne Gretzky",
  "Zig Ziglar",
  "John F. Kennedy",
  "Les Brown",
  "Confucio",
  "Jim Rohn",
  "Nelson Mandela",
  "Albert Einstein",
  "Maya Angelou",
  "Harvey Mackay",
  "Stephen Covey",
  "Tony Robbins",
  "Martin Luther King Jr.",
  "Albert Einstein",
  "John Wooden",
  "Thomas Edison"
];


function mostrarPhrase() {
	const diaActual = new Date().getDate();

	const phraseDelDia = phrases[diaActual -1];
	const authorDelDia = authors[diaActual -1]

	phrase.textContent = phraseDelDia;
	author.textContent = authorDelDia;
}

mostrarPhrase()


setInterval(mostrarPhrase, 24 * 60 * 60 * 1000);
