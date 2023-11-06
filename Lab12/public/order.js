// order.js (Lab12 Part 6)

// Function to load products from a JSON file
async function loadProducts() {
    try {
      const response = await fetch('/products.json'); // Adjust the URL as needed
      const products = await response.json();
  
      // Check the URL for any error parameters and quantity and display/use them
      let params = new URL(document.location).searchParams;
      let q = Number(params.get('quantity'));
      let error = params.get('error');
  
      // If there is an error, alert the user
      if (error) {
        alert(error);
      }
  
      // Select the div where product details should be displayed
      let productDetailsDiv = document.getElementById('productDetails');
      // Display the first product's details
      productDetailsDiv.innerHTML = `<h3>${products[0]['brand']} at $${products[0]['price']}</h3>`;
  
      // Select the div where the product list should be displayed
      let productListDiv = document.getElementById('productList');
      // Iterate through the products and display their sold counts
      for (let i in products) {
        productListDiv.innerHTML += `<h4>${products[i]['total_sold']} ${products[i]['brand']} have been sold!</h4>`;
      }
    } catch (error) {
      console.error('Error loading products:', error);
    }
  }
  
  // Call the function to load products when the page loads
  loadProducts();
  