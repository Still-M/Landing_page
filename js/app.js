TweenMax.from(".logo", 2, {
  opacity: 0,
  x: -20,
  ease: "power1.out",
});

TweenMax.staggerFrom(
  "nav ul li",
  3,
  {
    opacity: 0,
    delay: 0.5,
    ease: Power3.easeInOut,
  },
  0.55
);
TweenMax.from(".face", 1.5, {
  opacity: 0,
  delay: 0.6,
  x: -200,
  ease: "power1.out",
});

TweenMax.from(".title p", 2, {
  opacity: 0,
  delay: 1.7,
  x: -20,
  ease: "power1.out",
});
TweenMax.from(".title span", 2, {
  opacity: 0,
  delay: 2,
  x: -20,
  ease: "power1.out",
});
TweenMax.from(".btn", 1, {
  opacity: 0,
  delay: 2.8,
  z: 20,
  ease: Expo.easeInOut,
});

TweenMax.from(".media ul li img", 3, {
  opacity: 0,
  delay: 2.9,
  x: -10,
  ease: "power1.out",
});
