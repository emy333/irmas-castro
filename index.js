const product = [
    {
        id: 0,
        image: 'assets/img/01.jpg',
        title: 'Z Flip Foldable Mobile',
        price: 120,
    },
    {
        id: 1,
        image: 'assets/img/02.jpg',
        title: 'Z Flip Foldable Mobile',
        price: 130,
    },
    {
        id: 2,
        image: 'assets/img/01.jpg',
        title: 'Z Flip Foldable Mobile',
        price: 60,
    },
    {
        id: 3,
        image: 'assets/img/01.jpg',
        title: 'Z Flip Foldable Mobile',
        price: 50,
    },
    {
        id: 4,
        image: 'assets/img/01.jpg',
        title: 'Z Flip Foldable Mobile',
        price: 10,
    }
];

const categories = [...new Set(product.map((item) =>
    {return item }))]
    let i=0;
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
            <h2>R$ ${price}.00</h2>`+ 
            "<button onclick='addtocart("+(i++)+")'>Adicionar ao carrinho</button>"+
            `</div>
            </div>`

    )
}).join('')

