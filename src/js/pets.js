import * as own from "./owners.js"


export function Pet(petId, petName, specie, breed, weight, condition, bdayDate, owner, imgLink) {
    this.petId = petId
    this.petName = petName
    this.specie = specie
    this.breed = breed
    this.weight = weight
    this.condition = condition
    this.bdayDate = bdayDate
    this.age = age(this.bdayDate)
    this.owners = owner// for now on we are going to use only one owner, later we will use a set or an array
    this.imgLink= imgLink
}

//calculation

//age calculator
export function age(bday) {
    let bdayDate = bday
    let ActualDay = new Date();
    let age = ActualDay.getFullYear() - bdayDate.getFullYear();
    let mesActual = ActualDay.getMonth();
    let mesNacimiento = bdayDate.getMonth();
    //ngl this part of code is taked from Chat gpt
    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && ActualDay.getDate() < bdayDate.getDate())) {
        age--;
    }

    return age;
}
//pet id generator
export function petId() { //Create a new Integer based on a date and the length of pets[]
    const actDay = new Date()
    // basic template for new pet: MMYYYYDDINDEX
    let template = `${actDay.getMonth()}${actDay.getFullYear()}${actDay.getDay()}${pets.length}`
    template = parseInt(template)
    return template
}

//validators
export function weightValidation() {// returns the weifgh
    let data = prompt('Numero del peso del animal(KG)', '25')
    data = (Number.isNaN(parseInt(data)) == false) ? parseInt(data) : weightValidation() // if weight different for NaN, return a wieght in number, else strarts a recursive loop 
    return data
}
//Converters
export function conditionStrtoBool() { //returns teh value of true or false form a prompt of healtiness
    let condition = prompt('Estado de salud de la mascota', 'estable/critico').toLowerCase()
    return (condition == 'estable') ? true : false

}
export function conditionBooltoStr(condition) { //returns the strings values of healtiness
    return (condition == true) ? 'Estable' : 'Critico'
}

//create

export function createPet() {
    let id = petId()
    let petName = prompt('nombre de la mascota:').toLowerCase()
    let specie = prompt('A que especie pertenece', 'Canino , felino, ave... etc').toLowerCase()
    let breed = prompt('Raza del animal',).toLowerCase()
    let weight = weightValidation()
    let condition = conditionStrtoBool()
    let bday = new Date(prompt('Fecha de naciemiento (formato: AAAA/MM/DD) ', 'AAAA/MM/DD'))
    let owner = own.ownerValidator(id)
    let img= prompt('Url de foto de la mascota')// Featurae that might be changed for a uploading of a real photo

    let pet = new Pet(id, petName, specie, breed, weight, condition, bday, owner,img)

    pets.push(pet)
    alert('Cliente Creado satisfactoriamente')
}


//read pets
function imgLinkValidator(img) {
    if (img=='' || img== undefined) {
        return 'https://img.freepik.com/vector-premium/icono-marco-fotos-foto-vacia-blanco-vector-sobre-fondo-transparente-aislado-eps-10_399089-1290.jpg'
    }else{
        return img
    }
    
}
//template for read:
//{ petId: 4202440, petName: "lamela", specie: "canino", breed: "pastor belga", weight: 25, condition: true, bdayDate: Date('Sun Feb 23 2020 00:00:00 GMT-0500 (Colombia Standard Time'), age: 4, owners: 1007226999 }
export function template(pet) {
    
    return `<div class="card p-2 " style="width: 18rem;"> 
    <!-- para img usaremos el nombre del archivo -->
    <img src="${imgLinkValidator(pet.imgLink)}" class="card-img-top h-50" alt="...">
    <div class="card-body">
        <p class="card-text">${pet.petId}</p>
        <h5 class="card-title text-capitalize">${pet.petName}</h5>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item text-capitalize">Especie: ${pet.specie}</li>
        <li class="list-group-item text-capitalize">raza: ${pet.breed}</li>
        <li class="list-group-item text-capitalize">estado: ${conditionBooltoStr(pet.condition)}</li>
    </ul>
    <div class="card-body">
        <a href="#${pet.owner}" class="card-link"> Owner ${pet.owner}</a>
        <a href="#" class="card-link">Another link</a>
    </div>
</div>
    `
}
//listing pets
export function readPets(petArr) {
    petArr.forEach(pet => {
        console.log(template(pet))// redo whit template
    });

}

//searchig pets
// by name : supossing lot of pets can be named the same
export function searchPetByName() {
    let petName = prompt('Nombre de la mascota')
    let arrPetFiltered= pets.filter(pet=>pet.petName===petName)
    arrPetFiltered.forEach(petFiltered => {
        console.log(template(petFiltered))
    });
}

