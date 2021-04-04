window.addEventListener("load", () => {
  const searchButton = document.getElementById("search-button");
  searchButton.addEventListener("click", (event) => {
    const searchInput = document.getElementById("search-input");
      if(searchInput.value == ""){

    event.preventDefault();
    console.log("Está funcionando!! :)");
    
    searchInput.classList.toggle("hidden");
    const searchDiv = document.getElementById("search-div")
    searchDiv.classList.toggle("no-border");
    searchDiv.classList.toggle("border-search");

    }

  });
});