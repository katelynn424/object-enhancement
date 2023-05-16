function createInstructor(firstName, lastName) {
    return {
        firstName, 
        lastName
    }
};

let favoriteNumber = 42;
const instructor = {
    firstName: 'colt',
    [favoriteNumber]: 'that is my favorite'
};

const instructor = {
    firstName: 'colt',
    sayHi(){
        return 'hi!';
    },
    sayBye(){
        return this.firstName + "says bye! ";
    }
};

function createAnimal (species, verb, noise){
    return {
        species, 
        [verb](){
            return noise;
        }
    }
}