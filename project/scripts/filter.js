const galleryElement = document.getElementById("galleryItems");
const galleryList = [
    { 
        name: "Wedding Cake",
        category: "cakes",
        imageUrl: "images/wedding.webp",
        description: "A beautiful wedding cake." 
    },
    { 
        name: "Chocolate Dessert", 
        category: "desserts", 
        imageUrl: "images/dessert11.webp", 
        description: "A rich chocolate dessert." 
    },
    { 
        name: "Birthday Cake", 
        category: "cakes", 
        imageUrl: "images/birthday.webp", 
        description: "A fun birthday cake." 
    },
     { 
        name: "Wedding Cake",
        category: "cakes",
        imageUrl: "images/wedding2.webp",
        description: "A beautiful wedding cake." 
    },
    { 
        name: "Chocolate Dessert", 
        category: "desserts", 
        imageUrl: "images/hero2.webp", 
        description: "A rich chocolate dessert." 
    },
    { 
        name: "Birthday Cake", 
        category: "cakes", 
        imageUrl: "images/hero1.webp", 
        description: "A fun birthday cake." 
    },
     { 
        name: "Wedding Cake",
        category: "cakes",
        imageUrl: "images/wedding3.webp",
        description: "A beautiful wedding cake." 
    },
    { 
        name: "Chocolate Dessert", 
        category: "desserts", 
        imageUrl: "images/dessert-2.webp", 
        description: "A rich chocolate dessert." 
    },
    { 
        name: "Birthday Cake", 
        category: "cakes", 
        imageUrl: "images/cake02.webp", 
        description: "A fun birthday cake." 
    },
     { 
        name: "Wedding Cake",
        category: "cakes",
        imageUrl: "images/wedding5.webp",
        description: "A beautiful wedding cake." 
    },
    { 
        name: "Chocolate Dessert", 
        category: "desserts", 
        imageUrl: "images/dessert12.webp", 
        description: "A rich chocolate dessert." 
    },
    { 
        name: "Birthday Cake", 
        category: "cakes", 
        imageUrl: "images/cake-1.webp", 
        description: "A fun birthday cake." 
    },
    { 
        name: "Birthday Cake", 
        category: "cakes", 
        imageUrl: "images/birthday3.webp", 
        description: "A fun birthday cake." 
    },
    { 
        name: "Chocolate Dessert", 
        category: "desserts", 
        imageUrl: "images/cakes4.webp", 
        description: "A rich chocolate dessert." 
    },
    { 
        name: "Chocolate Dessert", 
        category: "desserts", 
        imageUrl: "images/choco.webp", 
        description: "A rich chocolate dessert." 
    },
    
];

// Display function
const displayGallery = (items) => {
    galleryElement.innerHTML = "";

    items.forEach((item) => {
        const article = document.createElement("article");
        const h3 = document.createElement("h3");
        h3.textContent = item.name;
        const img = document.createElement("img");
        img.src = item.imageUrl;
        img.alt = item.description;
        article.appendChild(h3);
        article.appendChild(img);
        galleryElement.appendChild(article);
    });
};

// Initial display of all items
displayGallery(galleryList);

// Filter function
const filterGallery = () => {
    const filter = document.getElementById("filterBy").value;

    switch (filter) {
        case "cakes":
            displayGallery(galleryList.filter(item => item.category === "cakes"));
            break;
        case "desserts":
            displayGallery(galleryList.filter(item => item.category === "desserts"));
            break;
        case "all":
            displayGallery(galleryList);
            break;
    }
};

// Event listener for filtering
document.querySelector("#filterBy").addEventListener("change", filterGallery);