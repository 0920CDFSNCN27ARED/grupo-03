window.addEventListener("load", () => {
  const searchButton = document.getElementById("search-button");
  searchButton.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("Está funcionando!! :)");
    const searchInput = document.getElementById("search-input");
    searchInput.classList.toggle("hidden");
    const searchDiv = document.getElementById("search-div")
    searchDiv.classList.toggle("no-border");
    searchDiv.classList.toggle("border-search");

    

  });
});