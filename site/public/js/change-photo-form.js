window.addEventListener("load", () => {
  const image = document.querySelector("#output");
  const newImage = document.querySelector("#image");
  newImage.addEventListener("change", (event) => {
    newImage.src = document.replace(this.files);
    image.innerHTML = this.files;
  });
  console.log("Está funcionando!! :)");
});