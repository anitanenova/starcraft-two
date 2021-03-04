const headerElement = document.querySelector(".header");

headerElement.addEventListener("click", function (e) {
  let currentElement = e.target;

  const parentElements = document.querySelectorAll(
    `.${currentElement.parentElement.parentElement.className} > li > a`
  );

  if (!currentElement.className.includes("is-selected")) {
    for (let i = 0; i < parentElements.length; i++) {
      parentElements[i].classList.remove("is-selected");
    }

    currentElement.classList.add("is-selected");
  }
});
