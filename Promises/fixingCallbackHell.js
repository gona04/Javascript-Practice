getBackendData("GET", "https://jsonplaceholder.typicode.com/users/")
.then((userData) => {return getBackendData(`GET`, `https://dummyjson.com/posts/user/${userData[5].id}`)})
.then((postData) => {return getBackendData(`GET`, `https://dummyjson.com/comments/post/${postData.posts[2].id}`)})
.then((commentData) => {return getBackendData(`GET`, `https://dummyjson.com/users/${commentData.comments[0].user.id}`)})
.then((userData) => {console.log(userData)});

function getBackendData(method, url) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.addEventListener("load", () => {
      resolve(xhr.response);
    });

    xhr.open(method, url, true);
    xhr.send();
  });

  return promise;
}
