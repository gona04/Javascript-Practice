function handleSearch(event) {
  let target = event.target.value;
  console.log(event.target.value);
  implDebounce(target);
}

let implDebounce = debounce(callBackend, 2000);

function debounce(fn, time) {
  let wait;

  return function (value) {
    clearTimeout(wait);
    wait = setTimeout(() => fn(value), time);
  };
}

function callBackend(...args) {
  console.log(...args, "Backend called");
}
