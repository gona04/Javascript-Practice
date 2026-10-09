function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }
  console.log(inner[[Environment]])
  return inner;
}

const fn = outer();
fn();
fn();
fn(); 

