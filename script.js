const phrase = document.getElementById("content");
const author = document.getElementById("author");
const clock = document.getElementById("date");


const phrases = ['Nunca subestimes tu poder para cambiar tu vida.', 'Sé la mejor versión de ti.', 'Sé valiente, incluso si no lo sientes.', 'Haz que cuente.', 'Empieza antes de estar listo.', 'Nada cambia si tú no cambias.', 'Cree en ti y todo será posible.', 'Visualiza tu éxito y trabaja por él.', 'Tú defines tu camino.', 'Todo comienza con una decisión.', 'El cambio da miedo, pero quedarse estancado da más.', 'Nada cambia si tú no cambias.', 'Confía en el proceso.', 'Cree que puedes y ya estarás a medio camino.', 'Los sueños no funcionan a menos que tú trabajes por ellos.', 'La meta está más cerca de lo que crees.', 'Tu mente es tu mayor aliada o tu peor enemiga.', 'La disciplina vence al talento cuando el talento no se disciplina.', 'Las excusas no construyen sueños.', 'Cada paso te acerca a tu meta.', 'Sé la mejor versión de ti.', 'Las dificultades preparan a personas comunes para destinos extraordinarios.', 'La actitud lo es todo.', 'No tienes que ver toda la escalera, solo da el primer paso.', 'Nunca es tarde para empezar de nuevo.', 'El éxito es la suma de pequeños esfuerzos diarios.', 'Sé constante, no perfecto.', 'El fracaso es parte del camino al éxito.', 'Hazlo por ti.', 'La única competencia eres tú mismo.', 'El cambio da miedo, pero quedarse estancado da más.', 'Hazlo hoy, el mañana no está prometido.', 'El éxito es la suma de pequeños esfuerzos diarios.', 'La perseverancia conquista todo.', 'La perseverancia conquista todo.', 'Cada paso te acerca a tu meta.', 'Cada día es una nueva oportunidad.', 'Los grandes cambios empiezan con pequeños pasos.', 'Lo único imposible es aquello que no intentas.', 'Empieza antes de estar listo.', 'La acción vence al miedo.', 'Eres el autor de tu historia.', 'Los sueños no funcionan a menos que tú trabajes por ellos.', 'La acción vence al miedo.', 'Sé valiente, incluso si no lo sientes.', 'Eres más fuerte de lo que piensas.', 'Tu esfuerzo define tu destino.', 'Sé constante, no perfecto.', 'Eres el autor de tu historia.', 'Sé la mejor versión de ti.', 'Lo único imposible es aquello que no intentas.', 'La perseverancia conquista todo.', 'El éxito es caer y levantarse una vez más.', 'Cree en ti y todo será posible.', 'Convierte tus debilidades en fortalezas.', 'El cambio da miedo, pero quedarse estancado da más.', 'Donde hay pasión, hay éxito.', 'Hazlo con miedo, pero hazlo.', 'No te compares, avanza a tu ritmo.', 'Visualiza tu éxito y trabaja por él.', 'Cree en ti y todo será posible.', 'Los límites solo existen en tu mente.', 'Nada cambia si tú no cambias.', 'Sé constante, no perfecto.', 'El crecimiento comienza donde termina tu zona de confort.', 'Sé constante, no perfecto.', 'Sé constante, no perfecto.', 'Nunca subestimes tu poder para cambiar tu vida.', 'El fracaso es parte del camino al éxito.', 'El fracaso es parte del camino al éxito.', 'Eres más fuerte de lo que piensas.', 'El primer paso ya es un logro.', 'Hazlo con miedo, pero hazlo.', 'Hazlo por ti.', 'La acción vence al miedo.', 'Tu esfuerzo define tu destino.', 'Eres el autor de tu historia.', 'Rodéate de energía positiva.', 'Nada cambia si tú no cambias.', 'Hazlo con miedo, pero hazlo.', 'Los sueños no funcionan a menos que tú trabajes por ellos.', 'Hazlo hoy, el mañana no está prometido.', 'La única competencia eres tú mismo.', 'Nada cambia si tú no cambias.', 'Cree en ti y todo será posible.', 'Nunca es tarde para empezar de nuevo.', 'Nunca subestimes tu poder para cambiar tu vida.', 'Los grandes cambios empiezan con pequeños pasos.', 'El éxito es caer y levantarse una vez más.', 'Los sueños no funcionan a menos que tú trabajes por ellos.', 'El fracaso es parte del camino al éxito.', 'Tu esfuerzo define tu destino.', 'Cada día es una nueva oportunidad.', 'Cada día es una nueva oportunidad.', 'Hazlo con miedo, pero hazlo.', 'Tú puedes con esto y con más.', 'Convierte tus debilidades en fortalezas.', 'Nada cambia si tú no cambias.', 'La disciplina vence al talento cuando el talento no se disciplina.', 'Cada día es una nueva oportunidad.', 'La perseverancia conquista todo.', 'El éxito es caer y levantarse una vez más.', 'Las excusas no construyen sueños.', 'El primer paso ya es un logro.', 'Hazlo por ti.', 'Hazlo por ti.', 'Hazlo hoy, el mañana no está prometido.', 'Cree en ti y todo será posible.', 'El primer paso ya es un logro.', 'Lo único imposible es aquello que no intentas.', 'Rodéate de energía positiva.', 'Aprende algo nuevo cada día.', 'Tú defines tu camino.', 'La disciplina vence al talento cuando el talento no se disciplina.', 'Eres más fuerte de lo que piensas.', 'Confía en el proceso.', 'Tú defines tu camino.', 'Convierte tus debilidades en fortalezas.', 'Cree que puedes y ya estarás a medio camino.', 'Los límites solo existen en tu mente.', 'Nunca es tarde para empezar de nuevo.', 'Hazlo hoy, el mañana no está prometido.', 'Eres más fuerte de lo que piensas.', 'Sé constante, no perfecto.', 'Eres más fuerte de lo que piensas.', 'Donde hay pasión, hay éxito.', 'El progreso es progreso, no importa cuán pequeño.', 'Lo único imposible es aquello que no intentas.', 'Confía en el proceso.', 'La disciplina vence al talento cuando el talento no se disciplina.', 'La actitud lo es todo.', 'Sé la mejor versión de ti.', 'Todo comienza con una decisión.', 'Sé agradecido por lo que tienes mientras luchas por lo que quieres.', 'Lo único imposible es aquello que no intentas.', 'El progreso es progreso, no importa cuán pequeño.', 'El progreso es progreso, no importa cuán pequeño.', 'Convierte tus debilidades en fortalezas.', 'La acción vence al miedo.', 'Sé constante, no perfecto.', 'Empieza antes de estar listo.', 'El éxito es la suma de pequeños esfuerzos diarios.', 'Tú puedes con esto y con más.', 'Cada paso te acerca a tu meta.', 'Hazlo por ti.', 'Confía en el proceso.', 'Sé valiente, incluso si no lo sientes.', 'La disciplina vence al talento cuando el talento no se disciplina.', 'Sé la mejor versión de ti.', 'Cree en ti y todo será posible.', 'Nada cambia si tú no cambias.', 'Convierte tus debilidades en fortalezas.', 'Tú puedes con esto y con más.', 'Hazlo por ti.', 'Convierte tus debilidades en fortalezas.', 'Los límites solo existen en tu mente.', 'Cree que puedes y ya estarás a medio camino.', 'Lo único imposible es aquello que no intentas.', 'No te compares, avanza a tu ritmo.', 'Los grandes cambios empiezan con pequeños pasos.', 'Haz que cuente.', 'Visualiza tu éxito y trabaja por él.', 'Nunca subestimes tu poder para cambiar tu vida.', 'Las excusas no construyen sueños.', 'Sé la mejor versión de ti.', 'La perseverancia conquista todo.', 'Hazlo por ti.', 'No te compares, avanza a tu ritmo.', 'Las dificultades preparan a personas comunes para destinos extraordinarios.', 'Convierte tus debilidades en fortalezas.', 'Los sueños no funcionan a menos que tú trabajes por ellos.', 'Hazlo por ti.', 'Hazlo con miedo, pero hazlo.', 'Las dificultades preparan a personas comunes para destinos extraordinarios.', 'El éxito es la suma de pequeños esfuerzos diarios.', 'La actitud lo es todo.', 'Tu mente es tu mayor aliada o tu peor enemiga.', 'No tienes que ver toda la escalera, solo da el primer paso.', 'Confía en el proceso.', 'El éxito es caer y levantarse una vez más.', 'Nunca subestimes tu poder para cambiar tu vida.', 'Nada cambia si tú no cambias.', 'Rodéate de energía positiva.', 'Donde hay pasión, hay éxito.', 'Lo único imposible es aquello que no intentas.', 'El crecimiento comienza donde termina tu zona de confort.', 'Cree en ti y todo será posible.', 'Tu mente es tu mayor aliada o tu peor enemiga.', 'El éxito es caer y levantarse una vez más.', 'Lo único imposible es aquello que no intentas.', 'No te compares, avanza a tu ritmo.', 'Cada paso te acerca a tu meta.', 'El cambio da miedo, pero quedarse estancado da más.', 'La única competencia eres tú mismo.', 'Cada paso te acerca a tu meta.', 'Tú defines tu camino.', 'Lo único imposible es aquello que no intentas.', 'Sé constante, no perfecto.', 'Cree en ti y todo será posible.', 'Los límites solo existen en tu mente.', 'No tienes que ver toda la escalera, solo da el primer paso.', 'Tú defines tu camino.', 'Hazlo hoy, el mañana no está prometido.', 'Hazlo por ti.', 'Hazlo hoy, el mañana no está prometido.', 'Empieza antes de estar listo.', 'Cree que puedes y ya estarás a medio camino.', 'Donde hay pasión, hay éxito.', 'El éxito es caer y levantarse una vez más.', 'Hazlo con miedo, pero hazlo.', 'Tu esfuerzo define tu destino.', 'Sé valiente, incluso si no lo sientes.', 'Hazlo con miedo, pero hazlo.', 'Aprende algo nuevo cada día.', 'Los límites solo existen en tu mente.', 'La perseverancia conquista todo.', 'La actitud lo es todo.', 'Visualiza tu éxito y trabaja por él.', 'Cada paso te acerca a tu meta.', 'Los sueños no funcionan a menos que tú trabajes por ellos.', 'La actitud lo es todo.', 'Todo comienza con una decisión.', 'No te compares, avanza a tu ritmo.', 'Lo único imposible es aquello que no intentas.', 'Los grandes cambios empiezan con pequeños pasos.', 'Confía en el proceso.', 'Tú puedes con esto y con más.', 'No tienes que ver toda la escalera, solo da el primer paso.', 'Tu mente es tu mayor aliada o tu peor enemiga.', 'Nada cambia si tú no cambias.', 'El crecimiento comienza donde termina tu zona de confort.', 'La actitud lo es todo.', 'El primer paso ya es un logro.', 'Hazlo con miedo, pero hazlo.', 'Las excusas no construyen sueños.', 'Cada día es una nueva oportunidad.', 'El primer paso ya es un logro.', 'Cada paso te acerca a tu meta.', 'La perseverancia conquista todo.', 'Hazlo por ti.', 'Tú defines tu camino.', 'Rodéate de energía positiva.', 'No te compares, avanza a tu ritmo.', 'Empieza antes de estar listo.', 'Los límites solo existen en tu mente.', 'Nunca es tarde para empezar de nuevo.', 'Sé la mejor versión de ti.', 'Haz que cuente.', 'Las dificultades preparan a personas comunes para destinos extraordinarios.', 'La disciplina vence al talento cuando el talento no se disciplina.', 'El primer paso ya es un logro.', 'Sé valiente, incluso si no lo sientes.', 'No tienes que ver toda la escalera, solo da el primer paso.', 'Donde hay pasión, hay éxito.', 'Confía en el proceso.', 'Los grandes cambios empiezan con pequeños pasos.', 'Los límites solo existen en tu mente.', 'El fracaso es parte del camino al éxito.', 'Hazlo hoy, el mañana no está prometido.', 'El primer paso ya es un logro.', 'Nunca subestimes tu poder para cambiar tu vida.', 'Todo comienza con una decisión.', 'Cada día es una nueva oportunidad.', 'No tienes que ver toda la escalera, solo da el primer paso.', 'El éxito es la suma de pequeños esfuerzos diarios.', 'Tu esfuerzo define tu destino.', 'Las dificultades preparan a personas comunes para destinos extraordinarios.', 'Las excusas no construyen sueños.', 'Eres más fuerte de lo que piensas.', 'Lo único imposible es aquello que no intentas.', 'Aprende algo nuevo cada día.', 'Donde hay pasión, hay éxito.', 'Haz que cuente.', 'Los sueños no funcionan a menos que tú trabajes por ellos.', 'Rodéate de energía positiva.', 'El crecimiento comienza donde termina tu zona de confort.', 'La única competencia eres tú mismo.', 'Las excusas no construyen sueños.', 'Cada paso te acerca a tu meta.', 'Eres más fuerte de lo que piensas.', 'Hazlo hoy, el mañana no está prometido.', 'El éxito es caer y levantarse una vez más.', 'Lo único imposible es aquello que no intentas.', 'Cada paso te acerca a tu meta.', 'Todo comienza con una decisión.', 'El cambio da miedo, pero quedarse estancado da más.', 'Convierte tus debilidades en fortalezas.', 'Eres más fuerte de lo que piensas.', 'Donde hay pasión, hay éxito.', 'El éxito es caer y levantarse una vez más.', 'Las excusas no construyen sueños.', 'Los grandes cambios empiezan con pequeños pasos.', 'Nada cambia si tú no cambias.', 'La única competencia eres tú mismo.', 'Convierte tus debilidades en fortalezas.', 'Haz que cuente.', 'El fracaso es parte del camino al éxito.', 'Hazlo hoy, el mañana no está prometido.', 'Convierte tus debilidades en fortalezas.', 'No te compares, avanza a tu ritmo.', 'Cree en ti y todo será posible.', 'El éxito es la suma de pequeños esfuerzos diarios.', 'Nunca es tarde para empezar de nuevo.', 'Nunca subestimes tu poder para cambiar tu vida.', 'Nunca subestimes tu poder para cambiar tu vida.', 'La única competencia eres tú mismo.', 'Nunca es tarde para empezar de nuevo.', 'Empieza antes de estar listo.', 'Hazlo por ti.', 'Hazlo con miedo, pero hazlo.', 'La actitud lo es todo.', 'El cambio da miedo, pero quedarse estancado da más.', 'La actitud lo es todo.', 'El crecimiento comienza donde termina tu zona de confort.', 'Tú defines tu camino.', 'Sé valiente, incluso si no lo sientes.', 'El cambio da miedo, pero quedarse estancado da más.', 'La meta está más cerca de lo que crees.', 'El progreso es progreso, no importa cuán pequeño.', 'Tu mente es tu mayor aliada o tu peor enemiga.', 'Aprende algo nuevo cada día.', 'Hazlo con miedo, pero hazlo.', 'Aprende algo nuevo cada día.', 'El primer paso ya es un logro.', 'Los límites solo existen en tu mente.', 'Tú puedes con esto y con más.', 'Sé constante, no perfecto.', 'Visualiza tu éxito y trabaja por él.', 'Todo comienza con una decisión.', 'La disciplina vence al talento cuando el talento no se disciplina.', 'Empieza antes de estar listo.', 'Tú defines tu camino.', 'Sé agradecido por lo que tienes mientras luchas por lo que quieres.', 'El fracaso es parte del camino al éxito.', 'Sé la mejor versión de ti.', 'Sé agradecido por lo que tienes mientras luchas por lo que quieres.', 'El primer paso ya es un logro.', 'La disciplina vence al talento cuando el talento no se disciplina.', 'Cree en ti y todo será posible.', 'Todo comienza con una decisión.', 'La perseverancia conquista todo.', 'Sé agradecido por lo que tienes mientras luchas por lo que quieres.', 'Confía en el proceso.', 'Cree en ti y todo será posible.', 'El cambio da miedo, pero quedarse estancado da más.', 'Visualiza tu éxito y trabaja por él.', 'Aprende algo nuevo cada día.', 'La perseverancia conquista todo.', 'Hazlo con miedo, pero hazlo.', 'Las dificultades preparan a personas comunes para destinos extraordinarios.', 'No tienes que ver toda la escalera, solo da el primer paso.', 'Hazlo por ti.', 'El progreso es progreso, no importa cuán pequeño.', 'El progreso es progreso, no importa cuán pequeño.', 'Rodéate de energía positiva.', 'Eres el autor de tu historia.', 'El primer paso ya es un logro.', 'Hazlo con miedo, pero hazlo.', 'No tienes que ver toda la escalera, solo da el primer paso.', 'Todo comienza con una decisión.', 'Confía en el proceso.', 'El crecimiento comienza donde termina tu zona de confort.', 'Sé agradecido por lo que tienes mientras luchas por lo que quieres.', 'Sé la mejor versión de ti.', 'Sé constante, no perfecto.'];

