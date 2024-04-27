let pets=[]

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
        if(HumanOAnimalSelector()==0){// function returns:0, pet option
            NewPet()
        }else{//function returns :1, owner option
            NewOwner()
        }
        
        case '2'://read
        
        if(HumanOAnimalSelector()==0){// function returns:0, pet option
            
        }else{//function returns :1, owner option

        }
        break;
        case '3'://update
        
        if(HumanOAnimalSelector()==0){// function returns:0, pet option
            
        }else{//function returns :1, owner option

        }
        break;
        case '4'://Delete
        
        if(HumanOAnimalSelector()==0){// function returns:0, pet option
            
        }else{//function returns :1, owner option

        }
        break;

        case 's'://exit
        return 0
        break;

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
*/

//selector betwen animal or human registers
function HumanOAnimalSelector() {
    let selec =prompt(`Elimiarn registro de:
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
//Animal register CRUD
// {name:String,specie:string,breed:string,b-day:Date,,condition:Boolean}
//create
function NewPet() {//creates a new object pet
    //many animals can have same properties( you cant validate if exist bay traditional way)
    //it will be a lot of prompts
    
}


//Owner Register Crud
function NewOwner() {
    
}

MainMenu()