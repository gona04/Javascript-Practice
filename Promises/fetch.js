// fetch('https://dummyjson.com/products', {method: 'GET'})
// .then(response => response.json())
// .then((d) => console.log(d))
    /*
        doesnt return readable doata to make it readable we use json()
        console.log(response);
        response.json() => return promise
        console.log(response.json());
    */

    //POST request
    fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: 'BMW Pencil',
          /* other product data */
        })
      })
      .then(res => res.json())
      .then(console.log);
  