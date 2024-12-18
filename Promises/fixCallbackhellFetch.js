// https://jsonplaceholder.typicode.com/users/
// https://dummyjson.com/posts/user/${userData[5].id}
// https://dummyjson.com/comments/post/${postData.posts[2].id}
// https://dummyjson.com/users/${commentData.comments[0].user.id}

// The fetch API is a modern replacement for XMLHttpRequest. It is a promise-based API that returns promises.
// The fetch API is built into the global window object, which means it is available globally.
// The fetch API is not supported in Internet Explorer.
// The fetch API is a more powerful and flexible API than XMLHttpRequest.
fetch('https://jsonplaceholder.typicode.com/users/')
.then(response => response.json())
.then(userData => fetch(`https://dummyjson.com/posts/user/${userData[5].id}`))
.then(postData => postData.json())
.then(postData => fetch(`https://dummyjson.com/comments/post/${postData.posts[2].id}`))
.then(commentData => commentData.json())
.then(commentData => fetch(`https://dummyjson.com/users/${commentData.comments[0].user.id}`))
.then(userData => console.log(userData.json()))
.catch(error => console.log(error));