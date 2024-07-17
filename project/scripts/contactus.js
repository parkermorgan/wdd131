document.querySelector("#currentyear").innerHTML = `${new Date().getFullYear()}`;

document.querySelector("#lastModified").innerHTML = `Last Modification: ${document.lastModified}`

// Select the <select> element by its id
const selectElement = document.getElementById('productName');

// Array of products
const products = [
    {
      id: 'fc-1888',
      name: "flux capacitor",
      avgRating: 4.5
    },
    {
      id: 'fc-2050',
      name: "power laces",
      avgRating: 4.7
    },
    {
      id: 'fs-1987',
      name: "time circuits",
      avgRating: 3.5
    },
    {
      id: 'ac-2000',
      name: "low voltage reactor",
      avgRating: 3.9
    },
    {
      id: 'jj-1969',
      name: "warp equalizer",
      avgRating: 5.0
    }
];

// Populate the <select> element with options
products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;  // Set the value attribute of <option>
    option.textContent = product.name;  // Set the text content of <option>
    selectElement.appendChild(option);  // Append <option> to <select>
});
