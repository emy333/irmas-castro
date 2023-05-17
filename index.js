const product = [
    {
        id: 0,
        image: 'assets/img/01.jpg',
        title: 'Detergente YPÊ',
        price: 1.25,
    },
    {
        id: 1,
        image: 'assets/img/02.jpg',
        title: 'Sabão líquido OMO',
        price: 1.30,
    },
    {
        id: 2,
        image: 'assets/img/03.PNG',
        title: 'Sabão em pó OMO',
        price: 6,
    },
    {
        id: 3,
        image: 'assets/img/04.PNG',
        title: 'Amaciante YPÊ',
        price: 5,
    },
    {
        id: 4,
        image: 'assets/img/05.PNG',
        title: 'Desengordurante YPÊ',
        price: 3.60,
    }
];

const categories = [...new Set(product.map((item) =>
    {return item }))]
    let i=0;

function addtocart(index) {
    var quantityInput = document.getElementById('quantity' + index);
    var currentQuantity = parseInt(quantityInput.value);
    quantityInput.value = currentQuantity + 1;
    }
document.getElementById('root').innerHTML = categories.map((item) => 
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
            <div class='botton'>
            <p>${title}</p>
            <h2>R$ ${price}</h2>`+ 
            "<button onclick='addtocart("+(i++)+")'><img class='add-car' src='assets/img/adicionar-ao-carrinho.png'></img> <input class='add-qnt' type='number' id='quantity' name='quantity' min='1' value='0'></button>"+
            `</div>
            </div>`

    )
}).join('')



var link = document.getElementById("cartButton");
var car = document.querySelector(".sidebar");

link.addEventListener("click", function(event) {
  // Impede o comportamento padrão de recarregar a página
  event.preventDefault();

  if (car.style.display === "block") {
    car.style.display = "none"; // Oculta o modal se estiver visível
  } else {
    car.style.display = "block"; // Exibe o modal se estiver oculto
  }
  // Altera o estilo da div para torná-la visível
    car.classList.remove("sidebar");
    car.classList.add("minhaDivNova");
});

var iconeFechar = document.getElementById("close");
iconeFechar.addEventListener("click", function() {
  // Altera a visibilidade da div
  car.style.display = "none";
});

car.addEventListener("click", function(event) {
  if (event.target === car) {
    car.style.display = "none"; // Oculta a div
  }
});



    

var cart = [];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}

function delElement(a){
    cart.splice(a, 1);
    displaycart();

}

function displaycart(a){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;



    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Seu carrinho está vazio";
        document.getElementById("total").innerHTML = "R$ ";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=> 
        {
            var {image, title, price} = items;
            total = total+price;
            document.getElementById("total").innerHTML = "R$ "+total.toFixed(2);
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size:15px;'>R$ ${price}</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }
}
