document.addEventListener('DOMContentLoaded', e => {
      fetch("https://raw.githubusercontent.com/yoelysfigueredopadron/JSON/main/bebidas.json")
        .then(o => o.json())
        .then(jsonObject => renderizarBebidas(jsonObject))

});


function renderizarBebidas(bebidas) {
    
 const listaProductos = document.getElementById('lista-productos');   
 const cantColumn = 4;


 //Filas
  for (let i = 0; i < bebidas.length/cantColumn; i++) {
    let fila = "";

    //Columnas
    let indiceInicial = i * cantColumn;
    let htmlBebida = ""

    for (let j = indiceInicial; j < bebidas.length && j < indiceInicial + cantColumn; j++) {
        

        htmlBebida = `<div class="three columns">
            <div class="card">
                <img src="../img/${bebidas[j].img}" class="imagen-curso u-full-width">
                <div class="info-card">
                    <h4>${bebidas[j].titulo}</h4>
                    <img src="../img/estrellas.png">
                    <p class="precio">$${bebidas[j].precioReal} <span class="u-pull-right precio-rebajado">${bebidas[j].precioRebajado}</span><span class="u-pull-right ">$</span></p>
                    <a href="#" class="u-full-width button input agregar-carrito" data-id="${bebidas[j].dataId}">Agregar Al Carrito</a>
                </div>
                </div> <!--.card-->
            </div>`

        fila += htmlBebida;
        
    } //Fin FOR Columnas

    let htmlRow = `<div class="row"> ${fila} </div>`

    listaProductos.innerHTML += htmlRow; 

  } // Fin FOR Filas

}