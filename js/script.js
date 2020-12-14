const wrapper = document.querySelector(".wrapper");

function throttle(func, interval) {
  let lastCall = 0;
  return function () {
    let now = Date.now();
    if (lastCall + interval < now) {
      lastCall = now;
      return func.apply(this, arguments);
    }
  };
}
let funscroll = (e) => {
  if (e.deltaY > 0) {
    window.scrollBy({
      top: document.documentElement.clientHeight,
      behavior: "smooth",
    });
  } else {
    console.log(document.documentElement.clientHeight);
    window.scrollBy({
      top: -document.documentElement.clientHeight,
      behavior: "smooth",
    });
  }
};
let funclimit = throttle(funscroll, 600);
wrapper.addEventListener("wheel", funclimit);

