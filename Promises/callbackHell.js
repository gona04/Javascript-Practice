// Description: Callback Hell example
getHttpRequest('GET','https://dummyjson.com/users/', (userData) => {
    getHttpRequest('GET',`https://dummyjson.com/posts/user/${userData.users[5].id}`, (postData) => {
        getHttpRequest('GET',`https://dummyjson.com/comments/post/${postData.posts[2].id}`, (commentData) => {
            getHttpRequest('GET', `https://dummyjson.com/users/${commentData.comments[0].user.id}`, (userData) => {
                console.log(userData);
            });
        });
    });
});

function getHttpRequest(method, url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.addEventListener('load', () => {
    callback(xhr.response);
  });
  xhr.open(method, url, true);
  xhr.send();
}