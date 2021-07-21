const listaMascotas = document.getElementById('lista-mascotas');
const tipo = document.getElementById('tipo');
const nombre = document.getElementById('nombre');
const dueno = document.getElementById('dueno');
const form = document.getElementById('form');
const indice = document.getElementById('indice');

const btnGuardar = document.getElementById('btn-guardar');


let mascotas = [
    {
        tipo: "Gato",
        nombre: "Mauricio",
        dueno: "Erendira"
    }
];

function listarMascotas(){
    const htmlMascotas = mascotas.map((mascota, index) =>`<tr>
            <th scope="row">${index}</th>
            <td>${mascota.tipo}</td>
            <td>${mascota.nombre}</td>
            <td>${mascota.dueno}</td>
            <td>
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-info editar"><i class="fas fa-edit"></i></button>
                    <button type="button" class="btn btn-danger"><i class="far fa-trash-alt"></i></i></button>
                </div>
            </td>
        </tr>`).join("");
        listaMascotas.innerHTML = htmlMascotas;
        Array.from(document.getElementsByClassName('editar')).forEach((botonEditar, index)=>botonEditar.onclick=editar(index))
}

function enviarDatos(evento){
    evento.preventDefault();
    const datos = {
        tipo: tipo.value,
        nombre: nombre.value,
        dueno: dueno.value
    };
    mascotas.push(datos);
    listarMascotas();
}

function editar(indice){
    return function handler(){
        console.log(indice);
    }
}
listarMascotas();

form.onsubmit = enviarDatos;
btnGuardar.onclick = enviarDatos;