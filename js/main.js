import { Carro } from "./modules/carro.js";
import { painter } from "./modules/painter.js";

window.onload = () => {
    let boton = document.getElementById('boton')
    let opcion1 = document.getElementsByName('color-1')
    let opcion2 = document.getElementsByName('color-2')

    boton.addEventListener('click', ()=>{
        let color1
        let color2
        let carroUsuario

        opcion1.forEach(x => x.checked ? color1 = x.value : null)
        opcion2.forEach(x => x.checked ? color2 = x.value : null)

        carroUsuario = new Carro(color1, color2)
        painter(carroUsuario.color1, carroUsuario.color2)
    })
};
