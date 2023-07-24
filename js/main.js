function getData(){
let promesa = fetch("https://fakestoreapi.com/products", {
    method: "GET"
});

promesa.then((response)=>{
    response.json()
    .then((data)=>{
        createCards(data)
    })
    .catch(
        (error)=>{console.error("Problema en el json", error);
    });
})
.catch( (error)=>{
    console.error(error, "Ocurrio un error en la solicitud");
});
}//promesas.then
getData();

function createCards(data){
    let cartas = document.getElementById("cartas");
    data.forEach(producto => {
        let card = document.createElement("div")
        card.classList.add("col-md-4");
        card.innerHTML= `<div class="card mb-4">
            
            <div class="card-body">
            <h5 class="card-title">${producto.title.slice(0,30)} ...</h5>
            <p class="card-text"><strong>${producto.category}</strong></p>
            <button type="button" class="btn btn-danger"  data-bs-toggle="modal" data-bs-target="#exampleModal_${producto.id}"> información del producto
            </button>
            <p class="card-text">$${producto.price}</p>
        </div>
        <img src="${producto.image}" class="card-img-top img-fluid" alt="${producto.title}">
    </div> <!-- card-->
    <!--modal-->
    <div class="modal fade" id="exampleModal_${producto.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h1 class="modal-title fs-5" id="exampleModalLabel">${producto.title}</h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="close"></button>
    </div>
    <div class="modal-body">
      ${producto.description}
      <p class="text-end"><strong>$ ${producto.price} USD</strong></p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
    </div>
  </div>
</div>
    `;
    cartas.appendChild(card)
        console.log(producto.id, producto.title);
    });
}// function createCards