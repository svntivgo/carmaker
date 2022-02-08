export function painter(color1, color2) {
    let carroContainer = document.getElementById('carro-container')
    let partePrincipal = document.getElementById('cuerpo')
    let parteSecundaria = document.getElementById('techo')
    let rojo = "#660000"
    let azul = "#0E2F44"
    let verde = "#C0FE8B"
    let amarillo = "#FFFF66"
    let colorPrincipal
    let colorSecundario

    function selectorColor(color) {
        let partePintar
        switch (color) {
            case "rojo":
                partePintar = "#660000";
                break;
            case "azul":
                partePintar = azul;
                break;
            case "verde":
                partePintar = verde;
                break;
            case "amarillo":
                partePintar = amarillo;
                break;
            default:
                console.log("no ingresó color");
                break;
        }
        return partePintar
    }

    colorPrincipal = selectorColor(color1)
    colorSecundario = selectorColor(color2)

    partePrincipal.style.backgroundColor = colorPrincipal

    parteSecundaria.style.backgroundColor = colorSecundario

    carroContainer.style.display = "flex"
}
