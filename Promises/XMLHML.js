const xhr = new XMLHttpRequest();

console.log(xhr);

xhr.responseType = 'json';
xhr.addEventListener('load', () => {
  console.log(xhr.response); // JSON
});
setTimeout(() => {
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', false);
  xhr.send();
},1000);