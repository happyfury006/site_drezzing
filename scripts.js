function addToCart() {
   var confirmationMessage = document.getElementById('confirmationMessage');
   confirmationMessage.textContent = 'Le produit a été ajouté au panier avec succès!';
}

// Zoom functionality
var productImage = document.getElementById('productImage');
var zoomLens = document.getElementById('zoomLens');

productImage.addEventListener('mousemove', moveLens);
productImage.addEventListener('mouseenter', function() {
   zoomLens.style.visibility = 'visible';
});
productImage.addEventListener('mouseleave', function() {
   zoomLens.style.visibility = 'hidden';
});

function moveLens(e) {
   var pos = getCursorPos(e);
   var x = pos.x - (zoomLens.offsetWidth / 2);
   var y = pos.y - (zoomLens.offsetHeight / 2);
   
   if (x > productImage.width - zoomLens.offsetWidth) {x = productImage.width - zoomLens.offsetWidth;}
   if (x < 0) {x = 0;}
   if (y > productImage.height - zoomLens.offsetHeight) {y = productImage.height - zoomLens.offsetHeight;}
   if (y < 0) {y = 0;}
   
   zoomLens.style.left = x + 'px';
   zoomLens.style.top = y + 'px';
   
   zoomLens.style.backgroundImage = "url('" + productImage.src + "')";
   zoomLens.style.backgroundSize = (productImage.width * 2) + "px " + (productImage.height * 2) + "px";
   zoomLens.style.backgroundPosition = "-" + (x * 2) + "px -" + (y * 2) + "px";
}

function getCursorPos(e) {
   var a = productImage.getBoundingClientRect();
   var x = e.pageX - a.left;
   var y = e.pageY - a.top;
   x = x - window.pageXOffset;
   y = y - window.pageYOffset;
   return {x : x, y : y};
}
