import * as ownerCode from './owners.js'
import * as petCode from './pets.js'

//gettin the html section by id
let idSection= document.querySelector('#all-pets')
pets.forEach(pet => {
    idSection.innerHTML+=petCode.template(pet)
});

let ownersection= document.querySelector('#all-owners')
owners.forEach(pet => {
    ownersection.innerHTML+=ownerCode.template(pet)
});
//iterating to print the lements

//send all the cards back to the hmtl