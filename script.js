//PRODUCT DATA
const products = [
    { id: 1, name: "Laptop Pro", price: 1800000, category: "Electronics", image: "images/laptop.avif", description: "High-performance laptop" },
    { id: 2, name: "Smartphone X", price: 1500000, category: "Electronics", image: "images/smartphone.jpg", description: "Latest smartphone" },
    { id: 3, name: "New Balance", price: 70000, category: "Fashion", image: "images/new balance shoes.webp", description: "Comfort meets style" },
    { id: 4, name: "Air Jordans", price: 25000, category: "Fashion", image: "images/5.jpeg", description: "Comfortable meets style" },
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

   // 1. Initialize Cart using localStorage
let cart = JSON.parse(localStorage.getItem('shopEasy_cart')) || [];


// 2. DOMContentLoaded - Entry point for all pages
document.addEventListener('DOMContentLoaded', () => {
    updateCartCounter(); //refresh the cart icon numder immediately
    
    // Check which page we are on
    if (document.getElementById('productContainer')) {
        renderProducts(products); //show all products by default
        setupFilters(); //attach search and category listeners
    }
    
    if (document.getElementById('cartItems')) {
        renderCart(); //generate the list of items in the cart
    }


    if (document.getElementById('checkoutForm')) {
        handleCheckout(); //handle validation and payment submission
    }
});

// 3. Dynamic Product Display 
function renderProducts(items) {
    const container = document.getElementById('productContainer');
   container.innerHTML = ''; 
// Use innerHTML to clear to prevent duplicates


    items.forEach(product => {
    // Use createElement and appendChild
        const card = document.createElement('div');
        card.className = 'product-card';
       card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p><strong>UGX ${product.price.toLocaleString()}</strong></p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        container.appendChild(card);
    });
}


// 4. Cart Logic
//add product to the cart or increase the quantity if it already exixts
window.addToCart = (id) => {
    const product = products.find(p => p.id === id);
    const inCart = cart.find(item => item.id === id);


    if (inCart) {
        inCart.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    syncCart(); //saves changes and updates  the UI
};

//generates the visual list of items currently in the user's cart
function renderCart() {
    const cartContainer = document.getElementById('cartItems');
    const totalEl = document.getElementById('totalPrice');
    cartContainer.innerHTML = '';
    let total = 0;


    cart.forEach(item => {
        total += item.price * item.quantity;
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <div>
                <h4>${item.name}</h4>
                <p>UGX ${item.price.toLocaleString()} x ${item.quantity}</p>
            </div>
            <div>
                <button onclick="changeQty(${item.id}, 1)">+</button>
                <button onclick="changeQty(${item.id}, -1)">-</button>
                <button class="remove-btn" onclick="removeItem(${item.id})">Remove</button>
            </div>
        `;
        cartContainer.appendChild(itemDiv);
    });
    totalEl.innerText = total.toLocaleString();
}

//modifies quantity( adds or reduces) and also removes itmif quantity hits 0
window.changeQty = (id, change) => {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) removeItem(id);
        else syncCart();
    }
};

//completely removes an item from the cart array using a filter
window.removeItem = (id) => {
    cart = cart.filter(i => i.id !== id);
    syncCart();
};


// 5. Utility Functions
//update localStorage so that the cart persists even if the pages is refreshed
function syncCart() {
    localStorage.setItem('shopEasy_cart', JSON.stringify(cart));
    updateCartCounter();
    if (document.getElementById('cartItems')) renderCart();
}

//update the small number on the cart
function updateCartCounter() {
    const counter = document.getElementById('cartCount');
    if (counter) {
        counter.innerText = cart.reduce((acc, item) => acc + item.quantity, 0);
    }
}


// 6. Filtering and Search
function setupFilters() {
    //listens for typing in the search bar
    document.getElementById('searchBar').addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const filtered = products.filter(p => p.name.toLowerCase().includes(query));
        renderProducts(filtered);
    });

//listens for selection changes in the category dropdown
    document.getElementById('categoryFilter').addEventListener('change', (e) => {
        const cat = e.target.value;
        const filtered = cat === 'all' ? products : products.filter(p => p.category === cat);
        renderProducts(filtered);
    });
}

// 7. Form Validation and Error Handling
function handleCheckout() {
    document.getElementById('checkoutForm').addEventListener('submit', (e) => {
        e.preventDefault(); //prevent the page from refreshing on form submission
        const errorMsg = document.getElementById('errorMessage');
        
        //check if the cart is empty before submission
        try {
           if (cart.length === 0) throw new Error("Empty cart during checkout!");
            //basic email formart check
            const email = document.getElementById('email').value;
           if (!email.includes('@')) throw new Error("Email format is valid check failed.");

            //successfull scenario
            alert("Payment processed! Thank you for shopping at ShopEasy.");
            localStorage.clear(); //empty the storage
            window.location.href = 'index.html';  // redirect to home
        } catch (error) {
           errorMsg.innerText = error.message; //display error message
        }
    });
}
