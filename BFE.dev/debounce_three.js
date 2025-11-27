let searchData = document.getElementById('seach_data')
let wait;

searchData.addEventListener('input', (event) => {
    doIDoSomething(event.target.value)
})

function doIDoSomething(data) {
    clearTimeout(wait);
    wait = setTimeout(() =>{
        console.log(`Sending ${data} to backend`);
    }, 1000)
}