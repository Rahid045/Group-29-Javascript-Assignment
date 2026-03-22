//PRODUCT DATA
const products = [
    { id: 1, name: "Laptop Pro", price: 1800000, category: "Electronics", image: "images/laptop.avif", description: "High-performance laptop" },
    { id: 2, name: "Smartphone X", price: 1500000, category: "Electronics", image: "images/smartphone.jpg", description: "Latest smartphone" },
    { id: 3, name: "New Balance", price: 70000, category: "Fashion", image: "images/new balance shoes.webp", description: "Comfort meets style" },
    { id: 4, name: "Versace", price: 25000, category: "Fashion", image: "images/5.jpeg", description: "Comfortable sandals" },
    { id: 5, name: "Leather Handbag", price: 40000, category: "Fashion", image: "images/leather bag.jpg", description: "Elegant leather handbag" },
    { id: 6, name: "Conciousnes Is All There Is", price: 25000, category: "Books", image: "images/jsbook.jpeg", description: "Bestselling book" },
    { id: 7, name: "Wireless Earbuds", price: 35000, category: "Electronics", image: "images/earbuds.jpg", description: "Noise cancellation earbuds" },
    { id: 8, name: "Sneakers", price: 50000, category: "Fashion", image: "images/6.jpeg", description: "Style meets comfort" },
    { id: 9, name: "Sneakers", price: 50000, category: "Fashion", image: "images/55.jpeg", description: "Style meets comfort" },
    { id: 10, name: "Sneakers", price: 50000, category: "Fashion", image: "images/8.jpeg", description: "Style meets comfort" },
    { id: 11, name: "Sneakers", price: 45000, category: "Fashion", image: "images/20.jpeg", description: "Style meets comfort" },
    { id: 12, name: "Sneakers", price: 45000, category: "Fashion", image: "images/10.jpeg", description: "Style meets comfort" },
    { id: 13, name: "Sneakers", price: 45000, category: "Fashion", image: "images/11.jpeg", description: "Style meets comfort" },
    { id: 14, name: "Sneakers", price: 50000, category: "Fashion", image: "images/12.jpeg", description: "Style meets comfort" },
    { id: 15, name: "Air Jordans", price: 45000, category: "Fashion", image: "images/54.jpeg", description: "Style meets comfort" },
    { id: 16, name: "Ogyi", price: 45000, category: "Fashion", image: "images/55.jpeg", description: "Comfort meets style" },
    { id: 17, name: "Ogyi", price: 45000, category: "Fashion", image: "images/56.jpeg", description: "Comfort meets style" },
    { id: 18, name: "Air Jordans", price: 45000, category: "Fashion", image: "images/58.jpeg", description: "Comfort meets style" },
    { id: 19, name: "Adidas", price: 45000, category: "Fashion", image: "images/59.jpeg", description: "Comfort meets style" },
    { id: 20, name: "Heels", price: 45000, category: "Fashion", image: "images/16.jpeg", description: "Comfort meets style" },
    { id: 21, name: "Sandals", price: 25000, category: "Fashion", image: "images/15.jpeg", description: "Comfort meets style" },
    { id: 22, name: "Atomic Habits", price: 35000, category: "Books", image: "images/Habits.jpg", description: "An Easy And proven way to build good habits " },
    { id: 23, name: "It Ends With us", price: 35000, category: "Books", image: "images/collen hoover.jpg", description: "A book about a relationship with ups and downs " },
    { id: 24, name: "Ikigai", price: 30000, category: "Books", image: "images/Ikigai.jpg", description: "The Japanese secret To A Long And Happy Life" },
    { id: 25, name: "And then i Chose Myself", price: 35000, category: "Books", image: "images/chose myself.jpg", description: "101 reminders to heal, rise and shine" },
    { id: 26, name: "The Psychology of Money", price: 35000, category: "Books", image: "images/money.jpg", description: "Timeless lessons on Wealth,Greed and Happiness" },
    { id: 27, name: "Wabi sabi", price: 35000, category: "Books", image: "images/wabi sabi.jpg", description: "The wisdom of imperfection" },
    { id: 28, name: "Surrounded by Idiots", price: 35000, category: "Books", image: "images/idiots.jpg", description: "The Four Types Of Human Behaviour" },
    { id: 29, name: "Signs To grow Up", price: 35000, category: "Books", image: "images/book1.jpg", description: "a poetic guide to beginners astronomy" },
    { id: 30, name: "The Laws Of Human Nature", price: 35000, category: "Books", image: "images/human nature.jpg", description: "New York Times Best Selling" },
    { id: 31, name: "HP Printer", price: 250000, category: "Electronics", image: "images/HP printer.jpg", description: "HP Mega Tank,Never Lets You Down" },
    { id: 32, name: "Red Headphones", price: 45000, category: "Electronics", image: "images/red headphones.jpg", description: "8D sound with noise cancellation" },
    { id: 33, name: "C to C cable", price: 15000, category: "Electronics", image: "images/c to c cable.jpg", description: " fast Charging and file transfer USB" },
    { id: 34, name: "Sound System", price: 150000, category: "Electronics", image: "images/sound system.jpg", description: "Bluetooth and wired Home sound system" },
    { id: 35, name: "power bank", price: 50000, category: "Electronics", image: "images/power bank.jpg", description: "10000W power bank with multiple USBs" },
    { id :36, name: "Kalu heels", price: 45000, category: "Fashion", image: "images/13.jpeg", description: "Blends office looks"},
    { id :37, name: "Glass heels", price: 50000, category: "Fashion", image: "images/14.jpeg", description: "Comfort meets style"},
    { id :38, name: "Men sandals", price: 45000, category: "Fashion", image: "images/17.jpeg", description: " Available in all colors"},
    { id :39, name: "Hermes", price: 48000, category: "Fashion", image: "images/23.jpeg", description: "Comfort meets style"}

];

   // CART STATE - Managed with localStorage
        let cart = [];
