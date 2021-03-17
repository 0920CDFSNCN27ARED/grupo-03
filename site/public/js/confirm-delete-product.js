window.addEventListener("load", () => {
  const deleteForm = document.getElementById("deleteForm");

  deleteForm.addEventListener("submit", (event) => {
    const confirmDelete = document.getElementById("confirmDelete");
    confirmDelete.classList.remove("hidden");
    confirmDelete.classList.add("d-flex");
    event.preventDefault();
  });
});
