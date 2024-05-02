//owners=[{owner}]
owners=[]
pets=[]
//constructor functions
//{ownerName:string,Id:Number,phone:string,email:string, pets:[petId]}
function Owner(id,name,phone,email,pets) {
    this.id=id
    this.name=name
    this.phone=phone
    this.email=email
    this.pets=pets
}

function Pet(petId,petName,specie,breed,weight,condition,bdayDate,owner) {
    this.petId=petId
    this.petName=petName
    this.specie=specie
    this.breed=breed
    this.weight=weight
    this.condition=condition
    this.bdayDate=bdayDate
    this.age=age(this.bdayDate)
    this.owners=owner// for now on we are going to use only one owner, later we will use a set or an array
}
//create

function createOwner(identification,petId) {
    
    while ((identification==0)) {
        identification=prompt('Dijite una identificacion')
        if (Number.isNaN(parseInt(identification))==true) {
            alert('Numero de identificacion No valido')
            identification=0
        }
    
    }

    let name=prompt('Nombre del dueño')
    let phone=prompt('Telefono del dueño')
    let email=prompt('Correo electronico')
    let pets=[]
    if (petId==0) {
        createPet()
    }else{
        pets.push(petId)
    }

    const owner=new Owner(identification,name,phone,email,pets)
    owners.push(owner)
    alert('Registro Satisfactorio')
}

function createPet() {
    let petId=petId()
    let petName=prompt('nombre de la mascota:').toLowerCase()
    let specie= prompt('A que especie pertenece', 'Canino , felino, ave... etc').toLowerCase()
    let breed=prompt('Raza del animal',).toLowerCase()
    let weight=weightValidation()
    let condition=conditionStrtoBool() 
    let bday=new Date(prompt('Fecha de naciemiento (formato: AAAA/MM/DD) ','AAAA/MM/DD'))
    let owner =ownerValidator(petId)
    
    let pet= new Pet(petId,petName,specie,breed,weight,condition,bday,owner)
    
    pets.push(pet)
    alert('Cliente Creado satisfactoriamente')
}

//calculation


function age(bday) {
    let bdayDate= bday
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

function petId() { //Create a new Integer based on a date and the length of pets[]
    const actDay= new Date()
    // basic template for new pet: MMYYYYDDINDEX
    let template=`${actDay.getMonth()}${actDay.getFullYear()}${actDay.getDay()}${pets.length}`
    template=parseInt(template)
    return template
}

//validators
function weightValidation() {// returns the weifgh
    let data=prompt('Numero del peso del animal(KG)','25')
    data= (Number.isNaN(parseInt(data))==false)? parseInt(data):weightValidation() // if weight different for NaN, return a wieght in number, else strarts a recursive loop 
    return data
} 
//param=(OwnerID:Number, PetId: )
function ownerValidator(petId) { // returs id or a the creation of a new owner
     // i can do a generic validator but it will cost a lot of time, future versions will use it
    //try to typecast to Number
    let ownerId=prompt('Numero de identificacion')
    if (Number.isNaN(parseInt(ownerId))==true){ //IS NAN: restart
        alert('Se requiere un numero')
        ownerValidator()
    }else{
        ownerId=parseInt(ownerId)
    }
    //esxistance of owner in the database
    let indexowner=owners.findIndex(owner => owner.Id === ownerId);
    if (indexowner==-1) {//doesn't exist owner yet
        alert('se necesita registrar')
        createOwner(0,petId)
        return ownerId
    }else{//alredy existing owner
        return ownerId
    }


}
//Converters
function conditionStrtoBool() { //returns teh value of true or false form a prompt of healtiness
    let condition = prompt('Estado de salud de la mascota', 'estable/critico').toLowerCase()
    return (condition=='estable')? true:false 
    
} 
function conditionBooltoStr(condition) { //returns the strings values of healtiness
    return (condition==true)? 'Estable':'Critico' 
} 

//templates
