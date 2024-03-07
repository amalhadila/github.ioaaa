
const product = [
    {
        id: 0,
        image: 'image/beef.jpeg',
        title: ' original',
        price: 50,
    },

    {
        id: 1,
        image: 'image/double.jpeg',
        title: 'double',
        price: 70,
    },

    {
        id: 2,
        image: 'image/cheese burger.jpeg',
        title: 'cheesy burger',
        price: 50,
    },
    {
        id: 3,
        image: 'image/chicken.jpeg',
        title: 'chicken',
        price: 50,
    },
    {
        id: 3,
        image: 'image/mushroom.jpeg',
        title: 'mushroom',
        price: 55,
    },
       
   
];


const wrapper = document.querySelector(".sliderWrapper");

const menuItems = document.querySelectorAll(".menuItem");

menuItems.forEach((menuItem, index) => {
    menuItem.addEventListener("click", () => {
        wrapper.style.transform = `translateX(-${index * 100}vw)`;
        const selectedItem = document.querySelector(".selectedItem");
        selectedItem.classList.remove("selectedItem");
        menuItem.classList.add("selectedItem");
    });
});

const searchBox = document.querySelector("#search-box");
const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector("#search-icon");

searchProducts = () => {
    searchBox.classList.add("active-search");
    const searchValue = searchInput.value.toLowerCase();
    const filteredProducts = product.filter((product) => {
        return product.title.toLowerCase().includes(searchValue);
    });
    searchInput.value = "";

    const searchResultsDiv = document.createElement("div");
    searchResultsDiv.classList.add("search-results");
    searchBox.appendChild(searchResultsDiv);

    if (filteredProducts.length === 0) {
        searchResultsDiv.innerHTML = "<p>No products found</p>";
        return;
    }

    filteredProducts.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("search-result");
        productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.title}" />
        <h3>${product.title}</h3>
        <p>$${product.price}</p>
        `;
        searchResultsDiv.appendChild(productDiv);
    });
};

clearSearchResults = () => {
    searchBox.classList.remove("active-search");
    const searchResults = document.querySelector(".search-results");
    if (searchResults) {
        searchResults.remove();
    }
};

searchButton.addEventListener("click", () => {
    clearSearchResults();
    if (searchInput.value === "") return;
    searchProducts();
});

searchInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        if (searchInput.value === "") return;
        searchProducts();
    }
});

document.addEventListener("click", (e) => {
    const inInsideSearchBox = searchBox.contains(e.target);
    if (!inInsideSearchBox) {
        clearSearchResults();
    }
});

function showMore() {
    var linkElement = document.getElementById('link');
    linkElement.parentNode.removeChild(linkElement);
    
    var moreContent = document.getElementById('more');
    moreContent.style.display = "block";
}
function showMore1() {
    var linkElement = document.getElementById('link1');
    linkElement.parentNode.removeChild(linkElement);
    
    var moreContent = document.getElementById('more1');
    moreContent.style.display = "block";
}
function showMore2() {
    var linkElement = document.getElementById('link2');
    linkElement.parentNode.removeChild(linkElement);
    
    var moreContent = document.getElementById('more2');
    moreContent.style.display = "block";
}
function showMore3() {
    var linkElement = document.getElementById('link3');
    linkElement.parentNode.removeChild(linkElement);
    
    var moreContent = document.getElementById('more3');
    moreContent.style.display = "block";
}
function showMore4() {
    var linkElement = document.getElementById('link4');
    linkElement.parentNode.removeChild(linkElement);
    
    var moreContent = document.getElementById('more4');
    moreContent.style.display = "block";
}

const href=document.querySelectorAll('links');
const sec=document.querySelectorAll('section');
function activemenu(){
 
    if(href==sec){
    add("active");

}}
activemenu();
window.addEventListener("click",activemenu);