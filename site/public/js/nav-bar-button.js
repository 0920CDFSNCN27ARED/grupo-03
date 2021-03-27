window.addEventListener("load", () => {
  const barButton = document.getElementById("bar-button");
  barButton.addEventListener("click", (event) => {
    const navBar = document.getElementsById("nav-bar");
    navBar.classList.toggle("hidden");
    const ulNavBar = document.getElementById("ul-nav-bar");
    ulNavBar.classList.remove("header-menus");
    ulNavBar.classList.add("flex-column");
    console.log("Está funcionando!! :)");
  });
});