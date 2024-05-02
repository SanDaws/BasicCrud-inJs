import * as owner from './owners.js'
import * as pet from './pets.js'

console.log(owner.readOwners())

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
            pet.createPet()
        }else{//function returns :1, owner option
            owner.createOwner(0,0)
        }
        
        case '2'://read
        
        if(HumanOAnimalSelector('Listar')==0){// function returns:0, pet option
            pet.readPets()
        }else{//function returns :1, owner option
            owner.readOwners()
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