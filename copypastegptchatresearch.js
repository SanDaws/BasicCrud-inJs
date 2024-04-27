// Supongamos que tienes un arreglo de objetos llamado "arregloObjetos"
const arregloObjetos = [/* aquí van tus objetos */];

// Objeto que quieres verificar si existe en el arreglo
const nuevoObjeto = {/* aquí va tu nuevo objeto */};

// Función de comparación para verificar si dos objetos son iguales
function sonIguales(obj1, obj2) {
    // Aquí debes implementar la lógica de comparación
    // Por ejemplo, si los objetos son simples y no anidados,
    // puedes utilizar JSON.stringify para comparar sus representaciones en cadena.
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}

// Verificar si el nuevo objeto es igual a alguno de los objetos en el arreglo
const objetoExistente = arregloObjetos.some(obj => sonIguales(obj, nuevoObjeto));

if (objetoExistente) {
    console.log('El objeto ya existe en el arreglo.');
} else {
    console.log('El objeto es único en el arreglo.');
}
