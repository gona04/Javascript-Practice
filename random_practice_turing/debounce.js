const textInput = document.getElementById("question");

textInput.addEventListener("keyup", () => {
    console.log('from keyup')
  console.log(textInput.value);
  debounce(1000)

});

let timer;
 function debounce( time) {
   timer = setTimeout(() => {
        clearTimeout(timer); 
        console.log('in setTimeout')
        console.log(textInput.value);
    }, time)
}

