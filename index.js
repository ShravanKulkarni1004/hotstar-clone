// console.log("HI!");

let movies = [
  {
    name: "falcon and the winter soldier",
    des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem reprehenderit iure voluptas, optio ratione impedit?",
    image: "images/slider 2.PNG",
  },
  {
    name: "loki",
    des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem reprehenderit iure voluptas, optio ratione impedit?",
    image: "images/slider 1.PNG",
  },
  {
    name: "wanda vision",
    des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem reprehenderit iure voluptas, optio ratione impedit?",
    image: "images/slider 3.PNG",
  },
  {
    name: "raya and the last dragon",
    des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem reprehenderit iure voluptas, optio ratione impedit?",
    image: "images/slider 4.PNG",
  },
  {
    name: "luca",
    des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem reprehenderit iure voluptas, optio ratione impedit?",
    image: "images/slider 5.PNG",
  },
];

const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0; //track the current slide

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  // Create DOM elements
  let slide = document.createElement("div");
  let imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  // Assign data to elements
  imgElement.src = movies[slideIndex].image;
  h1.textContent = movies[slideIndex].name;
  p.textContent = movies[slideIndex].des;

  // Attach content to the slide
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  // Assign class names
  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  // Add slide to sliders array and adjust position
  sliders.push(slide);
  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }

  slideIndex++;
};

for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 3000);

// Video Cards

const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    const video = item.querySelector("video");
    if (video) {
      video
        .play()
        .catch((error) => console.error("Video playback error:", error));
    }
  });
  item.addEventListener("mouseleave", () => {
    const video = item.querySelector("video");
    if (video) {
      video.pause();
      video.currentTime = 0; // Reset to the start
    }
  });
});

//card sliders

let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });

  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });
});
