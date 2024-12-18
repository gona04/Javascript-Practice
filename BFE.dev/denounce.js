function debounce(func, wait) {
    console.log('Here', func.name, wait);
    return function(...args) {
      console.log(args);
    }
  }

  const method = debounce(() => {console.log('Hey')}, 1000)
  method();