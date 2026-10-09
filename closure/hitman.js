function hitman() {
    let health = 100; 

    return function attacked() {
        return health-=5;
    }
}

const player1 = hitman();

console.log(player1());
console.log(player1())

const player2 = hitman();
console.log(player2());
