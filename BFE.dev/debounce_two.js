const searchFor = document.getElementById('search-data');

let timeout;

function debounce(value) {
    //First it will clear the timeout as soon as something is written in the input
    clearTimeout(timeout);
    // if time passes and the user writes nothing then it will execute the fn in setTimeout
    timeout = setTimeout(() => {
        console.log('go to backend with '+value);
    }, 5000)
}

searchFor.addEventListener('keyup', (event) => {
    debounce(event.target.value)
})

