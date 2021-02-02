const SHOP_DATA = {
  cookies: {
    id: 1,
    title: 'Cookies',
    routeName: 'cookies',
    items: [
      {
        id: 1,
        name: 'Chocolate Chip',
        imageUrl: 'https://images.unsplash.com/photo-1604172441472-3cf27efeef8d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=350',
        // imageUrl: "/images/shop-img/hats/brown-brim.png",
        price: 3.50
      },
      {
        id: 2,
        name: 'White Chip Macadamia',
        imageUrl: 'https://images.unsplash.com/photo-1587726407118-7f4e2c85f84b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=350',
        // imageUrl: "/images/shop-img/hats/blue-beanie.png",
        price: 3.50
      },
      {
        id: 3,
        name: 'Peanut Butter',
        imageUrl: 'https://images.unsplash.com/photo-1611755257881-842a74333310?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=350',
        // imageUrl: "/images/shop-img/hats/brown-cowboy.png",
        price: 3.50
      },
      {
        id: 4,
        name: 'Fruit & Nut',
        imageUrl: 'https://images.unsplash.com/photo-1573653333959-ef3461b049c4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=350',
        // imageUrl: "/images/shop-img/hats/grey-brim.png",
        price: 3.50
      },
      {
        id: 5,
        name: 'Cranberry & White Chocolate',
        imageUrl: 'https://images.unsplash.com/photo-1509460711270-4affad6eef6a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=350',
        // imageUrl: "/images/shop-img/hats/green-beanie.png",
        price: 3.50
      },
      {
        id: 6,
        name: 'Oatmeal & Raisin',
        imageUrl: 'https://images.unsplash.com/photo-1600147573971-a2135dbff47e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=350',
        // imageUrl: "/images/shop-img/hats/palm-tree-cap.png",
        price: 3.50
      },
      {
        id: 7,
        name: 'Ginger & Dark Chocolate',
        imageUrl: 'https://images.unsplash.com/photo-1495085570317-992279e0c33d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=300&q=350',
        // imageUrl: "/images/shop-img/hats/red-beanie.png",
        price: 3.50
      },
      {
        id: 8,
        name: 'Double Chocolate & Nuts',
        imageUrl: 'https://images.unsplash.com/photo-1585671698707-316da0cbc5bd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=350',
        //imageUrl: "/images/shop-img/hats/wolf-cap.png",
        price: 3.50
      },
      {
        id: 9,
        name: 'Lemon',
        imageUrl: 'https://images.unsplash.com/photo-1547562475-d5c9cead07f0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=350',
        // imageUrl: "/images/shop-img/hats/blue-snapback.png",
        price: 3.50
      }
    ]
  },
  pastries: {
    id: 2,
    title: 'Pastries',
    routeName: 'pastries',
    items: [
      {
        id: 10,
        name: 'Scones',
        imageUrl: 'https://images.unsplash.com/photo-1606946144557-0d04974df266?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=350',
        // imageUrl: "/images/shop-img/sneakers/adidas-nmd.png", 
        price: 2.50
      },
      {
        id: 11,
        name: 'Choux',
        imageUrl: 'https://images.unsplash.com/photo-1566760376180-761e3e2c6c98?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=350',
        // imageUrl: "/images/shop-img/sneakers/yeezy.png",
        price: 2.80
      },
      {
        id: 12,
        name: 'Cinnamon Roll',
        imageUrl: 'https://images.unsplash.com/photo-1603459872271-410a6697abcd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=350',
        // imageUrl: "/images/shop-img/sneakers/black-converse.png",
        price: 3.80
      },
      {
        id: 13,
        name: 'Portuguese Egg Tarts',
        imageUrl: 'https://images.unsplash.com/photo-1591107576521-87091dc07797?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=350',
        // imageUrl: "/images/shop-img/sneakers/white-nike-high-tops.png",
        price: 3.50
      },
      {
        id: 14,
        name: 'Blueberry Tart',
        imageUrl: 'https://images.unsplash.com/photo-1532452068958-99433c03a271?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=350',
        // imageUrl: "/images/shop-img/sneakers/nikes-red.png",
        price: 3.50
      },
      {
        id: 15,
        name: 'Apple Danish',
        imageUrl: 'https://images.unsplash.com/photo-1568732547275-6daab90be637?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=350',
        // imageUrl: "/images/shop-img/sneakers/nike-brown.png",
        price: 2.90
      },
      {
        id: 16,
        name: 'Raspberry Eclair',
        imageUrl: 'https://images.unsplash.com/photo-1588685722676-bbabfec936d3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=350',
        // imageUrl: "/images/shop-img/sneakers/nike-funky.png",
        price: 4.20
      },
      {
        id: 17,
        name: 'Lemon Tart',
        imageUrl: 'https://images.unsplash.com/photo-1541781622821-8af65b6b449f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjg5fHxwYXN0cmllc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=350',
        // imageUrl: "/images/shop-img/sneakers/timberlands.png",
        price: 5.0
      }
    ]
  },
  brownies: {
    id: 3,
    title: 'Brownies',
    routeName: 'brownies',
    items: [
      {
        id: 18,
        name: 'Almond Brownie',
        imageUrl: 'https://images.unsplash.com/photo-1514132687615-019f4d9e1c74?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=350',
        // imageUrl: "/images/shop-img/jackets/black-shearling.png",
        price: 3.80
      },
      {
        id: 19,
        name: 'Chocolate Raspberry Brownie',
        imageUrl: 'https://images.unsplash.com/photo-1589113705076-ff28f41a2b8b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=300&q=350',
        // imageUrl: "/images/shop-img/jackets/blue-jean-jacket.png",
        price: 4.00
      },
      {
        id: 20,
        name: 'Dark Chocolate Brownie',
        imageUrl: 'https://images.unsplash.com/photo-1504382183609-6e36177b741b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=300&q=350',
        // imageUrl: "/images/shop-img/jackets/grey-jean-jacket.png",
        price: 3.80
      },
      {
        id: 21,
        name: 'Walnut Brownie',
        imageUrl: 'https://images.unsplash.com/photo-1587339144192-ef149551ae40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=350',
        // imageUrl: "/images/shop-img/jackets/brown-shearling.png",
        price: 3.80
      },
      {
        id: 22,
        name: 'Sea Salt Caramel Brownie',
        imageUrl: 'https://images.unsplash.com/photo-1582602248749-f1fe1ec6457c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=350',
        // imageUrl: "/images/shop-img/jackets/brown-trench.png",
        price: 3.00
      }
    ]
  },
  cny: {
    id: 4,
    title: 'Chinese New Year',
    routeName: 'cny',
    items: [
      {
        id: 23,
        name: 'Pineapple Tarts',
        imageUrl: '/images/pineapple.png', 
        price: 30
      },
      {
        id: 24,
        name: 'Almond Cookies',
        imageUrl: "/images/almond.png",
        price: 25
      },
      {
        id: 25,
        name: 'Cornflake Cookies',
        imageUrl: "/images/cornflake.png",
        price: 22
      },
      {
        id: 26,
        name: 'Shortbread Cookies',
        imageUrl: "/images/shortbread.png",
        price: 32
      },
    ]
  },
  favourites: {
    id: 5,
    title: 'Mid-Autumn',
    routeName: 'favourites',
    items: [
      {
        id: 27,
        name: 'Shanghai Walnut Mooncake',
        imageUrl: '/images/mooncake.png',
        price: 30
      },
     ]
  }
};

export default SHOP_DATA;