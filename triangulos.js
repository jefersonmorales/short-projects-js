function ladosTriangulo( lado1 , lado2 , base ) {
    const sumaLongitud = lado1**2 + lado2**2;
    const longitud = sumaLongitud;
    const altura = Math.sqrt(lado1**2 - base**2/ 4)

    if (lado1 === lado2 && lado1 > base) {
        alert("Los lados equivalen a un triangulo isoceles");
        alert(`La longitud de su triangulo es de: ${longitud}cm`);
        alert(`La altura de su triangulo es de: ${altura}cm`);
    } else if (lado1 > lado2) {
        alert("El lado 1 es mas grande que el lado 2");
    } else if (lado2 > lado1) {
        alert("El lado 2 es mas grande que el lado 1");
    } else if (base > lado1 && lado2) {
        alert("La base es mas grande que los lados");
    } else {
        alert("Por favor verifique la informacion de su triangulo")
    };
}

ladosTriangulo(5,5,3)