function fetchTries(fn, noOfTries) {

        fn().then(res => res.json()).then(res => console.log(res)).catch(err => {
            if(err) {
                for(let i = 0; i < noOfTries; i++) {
                    fetchTries(() => {return fetch('https://dog.ceo/api/breeds/image/random')},i)
                }
            }
        })
   
} 


fetchTries(() => {
   return fetch('https://dog.ceo/api/bre')
}, 3)