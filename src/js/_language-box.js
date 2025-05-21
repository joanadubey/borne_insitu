const buttons = document.querySelectorAll(".language-button");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    console.log("Langue sélectionnée :", btn.dataset.lang);
  });
});
