// This is a JavaScript Quiz from BFE.dev

const obj = {
    dev: 'bfe',
    a: function() {
      return this.dev
    },
    b() {
      return this.dev
    },
    c: () => {
      return this.dev
    },
    d: function() {
      return (() => {
        return this.dev
      })()
    },
    e: function() {
      return this.b()
    },
    f: function() {
      return this.b
    },
    g: function() {
      return this.c()
    },
    h: function() {
      return this.c
    },
    i: function() {
      return () => {
        return this.dev
      }
    }
  }
  
  console.log(obj.a())
  console.log(obj.b())
  console.log(obj.c())
  console.log(obj.d())
  console.log(obj.e())
  console.log(obj.f()())
  console.log(obj.g())
  console.log(obj.h()())
  console.log(obj.i()())


/*
My predictions:

undefined
'bfe' <- correct
undefined <- correct
undefined 
'bfe' <- correct
'bfe'
undefined 
error
undefined */