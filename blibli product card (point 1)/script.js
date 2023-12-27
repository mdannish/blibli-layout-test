document.addEventListener('DOMContentLoaded', function() {
    formatPrice('priceBefore');
    formatPrice('priceAfter');
});

function formatPrice(elementId) {
    const priceElement = document.getElementById(elementId);
    const priceValue = parseFloat(priceElement.textContent);
    const formattedPrice = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(priceValue);
    priceElement.textContent = formattedPrice;
}
