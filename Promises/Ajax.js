const xhr = new XMLHttpRequest();

console.log(xhr); // 0

// xhr.responseType = 'json';
xhr.addEventListener('load', () => {
  console.log(xhr.response); // JSON
});
    //once we write false it becomes a synchronous request
    //xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', false);
    //but writing true makes it asynchronous
  xhr.open('GET', 'https://procodrr.vercel.app/?sleep=5000', true);
  xhr.send();
