function two() {
    var isValid;
}

function one() {
    var isValid = true;
    two();
}

var isValid = false;
one();


//two()-- undefined
//one()-- true
//global()-- false