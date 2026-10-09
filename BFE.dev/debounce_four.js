const search_input = document.getElementById('seach_data');

search_input.addEventListener('input', (event) => {
    doIDoSomething(event.target.value);
})

const doIDoSomething = debounce((data) => {
    console.log(data)
}, 1000)

function debounce(fn, delay) {
    let wait; 

    return function(...args) {
        clearTimeout(wait);
        wait = setTimeout(() => {
            fn.apply(this,args)
        }, delay);
    }
}