// DOM ELEMENTS - Using querySelector and getElementById
       const productsContainer = document.getElementById('productsContainer');
        const cartContainer = document.getElementById('cartContainer');
        const cartCount = document.getElementById('cartCount');
        const cartTotal = document.getElementById('cartTotal');
        const cartSummary = document.getElementById('cartSummary');
        const emptyCart = document.getElementById('emptyCart');
        const toast = document.getElementById('toast');
        const checkoutSummary = document.getElementById('checkoutSummary');

        // LOCAL STORAGE FUNCTIONS - Save and Load Cart
        function saveCartToLocalStorage() {
            try {
                localStorage.setItem('shopEasyCart', JSON.stringify(cart));
            } catch (error) {
                console.error('Error saving to localStorage:', error);
                showToast('Error saving cart', 'error');
            }
        }

        function loadCartFromLocalStorage() {
            try {
                const savedCart = localStorage.getItem('shopEasyCart');
                if (savedCart) {
                    cart = JSON.parse(savedCart);
                    updateCartCount();
                }
            } catch (error) {
                console.error('Error loading from localStorage:', error);
                cart = [];
            }
        }

       // PAGE NAVIGATION - Show/Hide Sections
       function showPage(pageName) {
            // Hide all pages
            document.querySelectorAll('.page-section').forEach(section => {
                section.classList.remove('active');
            });
            
            // Remove active class from nav links
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });

            // Show selected page
            document.getElementById(pageName + '-page').classList.add('active');
            
            // Update nav link
            event.target.classList.add('active');

            // Refresh cart display if viewing cart or checkout
            if (pageName === 'cart') {
                renderCart();
            } else if (pageName === 'checkout') {
                renderCheckoutSummary();
            }
        }

       // DYNAMIC PRODUCT DISPLAY - DOM Manipulation
       function renderProducts(productsToDisplay) {
            // Clear existing products using innerHTML
            productsContainer.innerHTML = '';


            // Create product cards dynamically using createElement and appendChild
            productsToDisplay.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card bg-white rounded-lg shadow overflow-hidden';
                
                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
                    <div class="p-4">
                        <span class="text-xs text-blue-600 font-medium">${product.category}</span>
                        <h3 class="text-lg font-bold mt-1">${product.name}</h3>
                        <p class="text-gray-500 text-sm mt-1">${product.description}</p>
                        <div class="flex justify-between items-center mt-4">
                            <span class="text-xl font-bold text-green-600">$${product.price}</span>
                            <button onclick="addToCart(${product.id})" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                `;
                
                productsContainer.appendChild(productCard);
            });
        }


       // SEARCH FUNCTION - DOM Filtering
         function searchProducts() {
            const searchTerm = document.getElementById('searchInput').value.toLowerCase();
            const filteredProducts = products.filter(product => 
                product.name.toLowerCase().includes(searchTerm)
            );
            renderProducts(filteredProducts);
        }

        // CATEGORY FILTER - DOM Updates
        function filterProducts(category) {
            // Update active button state
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            event.target.classList.add('active');

            // Filter products
            if (category === 'all') {
                renderProducts(products);
            } else {
                const filteredProducts = products.filter(product => product.category === category);
                renderProducts(filteredProducts);
            }
        }

       // ADD TO CART - DOM Events and Arrays
       function addToCart(productId) {
            try {
                const product = products.find(p => p.id === productId);
                
                if (!product) {
                    throw new Error('Product not found');
                }

                const existingItem = cart.find(item => item.id === productId);
                
                if (existingItem) {
                    existingItem.quantity += 1;
                } else {
                    cart.push({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.image,
                        quantity: 1
                    });
                }

                saveCartToLocalStorage();
                updateCartCount();
                showToast(`${product.name} added to cart!`, 'success');
            } catch (error) {
                console.error('Error adding to cart:', error);
                showToast('Error adding to cart', 'error');
            }
        }

       // UPDATE CART COUNT - Dynamic Display
       function updateCartCount() {
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCount.textContent = totalItems;
        }

       // RENDER CART - DOM Manipulation
       function renderCart() {
            if (cart.length === 0) {
                cartContainer.innerHTML = '';
                cartSummary.classList.add('hidden');
                emptyCart.classList.remove('hidden');
                return;
            }

            emptyCart.classList.add('hidden');
            cartSummary.classList.remove('hidden');
            cartContainer.innerHTML = '';

            let total = 0;

            cart.forEach((item, index) => {
                const itemTotal = item.price * item.quantity;
                total += itemTotal;

                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item bg-white rounded-lg shadow p-4 mb-4 flex items-center gap-4';
                cartItem.setAttribute('data-index', index);

                cartItem.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" class="w-20 h-20 object-cover rounded">
                    <div class="flex-1">
                        <h3 class="font-bold">${item.name}</h3>
                        <p class="text-green-600 font-medium">$${item.price}</p>
                    </div>
                    <div class="flex items-center gap-2">
                        <button onclick="updateQuantity(${index}, -1)" class="quantity-btn rounded-l">-</button>
                        <span class="w-10 text-center font-medium">${item.quantity}</span>
                        <button onclick="updateQuantity(${index}, 1)" class="quantity-btn rounded-r">+</button>
                    </div>
                    <div class="text-right">
                        <p class="font-bold text-lg">$${itemTotal}</p>
                        <button onclick="removeFromCart(${index})" class="text-red-500 text-sm hover:underline mt-1">Remove</button>
                    </div>
                `;

                cartContainer.appendChild(cartItem);
            });

            cartTotal.textContent = `$${total.toFixed(2)}`;
        }

       // UPDATE QUANTITY - Automatic Total Update
       function updateQuantity(index, change) {
            try {
                if (index < 0 || index >= cart.length) {
                    throw new Error('Invalid cart item index');
                }

                cart[index].quantity += change;

                if (cart[index].quantity <= 0) {
                    removeFromCart(index);
                    return;
                }

                saveCartToLocalStorage();
                renderCart();
                updateCartCount();
            } catch (error) {
                console.error('Error updating quantity:', error);
                showToast('Error updating quantity', 'error');
            }
        }

       // REMOVE FROM CART - DOM and Array Update
       function removeFromCart(index) {
            try {
                if (index < 0 || index >= cart.length) {
                    throw new Error('Invalid cart item index');
                }

                const item = cart[index];
                const cartItemElement = document.querySelector(`[data-index="${index}"]`);
                
                if (cartItemElement) {
                    cartItemElement.classList.add('removing');
                    setTimeout(() => {
                        cart.splice(index, 1);
                        saveCartToLocalStorage();
                        renderCart();
                        updateCartCount();
                        showToast(`${item.name} removed from cart`, 'success');
                    }, 300);
                } else {
                    cart.splice(index, 1);
                    saveCartToLocalStorage();
                    renderCart();
                    updateCartCount();
                }
            } catch (error) {
                console.error('Error removing from cart:', error);
                showToast('Error removing item', 'error');
            }
        }

       // RENDER CHECKOUT SUMMARY
       function renderCheckoutSummary() {
            if (cart.length === 0) {
                checkoutSummary.innerHTML = '<p class="text-gray-500">Your cart is empty</p>';
                return;
            }

            let total = 0;
            let html = '<div class="space-y-2">';
            
            cart.forEach(item => {
                const itemTotal = item.price * item.quantity;
                total += itemTotal;
                html += `
                    <div class="flex justify-between text-sm">
                        <span>${item.name} x ${item.quantity}</span>
                        <span>$${itemTotal}</span>
                    </div>
                `;
            });

            html += `
                <div class="border-t pt-2 mt-2 flex justify-between font-bold">
                    <span>Total</span>
                    <span>$${total.toFixed(2)}</span>
                </div>
            </div>`;

            checkoutSummary.innerHTML = html;
        }

        // CHECKOUT FORM VALIDATION
       function validateForm() {
            let isValid = true;
            const name = document.getElementById('customerName');
            const email = document.getElementById('customerEmail');
            const phone = document.getElementById('customerPhone');
            const address = document.getElementById('customerAddress');

            // Reset errors
            document.querySelectorAll('.error-message').forEach(el => el.classList.remove('show'));
            document.querySelectorAll('.form-input').forEach(el => el.classList.remove('error'));

            // Validate Name
            if (!name.value.trim()) {
                document.getElementById('nameError').classList.add('show');
                name.classList.add('error');
                isValid = false;
            }

            // Validate Email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email.value.trim() || !emailRegex.test(email.value)) {
                document.getElementById('emailError').classList.add('show');
                email.classList.add('error');
                isValid = false;
            }

            // Validate Phone
            const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
            if (!phone.value.trim() || !phoneRegex.test(phone.value.replace(/\s/g, ''))) {
                document.getElementById('phoneError').classList.add('show');
                phone.classList.add('error');
                isValid = false;
            }

            // Validate Address
            if (!address.value.trim()) {
                document.getElementById('addressError').classList.add('show');
                address.classList.add('error');
                isValid = false;
            }

            return isValid;
        }

       // HANDLE CHECKOUT - Form Submission
        function handleCheckout(event) {
            event.preventDefault();

            try {
                // Check if cart is empty
                if (cart.length === 0) {
                    throw new Error('Cart is empty. Please add items before checkout.');
                }

                // Validate form
                if (!validateForm()) {
                    throw new Error('Please fill in all required fields correctly.');
                }

                // Get form values
                const customerData = {
                    name: document.getElementById('customerName').value,
                    email: document.getElementById('customerEmail').value,
                    phone: document.getElementById('customerPhone').value,
                    address: document.getElementById('customerAddress').value,
                    orderDate: new Date().toISOString()
                };

                // Save order to localStorage
                const orders = JSON.parse(localStorage.getItem('shopEasyOrders') || '[]');
                orders.push({
                    ...customerData,
                    items: [...cart],
                    total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
                });
                localStorage.setItem('shopEasyOrders', JSON.stringify(orders));

                // Clear cart
                cart = [];
                saveCartToLocalStorage();
                updateCartCount();

                // Show success message
                showToast('Order placed successfully! 🎉', 'success');

                // Reset form
                document.getElementById('checkoutForm').reset();

                // Redirect to home after delay
                setTimeout(() => {
                    showPage('home');
                    // Trigger nav link click to update active state
                    document.querySelector('.nav-link').click();
                }, 2000);

            } catch (error) {
                console.error('Checkout error:', error);
                showToast(error.message, 'error');
            }
        }

       // TOAST NOTIFICATION
        function showToast(message, type) {
            toast.textContent = message;
            toast.className = `toast ${type} show`;
            
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }

       // INITIALIZATION - Load on Page Load
        document.addEventListener('DOMContentLoaded', function() {
            // Load cart from localStorage
            loadCartFromLocalStorage();
            
            // Render all products
            renderProducts(products);
            
            // Update cart count
            updateCartCount();

            console.log('ShopEasy E-Commerce initialized');
            console.log('Products loaded:', products.length);
            console.log('Cart items:', cart.length);
        });

       // ERROR HANDLING DEMO - Try/Catch Example
       function demonstrateErrorHandling() {
            try {
                // Simulate potential error scenarios
                const invalidProduct = products.find(p => p.id === 999);
                if (!invalidProduct) {
                    throw new Error('Product with ID 999 not found - This is expected behavior');
                }
            } catch (error) {
                console.log('Error caught successfully:', error.message);
            }
        }
