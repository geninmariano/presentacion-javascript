const datosPersonales =[]

function cargaDatos (){
    for(let i =0; i<3; i++){
    let nombreApellidos = prompt(`por favor ingrese su nombre y apellido`)

    while( nombreApellidos.trim() === ""){
        nombreApellidos= prompt(`ud no ingreso un dato valido, por favor ingrese su nombre y apellido`)


}
if(datosPersonales.includes(nombreApellidos)){
    confirm(`el nombre de usuario ${nombreApellidos} ya esta registrado por favor ingrese otro`)

}else {
    (datosPersonales.push(nombreApellidos))
    alert(`binvenido ${nombreApellidos} `)
}

 
}

}


console.log(datosPersonales)
cargaDatos()