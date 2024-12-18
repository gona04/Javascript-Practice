// This is a JavaScript Quiz from BFE.dev


/* const obj = {
    a: 1,
    b: function() {
      console.log(this.a)
    },
    c() {
      console.log(this.a)
    },
    d: () => {
      console.log(this.a)
    },
    e: (function() {
      return () => {
        console.log(this.a);
      }
    })(),
    f: function() {
      return () => {
        console.log(this.a);
      }
    }
  }
  
  console.log(obj.a)
  obj.b()
    (obj.b)()
  const b = obj.b
  b()
  obj.b.apply({a: 2})
  obj.c()
  obj.d()
  ;(obj.d)()
  obj.d.apply({a:2})
  obj.e()
  ;(obj.e)()
  obj.e.call({a:2})
  obj.f()()
  ;(obj.f())()
  obj.f().call({a:2}) */


/*   
  1
  1
  1
  undefined
  2
  1
  undefined
  undefined
  undefined
  undefined
  undefined
  undefined
  1
  1
  1
  */

  function rN() {
    console.log(this.name);
  }
  let obj1 = {
    name: 'gg',
    resetName: rN
  }
  let obj2 = {
    name: 'bb',
    // resetName: rN
  }
  
  const a = obj1.resetName.bind(obj2)
  a();