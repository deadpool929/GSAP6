gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true },
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

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector(".smooth-scroll").style.transform
    ? "transform"
    : "fixed"*/
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

gsap.from(".page1 .box", {
  scale: 0,
  rotation: 360,
  duration: 1,
  delay: 1,
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page1 .box",
    markers: true,
    start: "top 40%",
    end: " bottom 10% ",
    scrub: 1,
  },
});

gsap.from(".page2 .box", {
  scale: 0,
  rotation: 360,
  duration: 1,
  stagger: 1,
  scrollTrigger: {
    scroller: ".main",
    trigger: ".page2 .box",
    markers: true,
    start: "top 60%",
    end: " top 30% ",
    scrub: 1,
  },
});

gsap.from(".page3 .box", {
  scale: 0,
  rotation: 360,
  duration: 1,
  stagger: 1,
  scrollTrigger: {
    trigger: ".page3 .box",
    scroller: ".main",
    markers: true,
    start: "top 60%",
    end: " bottom 20% ",
    scrub: 1,
  },
});
