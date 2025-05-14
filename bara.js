document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('searchInput');
  const products = document.querySelectorAll('.product_card');

  searchInput.addEventListener('input', () => {
    const filter = searchInput.value.toLowerCase();

    products.forEach(product => {
      const nameElement = product.querySelector('.name');
      const text = nameElement ? nameElement.innerText.toLowerCase() : '';

      if (text.includes(filter)) {
        product.style.display = '';
      } else {
        product.style.display = 'none';
      }
    });
  });
});
