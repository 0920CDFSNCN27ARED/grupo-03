window.addEventListener("load", () => {
  const barButton = document.getElementById("bar-button");
  barButton.addEventListener("click", (event) => {
    const ulNavBar = document.querySelector("#ul-nav-bar");
    ulNavBar.classList.remove("hidden");
    ulNavBar.classList.add("show-sm");
    ulNavBar.classList.remove("header-menus");
    ulNavBar.classList.add("flex-column");
    // const navBar = document.querySelector("#nav-bar");
    // for(let i = 0; i < navBar.length; i ++){
      
    // }
    console.log("Está funcionando!! :)");
  });
  
});
// window.addEventListener("load", () => {
//   const barButton = document.getElementById("bar-button");
//   barButton.addEventListener("click", (event) => {
//     const ulNavBar = document.querySelector("#ul-nav-bar");
//     ulNavBar.classList.add("hidden");
//     ulNavBar.classList.remove("flex-column");
//     ulNavBar.classList.add("header-menus");
//     // const navBar = document.querySelector("#nav-bar");
//     // for(let i = 0; i < navBar.clientHeight; i ++){
//     //   navBar[i].classList.add("hidden");
//     // }
//      });
// });