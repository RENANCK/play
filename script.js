// Lista de fundos disponíveis na pasta assets.
const fundos = [
  "./assets/fundo1.jpg",
  "./assets/fundo2.jpg",
  "./assets/fundo3.jpg",
  "./assets/fundo4.png",
  "./assets/fundo5.webp",
];

/**
 * Sorteia um fundo aleatório e aplica no body.
 * Se a imagem falhar, mantém o gradiente fallback do CSS.
 */
function aplicarFundoAleatorio() {
  if (!fundos.length) return;

  const indice = Math.floor(Math.random() * fundos.length);
  const caminho = fundos[indice];

  const preload = new Image();
  preload.onload = () => {
    document.body.style.backgroundImage = `url("${caminho}")`;
  };

  preload.onerror = () => {
    console.warn(`Não foi possível carregar o fundo: ${caminho}. Usando gradiente fallback.`);
    // Não muda o background, pois o fallback já está definido no CSS.
  };

  preload.src = caminho;
}

window.addEventListener("DOMContentLoaded", aplicarFundoAleatorio);
