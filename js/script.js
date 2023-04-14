gsap.registerPlugin(ScrollTrigger);

//////////////////////////////////////////////////////////////
// text reveal animation for hero section HIGHLIGHT

const textReveal1 = gsap.timeline();

textReveal1.from(".heroParaText1", {
  opacity: 0,
  y: 100,
  delay: 0.2,
  duration: 0.5,
});

ScrollTrigger.create({
  animation: textReveal1,
  trigger: ".heroParaText1",
  Start: "top top",
  end: "bottom bottom",
  toggleActions: "play none none reverse",
});

const textReveal2 = gsap.timeline();

textReveal2.from(".heroParaText2", {
  opacity: 0,
  y: 100,
  delay: 0.2,
  duration: 0.5,
});

ScrollTrigger.create({
  animation: textReveal2,
  trigger: ".heroParaText2",
  Start: "50% 100%",
  end: "+=1000",
  toggleActions: "play none none reverse",
});

//////////////////////////////////////////////////////////////
// section-on-the-go airpods animation  HIGHLIGHT

const airpodsGo = gsap.timeline();

airpodsGo.from(".sectionGoImg", {
  y: 60,
  duration: 0.5,
});

ScrollTrigger.create({
  animation: airpodsGo,
  trigger: ".sectionGoHeadingBox",
  Start: "top bottom",
  end: "bottom 60%",
  toggleActions: "play none none reverse",
  scrub: 0.5,
});

// // section-on-the-go iPhone animation  HIGHLIGHT
// const iPhoneGo = gsap.timeline();

// iPhoneGo.fromTo(
//   ".iphoneImg",
//   {
//     y: -510,
//   },
//   {
//     y: 0,
//     duration: 0.2,
//   }
// );

// ScrollTrigger.create({
//   animation: iPhoneGo,
//   trigger: ".iphoneImg",
//   pin: true,
//   Start: "50% bottom+=500",
//   end: "bottom top",
//   toggleActions: "play none none reverse",
//   markers: true,
//   scrub: true,
// });
