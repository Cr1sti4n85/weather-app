export const hideSpinner = () => {
  const loader = document.querySelector(".loader");
  loader.classList.add("loader-hidden");
  loader.addEventListener("transitionend", () => {
    loader.remove();
  });
};

export const showSpinner = () => {
  const markup = `<div class="loader"></div>`;
  document.body.insertAdjacentHTML("afterbegin", markup);
};
