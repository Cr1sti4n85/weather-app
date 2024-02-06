const modal = document.querySelector("[data-modal]");

//show modal with error message
export const renderError = (message) => {
  document.querySelector(".error-message").textContent = message;
  modal.showModal();
};

//hide modal error message when clicking button
export const closeError = () => {
  const btnClose = document.querySelector("[data-close-modal]");
  btnClose.addEventListener("click", () => {
    modal.close();
    document.querySelector(".error-message").textContent = "";
  });
};