const authors = ['Simon Sinek', 'Eric Thomas', 'Jordan Peterson', 'Brendon Burchard', 'Stephen Covey', 'Dale Carnegie', 'Simon Sinek', 'Lou Holtz', 'Brian Tracy', 'Anónimo', 'Les Brown', 'Brendon Burchard', 'Mel Robbins', 'Lou Holtz', 'Brian Tracy', 'Les Brown', 'Brendon Burchard', 'Mel Robbins', 'Hal Elrod', 'Jim Rohn', 'Tony Robbins', 'Wayne Dyer', 'Marie Forleo', 'Zig Ziglar', 'Jordan Peterson', 'Zig Ziglar', 'Wayne Dyer', 'Dale Carnegie', 'Zig Ziglar', 'Jim Rohn', 'Zig Ziglar', 'Eric Thomas', 'Napoleon Hill', 'Mel Robbins', 'Brian Tracy', 'Dale Carnegie', 'Robin Sharma', 'Tony Robbins', 'Brendon Burchard', 'Lou Holtz', 'Anónimo', 'Napoleon Hill', 'Les Brown', 'Lou Holtz', 'Stephen Covey', 'Mel Robbins', 'Robin Sharma', 'Hal Elrod', 'Anónimo', 'Tony Robbins', 'Robin Sharma', 'Dale Carnegie', 'Lou Holtz', 'Robin Sharma', 'Eric Thomas', 'Jordan Peterson', 'Robin Sharma', 'Mel Robbins', 'Marie Forleo', 'Marie Forleo', 'Jordan Peterson', 'Jordan Peterson', 'Wayne Dyer', 'Napoleon Hill', 'Robin Sharma', 'Wayne Dyer', 'Simon Sinek', 'Jim Rohn', 'Anónimo', 'Brendon Burchard', 'Marie Forleo', 'Marie Forleo', 'Stephen Covey', 'Og Mandino', 'Anónimo', 'Jim Rohn', 'Og Mandino', 'Wayne Dyer', 'Dale Carnegie', 'Jordan Peterson', 'Eric Thomas', 'Zig Ziglar', 'Stephen Covey', 'Anónimo', 'Hal Elrod', 'Jim Rohn', 'Robin Sharma', 'Zig Ziglar', 'Anónimo', 'Wayne Dyer', 'Brendon Burchard', 'Napoleon Hill', 'Wayne Dyer', 'Les Brown', 'Brian Tracy', 'Og Mandino', 'Anónimo', 'Marie Forleo', 'Brendon Burchard', 'Hal Elrod', 'Hal Elrod', 'Zig Ziglar', 'Robin Sharma', 'Brendon Burchard', 'Robin Sharma', 'Marie Forleo', 'Stephen Covey', 'Les Brown', 'Mel Robbins', 'Brendon Burchard', 'Stephen Covey', 'Hal Elrod', 'Simon Sinek', 'Mel Robbins', 'Simon Sinek', 'Napoleon Hill', 'Robin Sharma', 'Jim Rohn', 'Tony Robbins', 'Les Brown', 'Simon Sinek', 'Og Mandino', 'Og Mandino', 'Hal Elrod', 'Zig Ziglar', 'Zig Ziglar', 'Zig Ziglar', 'Simon Sinek', 'Dale Carnegie', 'Brian Tracy', 'Hal Elrod', 'Wayne Dyer', 'Eric Thomas', 'Anónimo', 'Jim Rohn', 'Brendon Burchard', 'Napoleon Hill', 'Dale Carnegie', 'Hal Elrod', 'Eric Thomas', 'Wayne Dyer', 'Mel Robbins', 'Og Mandino', 'Marie Forleo', 'Mel Robbins', 'Lou Holtz', 'Hal Elrod', 'Marie Forleo', 'Zig Ziglar', 'Hal Elrod', 'Stephen Covey', 'Lou Holtz', 'Hal Elrod', 'Wayne Dyer', 'Les Brown', 'Jordan Peterson', 'Robin Sharma', 'Napoleon Hill', 'Hal Elrod', 'Stephen Covey', 'Anónimo', 'Zig Ziglar', 'Jim Rohn', 'Lou Holtz', 'Brendon Burchard', 'Stephen Covey', 'Anónimo', 'Simon Sinek', 'Les Brown', 'Simon Sinek', 'Stephen Covey', 'Mel Robbins', 'Stephen Covey', 'Dale Carnegie', 'Tony Robbins', 'Brian Tracy', 'Brian Tracy', 'Simon Sinek', 'Napoleon Hill', 'Brendon Burchard', 'Napoleon Hill', 'Robin Sharma', 'Anónimo', 'Napoleon Hill', 'Simon Sinek', 'Marie Forleo', 'Tony Robbins', 'Tony Robbins', 'Wayne Dyer', 'Brian Tracy', 'Napoleon Hill', 'Napoleon Hill', 'Eric Thomas', 'Dale Carnegie', 'Eric Thomas', 'Eric Thomas', 'Marie Forleo', 'Les Brown', 'Lou Holtz', 'Dale Carnegie', 'Brian Tracy', 'Jim Rohn', 'Brendon Burchard', 'Napoleon Hill', 'Jim Rohn', 'Mel Robbins', 'Simon Sinek', 'Brian Tracy', 'Anónimo', 'Eric Thomas', 'Napoleon Hill', 'Robin Sharma', 'Stephen Covey', 'Jordan Peterson', 'Napoleon Hill', 'Jim Rohn', 'Brian Tracy', 'Brendon Burchard', 'Zig Ziglar', 'Eric Thomas', 'Anónimo', 'Jordan Peterson', 'Anónimo', 'Zig Ziglar', 'Lou Holtz', 'Lou Holtz', 'Mel Robbins', 'Jordan Peterson', 'Brendon Burchard', 'Les Brown', 'Og Mandino', 'Mel Robbins', 'Brendon Burchard', 'Robin Sharma', 'Jordan Peterson', 'Tony Robbins', 'Simon Sinek', 'Tony Robbins', 'Stephen Covey', 'Wayne Dyer', 'Mel Robbins', 'Tony Robbins', 'Napoleon Hill', 'Anónimo', 'Wayne Dyer', 'Robin Sharma', 'Brian Tracy', 'Dale Carnegie', 'Anónimo', 'Jordan Peterson', 'Marie Forleo', 'Dale Carnegie', 'Tony Robbins', 'Les Brown', 'Marie Forleo', 'Eric Thomas', 'Jordan Peterson', 'Jordan Peterson', 'Simon Sinek', 'Simon Sinek', 'Lou Holtz', 'Marie Forleo', 'Jordan Peterson', 'Jordan Peterson', 'Og Mandino', 'Wayne Dyer', 'Hal Elrod', 'Og Mandino', 'Lou Holtz', 'Stephen Covey', 'Brian Tracy', 'Lou Holtz', 'Lou Holtz', 'Marie Forleo', 'Eric Thomas', 'Les Brown', 'Stephen Covey', 'Robin Sharma', 'Lou Holtz', 'Simon Sinek', 'Dale Carnegie', 'Zig Ziglar', 'Og Mandino', 'Eric Thomas', 'Brendon Burchard', 'Simon Sinek', 'Wayne Dyer', 'Napoleon Hill', 'Brendon Burchard', 'Napoleon Hill', 'Dale Carnegie', 'Brendon Burchard', 'Zig Ziglar', 'Simon Sinek', 'Lou Holtz', 'Simon Sinek', 'Napoleon Hill', 'Tony Robbins', 'Brian Tracy', 'Og Mandino', 'Brendon Burchard', 'Eric Thomas', 'Zig Ziglar', 'Eric Thomas', 'Stephen Covey', 'Dale Carnegie', 'Brian Tracy', 'Jim Rohn', 'Brian Tracy', 'Stephen Covey', 'Mel Robbins', 'Jordan Peterson', 'Mel Robbins', 'Les Brown', 'Jim Rohn', 'Napoleon Hill', 'Jim Rohn', 'Hal Elrod', 'Simon Sinek', 'Robin Sharma', 'Simon Sinek', 'Jordan Peterson', 'Tony Robbins', 'Hal Elrod', 'Marie Forleo', 'Lou Holtz', 'Tony Robbins', 'Wayne Dyer', 'Eric Thomas', 'Brian Tracy', 'Stephen Covey', 'Jordan Peterson', 'Lou Holtz', 'Lou Holtz', 'Brian Tracy', 'Simon Sinek', 'Mel Robbins', 'Zig Ziglar', 'Napoleon Hill', 'Jim Rohn', 'Lou Holtz', 'Eric Thomas', 'Anónimo', 'Tony Robbins', 'Mel Robbins', 'Dale Carnegie', 'Robin Sharma', 'Marie Forleo', 'Les Brown', 'Og Mandino', 'Zig Ziglar', 'Marie Forleo', 'Zig Ziglar', 'Napoleon Hill', 'Tony Robbins', 'Hal Elrod', 'Jordan Peterson', 'Jordan Peterson', 'Brendon Burchard', 'Og Mandino', 'Jim Rohn', 'Jim Rohn', 'Simon Sinek', 'Og Mandino', 'Jim Rohn'];

function day(date = new Date()) {

const today = new Date();

const fecha = new Date(date.getFullYear(),0,0);
const diff = date - fecha;
const oneDay = 24 * 60 * 60 * 1000;
const dayOfTheYear = Math.floor(diff / oneDay);

const phraseOfTheYear = phrases[dayOfTheYear - 1];
const authorOfTheYear = authors[dayOfTheYear - 1];

const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();

phrase.textContent = phraseOfTheYear;
author.textContent = authorOfTheYear;
clock.textContent = `${day}/${month}/${year}`;
}

day()

setInterval(day, 24 * 60 * 60 * 100);
