document.addEventListener('DOMContentLoaded', function () {
    //start User name in top of navbar
    const userName = localStorage.getItem('userName');
    const userNameElement = document.getElementById('user-name');
    if (userName && userNameElement) {
        userNameElement.textContent = userName;
    }
    //end User name in top of navbar

    // start  Logout 
    const logoutLink = document.getElementById('logoutLink');
    if (logoutLink) {
        logoutLink.addEventListener('click', function (e) {
            e.preventDefault();
            localStorage.removeItem('userName'); 
            window.location.href = 'index.html'; 
        });
    }
    //  end Logout 

    // add only product to cart
    const addProductButtons = document.querySelectorAll('.add-product');
    addProductButtons.forEach(button => {
        button.removeEventListener('click', addToCart); 
        button.addEventListener('click', addToCart); 
    });

    function addToCart(event) {
        const productData = JSON.parse(event.target.getAttribute('data-product'));
        
    }

    // Function to update cart count
    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const totalQuantity = cart.reduce((sum, product) => sum + (product.quantity || 1), 0);
        document.getElementById('cart-count').textContent = totalQuantity;
    }

    
    updateCartCount();
});
