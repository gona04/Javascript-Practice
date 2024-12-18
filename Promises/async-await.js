async function makeAsyncRequest() {
   const response = await fetch('https://procodrr.vercel.app/?sleep=5000');
   const data = console.log(await response.json());
   console.log("Hello");
}

function doSomethingElse() {
    console.log("I am doing something else");
}

function makeSyncRequest() {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', () => {
        console.log('Data fetched');
        console.log(xhr.response);
    });
    xhr.open('GET', 'https://procodrr.vercel.app/?sleep=2000', false);
    xhr.send();
   if(xhr.status === 200) {
   } else {
         console.log('Request failed');
   }
}
makeSyncRequest();
makeAsyncRequest();
doSomethingElse();
