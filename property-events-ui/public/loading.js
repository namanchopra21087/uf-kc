function createLoadingElements() {
   var loadingContainer = document.createElement('div');
   var loadingSpin = document.createElement('div');
   var loadingSpinDot = document.createElement('span');
   var loadingSpinDotItem1 = document.createElement('span');
   var loadingSpinDotItem2 = document.createElement('span');
   var loadingSpinDotItem3 = document.createElement('span');
   var loadingSpinDotItem4 = document.createElement('span');

   loadingContainer.setAttribute('id', 'unifocus-loading-div');
   loadingSpin.setAttribute('class', 'unifocus-loading-spin');
   loadingSpinDot.setAttribute('class', 'unifocus-loading-spin-dot');
   loadingSpinDotItem1.setAttribute('class', 'unifocus-loading-spin-dot-item');
   loadingSpinDotItem2.setAttribute('class', 'unifocus-loading-spin-dot-item');
   loadingSpinDotItem3.setAttribute('class', 'unifocus-loading-spin-dot-item');
   loadingSpinDotItem4.setAttribute('class', 'unifocus-loading-spin-dot-item');

   loadingContainer.appendChild(loadingSpin);
   loadingSpin.appendChild(loadingSpinDot);
   loadingSpinDot.appendChild(loadingSpinDotItem1);
   loadingSpinDot.appendChild(loadingSpinDotItem2);
   loadingSpinDot.appendChild(loadingSpinDotItem3);
   loadingSpinDot.appendChild(loadingSpinDotItem4);
   document.body.appendChild(loadingContainer);
}

createLoadingElements();
