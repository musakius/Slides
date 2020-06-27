const slidesField = document.querySelector(".block-slide");
const total = document.querySelector(".total-slides");

function offsetSlides() {
  let offset = 0;
  let slideIndex = 1;

  const slides = document.querySelectorAll(".slide");
  const slider = document.querySelector(".container");
  const prev = document.querySelector("#prev");
  const next = document.querySelector("#next");
  const current = document.querySelector(".current-slide");
  const slidesWrapper = document.querySelector(".slider-wrapper");
  const width = window.getComputedStyle(slidesWrapper).width;
  const indicators = document.querySelector(".current-progress");

  if (slides.length < 10) {
    total.textContent = `0${slides.length}`;
    current.textContent = `0${slideIndex}`;
  } else {
    total.textContent = slides.length;
    current.textContent = slideIndex;
  }

  slidesField.style.width = 100 * slides.length + "%";
  slidesField.style.display = "flex";
  slidesWrapper.style.overflow = "hidden";

  slider.style.position = "relative";

  next.addEventListener("click", () => {
    if (offset == deleteNotDigits(width) * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += deleteNotDigits(width);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == slides.length) {
      slideIndex = 1;
    } else {
      slideIndex++;
    }

    if (slides.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }

    let host = location.href.replace(/\Course_work_2.*/, "");
    console.log(location.href);
    console.log("img/slide_${+current.textContent}.png");
    /* host = host + "Course_work_2/search.html"; */

    /* if (location.href !== host) {
    localStorage.removeItem('id_search');
} */

    slidesField.style.transition = "0.5s all";
    indicators.style.width = `${current.textContent * 20}%`;
    document.body.style.backgroundImage = location.href.indexOf("https")
      ? `url('../slide/img/slide_${+current.textContent}.png')`
      : `url('https://musakius.github.io/Slides/img/slide_${+current.textContent}.png')`;
  });

  prev.addEventListener("click", () => {
    if (offset == 0) {
      offset = deleteNotDigits(width) * (slides.length - 1);
    } else {
      offset -= deleteNotDigits(width);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == 1) {
      slideIndex = slides.length;
    } else {
      slideIndex--;
    }

    if (slides.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }

    slidesField.style.transition = "0.5s all";
    indicators.style.width = `${current.textContent * 20}%`;
    document.body.style.backgroundImage =
      `url('../slide/img/slide_${+current.textContent}.png')` ||
      `url('slide/img/slide_${+current.textContent}.png')`;
  });

  function deleteNotDigits(str) {
    return +str.replace(/\D/g, "");
  }
}

function renderSlide() {
  const locales = {
    en: ["Harmony", "Testing", "Success", "Ideas", "Fate"],
    ru: ["Гармония", "Тестирование", "Успех", "Идеи", "Судьба"]
  };
  locales.en.forEach((el, i) => {
    const slide = document.createElement("div");
    slide.classList.add("slide");

    slide.innerHTML = `
      <h2 class="en">${el}</h2>
      <h2 class="ru">${locales.ru[i]}</h2>
        <div class="block-text">
          <div>
            <h4 class="en">Concept studio</h4>
              <p class="en">
                In our best design works, the Customer will find interiors in various styles, from strict modern minimalism
                to luxurious, richly decorated, from inexpensive, budgetary solutions to elite and unique.
              </p>
            <h4 class="ru">Концепция студии</h4>
              <p class="ru">
                В наших лучших дизайнерских работах клиент найдет интерьеры в разных стилях, от строгого модернизма 
                до роскошных, богато оформленных, от недорогих и бюджетных решений до элитных и уникальных.
              </p>
          </div>
          <div>
            <h4 class="en">Everyday i’m </h4>
              <p class="en">
                In our best design works, the Customer will find interiors in various styles, from strict modern minimalism
                to luxurious, richly decorated, from inexpensive, budgetary solutions to elite and unique.
              </p>
            <h4 class="ru">Каждый день я </h4>
              <p class="ru">
                В наших лучших дизайнерских работах клиент найдет интерьеры в разных стилях, от строгого модернизма 
                до роскошных, богато оформленных, от недорогих и бюджетных решений до элитных и уникальных.
              </p>
          </div>
        </div>
        <div class="block-btn">
          <button class="en"><div><span>Read More</span></div></button>
          <button class="ru"><div><span>Читать далее</span></div></button>
          <a class="block-link-project">
            <svg width="19" height="19">
              <polyline points="0,0 16,7 0,17 0,0" style="fill:none;stroke:rgb(0, 0, 0);stroke-width:1">
              </polyline>
            </svg>
            <div class="triangle"></div>
            <span class="en">View project</span>
            <span class="ru">Посмотреть проект</span>
          </a>
        </div>          
      `;
    slidesField.append(slide);
  });
}

renderSlide();
offsetSlides();
