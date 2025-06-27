document.addEventListener('DOMContentLoaded', () => {

    // --- Product Data (Updated with only the 6 categories for display) ---
    const products = {
        'shampoos': [
            { id: 'sh001', name: 'شامبو ضد القشرة', image: 'images2/c.jpg', price: 85.00, description: 'يقضي على القشرة ويمنع ظهورها.' },
            { id: 'sh002', name: 'شامبو للشعر الجاف', image: 'images2/b.jpg', price: 90.00, description: 'يرطب ويغذي الشعر الجاف.' },
            { id: 'sh003', name: 'شامبو للشعر الدهني', image: 'images2/v.jpg', price: 80.00, description: 'يتحكم في زيوت فروة الرأس.' }
        ],
        'medical-devices': [
            { id: 'md001', name: 'جهاز قياس الضغط', image: 'images3/zz.png', price: 450.00, description: 'جهاز رقمي دقيق لقياس ضغط الدم.' },
            { id: 'md002', name: 'جهاز قياس السكر', image: 'images3/jjj.jpg', price: 300.00, description: 'سهل الاستخدام مع شرائط اختبار.' },
            { id: 'md003', name: 'ترمومتر رقمي', image: 'images3/mm.jpg', price: 80.00, description: 'لقياس درجة الحرارة بدقة وسرعة.' }
        ],
        'vitamins': [
            { id: 'v001', name: 'فيتامين سي 1000 مجم', image: 'images/e.jpg', price: 75.00, description: 'مكمل غذائي لدعم المناعة.' },
            { id: 'v002', name: 'مالتي فيتامين', image: 'images/o.webp', price: 120.00, description: 'مجموعة متكاملة من الفيتامينات والمعادن.' },
            { id: 'v003', name: 'فيتامين د 5000 وحدة', image: 'images/y.jpg', price: 90.00, description: 'لصحة العظام والمناعة.' }
        ],
        'baby-care': [
            { id: 'bc001', name: 'حفاضات أطفال (مقاس 3)', image: 'images2/z.jpg', price: 220.00, description: 'حفاضات عالية الامتصاص ومريحة.' },
            { id: 'bc002', name: 'زيت أطفال طبيعي', image: 'images2/x.png', price: 60.00, description: 'لترطيب بشرة الطفل الحساسة.' },
            { id: 'bc003', name: 'شامبو أطفال لا دموع', image: 'images2/l.png', price: 70.00, description: 'تركيبة لطيفة لا تسبب الدموع.' }
        ],
        'skin-care': [
            { id: 'sc001', name: 'كريم مرطب للبشرة الجافة', image: 'images2/yy.png', price: 150.00, description: 'يرطب البشرة بعمق ويحميها.' },
            { id: 'sc002', name: 'غسول الوجه اليومي', image: 'images2/uu.png', price: 95.00, description: 'ينظف البشرة بعمق ويزيل الشوائب.' },
            { id: 'sc003', name: 'واقي شمسي SPF 50+', image: 'images2/n.jpg', price: 180.00, description: 'حماية عالية من أشعة الشمس الضارة.' }
        ],
        'medicines': [
            { id: 'med001', name: 'بانادول أدفانس', image: 'images/q.webp', price: 30.00, description: 'مسكن للآلام وخافض للحرارة.' },
            { id: 'med002', name: 'ستربسلز للحلق', image: 'images/r.jpg', price: 45.00, description: 'لتهدئة التهاب الحلق.' },
        ],
        // You can keep other product categories here if you plan to link them via "عرض الكل" later
        // 'offers': [ { id: 'off001', name: 'عرض خاص: اشترِ 1 واحصل على 1 مجانًا', image: 'images/product-offer1.jpg', price: 50.00, description: 'على منتجات مختارة.' } ],
        // 'hair-care': [ { id: 'hc001', name: 'بلسم للشعر التالف', image: 'images/product-hair-conditioner.jpg', price: 75.00, description: 'يصلح الشعر التالف.' } ],
        // 'beauty-products': [ { id: 'bp001', name: 'أحمر شفاه سائل', image: 'images/product-lipstick-liquid.jpg', price: 120.00, description: 'لون كثيف يدوم طويلاً.' } ],
        // 'sexual-health': [ { id: 'shh001', name: 'جل مهدئ', image: 'images/product-soothing-gel.jpg', price: 90.00, description: 'للاسترخاء.' } ],
        // 'weight-loss': [ { id: 'wl001', name: 'مكمل غذائي للتخسيس', image: 'images/product-diet-supplement.jpg', price: 400.00, description: 'يساعد في إدارة الوزن.' } ]
    };

    const brandProducts = {
        'BOBAI': [
            { id: 'bb001', name: 'صن سكرين بوباي SPF 50', image: 'images2/qq.png', price: 200.00, description: 'واقي شمسي فعال.' },
            { id: 'bb002', name: 'لوشن بوباي بعد التعرض للشمس', image: 'images2/n.jpg', price: 150.00, description: 'يهدئ البشرة بعد الشمس.' },
        ],
        'LAROCHE-POSAY': [
            { id: 'lrp001', name: 'لاروش بوزيه إيفاكلار جل منظف', image: 'images2/z.jpg', price: 300.00, description: 'ينظف البشرة الدهنية والمعرضة لحب الشباب.' },
            { id: 'lrp002', name: 'لاروش بوزيه أنثيليوس واقي شمسي', image: 'images2/x.png', price: 400.00, description: 'حماية عالية جداً من الشمس.' },
        ],
        'Jamieson': [
            { id: 'jams001', name: 'جاميسون فيتامين سي 500 مجم', image: 'images2/aa.webp', price: 100.00, description: 'مكمل فيتامين سي لدعم المناعة.' },
            { id: 'jams002', name: 'جاميسون أوميجا 3', image: 'images2/pp.jpg', price: 280.00, description: 'لصحة القلب والدماغ.' },
        ],
        'BIODERMA': [ // Keeping only 4 brands as requested
            { id: 'bio001', name: 'بيوديرما ماء ميسيلار', image: 'images2/tt.png', price: 220.00, description: 'منظف ومزيل مكياج للبشرة الحساسة.' },
            { id: 'bio002', name: 'بيوديرما كريم مرطب أتوديرم', image: 'images2/uu.png', price: 300.00, description: 'مرطب للبشرة الجافة والجافة جداً.' },
        ]
        // Removed 'PIC' and 'VACATION' to keep only 4 brands
    };


    // --- Removed Promo Slider Functionality (no more auto-advance or dots) ---
    // The previous code for promo slider is now gone as it's a single image banner.


    // --- View Switching (Main Content vs. Products Display) ---
    const mainContent = document.getElementById('main-content');
    const productsDisplaySection = document.getElementById('products-display-section');
    const backButton = document.getElementById('back-to-main');
    const currentDisplayTitle = document.getElementById('current-display-title');
    const productListContainer = document.getElementById('product-list-container');

    function showMainContent() {
        mainContent.classList.remove('hidden');
        productsDisplaySection.classList.add('hidden');
    }

    function showProductsDisplay(title, items, isBrand = false) {
        currentDisplayTitle.textContent = title;
        productListContainer.innerHTML = '';

        if (items.length === 0) {
            productListContainer.innerHTML = '<p style="text-align: center; color: #666;">لا توجد منتجات في هذه الفئة حالياً.</p>';
        } else {
            items.forEach(product => {
                const productCard = document.createElement('div');
                productCard.classList.add('product-card');
                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <div class="price">${product.price.toFixed(2)} جنيه</div>
                    <button class="add-to-cart-btn" data-id="${product.id}"
                            data-name="${product.name}"
                            data-price="${product.price}"
                            data-image="${product.image}">
                        أضف للسلة
                    </button>
                `;
                productListContainer.appendChild(productCard);
            });
            productListContainer.querySelectorAll('.add-to-cart-btn').forEach(button => {
                button.addEventListener('click', addToCart);
            });
        }
        mainContent.classList.add('hidden');
        productsDisplaySection.classList.remove('hidden');
    }

    // Event listeners for Category Tiles
    document.querySelectorAll('.category-tile').forEach(tile => {
        tile.addEventListener('click', (event) => {
            const category = event.currentTarget.dataset.category;
            const categoryName = event.currentTarget.querySelector('span').textContent;
            showProductsDisplay(categoryName, products[category]);
        });
    });

    // Event listeners for Brand Tiles
    document.querySelectorAll('.brand-tile').forEach(tile => {
        tile.addEventListener('click', (event) => {
            const brand = event.currentTarget.dataset.brand;
            const brandName = event.currentTarget.querySelector('img').alt;
            showProductsDisplay(`منتجات ${brandName}`, brandProducts[brand], true);
        });
    });

    // Back button functionality
    backButton.addEventListener('click', showMainContent);


    // --- Shopping Cart Modal Functionality ---
    let cart = JSON.parse(localStorage.getItem('pharmacyCart')) || [];
    const cartModal = document.getElementById('cartModal');
    const openCartModalBtn = document.getElementById('openCartModal');
    const closeCartModalBtn = document.getElementById('closeCartModal');
    const modalCartItemsContainer = document.getElementById('modal-cart-items');
    const modalCartTotalSpan = document.getElementById('modal-cart-total');
    const modalEmptyCartMessage = document.getElementById('modal-empty-cart-message');
    const cartCountSpan = document.getElementById('cart-count');


    function saveCart() {
        localStorage.setItem('pharmacyCart', JSON.stringify(cart));
        updateCartCount();
    }

    function updateCartCount() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCountSpan.textContent = totalItems;
        cartCountSpan.style.display = totalItems > 0 ? 'inline-block' : 'none';
    }

    function updateModalCartDisplay() {
        modalCartItemsContainer.innerHTML = '';
        let total = 0;

        if (cart.length === 0) {
            modalEmptyCartMessage.style.display = 'block';
        } else {
            modalEmptyCartMessage.style.display = 'none';
            cart.forEach(item => {
                const cartItemDiv = document.createElement('div');
                cartItemDiv.classList.add('cart-item');
                cartItemDiv.innerHTML = `
                    <div class="cart-item-info">
                        <img src="${item.image}" alt="${item.name}">
                        <div class="cart-item-details">
                            <h4>${item.name}</h4>
                            <p>${item.price.toFixed(2)} جنيه</p>
                        </div>
                    </div>
                    <div class="cart-item-actions">
                        <input type="number" value="${item.quantity}" min="1" class="cart-item-quantity" data-id="${item.id}">
                        <button class="remove-from-cart-btn" data-id="${item.id}">حذف</button>
                    </div>
                `;
                modalCartItemsContainer.appendChild(cartItemDiv);
                total += item.price * item.quantity;
            });
        }
        modalCartTotalSpan.textContent = total.toFixed(2);

        modalCartItemsContainer.querySelectorAll('.cart-item-quantity').forEach(input => {
            input.addEventListener('change', updateQuantity);
        });
        modalCartItemsContainer.querySelectorAll('.remove-from-cart-btn').forEach(button => {
            button.addEventListener('click', removeFromCart);
        });
        saveCart();
    }

    function addToCart(event) {
        const productId = event.target.dataset.id;
        const productName = event.target.dataset.name;
        const productPrice = parseFloat(event.target.dataset.price);
        const productImage = event.target.dataset.image;

        const existingItem = cart.find(item => item.id === productId);

        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({
                id: productId,
                name: productName,
                price: productPrice,
                image: productImage,
                quantity: 1
            });
        }
        updateModalCartDisplay();
    }

    function updateQuantity(event) {
        const productId = event.target.dataset.id;
        const newQuantity = parseInt(event.target.value);
        const item = cart.find(item => item.id === productId);
        if (item && newQuantity > 0) {
            item.quantity = newQuantity;
        } else if (item && newQuantity <= 0) {
            cart = cart.filter(item => item.id !== productId);
        }
        updateModalCartDisplay();
    }

    function removeFromCart(event) {
        const productId = event.target.dataset.id;
        cart = cart.filter(item => item.id !== productId);
        updateModalCartDisplay();
    }

    // Open/Close Cart Modal
    openCartModalBtn.addEventListener('click', () => {
        cartModal.style.display = 'block';
        updateModalCartDisplay();
    });

    closeCartModalBtn.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == cartModal) {
            cartModal.style.display = 'none';
        }
    });

    // Checkout function for WhatsApp
    window.checkout = function() {
        if (cart.length === 0) {
            alert('سلة التسوق فارغة! الرجاء إضافة منتجات قبل تأكيد الطلب.');
            return;
        }

        let whatsappMessage = "مرحباً، أود طلب المنتجات التالية:\n\n";
        let totalOrderPrice = 0;

        cart.forEach(item => {
            whatsappMessage += `- ${item.name} (الكمية: ${item.quantity}) - السعر: ${item.price.toFixed(2)} جنيه\n`;
            totalOrderPrice += item.price * item.quantity;
        });

        whatsappMessage += `\nالإجمالي: ${totalOrderPrice.toFixed(2)} جنيه\n`;
        whatsappMessage += "الرجاء تأكيد الطلب وتحديد طريقة الدفع والتوصيل.";

        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappNumber = "201001528040"; // Replace with your pharmacy's WhatsApp number

        window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    };

    // Initial load: Update cart count
    updateCartCount();
});