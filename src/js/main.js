//owners=[{owner}]
let owners=[{ id: 1007226999, name: "Santiago Castro", phone: "3224495321", email: "sacastro@unal.edu.co", pets:[4202440] }]
let pets=[{ petId: 4202440, petName: "lamela", specie: "canino", breed: "pastor belga", weight: 25, condition: true, bdayDate: Date ('Sun Feb 23 2020 00:00:00 GMT-0500 (Colombia Standard Time'), age: 4, owners: 1007226999 }]
//constructor functions
//{ownerName:string,Id:Number,phone:string,email:string, pets:[petId]}
function Owner(id,name,phone,email,pets) {
    this.id=id
    this.name=name //change for name and lastname
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

//calculation

//age calculator
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
//pet id generator
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
//let the user chose betwen the register of an owner or a pet
function HumanOAnimalSelector(operacion) {
    let selec =prompt(`Desea ${operacion} el registro de:
    1:Mascota
    2:Cliente
    b:atras`).toLowerCase()
    switch (selec) {
        case '1': // pet 
            return 0

        case '2'://owner
        return  1

        case 'b':
            retunMenu()
        break;
        default:
            console.error('No opcion seleccionable')
            HumanOAnimalSelector();
            break;
    }
    
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
        createOwner(ownerId,petId)
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

//create

function createOwner(identification,petId) {
    
    while ((identification==0)) {
        identification=prompt('Dijite una identificacion')
        if (Number.isNaN(parseInt(identification))==true) {
            alert('Numero de identificacion No valido')
            identification=0
        }
    
    }
    identification=parseInt(identification)

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
    let id=petId()
    let petName=prompt('nombre de la mascota:').toLowerCase()
    let specie= prompt('A que especie pertenece', 'Canino , felino, ave... etc').toLowerCase()
    let breed=prompt('Raza del animal',).toLowerCase()
    let weight=weightValidation()
    let condition=conditionStrtoBool() 
    let bday=new Date(prompt('Fecha de naciemiento (formato: AAAA/MM/DD) ','AAAA/MM/DD'))
    let owner =ownerValidator(id)
    
    let pet= new Pet(id,petName,specie,breed,weight,condition,bday,owner)
    
    pets.push(pet)
    alert('Cliente Creado satisfactoriamente')
}

//read: list
//Object { id: "1007226999", name: "Santiago Castro", phone: "3224495321", email: "sacastro@unal.edu.co", pets: (1) […] }
function readOwners() {
    owners.forEach(owner => {
        console.log(owner)
    });
}

function readPets() {
    pets.forEach(pet => {
        console.log(pet)
    });
    
}


//templates
//template to return main Menu
function retunMenu() {// only restart all the 
    console.error('Volviendo Al menu principal')
    MainMenu()
    
}


//Main Menu
function MainMenu() {
    let input= prompt(`bienvenido al menu, elija su opcion
    1: Crear un nuevo registro
    2: buscar en la base datos(mascota o propietario)
    3: Acrtualizar registro
    4: Eliminar registro
    Escribe "s" para salir
    `).toLowerCase()
    switch (input) {
        case '1'://Create
        if(HumanOAnimalSelector('crear')==0){// function returns:0, pet option
            createPet()
        }else{//function returns :1, owner option
            createOwner(0,0)
        }
        
        case '2'://read
        
        if(HumanOAnimalSelector('Listar')==0){// function returns:0, pet option
            readPets()
        }else{//function returns :1, owner option
            readOwners()
        }
        break;


        case '3'://update
        
        if(HumanOAnimalSelector('actualizar')==0){// function returns:0, pet option
            
        }else{//function returns :1, owner option

        }
        break;

        
        case '4'://Delete
        
        if(HumanOAnimalSelector('eliminar')==0){// function returns:0, pet option
            
        }else{//function returns :1, owner option

        }
        break;

        case 's'://exit
        return 0

        default:
            console.error('No opcion seleccionable')
            MainMenu()
            break;
    }
    
}

// Execution
MainMenu()