const btnResolve = document.getElementById('resolve-btn');
const btnReject = document.getElementById('reject-btn');

const p = new Promise((resolve, reject) => {
    btnResolve.addEventListener('click', () => {
        getBackendData('GET', 'https://jsonplaceholder.typicode.com/users', (userData) => {
            resolve(userData);
        });
    });
    btnReject.addEventListener('click', () => {
        reject('Dint go to the URL');
    });
})

const pPd = p.then((uD) => {
    // console.log(uD[5].id);
    let pd;
    getBackendData(`GET`, `https://dummyjson.com/posts/user/${uD[5].id}`, (postData) => {
        pd = postData;
        console.log(postData)
    });
}).then((data) => console.log(data))

function getBackendData(method, url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.send();

    xhr.onload = function () {
        if (xhr.status === 200) {
            callback(JSON.parse(xhr.response));
        } else {
            console.log('xhr did not load');
        }
    }
}