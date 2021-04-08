window.addEventListener("load", () => {
  const image = document.querySelector("#output");
  const newImage = document.querySelector("#image");
  newImage.addEventListener("change", (event) => {
    image.src = newImage.value;
  });
  console.log("Está funcionando!! :)");
});
