// Navigation Animation
var navtl = gsap.timeline();
navtl.from("#Topnav .navbar-brand", {
  y: -20,
  opacity: 0,
  delay: 0.5,
  duration: 0.5,
});
navtl.from("#Topnav .navbar-nav .nav-item, #Topnav .howtosearch", {
  y: -10,
  opacity: 0,
  delay: 0,
  duration: 0.5,
  stagger: 0.2,
});

// Heading Anmiation
var headingtl = gsap.timeline();
headingtl.from("#Home .heading h1, #Home .heading h2, #Home .heading p", {
  y: -20,
  opacity: 0,
  delay: 2.5,
  duration: 0.5,
  stagger: 0.3,
});

// MovieBot Section Animation
gsap.from("#MovieBot .movieseat", {
  x: -250,
  opacity: 0,
  duration: 3,
  scrollTrigger: {
    trigger: "#MovieBot .movieseat",
    scroller: "body",
    start: "top 60%",
    end: "top 50%",
    scrub: 3,
  },
});

// Box Section Animation
gsap.from(".Boxsection .inner-box", {
  y: -20,
  opacity: 0,
  duration: 3,
  stagger: 3,
  scrollTrigger: {
    trigger: ".Boxsection",
    scroller: "body",
    start: "top 20%",
    end: "top 60%",
    scrub: 3,
  },
});

// Creator Section Animation
gsap.from("#Minds .profile-circle1", {
  x: -200,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#Minds .profile-circle",
    scroller: "body",
    start: "top 50%",
    end: "top 60%",
    scrub: 2,
  },
});

gsap.from("#Minds .profile-circle2", {
  x: 200,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#Minds .profile-circle",
    scroller: "body",
    start: "top 50%",
    end: "top 60%",
    scrub: 2,
  },
});
