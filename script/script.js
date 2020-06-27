const blockLink = document.querySelector(".block-link");
const blockSearch = document.querySelector(".block-search");

function openCloseBurger() {
  const burger = document.querySelector(".burger");
  const blockControlSlider = document.querySelector(".block-control-slider");
  const footerPanel = document.querySelector(".footer-panel");
  const container = document.querySelector(".container");
  const closeBurger = document.querySelector(".close");
  const menu = document.querySelector(".menu");

  burger.addEventListener("click", toggleBurger);
  closeBurger.addEventListener("click", toggleBurger);

  function toggleBurger() {
    burger.classList.toggle("open");
    footerPanel.classList.toggle("content-center");
    closeBurger.style.display = "block";
    blockLink.style.transform = "scale(0) translate(0px, -400px)";
    blockSearch.style.display = "none";
    blockControlSlider.style.display = "none";
    container.style.display = "none";
    menu.style.display = "flex";
    document.body.style.backgroundImage = location.href.indexOf("https")
      ? `url('../slide/img/menu.png')`
      : `url('${location.href}/img/menu.png')`;

    if (!burger.classList.contains("open")) {
      closeBurger.style.display = "none";
      blockLink.style.transform = "scale(1)";
      blockSearch.style.display = "block";
      blockControlSlider.style.display = "block";
      container.style.display = "block";
      menu.style.display = "none";
      document.body.style.backgroundImage = location.href.indexOf("https")
        ? `url('../slide/img/slide_1.png')`
        : `url('${location.href}/img/slide_1.png')`;
    }
  }
}

///////////////////////////////////////////////////////////

function openCloseSearch() {
  const loupe = document.querySelector(".fa-search");
  const closeSearch = document.querySelector(".fa-times");
  const blockInput = document.querySelector(".block-input");
  const border = document.querySelector(".border");

  loupe.addEventListener("click", () => {
    blockInput.style.display = "flex";
    blockLink.style.display = "none";
    blockSearch.classList.add("block-search-open");
    loupe.style.padding = "0 10px";
    border.style.display = "block";
  });

  closeSearch.addEventListener("click", () => {
    blockInput.style.display = "none";
    blockLink.style.display = "flex";
    blockSearch.classList.remove("block-search-open");
    loupe.style.padding = "0";
    border.style.display = "none";
  });
}

/////////////////////////////////////////////////////////

function renderImgInMenu() {
  const menuBar = document.querySelectorAll(".menu-bar li a");
  const imgLeft = document.querySelector(".img-left");
  const imgRight = document.querySelector(".img-right");

  menuBar.forEach((el, i) => {
    const slideIndex =
      i < menuBar.length / 2 ? i + 1 : i - menuBar.length / 2 + 1;
    el.addEventListener("mouseover", () => {
      menuBar.forEach((item) => (item.style.color = "#4444445b"));
      el.style.color = "#407939";
      if (i % 2 === 0) {
        imgLeft.style.display = "block";
        imgLeft.src = location.href.indexOf("https")
          ? `../slide/img/img-hover_${slideIndex}.png`
          : `${location.href}/img/img-hover_${slideIndex}.png`;
      } else {
        imgRight.style.display = "block";
        imgRight.src = location.href.indexOf("https")
          ? `../slide/img/img-hover_${slideIndex}.png`
          : `${location.href}/img/img-hover_${slideIndex}.png`;
      }
      imgLeft.style.top = `${slideIndex * 90}px`;
      imgRight.style.top = `${slideIndex * 90}px`;
    });
  });

  menuBar.forEach((el) => {
    el.addEventListener("mouseout", () => {
      menuBar.forEach((item) => (item.style.color = "#444444"));
      imgLeft.style.display = "none";
      imgRight.style.display = "none";
    });
  });
}

///////////////////////////////////////////////////////////////

function setLocalize() {
  const enElements = document.querySelectorAll(".en");
  const ruElements = document.querySelectorAll(".ru");
  const enBtn = document.querySelector(".en-btn");
  const ruBtn = document.querySelector(".ru-btn");
  const close = document.querySelector(".close");

  ruElements.forEach((el) => (el.style.display = "none"));
  enBtn.addEventListener("click", () => {
    ruBtn.classList.remove("active");
    enBtn.classList.add("active");
    enElements.forEach((el) => (el.style.display = "flex"));
    ruElements.forEach((el) => (el.style.display = "none"));
    close.textContent = "Close";
    enBtn.style.color = "black";
    ruBtn.style.color = "#33333380";
  });

  ruBtn.addEventListener("click", () => {
    enBtn.classList.remove("active");
    ruBtn.classList.add("active");
    enElements.forEach((el) => (el.style.display = "none"));
    ruElements.forEach((el) => (el.style.display = "flex"));
    close.textContent = "Закрыть";
    ruBtn.style.color = "black";
    enBtn.style.color = "#33333380";
  });
}

setLocalize();
openCloseBurger();
openCloseSearch();
renderImgInMenu();
