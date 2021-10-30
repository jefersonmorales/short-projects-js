const couponsArray = [
    { nombre: "MIPRIMERCOMPRA", descuento: 20},
    { nombre: "GOLD", descuento: 75},
    { nombre: "REGALO", descuento: 100},
]

function calcularPrecioConCupon( precio , cupon ) {
    const porcentajePrecioConCupon = 100 - cupon;
    const precioConCupon = (precio * porcentajePrecioConCupon) / 100;

    return precioConCupon;
}

function toPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    const isCoupenValueValid = function(cupon) {
        return cupon.nombre === couponValue;
    };

    const userCoupon = couponsArray.find(isCoupenValueValid);

    if (!userCoupon) {
        alert("El cupon " + userCoupon + "no es valido");
    } else {
        const descuento = userCoupon.descuento;
        const precioConDescuento = calcularPrecioConCupon(priceValue, descuento);

        const resultPrice = document.getElementById("ResultPrice");
        resultPrice.innerText = "El precio con descuento es $" + precioConDescuento;
    }
}