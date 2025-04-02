document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded. Fetching cats...");
    fetchCats();
});

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
            console.log(`Deleting cat with ID: ${catId}`);
            deleteCat(catId);
        });
    });
}

function deleteCat(catId) {
    fetch(`https://phase-1-cat-adoption-spa-1-1v5p.onrender.com/cats/${catId}`, {
        method: "DELETE",
        mode: "cors" // Ensures cross-origin requests work
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        console.log(`Cat with ID ${catId} deleted successfully.`);
        document.querySelector(`[data-id="${catId}"]`).remove();
    })
    .catch(error => console.error("Error deleting cat:", error));
}

// http://localhost:3000