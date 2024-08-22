document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".item");
    const productCompra = document.getElementById("productCompra");
    const totalElement = document.getElementById("total");
    const carrito = [];
    
    items.forEach(item => {
        item.querySelector(".btn-add-cart").addEventListener("click", () => {
            const title = item.querySelector(".itemTitle").innerText;
            const price = parseFloat(item.querySelector(".price").innerText.replace('$', ''));
            addItemToCart(title, price);
        });
    });

    function addItemToCart(title, price) {
        const product = carrito.find(item => item.title === title);
        if (product) {
            product.quantity += 1;
        } else {
            carrito.push({ title, price, quantity: 1 });
        }
        renderCart();
    }

    function renderCart() {
        productCompra.innerHTML = '';
        let total = 0;

        carrito.forEach(product => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('itemCompra');
            itemElement.innerHTML = `
                <span>${product.title}</span>
                <span>${product.quantity} x $${product.price}</span>
                <span>$${(product.price * product.quantity).toFixed(2)}</span>
            `;
            productCompra.appendChild(itemElement);
            total += product.price * product.quantity;
        });

        totalElement.innerHTML = `<h3>Total: $${total.toFixed(2)}</h3>`;
    }

    document.getElementById("x").addEventListener("click", () => {
        carrito.length = 0;
        renderCart();
    });

    document.getElementById("finalizarCompra").addEventListener("click", () => {
        alert("Compra finalizada!");
        carrito.length = 0;
        renderCart();
    });
});



//CART//

function revelarCarrito(){
    const cartWrap = document.getElementById("cart-wrap");
    cartWrap.classList.remove("animate__slideOutUp");
    cartWrap.classList.add("animate__animated", "animate__slideInDown");
    document.getElementById("fondo-oscuro").style.display = "block";
    cartWrap.style.display = "block";
}
function cerrarCarrito(){
    const exit = document.getElementById("cart-wrap");
    exit.classList.add("animate__animated", "animate__slideOutUp");
    
    setTimeout(() => {
        document.getElementById("fondo-oscuro").style.display = "none";
        exit.style.display = "none";
        exit.classList.remove("animate__animated", "animate__slideOutUp", "animate__slideInDown");
    }, 1000);
}

