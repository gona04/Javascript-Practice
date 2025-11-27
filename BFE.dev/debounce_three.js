let searchData = document.getElementById("seach_data");

searchData.addEventListener("input", (event) => {
  doIDoSomething(event.target.value);
});

const doIDoSomething = debounce((data) => {
    console.log(`Sending ${data} to backend`);
  }, 1000);


function debounce(fn, delay) {
  let wait;
  return function (...args) {
    clearTimeout(wait);
    wait = setTimeout(() => {
      fn.apply(this,args);
    }, delay);
  };
}
