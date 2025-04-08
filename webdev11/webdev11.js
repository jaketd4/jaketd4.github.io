document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
      button.classList.add("glow");
      setTimeout(() => {
        button.classList.remove("glow");
      }, 150);
    });
  });