const mathContext = { label: "Sum:" };

function add(a, b, c) {
  console.log(this.label, a + b + c);
}

add.apply(mathContext, [2, 3, 5]);