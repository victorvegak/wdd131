const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

// Array of Temple Objects
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  // Additional temple objects
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 24",
    area: 382207,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple5.jpg",
  },
  {
    templeName: "Logan Utah Temple",
    location: "Logan, Utah, United States",
    dedicated: "1884, May, 17",
    area: 119619,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/logan-utah/400x250/logan-temple-768119-wallpaper.jpg",
  },
  {
    templeName: "Vernal Utah Temple",
    location: "Vernal, Utah, United States",
    dedicated: "1997, Nov, 02",
    area: 38771,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/vernal-utah/400x250/vernal-temple-lds-82531-wallpaper.jpg",
  },
];

//Function to display temple cards
function displayTemples(templeList) {
  const templeContainer = document.querySelector(".temples");
  let templeHTML = ""; 

 templeList.forEach((temple) => {
  templeHTML += `
     <div class="temple-card">
        <img src="${temple.imageUrl}" alt="Image of ${temple.templeName}" loading="lazy" width="400" height="250">
        <h3>${temple.templeName}</h3>
        <p>Location: ${temple.location}</p>
        <p>Dedicated: ${temple.dedicated}</p>
        <p>Area: ${temple.area.toLocaleString()} sq ft</p>
      </div>`;
  });
  templeContainer.innerHTML = templeHTML;
}

//Initial display of all temples
displayTemples(temples);

// Filter functions
document.querySelector('a[title="Old"]').addEventListener("click", () => {
  const oldTemples = temples.filter(
    (temple) => new Date(temple.dedicated).getFullYear() < 1900
  );
  displayTemples(oldTemples);
});

document.querySelector('a[title="New"]').addEventListener("click", () => {
  const newTemples = temples.filter(
    (temple) => new Date(temple.dedicated).getFullYear() >= 2000
  );
  displayTemples(newTemples);
});

document.querySelector('a[title="Large"]').addEventListener("click", () => {
const largeTemples = temples.filter((temple) => temple.area > 90000);
displayTemples(largeTemples);
});

document.querySelector('a[title="Small"]').addEventListener("click", () => {
 const smallTemples = temples.filter((temple) => temple.area < 10000);
  displayTemples(smallTemples);
});

document.querySelector('a[title="Home"]').addEventListener("click", () => {
displayTemples(temples); // Show all temples
});


/*createTempleCard(temples);

function createTempleCard(filteredTemples) {
  document.querySelector(".temples").innerHTML = "";
  filteredTemples.forEach(temple => {
    let card= document.createElement("section");
    let name = document.createElement("h3");
    let location = document. createElement("p");
    let dedication = document.createElement("P");
    let area = document.createElement("p");
    let img =  document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class = "label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class ="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class = "label">Size:</span> ${temple.area} sq ft`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");


  card.appendChild(name);
  card.appendChild(location);
  card.appendChild(dedication);
  card.appendChild(area);
  card.appendChild(img);

document.querySelector(".temples").appendChild(card);
});
}*/
