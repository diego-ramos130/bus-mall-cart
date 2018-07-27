/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  var cartEl = document.getElementById('cart')
  while(cartEl.firstElementChild.nextElementSibling.hasChildNodes()){
    cartEl.firstElementChild.nextElementSibling.removeChild(cartEl.firstElementChild.nextElementSibling.firstElementChild);
}
  
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  var cartEl = document.getElementById('cart');
  var tableBodEl = cartEl.firstElementChild.nextElementSibling;

  // TODO: Iterate over the items in the cart
  for (var i = 0; i < cart.items.length; i++){
    var trEl = document.createElement('tr');
    trEl.title = cart.items[i].product;
    var tdDeletEl = document.createElement('td');
    var tdQuanEl = document.createElement('td');
    var tdItemEl = document.createElement('td');
    tdDeletEl.id = 'delete' + i;
    tdDeletEl.textContent = 'X';
    tdQuanEl.textContent = cart.items[i].quantity;
    tdItemEl.textContent = cart.items[i].product; 
    tableBodEl.appendChild(trEl);
    trEl.appendChild(tdDeletEl);
    trEl.appendChild(tdQuanEl);
    trEl.appendChild(tdItemEl);
  }
  // Create a TR
  // Create a TD for the delete link, quantity,  and the item
  // Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {{
  
    for (var idx in cart.items){
    if (event.target.id === 'delete'+idx){
      cart.removeItem(idx);
    }
  }
}
localStorage.setItem('cart', JSON.stringify(cart.items));
renderCart();
  // cart.removeItem(i)
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
