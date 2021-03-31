window.addEventListener("load", () => {
  const barButton = document.getElementById("bar-button");
  barButton.addEventListener("click", (event) => {

    const ulNavBar = document.getElementById("ul-nav-bar");
    ulNavBar.classList.toggle("header-menus");
    ulNavBar.classList.toggle("flex-column");
    const navBar = document.getElementsByClassName("nav-bar");
    for(let i = 0; i < navBar.length; i ++){
      navBar[i].classList.toggle("hidden");
      // navBar.classList.add("show-sm");
    }
    console.log("Está funcionando!! :)");
  });
  
});
