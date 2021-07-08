function formDataObject() {
  const formEl = document.querySelector(".formulario");
  formEl.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const form = evento.target;
    const dataOfForm = new FormData(form);
    const dataFormJson = Object.fromEntries(dataOfForm);
    console.log(dataFormJson);
  });
}

function main() {
  formDataObject();
}
main();
