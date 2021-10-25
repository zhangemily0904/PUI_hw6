// number of items in cart
let numItems = 0;

/** 
 * Update color selection
 * @param {string} color 
 */
function updateColor(color) {
  let parent = document.getElementById("color-selection");
  parent.innerHTML = "Color: " + color;
  parent.style.fontWeight = 'bold';
}

/** 
 * Update fill selection
 * @param {string} fill 
 */
function updateFill(fill){
  let parent = document.getElementById("fill-selection");
  parent.innerHTML = "Fill: " + fill;
  parent.style.fontWeight = 'bold';
}

/** 
 * Alert user when adding an item to cart
 */
function showAlert() {
  alert ("An item has been added to cart");
}

/** 
 * Update number of items in cart 
 */
function addToCart(){
  numItems++;
  showAlert();
  document.getElementById("cart-nav").innerHTML = "Cart (" + numItems + ")";
}

