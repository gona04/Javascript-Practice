

// This is a JavaScript coding problem from BFE.dev 

/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(fn) {
    return function implCurry(...args) {
      // if enough arguments then call the fn
      if(arguments.length >= fn.length) {
        return fn.apply(this, args)
      } else {
        return function (...args2) {
          return implCurry.apply(this, args.concat(args2))
        }
      }
    }
  }
  
  function join(a,b,c) {
    return `${a}_${b}_${c}`
  }
  
  const curriedJoin = curry(join);
  console.log(curriedJoin(1, 2, 3)); // '1_2_3'
  console.log(curriedJoin(1)(2, 3)); // '1_2_3'
  console.log(curriedJoin(1, 2)(3)); // '1_2_3'