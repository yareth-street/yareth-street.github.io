let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #fb4993;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#51CA11 ;">Estudio Ingeniero Mecánico Administrador y soy parte del Boot Camp de Tecnolochicas PRO :).</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
