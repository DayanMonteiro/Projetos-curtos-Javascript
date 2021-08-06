const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");

/* O evento mouseenter é disparado quando um dispositivo de apontamento 
(geralmente um mouse) se move sobre um elemento (para dentro do mesmo).
*/
left.addEventListener("mouseenter", () =>
  container.classList.add("hover-left")
);
/* O mouseleaveevento é disparado Elementquando o cursor de um dispositivo apontador 
(geralmente um mouse) é movido para fora dele.
*/
left.addEventListener("mouseleave", () =>
  container.classList.remove("hover-left")
);

right.addEventListener("mouseenter", () =>
  container.classList.add("hover-right")
);
right.addEventListener("mouseleave", () =>
  container.classList.remove("hover-right")
);
