const data = {
    productData:[
    {
      "id": 1,
      "imgSrc": "https://images.pexels.com/photos/19004226/pexels-photo-19004226/free-photo-of-luxury-perfumes-in-a-bottle.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "title": "Armaf Le Femme",
      "rating": "⭐⭐⭐⭐(18)",
      "originalPrice": "Rs. 6000.00",
      "discountedPrice": 5990.00,
      "savings": "Save Rs. 10.00"
    },
    {
      "id": 2,
      "imgSrc": "https://images.pexels.com/photos/17567999/pexels-photo-17567999/free-photo-of-luxury-perfume-in-a-glass-bottle.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "title": "Swiss Arabian Shaghaf Oud",
      "rating": "⭐⭐⭐⭐⭐(30)",
      "originalPrice": "Rs. 2500.00",
      "discountedPrice": 2490.00,
      "savings": "Save Rs. 10.00"
    },
    {
      "id": 3,
      "imgSrc": "https://images.pexels.com/photos/20407122/pexels-photo-20407122/free-photo-of-perfume-in-a-bottle.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "title": "Rasasi Royale Blue",
      "rating": "⭐⭐⭐(5)",
      "originalPrice": "Rs. 1500.00",
      "discountedPrice": 1450.00,
      "savings": "Save Rs. 50.00"
    },
    {
      "id": 4,
      "imgSrc": "https://images.pexels.com/photos/13834312/pexels-photo-13834312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "title": "Rasasi Sotoor Waaw",
      "rating": "⭐⭐⭐(5)",
      "originalPrice": "Rs. 2000.00",
      "discountedPrice": 1950.00,
      "savings": "Save Rs. 50.00"
    },
    {
      "id": 5,
      "imgSrc": "https://images.pexels.com/photos/4110341/pexels-photo-4110341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "title": "Rasasi La Yuqawam",
      "rating": "⭐⭐⭐⭐⭐(29)",
      "originalPrice": "Rs. 3500.00",
      "discountedPrice": 3450.00,
      "savings": "Save Rs. 50.00"
    },
    {
      "id": 6,
      "imgSrc": "https://images.pexels.com/photos/8516275/pexels-photo-8516275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "title": "Rasasi Faqat Lil Rijal",
      "rating": "⭐⭐⭐⭐⭐(30)",
      "originalPrice": "Rs. 2000.00",
      "discountedPrice": 1950.00,
      "savings": "Save Rs. 50.00"
    },
    {
      "id": 7,
      "imgSrc": "https://images.pexels.com/photos/9202848/pexels-photo-9202848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "title": "Lattafa Qaed Al Fursan",
      "rating": "⭐⭐⭐⭐⭐(22)",
      "originalPrice": "Rs. 5000.00",
      "discountedPrice": 4950.00,
      "savings": "Save Rs. 50.00"
    },
    {
      "id": 8,
      "imgSrc": "https://images.pexels.com/photos/8516167/pexels-photo-8516167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "title": "Ajmal Sacrifice for Her",
      "rating": "⭐⭐⭐⭐⭐(30)",
      "originalPrice": "Rs. 4000.00",
      "discountedPrice": 3950.00,
      "savings": "Save Rs. 50.00"
    },
    {
      "id": 9,
      "imgSrc": "https://images.pexels.com/photos/11171653/pexels-photo-11171653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "title": "Rasasi Rumz Al Rasasi 9453",
      "rating": "⭐⭐⭐⭐⭐(30)",
      "originalPrice": "Rs. 3000.00",
      "discountedPrice": 2990.00,
      "savings": "Save Rs. 10.00"
    },
    {
      "id": 10,
      "imgSrc": "https://images.pexels.com/photos/6938592/pexels-photo-6938592.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "title": "Armaf Tres Nuit",
      "rating": "⭐⭐⭐⭐⭐(29)",
      "originalPrice": "Rs. 6000.00",
      "discountedPrice": 5990.00,
      "savings": "Save Rs. 10.00"
    },
    {
      "id": 11,
      "imgSrc": "https://images.pexels.com/photos/7270663/pexels-photo-7270663.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "title": "Lattafa Khamrah Eau De Parfum for Unisex",
      "rating": "⭐⭐⭐⭐⭐(29)",
      "originalPrice": "Rs. 2500.00",
      "discountedPrice": 2490.00,
      "savings": "Save Rs. 10.00"
    },
    {
      "id": 12,
      "imgSrc": "https://images.pexels.com/photos/16089870/pexels-photo-16089870/free-photo-of-a-bottle-of-perfume-on-white-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "title": "Ajmal Violet Musc",
      "rating": "⭐⭐⭐(5)",
      "originalPrice": "Rs. 5000.00",
      "discountedPrice": 4950.00,
      "savings": "Save Rs. 50.00"
    },
    {
      "id": 13,
      "imgSrc": "https://images.pexels.com/photos/12840448/pexels-photo-12840448.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "title": "Lattafa Oud Mood",
      "rating": "⭐⭐⭐⭐(15)",
      "originalPrice": "Rs. 4000.00",
      "discountedPrice": 3950.00,
      "savings": "Save Rs. 50.00"
    },
    {
      "id": 14,
      "imgSrc": "https://images.pexels.com/photos/13964074/pexels-photo-13964074.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "title": "Afnan Supremacy Gold",
      "rating": "⭐⭐⭐⭐⭐(30)",
      "originalPrice": "Rs. 1500.00",
      "discountedPrice": 1450.00,
      "savings": "Save Rs. 50.00"
    },
    {
      "id": 15,
      "imgSrc": "https://images.pexels.com/photos/4110341/pexels-photo-4110341.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "title": "Lattafa Velvet Oud",
      "rating": "⭐⭐⭐⭐⭐(30)",
      "originalPrice": "Rs. 5000.00",
      "discountedPrice": 4950.00,
      "savings": "Save Rs. 50.00"
    },
    {
      "id": 16,
      "imgSrc": "https://images.pexels.com/photos/13662407/pexels-photo-13662407.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "title": "Armaf Niche Oud",
      "rating": "⭐⭐⭐⭐⭐(30)",
      "originalPrice": "Rs. 3000.00",
      "discountedPrice": 2990.00,
      "savings": "Save Rs. 10.00"
    },
    {
      "id": 17,
      "imgSrc": "https://images.pexels.com/photos/755992/pexels-photo-755992.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "title": "Ajmal Neutron",
      "rating": "⭐⭐⭐⭐(18)",
      "originalPrice": "Rs. 3500.00",
      "discountedPrice": 3450.00,
      "savings": "Save Rs. 50.00"
    },
    {
      "id": 18,
      "imgSrc": "https://images.pexels.com/photos/18031848/pexels-photo-18031848/free-photo-of-glamour-perfume-bottle-and-jewelry.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "title": "Swiss Arabian Casablanca",
      "rating": "⭐⭐⭐⭐(15)",
      "originalPrice": "Rs. 2000.00",
      "discountedPrice": 1950.00,
      "savings": "Save Rs. 50.00"
    },
    {
      "id": 19,
      "imgSrc": "https://images.pexels.com/photos/8154643/pexels-photo-8154643.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "title": "Ajmal Mukhallat Shams",
      "rating": "⭐⭐⭐⭐⭐(29)",
      "originalPrice": "Rs. 4000.00",
      "discountedPrice": 3950.00,
      "savings": "Save Rs. 50.00"
    },
    {
      "id": 20,
      "imgSrc": "https://images.pexels.com/photos/13380129/pexels-photo-13380129.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "title": "Lattafa Perfumes Fakhar",
      "rating": "⭐⭐⭐⭐⭐(30)",
      "originalPrice": "Rs. 5000.00",
      "discountedPrice": 4950.00,
      "savings": "Save Rs. 50.00"
    },
    {
      "id": 21,
      "imgSrc": "https://images.pexels.com/photos/989962/pexels-photo-989962.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "title": "Armaf Tag Him",
      "rating": "⭐⭐⭐⭐⭐(30)",
      "originalPrice": "Rs. 3000.00",
      "discountedPrice": 2990.00,
      "savings": "Save Rs. 10.00"
    },
    {
      "id": 22,
      "imgSrc": "https://images.pexels.com/photos/14211239/pexels-photo-14211239.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "title": "Rasasi Royale Blue",
      "rating": "⭐⭐⭐⭐(15)",
      "originalPrice": "Rs. 2500.00",
      "discountedPrice": 2490.00,
      "savings": "Save Rs. 10.00"
    },
    {
      "id": 23,
      "imgSrc": "https://images.pexels.com/photos/13767426/pexels-photo-13767426.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "title": "Lattafa Ana Abiyedh",
      "rating": "⭐⭐⭐⭐⭐(30)",
      "originalPrice": "Rs. 6000.00",
      "discountedPrice": 5990.00,
      "savings": "Save Rs. 10.00"
    },
    {
      "id": 24,
      "imgSrc": "https://images.pexels.com/photos/8747028/pexels-photo-8747028.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "title": "Rasasi Hawas for Him",
      "rating": "⭐⭐⭐⭐⭐(30)",
      "originalPrice": "Rs. 4000.00",
      "discountedPrice": 3950.00,
      "savings": "Save Rs. 50.00"
    },
    {
      "id": 25,
      "imgSrc": "https://images.pexels.com/photos/10955097/pexels-photo-10955097.png?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "title": "Ajmal Wisal Dhahab",
      "rating": "⭐⭐⭐⭐(15)",
      "originalPrice": "Rs. 3000.00",
      "discountedPrice": 2990.00,
      "savings": "Save Rs. 10.00"
    },
    {
      "id": 26,
      "imgSrc": "https://images.pexels.com/photos/13767420/pexels-photo-13767420.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "title": "Swiss Arabian Edge",
      "rating": "⭐⭐⭐⭐⭐(22)",
      "originalPrice": "Rs. 5000.00",
      "discountedPrice": 4950.00,
      "savings": "Save Rs. 50.00"
    },
    {
      "id": 27,
      "imgSrc": "https://images.pexels.com/photos/14402569/pexels-photo-14402569.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "title": "Ajmal Amber Wood",
      "rating": "⭐⭐⭐⭐⭐(22)",
      "originalPrice": "Rs. 1500.00",
      "discountedPrice": 1450.00,
      "savings": "Save Rs. 50.00"
    },
    {
      "id": 28,
      "imgSrc": "https://images.pexels.com/photos/12456279/pexels-photo-12456279.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "title": "Al Haramain L´Aventure",
      "rating": "⭐⭐⭐⭐⭐(22)",
      "originalPrice": "Rs. 3000.00",
      "discountedPrice": 2990.00,
      "savings": "Save Rs. 10.00"
    },
    {
      "id": 29,
      "imgSrc": "https://images.pexels.com/photos/14402559/pexels-photo-14402559.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "title": "Lattafa Raghba",
      "rating": "⭐⭐⭐⭐⭐(22)",
      "originalPrice": "Rs. 4000.00",
      "discountedPrice": 3950.00,
      "savings": "Save Rs. 50.00"
    },
    {
      "id": 30,
      "imgSrc": "https://images.pexels.com/photos/8747010/pexels-photo-8747010.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "title": "Ajmal Aristocrat",
      "rating": "⭐⭐⭐⭐⭐(29)",
      "originalPrice": "Rs. 2500.00",
      "discountedPrice": 2490.00,
      "savings": "Save Rs. 10.00"
    },
    {
      "id": 31,
      "imgSrc": "https://images.pexels.com/photos/7270663/pexels-photo-7270663.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "title": "Armaf Le Femme",
      "rating": "⭐⭐⭐⭐(18)",
      "originalPrice": "Rs. 5000.00",
      "discountedPrice": 4950.00,
      "savings": "Save Rs. 50.00"
    },
    {
      "id": 32,
      "imgSrc": "https://images.pexels.com/photos/14402564/pexels-photo-14402564.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "title": "Ajmal Violet Musc",
      "rating": "⭐⭐⭐(5)",
      "originalPrice": "Rs. 5000.00",
      "discountedPrice": 4950.00,
      "savings": "Save Rs. 50.00"
    },
    {
      "id": 33,
      "imgSrc": "https://images.pexels.com/photos/1653085/pexels-photo-1653085.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "title": "Armaf Vanity Femme Essence",
      "rating": "⭐⭐⭐(5)",
      "originalPrice": "Rs. 2000.00",
      "discountedPrice": 1950.00,
      "savings": "Save Rs. 50.00"
    },
    {
      "id": 34,
      "imgSrc": "https://images.pexels.com/photos/13800860/pexels-photo-13800860.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "title": "Rasasi Blue Lady",
      "rating": "⭐⭐⭐(5)",
      "originalPrice": "Rs. 1500.00",
      "discountedPrice": 1450.00,
      "savings": "Save Rs. 50.00"
    },
    {
      "id": 35,
      "imgSrc": "https://images.pexels.com/photos/4110341/pexels-photo-4110341.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "title": "Swiss Arabian Casablanca",
      "rating": "⭐⭐⭐⭐(15)",
      "originalPrice": "Rs. 2000.00",
      "discountedPrice": 1950.00,
      "savings": "Save Rs. 50.00"
    },
    {
      "id": 36,
      "imgSrc": "https://images.pexels.com/photos/9202848/pexels-photo-9202848.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "title": "Armaf Club De Nuit Intense",
      "rating": "⭐⭐⭐⭐⭐(30)",
      "originalPrice": "Rs. 4000.00",
      "discountedPrice": 3950.00,
      "savings": "Save Rs. 50.00"
    },
    {
      "id": 37,
      "imgSrc": "https://images.pexels.com/photos/14402561/pexels-photo-14402561.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "title": "Swiss Arabian Daeeman",
      "rating": "⭐⭐⭐⭐(18)",
      "originalPrice": "Rs. 2000.00",
      "discountedPrice": 1950.00,
      "savings": "Save Rs. 50.00"
    },
    {
      "id": 38,
      "imgSrc": "https://images.pexels.com/photos/1961789/pexels-photo-1961789.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "title": "Armaf Tres Nuit",
      "rating": "⭐⭐⭐⭐⭐(29)",
      "originalPrice": "Rs. 6000.00",
      "discountedPrice": 5990.00,
      "savings": "Save Rs. 10.00"
    },
    {
      "id": 39,
      "imgSrc": "https://images.pexels.com/photos/1961789/pexels-photo-1961789.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "title": "Armaf Le Femme",
      "rating": "⭐⭐⭐(5)",
      "originalPrice": "Rs. 2500.00",
      "discountedPrice": 2490.00,
      "savings": "Save Rs. 10.00"
    },
    {
      "id": 40,
      "imgSrc": "https://images.pexels.com/photos/19644205/pexels-photo-19644205/free-photo-of-close-up-of-a-bottle.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "title": "Ajmal Aristocrat",
      "rating": "⭐⭐⭐⭐⭐(30)",
      "originalPrice": "Rs. 3000.00",
      "discountedPrice": 2950,
    "savings": "Save Rs. 10.00"
    }
  ]
}

export default data;
