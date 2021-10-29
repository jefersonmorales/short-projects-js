function auto (marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var marcaSelected = prompt('Cual es la marca del auto?')
var modeloSelected = prompt('Cual es el modelo?')
var annioSelected = prompt('Cual es el Año?')

var detallesSelected = alert(`Estos son los datos del auto:\n\nMarca: ${marcaSelected}\nModelo: ${modeloSelected}\nAño: ${annioSelected}`)

var newAuto = new auto(marcaSelected, modeloSelected, annioSelected)

console.log(newAuto)

console.log(`${marcaSelected} ${modeloSelected} ${annioSelected}`)