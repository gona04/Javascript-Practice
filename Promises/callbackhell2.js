
getBackendData('GET', 'https://jsonplaceholder.typicode.com/users/', (userData) => {
  getBackendData(`GET`, `https://dummyjson.com/posts/user/${userData[5].id}`, (postData) => {
    getBackendData(`GET`, `https://dummyjson.com/comments/post/${postData.posts[2].id}`, (commentData) => {
        getBackendData(`GET`, `https://dummyjson.com/users/${commentData.comments[0].user.id}`, (userData) => {
            console.log(userData);
        });
    });
  });
});

function getBackendData(method, url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.addEventListener('load', () =>{
        callback(xhr.response);
    });

    xhr.open(method, url, true);
    xhr.send();    
}