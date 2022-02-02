function toogleAnswer(element) {
  if (element.nextElementSibling.style.opacity === "1") {
    element.nextElementSibling.style.opacity = "0";
    element.nextElementSibling.style.height = "0";
    element.nextElementSibling.style.margin = "0";
    if (window.matchMedia("(max-width: 1000px)").matches) {
      element.querySelector(".container__arrow").style.transform =
        "translate(320px, -40px) rotate(0deg)";
    } else {
      element.querySelector(".container__arrow").style.transform =
        "translate(362px, -40px) rotate(0deg)";
    }
    element.style.fontWeight = "400";
  } else {
    element.nextElementSibling.style.opacity = "1";
    element.nextElementSibling.style.height = "auto";
    element.nextElementSibling.style.margin = "1em 0";
    if (window.matchMedia("(max-width: 1000px)").matches) {
      i = 0;
      element.querySelector(".container__arrow").style.transform =
        "translate(320px, -45px) rotate(180deg)";
    } else {
      element.querySelector(".container__arrow").style.transform =
        "translate(362px, -45px) rotate(180deg)";
    }
    element.style.fontWeight = "700";
  }
}
