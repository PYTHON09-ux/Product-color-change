const colors = document.querySelectorAll(".color");
const shape = document.querySelector(".shape");
const opacitySlider = document.getElementById("opacity-slider");
const opacityValue = document.getElementById("opacity-value");
const addToCartButton = document.querySelector(".add-to-cart");
const productDisplay = document.querySelector(".product-display");
const image = document.querySelector(".image");

// Initial values
let currentColor = "#000";
let currentOpacity = 0.7;


shape.style.fill = currentColor;
shape.style.opacity = currentOpacity;

// Color selection
colors.forEach(color => {
    color.addEventListener("click", function() {
        
        // Get color from style property
        currentColor = getComputedStyle(this).getPropertyValue("--color").trim();
        
        // Apply color to shape
        shape.style.fill = currentColor;
    });
});

opacitySlider.addEventListener("input", function() {
    currentOpacity = this.value / 100;
    opacityValue.textContent = this.value + "%";
    shape.style.opacity = currentOpacity;
});


addToCartButton.addEventListener("click", function() {
    this.textContent = "Added to Cart!";
    this.style.backgroundColor = "#333";
    
    setTimeout(() => {
        this.textContent = "Add to Cart";
        this.style.backgroundColor = "#4CAF50";
    }, 2000);
});


colors.forEach(color => {
    const colorName = color.getAttribute("data-name");
    color.querySelector(".color-name").textContent = colorName;
});