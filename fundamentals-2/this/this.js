/* This represents the object that the function is a property of  */
/* const obj = {
    name: 'Goonja',
    sing() {
        return `Hello ${this.name}`
    },
    signAgain() {
        return this.sing() + `, hope you're keeping okay!`
    }
}

console.log(obj.signAgain()) */

/* const obj = {
    name: 'Goonja',
    sing() {
        console.log('a', this);
        const anotherFunc = function() {
            console.log('b', this);
        }
        // return `Hello ${this.name}`
        anotherFunc();
    },
    
}

obj.sing(); */

/* const obj = {
    count: 0,
    increment: function () {
        console.log(this.count);
        function inner() {
            console.log(this.count);
        }
        inner();
    },
};

obj.increment(); */

const a = {
    a: function() {
        console.log('a', this);
        b = () => {
            console.log('b', this);
            c = () => {
                console.log('c', this);
            }
            c();
        }
        b();
    }
}

a.a();