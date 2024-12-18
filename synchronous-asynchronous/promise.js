function getWeather() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('You got it');
        }, 100)
    })
}

function onSuccess(data) {
    console.log(`Success ${data}`);
}

function onError(error) {
    console.log(`Error: ${error}`);
}

getWeather().then(onSuccess, onError);