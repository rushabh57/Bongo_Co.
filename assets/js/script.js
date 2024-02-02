gsap.registerPlugin(ScrollTrigger);

const burger = document.getElementById("burger");
let isClicked = false;

const menuTimeline = gsap.timeline({
  paused: true,
  defaults: { duration: 0.87, ease: "power4" },
});

menuTimeline
  .to(".links li", {
    y: -10,
    stagger: 0.15,
    opacity: 0, // Fade out links
  })
  .to(".menu-btn", {
    width: "100vw",
    position: "absolute",
    top: 0,
    right: 0,
    height: "100vh",
    borderRadius: 0,
  })
  .to(
    ".burger",
    {
      filter: "invert(0.2)",
      position: "absolute",
      top: 10,
      left: 20,

      ease: "power3",
    },
    "<"
  )
  .to(
    ".logo h3",
    {
      position: "absolute",
      top: 10,
      right: 30,
      fontSize: "1.4em",
      duration: 1.4,
      color: "white",
    },
    "<"
  )
  .to(".other-links", {
    display: "block",
  })
  .to(
    ".other-link-con li",
    {
      x: 10,
      opacity: 1,
      stagger: 0.17,
    },
    "<"
  );

// // When the user clicks on the button, open/close the navbar
burger.addEventListener("click", () => {
  if (!isClicked) {
    // Opening animation
    menuTimeline.play();
    isClicked = true;
  } else {
    // Closing animation
    menuTimeline.reverse();
    isClicked = false;
  }
});

gsap.to(".hero-heading h1", {
  ease: "ealstic.out",
  duration: 1,
  x: -300,
  scrollTrigger: {
    trigger: ".hero-section",
    start: "top 10%",
    end: "bottom 10%",
    scrub: 2,
    toggleActions: "none none none restart",
  },
});
var counts = document.querySelectorAll(".c-box h1");
counts.forEach(function (count) {
  var targetValue = parseInt(count.textContent);

  gsap.to(
    { val: 0 },
    {
      val: targetValue,
      roundProps: { val: 1 },
      duration: 5,
      onUpdate: function () {
        count.textContent = Math.round(this.targets()[0].val);
      },
      scrollTrigger: {
        trigger: count,
        start: "top 60%", // Adjust as needed
        end: "bottom 60%",
      },
    }
  );
});
