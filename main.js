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
            console.log('nas')
        }else{//function returns :1, owner option

        }
        
        case '2'://read
        case '1'://Create
        if(HumanOAnimalSelector()==0){// function returns:0, pet option
            
        }else{//function returns :1, owner option

        }
        break;
        case '3'://update
        case '1'://Create
        if(HumanOAnimalSelector()==0){// function returns:0, pet option
            
        }else{//function returns :1, owner option

        }
        break;
        case '4'://Delete
        case '1'://Create
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
    /**/
    switch (selec) {
        case '1': // case 
            return 0
            break;
        case '2'://owner
        return 
        break;
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

//Owner Register Crud

MainMenu()