document.addEventListener("click", (e) => {
  const x = e.clientX;
  const y = e.clientY;
  const body = document.querySelector("body");
  const circleArray = document.querySelectorAll("div");
  if (circleArray.length == 2) {
    circleArray.forEach((e) => {
      body.removeChild(e);
    });
  }

  console.log(x);
  console.log(y);
  const radius = Math.random();
  const circle = document.createElement("div");

  circle.style.border = "1px solid";
  circle.style.position = "absolute";
  circle.style.left = x + "px";
  circle.style.top = y + "px";
  circle.style.width = radius * 100 + "px";
  circle.style.height = radius * 100 + "px";
  circle.style.borderRadius = "50%";

  console.log(circleArray);
  body.append(circle);
});
