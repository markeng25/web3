
// audio de la musica de la pagina

document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('mi-audio');

    // Detectar un toque o clic para activar el audio
    document.addEventListener('click', function() {
        audio.muted = false;  // Desmutear el audio
        audio.play().then(() => {
            console.log("Audio desmuteado y reproduciéndose.");
        }).catch((error) => {
            console.log("Error al intentar reproducir el audio:", error);
        });
    }, { once: true }); // Se ejecuta solo una vez
});

  // JavaScript para el menú hamburguesa
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');

  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show');
  });


