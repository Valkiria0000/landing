function sliderAdaptiv() {
  const slider = document.querySelector(".slide");
  const leftBlock = document.querySelector(".section2_content_block1");

  if (window.innerWidth < 990) {
    leftBlock.children[1].insertAdjacentElement("beforeend", slider);
  } else {
    console.dir(leftBlock);
    slider.style = `
    width: 70%;
    `;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  sliderAdaptiv();
});
