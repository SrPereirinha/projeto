function toggleMode() {
  const html = document.documentElement

  /*if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
  */
  // pegar a tag img
  const img = document.querySelector("#profile img")
  // substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/assets/avatar.png")
  } else {
    img.setAttribute("src", "./assets/assets/avatar-light.png")
  }
  // se tiver sem light mode, manter a imagem origional

  const img1 = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a descrição original
    img1.setAttribute("alt", "Foto de Mateus Pereira, vestindo terno preto, com braços cruzados.")
  } else {
    img1.setAttribute("alt", "Foto de Mateus Pereira, no mercado, fazendo selfie.")
  }

  html.classList.toggle("light")



}