console.log(
  window
    .getComputedStyle(document.documentElement)
    .getPropertyValue("--div-background-color")
);

document.getElementById("dark-theme").addEventListener("click", () => {
  document.documentElement.style.setProperty("--background-color", "#333");
});

document.getElementById("light-theme").addEventListener("click", () => {
  document.documentElement.style.setProperty("--background-color", "#afafaf");
});
