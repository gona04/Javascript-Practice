const searchInput = document.getElementById('seach_data');

searchInput.addEventListener('input', (event) => {
    checkForChanges(event.target.value);
})

const checkForChanges = throtelling()

function throtelling() {
    return function check(...args) {
        if(args.length === 1) {
            return check.bind(this,args)
        }
        console.log(args.length);
     }
}