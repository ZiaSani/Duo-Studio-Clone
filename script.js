function initLocomo() {
  gsap.registerPlugin(ScrollTrigger);
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

const cusCursor = document.querySelector(".cursor");
const videoDiv = document.querySelector(".video-container video");
const workSection = document.querySelectorAll(".page03-inner .elems");

document.addEventListener("mousemove", function (dets) {
  gsap.to(cusCursor, {
    x: dets.clientX,
    y: dets.clientY,
    duration: 0.2,
  });
});
function page01GSAPAnimations() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".page01 .prim-headline",
      scroller: ".main",
      // markers: true,
      start: "top 23%%",
      end: "top 0",
      scrub: 3,
    },
  });
  gsap.from(".page01 .secondary-headline , .page01 .prim-headline", {
    opacity: 0,
    stagger: 0.15,
    // delay: 1,
    rotate: "4deg",
    y: 80,
    x: -100,
  });
  tl.to(
    ".page01 .prim-headline",
    {
      x: -100,
      ease: "power2.inOut",
      filter: "blur(2px)",
      //   backgroundColor: "red",
    },
    "same"
  );

  tl.to(
    ".page01 .secondary-headline",
    {
      x: 100,
      ease: "power2.inOut",
      filter: "blur(2px)",
      //   backgroundColor: "red",
    },
    "same"
  );

  tl.to(
    ".video-container",
    {
      width: "95%",
      ease: "power2.inOut",
      filter: "blur(1.5px)",
      //   backgroundColor: "red",
    },
    "same"
  );
}
function mouseEnterLeaveCursorTransition() {
  videoDiv.addEventListener("mouseenter", function () {
    cusCursor.textContent = "Sound On";
    gsap.to(cusCursor, {
      textTransform: "uppercase",
      duration: 0.5,
      padding: "2px 8px",
      height: "fit-content",
      fontWeight: 800,
      fontSize: "0.8vw",
      width: "fit-content",
      borderRadius: "18px",
      ease: "power2.inOut",
    });
  });

  videoDiv.addEventListener("mouseleave", function () {
    cusCursor.textContent = "";
    gsap.to(cusCursor, {
      duration: 0.5,
      height: "18px",
      width: "18px",
      borderRadius: "50px",
      ease: "power2.inOut",
    });
  });

  workSection.forEach(function (val) {
    val.addEventListener("mouseenter", function () {
      gsap.to(val, {
        filter: "blur(3px)",
        duration: 0.3,
        ease: "power2.in",
      });
      cusCursor.textContent = "View";
      gsap.to(cusCursor, {
        textTransform: "uppercase",
        duration: 0.5,
        padding: "2px 8px",
        height: "fit-content",
        width: "fit-content",
        fontSize: "0.65vw",
        fontWeight: 600,
        borderRadius: "18px",
        ease: "power2.inOut",
      });
    });

    val.addEventListener("mouseleave", function () {
      gsap.to(val, {
        filter: "blur(0px)",
        duration: 0.3,
        ease: "power2.in",
      });
      cusCursor.textContent = "";
      gsap.to(cusCursor, {
        duration: 0.5,
        height: "18px",
        width: "18px",
        borderRadius: "50px",
        ease: "power2.inOut",
      });
    });
  });
}
function page02GSAPAnimations() {
  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page01 .prim-headline",
      scroller: ".main",
      // markers: true,
      start: "top -118%%",
      end: "top -135%",
      scrub: 3,
    },
  });

  tl2.to(".main", {
    backgroundColor: "#fff",
    ease: "power2.inOut",
  });

  tl2.from(".page02 .main-headline", {
    opacity: 0,
    duration: 0.5,
    rotate: "-3deg",
    y: 10,
    x: -15,
    ease: "power2.inOut",
  });

  tl2.from(".page02-inner-container .left-inner h4", {
    opacity: 0,
    duration: 0.5,
    y: 120,
    ease: "power2.inOut",
    x: -15,
  });

  tl2.from(".page02-inner-container .right-inner p", {
    opacity: 0,
    duration: 0.5,
    y: 70,
    x: 25,
    ease: "power2.inOut",
  });

  tl2.from(".right-inner button", {
    duration: 0.5,
    y: -15,
    ease: "power2.inOut",
  });
}
function page03GSAPAnimations() {
  gsap.from(".page03 h1", {
    opacity: 0,
    duration: 0.5,
    rotate: "-3deg",
    y: 10,
    x: -15,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: ".page03",
      scroller: ".main",
      // markers: true,
      start: "top 15%",
      end: "top 0%",
      scrub: 2,
    },
  });

  const tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page03-inner",
      scroller: ".main",
      // markers: true,
      start: "top -17%",
      end: "top -5%",
      scrub: 3,
    },
  });

  tl3.to(".left .elems", {
    // backgroundColor: "red",
    x: 50,
    y: 20,
    stagger: 0.4,
    duration: 0.3,
    ease: "power2.inout",
  });
  tl3.to(".right .elems", {
    // backgroundColor: "red",
    x: -50,
    y: -20,
    stagger: 0.4,
    duration: 0.3,
    ease: "power2.inout",
  });
}
function portfolioWorks() {
  const boxes = document.querySelectorAll(".elem");
  // PRELOAD IMAGES
  // boxes.forEach(function (elem) {
  //   const imgUrl = elem.getAttribute("data-img");
  //   const img = new Image();
  //   img.src = imgUrl;
  // });

  boxes.forEach(function (elems) {
    let elementH4 = elems.querySelector("h4");
    let elementH5 = elems.querySelectorAll(".text h5");

    elems.addEventListener("mouseenter", function () {
      const imgAtt = elems.getAttribute("data-img");

      gsap.to(cusCursor, {
        height: "470px",
        width: "360px",
        borderRadius: "12px",
        duration: 0.3,
        backgroundColor: "transparent",
        backgroundImage: `url(${imgAtt})`,
      });
      gsap.to(elementH4, {
        x: 14,
        color: "#fff",
      });

      elementH5.forEach(function (h5) {
        gsap.to(h5, {
          x: -14,
          color: "#fff",
        });
      });
    });
    elems.addEventListener("mouseleave", function () {
      gsap.to(cusCursor, {
        height: "18px",
        width: "18px",
        borderRadius: "50%",
        duration: 0.3,
        backgroundColor: "var(--secondary-color)",
        backgroundImage: "none",
      });
      gsap.to(elementH4, {
        x: 0,
        color: "#ffffff98",
      });
      gsap.to(elementH5, {
        x: 0,
        color: "#ffffff98",
        stagger: 0.3,
      });
    });
  });
}
initLocomo();
page01GSAPAnimations();
page02GSAPAnimations();
page03GSAPAnimations();
mouseEnterLeaveCursorTransition();
portfolioWorks();
const tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page01 .prim-headline",
    scroller: ".main",
    // markers: true,
    start: "top -512%%",
    end: "top -525%",
    scrub: 3,
  },
});

tl4.to(".main", {
  backgroundColor: "#000",
  color: "#fff",
  ease: "power2.inOut",
});
