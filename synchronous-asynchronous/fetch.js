const users = fetch('https://bible-api.com/john%203').then(resolve => {
  return resolve.json()
}).then(data => {
  // console.log(data)
  data.verses.forEach(user => {
    console.log(user);
  })
})

console.log(users);