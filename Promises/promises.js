const resolveBtn = document.getElementById('resolve-btn');
const rejectBtn = document.getElementById('reject-btn');
/*
    functions that can be called only after adding new keyword
    are called constructor functions
*/
const p = new Promise((resolve, reject) => {
    resolveBtn.addEventListener('click', () => {
        resolve('Promise resolved');
    });

    reject.addEventListener('click', () => {
        reject('Promise rejected');
    });
});
