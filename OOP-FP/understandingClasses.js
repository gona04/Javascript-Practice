/* 
    Basic start 
    Has encapsulation but,
    Does not follow DRY... 
*/
const elf = {
    name: 'Goonja',
    wepon: 'arrow',
    attack() {
        return `${this.name} attacks with ${this.wepon}`
    }
}

const elf2 = {
    name: 'Sally',
    wepon: 'gun',
    attack() {
        return `${this.name} attacks with ${this.wepon}`
    }
}
console.log(elf.name);
console.log(elf.attack());
console.log(elf2.attack());

/* 
    Factory Functions  
    Function that creates objects for us.
*/

function createElf(name, wepon) {
    return { 
        name, 
        wepon, 
        attack() {
            console.log(`${name} destroys using ${wepon}`)
        }
    }
}

const peter = createElf('Peter', 'stone');
peter.attack();

const sam = createElf('Sam', 'fire');
sam.attack();



