//constructor functions
//{ownerName:string,Id:Number,phone:string,email:string, pets:[petId]}
export function Owner(id,name,phone,email,pets) {
    this.id=id
    this.name=name //change for name and lastname
    this.phone=phone
    this.email=email
    this.pets=pets
}

//param=(OwnerID:Number, PetId: )
export function ownerValidator(petId) { // returs id or a the creation of a new owner
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
    let indexowner=owners.findIndex(owner => owner.id === ownerId);
    if (indexowner==-1) {//doesn't exist owner yet
        alert('se necesita registrar')
        createOwner(ownerId,petId)
        return ownerId
    }else{//alredy existing owner
        return ownerId
    }


}
//create

export function createOwner(identification,petId) {
    
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

//read: list
//printing template
export function template(owner) { // REDO function to doit whit html
    
    return `
    <div class="card border-dark mb-3" style="max-width: 18rem;">
    <div class="card-header">${owner.id}</div>
    <div class="card-body">
        <h5 class="card-title text-capitalize">${owner.name}</h5>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Telefono: <a href="tel:+${owner.phone}">${owner.phone}</a></li>
            <li class="list-group-item">Email: <a href="mailto:${owner.email}">${owner.email}</a></li>
            
        </ul>
    </div>
</div>

    `
}


//Object { id: "1007226999", name: "Santiago Castro", phone: "3224495321", email: "sacastro@unal.edu.co", pets:[pet.id] }

export function readOwners() {
    owners.forEach(owner => {
        console.log(template(owner)) // use to print
    });
}

//update
