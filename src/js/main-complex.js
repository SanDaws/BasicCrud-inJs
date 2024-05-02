
// 2. Ver la lista de todas las mascotas registradas, en dicho array.
// 3. Ver una lista de todos los dueños
// 4. Buscar una mascota por el nombre
// 5. Filtrar y luego mostrar a todas las mascotas pertenecientes a un mismo dueño
// 6. Actualizar la información de una mascota existente.
// 7. Eliminar una mascota del array.

//this will simulate an datebase when use all the elements that we get in a  public way

//main menu ``
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
            NewPet()
        }else{//function returns :1, owner option
            NewOwner()
        }
        
        case '2'://read
        
        if(HumanOAnimalSelector('Listar')==0){// function returns:0, pet option
            listPets()
        }else{//function returns :1, owner option
            listOwners()
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
//generic reponse
function retunMenu() {// only restart all the 
    console.error('Volviendo Al menu principal')
    MainMenu()
    
}

/*
convention that will repeat among all the code:
0: pet/animal
1:owner/ human
for condition of pets:
false: critic condition
true: healty condition
*/
//general area

function existence(id) {
    let indexowner=owners.findIndex(ownerId => ownerId.Id === id);
    if (indexowner!=-1) {
        return indexowner
    }
}

//selector betwen animal or human registers
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


//general area
//age calculator

//template of owner
//{ownerName:string,Id:Number,phone:string,email:string, pets:[petId]}
let owners=[{ownerName:'santiago castro giraldo',Id:'1007226999',phone:'+57322484651',email:'castrogiraldosantiago@gmail.com', petsOwned:['0000000000']}]

//template to storage objects 
//{animal,animal,animal}
let pets=[{petId:'0000000000',petName:'Brunito',species:'loro',breed:'Australiano',weight:5,bDay:new Date('2020/05/12'),age:'4',condition:true,owner:['1007226999']}]
// i have to burn a number in age value, because in other way it not going to use the function 
//create

function NewPet() {//creates a new object pet
    //many animals can have same properties( you cant validate if exist by traditional way)
    //it will be a lot of prompts
    let pet={
    petId:petId(),
    petName:prompt('nombre de la mascota:').toLowerCase(),
    specie: prompt('A que especie pertenece', 'Canino , felino, ave... etc').toLowerCase(),
    breed:prompt('Raza del animal',).toLowerCase(),
    weight:weightValidation(),
    condition:condition() ,
    bday:new Date(prompt('Fecha de naciemiento (formato: AAAA/MM/DD) ','AAAA/MM/DD')),
    age:calAge(bday),
    calAge:function () {
        let bdayDate= pet['bDay']
        let ActualDay = new Date();
        let age = ActualDay.getFullYear() - bdayDate.getFullYear();
        let mesActual = ActualDay.getMonth();
        let mesNacimiento = bdayDate.getMonth();
            //ngl this part of code is taked from Chat gpt
        if (mesActual < mesNacimiento || (mesActual === mesNacimiento && ActualDay.getDate() < bdayDate.getDate())) {
            age--;
        }
    
        return age;
    },
    owner:pushPetOwner()//returns 
    //in this case i'm going to say you can onli have one owner, later i will use an array to save more than one owner
    }
    
    pets.push(pet)
    
    window.alert('Mascota agregada satisfactoriamente')
    HumanOAnimalSelector()

}

function pushPetOwner() {// retunr a number that i will use to look when i have to do search about owner in the pet array
    let idOwner=prompt('Documento de identidad del dueño')
    let indexowner=owners.findIndex(ownerId => ownerId.Id === idOwner);
    if (indexowner==-1) {
        alert('se necesita registrar')
        return NewOwner()
    }else{
        return ownerId.Id
    }
}

function condition() { 
    let condition = prompt('Estado de salud de la mascota', 'estable/critico').toLowerCase()
    return (condition=='estable')? true:false //returns teh value of true or false form a prompt of healtiness
    
} 
function weightValidation() {
    let weight=prompt('Numero del peso del animal(KG)','25')
    return (Number.isNaN(parseInt(weight))==false)? parseInt(weight):prompt('Numero incorrecto, ingrese Un NUMERO')
}
function petId() {
    let position=  pets.length
    position=position.toString()
    position= position.padStart(10,'0')
    return position
}


//Owner create

// let owners=[{ownerName:'santiago castro giraldo',Id:'1007226999',phone:'+57322484651',email:'castrogiraldosantiago@gmail.com', petsowned:['0000000000']}]
function NewOwner() {
    let owner={
        id:prompt('Numero de identificacion del dueño'),
        name:prompt('Nombre del dueño'),
        phone:prompt('telefono de contacto'),
        email:prompt('correo electronico de contacto'),
        petsOwned:[],
        arryPetsOwned:function () {

            pets.forEach(pet => {
                if (pet.owner==this.id){
                    this.petsOwned.push(pet.petId)
                }
        })
    }
    }
    owners.push(owner)
    
    window.alert('Dueño agregada satisfactoriamente')
    return owner.id
}


//read
//template for pets
function petTemplate(objPet) {
    return `Id:${objPet['petId']}
    Nombre:${objPet['petName']} Edad: ${objPet['age']} 
    fecha de nacimiento: ${objPet['']} 
    especie: ${objPet['specie']}  raza:${objPet['breed']} 
    peso:${objPet['weight']}  condicion:${objPet['']} 
    dueño:${objPet['owner']} `
    
}
//read pets
function listPets() {

    pets.forEach(pet => {
        petTemplate(pet)
        
    });
    
}
//read owners
function listOwners() {
    
}



//main execution

MainMenu()





//review what happen when you delete an object that contain other object in it


// let petName='Arturo'
// let specie= 'perico'
// let breed= 'Australiano'
// let bday= new Date()
// let condition= true

// let petowner='jajajavier'
// let ownerid='100722'
// let phone='322'
// let email='a@gmail.com'

