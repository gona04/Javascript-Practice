/* function printName() {
    return "Goonja Gandhi"
}

function searchName() {
    function a() {
        return abc = "blaaaa";
    }
    return printName()
}

function actionToDo() {
    return searchName()
}

console.log(searchName().a()); */

function sayMyName() {
    var a = 'a';
    return function findMyName() {
        var b = 'b';
        console.log(c);
        return function printMyName() {
            var c = 'c';
            console.log('Goonja Gandhi');
        }
    }
}

sayMyName()()