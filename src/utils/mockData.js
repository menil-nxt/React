// ================= RESTAURANTS LIST =================
export const restaurants = [
  {
    id: "1",
    name: "Pizza Hut",
    cuisines: ["Pizzas"],
    rating: 4.3,
  },
  {
    id: "2",
    name: "Saurashtra Chawana & Sweets",
    cuisines: ["Sweets", "Gujarati", "Snacks"],
    rating: 4.6,
  },
  {
    id: "3",
    name: "Theobroma",
    cuisines: ["Bakery", "Desserts"],
    rating: 4.7,
  },
  {
    id: "4",
    name: "McDonald's",
    cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
    rating: 4.5,
  },
  {
    id: "5",
    name: "Sasuma",
    cuisines: ["Gujarati", "Snacks"],
    rating: 4.5,
  },
  {
    id: "6",
    name: "The South Spot",
    cuisines: ["South Indian"],
    rating: 4.5,
  },
  {
    id: "7",
    name: "Gajanand Food",
    cuisines: ["Gujarati"],
    rating: 4.6,
  },
  {
    id: "8",
    name: "Chetna Gathiya Rath",
    cuisines: ["Snacks", "Gujarati"],
    rating: 4.5,
  },
];

// ================= MENUS =================
export const menus = {
  1: {
    restaurantName: "Pizza Hut",
    menu: [
      {
        category: "Pizzas",
        items: [
          { id: "p1", name: "Margherita", price: 199, type: "Veg" },
          { id: "p2", name: "Farmhouse", price: 299, type: "Veg" },
          { id: "p3", name: "Chicken Pepperoni", price: 349, type: "Non-Veg" },
        ],
      },
      {
        category: "Sides",
        items: [{ id: "s1", name: "Garlic Bread", price: 129, type: "Veg" }],
      },
    ],
  },

  2: {
    restaurantName: "Saurashtra Chawana & Sweets",
    menu: [
      {
        category: "Snacks",
        items: [
          { id: "sn1", name: "Fafda", price: 60, type: "Veg" },
          { id: "sn2", name: "Khaman", price: 80, type: "Veg" },
        ],
      },
      {
        category: "Sweets",
        items: [
          { id: "sw1", name: "Jalebi", price: 120, type: "Veg" },
          { id: "sw2", name: "Mohanthal", price: 150, type: "Veg" },
        ],
      },
    ],
  },

  3: {
    restaurantName: "Theobroma",
    menu: [
      {
        category: "Cakes",
        items: [
          { id: "c1", name: "Chocolate Truffle Cake", price: 450, type: "Veg" },
        ],
      },
      {
        category: "Bakery",
        items: [
          { id: "b1", name: "Brownie", price: 150, type: "Veg" },
          { id: "b2", name: "Croissant", price: 120, type: "Veg" },
        ],
      },
    ],
  },

  4: {
    restaurantName: "McDonald's",
    menu: [
      {
        category: "Burgers",
        items: [
          { id: "b1", name: "McAloo Tikki", price: 59, type: "Veg" },
          { id: "b2", name: "Chicken Burger", price: 129, type: "Non-Veg" },
        ],
      },
      {
        category: "Beverages",
        items: [
          { id: "d1", name: "Coke", price: 49, type: "Veg" },
          { id: "d2", name: "Cold Coffee", price: 89, type: "Veg" },
        ],
      },
    ],
  },

  5: {
    restaurantName: "Sasuma",
    menu: [
      {
        category: "Gujarati Thali",
        items: [{ id: "t1", name: "Gujarati Thali", price: 120, type: "Veg" }],
      },
      {
        category: "Snacks",
        items: [{ id: "sn1", name: "Dal Dhokli", price: 90, type: "Veg" }],
      },
    ],
  },

  6: {
    restaurantName: "The South Spot",
    menu: [
      {
        category: "South Indian",
        items: [
          { id: "d1", name: "Masala Dosa", price: 120, type: "Veg" },
          { id: "d2", name: "Plain Dosa", price: 90, type: "Veg" },
          { id: "i1", name: "Idli Sambhar", price: 80, type: "Veg" },
        ],
      },
    ],
  },

  7: {
    restaurantName: "Gajanand Food",
    menu: [
      {
        category: "Gujarati Meals",
        items: [
          { id: "g1", name: "Dal Rice", price: 100, type: "Veg" },
          { id: "g2", name: "Kadhi Khichdi", price: 120, type: "Veg" },
        ],
      },
    ],
  },

  8: {
    restaurantName: "Chetna Gathiya Rath",
    menu: [
      {
        category: "Snacks",
        items: [
          { id: "sn1", name: "Gathiya", price: 50, type: "Veg" },
          { id: "sn2", name: "Samosa", price: 30, type: "Veg" },
          { id: "sn3", name: "Kachori", price: 35, type: "Veg" },
        ],
      },
    ],
  },
};
