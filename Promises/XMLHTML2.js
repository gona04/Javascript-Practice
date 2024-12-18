const xhr = new XMLHttpRequest();

xhr.addEventListener('load', () => {
    console.log('Data fetched');
    console.log(xhr.response); 
});
// xhr.responseType = 'json';
//synchronous request
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', false);
// Asynchronous request AJAX
xhr.open('GET', 'https://procodrr.vercel.app/?sleep=5000', false);
xhr.send();
