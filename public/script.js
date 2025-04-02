document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded. Fetching cats...");
    fetchCats();
});

let cart = [];  // Array to store the adopted cats

function fetchCats() {
    console.log("Fetching cats...");
    fetch("https://phase-1-cat-adoption-spa-1-1v5p.onrender.com/cats")
        .then(response => {
            console.log("Response received:", response);
            return response.json();
        })
        .then(cats => {
            console.log("Cats data:", cats);
            displayCats(cats);
        })
        .catch(error => console.error("Error fetching cats:", error));
}

function displayCats(cats) {
    const container = document.getElementById("cats-container");
    
    if (!container) {
        console.error("Error: #cats-container not found in HTML!");
        return;
    }

    container.innerHTML = "";

    cats.forEach(cat => {
        const catCard = document.createElement("div");
        catCard.classList.add("cat-card");
        catCard.dataset.id = cat.id;

        catCard.innerHTML = `
            <img src="${cat.image}" alt="${cat.name}">
            <h3>${cat.name}</h3>
            <p>Age: ${cat.age} years</p>
            <button class="adopt-btn" data-id="${cat.id}">Adopt</button>
        `;

        container.appendChild(catCard);
    });

    addEventListeners();
}

function addEventListeners() {
    document.querySelectorAll(".adopt-btn").forEach(button => {
        button.addEventListener("click", (event) => {
            const catId = event.target.dataset.id;
            addToCart(catId);
        });
    });

    // Event listener for the cart button
    document.getElementById("cart-btn").addEventListener("click", () => {
        showCart();
    });
}

function addToCart(catId) {
    fetch(`https://phase-1-cat-adoption-spa-1-1v5p.onrender.com/cats/${catId}`)
        .then(response => response.json())
        .then(cat => {
            // Add the cat to the cart
            cart.push(cat);
            console.log(`Added ${cat.name} to the cart.`);
            updateCartButton();
        })
        .catch(error => console.error("Error adding cat to cart:", error));
}

function updateCartButton() {
    const cartBtn = document.getElementById("cart-btn");
    cartBtn.innerText = `Cart (${cart.length})`; // Update cart button with the number of cats in the cart
}

function showCart() {
    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    let cartDetails = "Cats in your cart:\n\n";
    cart.forEach(cat => {
        cartDetails += `${cat.name} - ${cat.age} years old\n`;
    });

    alert(cartDetails);
}
