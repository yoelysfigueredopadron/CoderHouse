document.addEventListener('DOMContentLoaded', e => {
      fetch("https://raw.githubusercontent.com/yoelysfigueredopadron/JSON/main/snacks.json")
        .then(o => o.json())
        .then(jsonObject => renderizarSnacks(jsonObject))
});


function renderizarSnacks(snacks) {
    
 const listaProductos = document.getElementById('lista-productos');   
 const cantColumn = 4;


 //Filas
  for (let i = 0; i < snacks.length/cantColumn; i++) {
    let fila = "";

    //Columnas
    let indiceInicial = i * cantColumn;
    let htmlSnack = "";

    for (let j = indiceInicial; j < snacks.length && j < indiceInicial + cantColumn; j++) {
        

        htmlSnack = `<div class="three columns">
            <div class="card">
                <img src="../img/${snacks[j].img}" class="imagen-curso u-full-width">
                <div class="info-card">
                    <h4>${snacks[j].titulo}</h4>
                    <img src="../img/estrellas.png">
                    <p class="precio">$${snacks[j].precioReal} <span class="u-pull-right precio-rebajado">${snacks[j].precioRebajado}</span><span class="u-pull-right ">$</span></p>
                    <a href="#" class="u-full-width button input agregar-carrito" data-id="${snacks[j].dataId}">Agregar Al Carrito</a>
                </div>
                </div> <!--.card-->
            </div>`

        fila += htmlSnack;
        
    } //Fin FOR Columnas

    let htmlRow = `<div class="row"> ${fila} </div>`

    listaProductos.innerHTML += htmlRow; 

  } // Fin FOR Filas

}