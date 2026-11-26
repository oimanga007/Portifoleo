const luz = document.querySelector(".luz");

document.addEventListener("mousemove", (evento) => {
  const X = evento.clientX + 20;
  const Y = evento.clientY - 20;

  luz.style.left = X + "px";
  luz.style.top = Y + "px";
});
