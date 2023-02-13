const agregar = document.getElementById("agregar");
const mostrar = document.getElementById("mostrar");
const tabla = document.getElementById("tabla");
const eliminar=document.getElementById('eliminar');


let calificacion = null;
datos = [];

agregar.addEventListener("click", () => {
  const nombre = document.getElementById("nombre").value;
  const curso = document.getElementById("curso").value;
  const genero = document.getElementById("genero").value;
  const nota1 = parseInt(document.getElementById("nota1").value);
  const nota2 = parseInt(document.getElementById("nota2").value);
  const nota3 = parseInt(document.getElementById("nota3").value);
  if (
    nota1 >= 0 &&
    nota1 <= 5 &&
    nota2 >= 0 &&
    nota2 <= 5 &&
    nota3 >= 0 &&
    nota3 <= 5
  ) {
    promedio = (nota1 + nota2 + nota3) / 3;
    if (nombre != "" && genero != "" && curso != "") {
      datos.push({
        nombre: nombre,
        genero: genero,
        curso: curso,
        promedio: promedio,
      });
    } else {
      alert("campos vacios");
    }
  } else {
    alert("notas mal digitadas por favor verifique nuevamente");
  }

  localStorage.setItem("estudiantes", JSON.stringify(datos));
 
  tabla.innerHTML=''
});

mostrar.addEventListener("click", () => {
  lista=JSON.parse(localStorage.getItem("estudiantes"));
  if (lista == undefined) {
    alert("lista vacio");
  } else {
 
    //   if (promedio >= 3.5) {
    //       calificacion = "Aprovado";
    //     } else {
    //       calificacion = "Reprovado";
    //     }

    tabla.innerHTML = "";
    for (let i = 0; i < datos.length; i++) {
      tabla.innerHTML += `
                
                    <tr class="tabla">
                        <td>${lista[i].nombre}</td>
                        <td>${lista[i].curso}</td>
                        <td>${lista[i].genero}</td>
                        <td>${lista[i].promedio}</td>
                    </tr>`;
    }

    console.table(lista);
  }
  
});

eliminar.addEventListener('click',()=>{
    datos=[]
    tabla.innerHTML=''
})


