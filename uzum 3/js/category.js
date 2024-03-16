let categories = [
    {
        id: Math.random(),
        name: "Smartfon Samsung Galaxy S24 Ultra (Official), 256/512GB Dynamic AMOLED 2X, 120 H",
        description: "5.0 (43 sharh)",
        price: "47 880 so'm/oyiga",
        realprice: "598 000 so'm",
        sale: "399 000 so'm",
        isFavorite: false,
        isInCart: true,
        images: ["https://images.uzum.uz/cno0ullbl7rtgkb9vicg/original.jpg"],
        category: 1,
    },
    {
        id: Math.random(),
        name: "Smartfon Apple iPhone 13 128 GB 6.1 OLED, IP68, 5G,",
        description: "5.0 (43 sharh)",
        price: "47 880 so'm/oyiga",
        realprice: "598 000 so'm",
        sale: "399 000 so'm",
        isFavorite: false,
        isInCart: true,
        images: ["https://images.uzum.uz/cmst4ths99ouqbfskm70/original.jpg"],
        category: 1,
    },

    {
        id: Math.random(),
        name: "Smartfon Apple iPhone 13 128 GB 6.1 OLED, IP68, 5G",
        description: "5.0 (43 sharh)",
        price: "47 880 so'm/oyiga",
        realprice: "598 000 so'm",
        sale: "399 000 so'm",
        isFavorite: false,
        isInCart: true,
        images: ["https://images.uzum.uz/cmst6t1s99ouqbfskmn0/original.jpg"],
        category: 1,
    },
    {
        id: Math.random(),
        name: "Smartfon Samsung Galaxy A05s 4 GB RAM, 128 GB, 90 Hz, 50 MP, Snapdragon 680 4G",
        description: "5.0 (43 sharh)",
        price: "47 880 so'm/oyiga",
        realprice: "598 000 so'm",
        sale: "399 000 so'm",
        isFavorite: false,
        isInCart: true,
        images: ["https://images.uzum.uz/cnn9rttbl7rtgkb9q9tg/original.jpg"],
        category: 1,
    },
    {
        id: Math.random(),
        name: "Televizor Li TV 32 Smart TV, HD IPS, sovg'a sifatida Allplay-ga tekin obuna",
        description: "5.0 (43 sharh)",
        price: "47 880 so'm/oyiga",
        realprice: "598 000 so'm",
        sale: "399 000 so'm",
        isFavorite: false,
        isInCart: true,
        images: ["https://images.uzum.uz/cm6s9o9s99ouqbfp3hn0/original.jpg"],
        category: 2,
    },

    {
        id: Math.random(),
        name: "Smart televizor WellStars 43-75, ovozli qidiruv pulti",
        description: "5.0 (43 sharh)",
        price: "47 880 so'm/oyiga",
        realprice: "598 000 so'm",
        sale: "399 000 so'm",
        isFavorite: false,
        isInCart: true,
        images: ["https://images.uzum.uz/cmjnpv1s99ouqbfqugeg/original.jpg"],
        category: 2,
    },
    {
        id: Math.random(),
        name: "Televizor LiTV 32 Smart TV, sovg'a sifatida televizor uchun kronshteyn va Allplayga obuna",
        description: "5.0 (43 sharh)",
        price: "47 880 so'm/oyiga",
        realprice: "598 000 so'm",
        sale: "399 000 so'm",
        isFavorite: false,
        isInCart: true,
        images: ["https://images.uzum.uz/cm6s91rifoubkc6mh2s0/original.jpg"],
        category: 2,
    },
    {
        id: Math.random(),
        name: "Aqlli televizor TCL 43 S5400A Full HD, Smart TV",
        description: "5.0 (43 sharh)",
        price: "47 880 so'm/oyiga",
        realprice: "598 000 so'm",
        sale: "399 000 so'm",
        isFavorite: false,
        isInCart: true,
        images: ["https://images.uzum.uz/cleq6lfn7c6qm23jthlg/original.jpg"],
        category: 2,
    },

{
        id: Math.random(),
        name: "Erkaklar uchun shippaklar",
        description: "5.0 (43 sharh)",
        price: "47 880 so'm/oyiga",
        realprice: "598 000 so'm",
        sale: "399 000 so'm",
        isFavorite: false,
        isInCart: true,
        images: ["https://images.uzum.uz/ci3c95bltlh4bk4lgc4g/original.jpg"],
        category: 3,
    },
    {
        id: Math.random(),
        name: "Erkaklar krossovkasi",
        description: "5.0 (43 sharh)",
        price: "47 880 so'm/oyiga",
        realprice: "598 000 so'm",
        sale: "399 000 so'm",
        isFavorite: false,
        isInCart: true,
        images: ["https://images.uzum.uz/cloqutl6sfhsc0unljj0/original.jpg"],
        category: 3,
    },
    {
        id: Math.random(),
        name: "Erkaklar uchun krossovkalar, 40-45 o'lchami",
        description: "5.0 (43 sharh)",
        price: "47 880 so'm/oyiga",
        realprice: "598 000 so'm",
        sale: "399 000 so'm",
        isFavorite: false,
        isInCart: true,
        images: ["https://images.uzum.uz/cl1qrhdennt861io8s7g/original.jpg"],
        category: 3,
    },
    {
        id: Math.random(),
        name: "Krossovkalar erkaklar uchun, sport poyabzali",
        description: "5.0 (43 sharh)",
        price: "47 880 so'm/oyiga",
        realprice: "598 000 so'm",
        sale: "399 000 so'm",
        isFavorite: false,
        isInCart: true,
        images: ["https://images.uzum.uz/cmd9fv9s99ouqbfprc50/original.jpg"],
        category: 3,
    },
];
function displayProductsByCategory(category, containerId) {
    let container = document.getElementById(containerId);
    let productsHtml = "";

    categories.forEach((c) => {
        if (c.category === category) {
            productsHtml += ` <div class="wrapper1 max-w-screen-xl product-card">
                    <img src="${c.images}" alt="">
                        <h3>${c.name}</h3>
                        <p>${c.description}</p>
                        <mark class="text-[11px]">${c.price}</mark>
                        <p class="mt-6 line-through text-xs text-slate-400">${c.realprice}</p>
                        <div class="flex">
                            <p class="text-[15px]">${c.sale}</p>
                            <div class="border h-8 w-8 rounded-full flex center items-center ml-4 pt-3">
                                <div data-v-1a3a46a8="" class="slot default">
                                    <svg data-v-40da8b10="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="ui-icon add-cart-icon">
                                        <!-- Your SVG path data here -->
                                    </svg>
                                </div>
                            </div>
                        </div>
                </div>`

                ;
        }
    });

    container.innerHTML = productsHtml;
}

displayProductsByCategory(1, "for_phones");
displayProductsByCategory(2, "for_tv");
displayProductsByCategory(3, "for_shoes");