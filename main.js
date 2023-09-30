const datosPersonales =[]

function cargaDatos (){
    let nombreApellidos = prompt(`por favor ingrese su nombre y apellido`)

    while( nombreApellidos.trim() === ""){
        nombreApellidos= prompt(`ud no ingreso un dato valido, por favor ingrese su nombre y apellido`)


}
if(datosPersonales.includes(nombreApellidos)){
    alert(`el nombre de usuario ${nombreApellidos} ya esta registrado por favor ingrese otro`)

}else{
    alert(`binvenido ${nombreApellidos} `)
}
if(datosPersonales!=nombreApellidos){
    datosPersonales.push(nombreApellidos)
}else{
    cargaDatos()
}

}


for( let i=0; i<=10;i++ ){
    cargaDatos()
}
console.log(datosPersonales)
cargaDatos()