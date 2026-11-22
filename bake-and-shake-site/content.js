
/* ==========================================================
   EDIT THIS FILE TO UPDATE THE WEBSITE
   - Only change the text between the quote marks "like this".
   - Keep every comma, bracket [ ] and brace { } where it is.
   - To add a menu item: copy one whole  { name: ..., },  line and
     paste it under another item in the same category.
   - To add a category: copy a whole { id: ..., items: [ ... ] },
     block, paste it below another one, and change the words.
   - Leave price: "" if you don't want to show a price.
   - popular: true  puts an item in "Customer favourites" and adds a Favourite tag.
   - image: "images/name.jpg"  on a menu item shows that photo on its card.
   - image: "images/name.jpg"  on a whole category (next to id:) shows that photo on its menu tile.
   - icon: "cup", "glass", "berry" or "cake". tint: "pink", "mint", "butter" or "lilac".
   - Opening hours: "12:00-20:00" (24-hour time) or "closed".
   ========================================================== */

const SITE = {
  name: "Bake & Shake",
  heroTitle: "Bubble tea, shakes and desserts in Barrie",
  heroImage: "images/frontpage.jpg",
  intro: "Two shops, one menu: slushes, smoothies, milk tea, croffles, milk cakes and chocolate strawberries. Come in, take it to go, or order delivery.",
  email: "bakeandshake222@gmail.com",

  photos: [],

  orderLinks: [
    { label: "Order on Uber Eats", url: "https://www.ubereats.com/ca/store/bake-&-shake/urwMg6HUT8-hDEszC34V9A" },
    { label: "Order on DoorDash", url: "https://www.doordash.com/store/bake-and-shake-barrie-938667/" }
  ],

  social: [
    { label: "Instagram", url: "https://www.instagram.com/bakeandshakebarrie/" },
    { label: "Facebook", url: "https://www.facebook.com/p/Bake-Shake-61559148347179/" },
    { label: "TikTok", url: "https://www.tiktok.com/@bakeandshakebarrie" }
  ],

  locations: [
    // {
    //   name: "Mapleview Drive",
    //   street: "222 Mapleview Dr W, Unit 6",
    //   city: "Barrie, ON L4N 9E7",
    //   phone: "(705) 970-1411",
    //   week: { mon: "closed", tue: "12:00-20:00", wed: "12:00-20:00", thu: "12:00-20:00", fri: "12:00-21:00", sat: "12:00-21:00", sun: "12:00-20:00" }
    // },
    {
      name: "Cundles Road East",
      street: "221 Cundles Rd E",
      city: "Barrie, ON L4M 6L5",
      phone: "",
      week: { mon: "11:00-21:00", tue: "11:00-21:00", wed: "11:00-21:00", thu: "11:00-21:00", fri: "11:00-22:00", sat: "11:00-22:00", sun: "11:00-19:00" }
    }
  ],

  menu: [

    // ======================================================
    // 1. DESSERTS
    // ======================================================

    {
      id: "Desserts",
      icon: "cake",
      tint: "pink",
      note: "Explore our delicious desserts.",
      categories: [

        {
          id: "Milkshakes", image: "images/biscoff shake1.png", tint: "lilac",
          note: "",
          items: [
            { popular: true, name: "Biscoff Dreamland", description: "Vanilla ice cream blended with Biscoff, topped with whipped cream.", price: "$10.99", image: "images/biscoff shake1.png" },
            { name: "Snowy Vanilla", description: "", price: "$7.99" },
            { name: "Strawberry Bliss", description: "", price: "$8.99" },
            { name: "Mango Tango", description: "", price: "$8.99" },
            { name: "Fig & Cashew", description: "", price: "$9.99" },
            { name: "Oreo Obsession", description: "", price: "$9.99" },
            { name: "Nutella Heaven", description: "", price: "$9.99", image: "images/nutella milkshake.jpg" },
            { name: "Kitkat Madness", description: "", price: "$10.99" },
            { name: "Ferrero Fantasy", description: "", price: "$10.99" }
          ]
        },

        {
          id: "Chocolate strawberries", image: "images/chocolate.jpg", tint: "pink",
          note: "",
          items: [
            { name: "Chocolate Strawberries", description: "", price: "$8.99", image: "images/chocolate.jpg" },
            { popular: true, name: "Dubai's Kunafa Strawberries", description: "Strawberries dipped in chocolate with kunafa crunch", price: "$12.99", image: "images/kunafa.jpg" },
            { name: "Oreo Strawberries", description: "", price: "$12.99", image: "images/oreo.jpg" },
            { name: "Lotus Strawberries", description: "", price: "$12.99", image: "images/lotus.jpg" },
            { name: "Hazelnut Dark Chocolate Strawberry", description: "", price: "$12.99", image: "images/hazelnut.jpg" }
          ]
        },

        {
          id: "Milk cakes", image: "images/classicM.png", tint: "lilac",
          note: "",
          items: [
            { name: "Classic Milk Cake", description: "", price: "$13.99", image: "images/classicM.png" },
            { name: "Strawberry Milk Cake", description: "", price: "$15.99", image: "images/strawberryM.png" },
            { name: "Biscoff Milk Cake", description: "", price: "$15.99", image: "images/BiscoffM.png" },
            { name: "Kunafa Milk Cake", description: "", price: "$15.99", image: "images/kunafaM.png" },
            { name: "Molton Choco Lava Cake", description: "A gooey lava cake served sizzling with vanilla ice cream and a rich milk chocolate pour.", price: "$16.99", image: "" }
          ]
        },

        {
          id: "Cheese Cakes", icon: "cake", tint: "mint",
          note: "",
          items: [
            { name: "Strawberry", description: "", price: "$10.99" },
            { name: "Oreo", description: "", price: "$10.99" },
            { name: "Biscoff", description: "", price: "$10.99" },
            { name: "Kunafa", description: "", price: "$10.99" }
          ]
        },

        {
          id: "Waffles", icon: "cake", tint: "mint",
          note: "",
          items: [
            { name: "Birthday Cake", description: "", price: "$17.99" },
            { name: "Cookie Eclips", description: "", price: "$18.99" },
            { name: "Dubai Bling", description: "", price: "$18.99" },
            { name: "Brownie Bomb", description: "", price: "$19.99" },
            { name: "Banana Berry Blast", description: "", price: "$19.99" },
            { name: "Get It All", description: "", price: "$22.99" }
          ]
        },

        {
          id: "Croffles", image: "images/biscofflover.png", tint: "butter",
          note: "",
          items: [
            { name: "Chocolate Overload", description: "", price: "$11.99", image: "images/Chocolate Overload.jpg" },
            { popular: true, name: "Biscoff Lover", description: "Warm croffle with Biscoff.", price: "$11.99", image: "images/biscofflover.png" },
            { name: "Cookie & Cream", description: "", price: "$11.99", image: "images/cookie&cream.png" },
            { name: "Strawberry Cheesecake Croffle", description: "", price: "$13.99", image: "images/strawberry-cheesecakecroffle.jpg" },
            { name: "Matcha Berry Bliss", description: "", price: "$13.99", image: "images/straw-matcha.png" },
            { name: "Dubai Drizzle", description: "", price: "$13.99", image: "images/Dubai Drizzle.jpg" }
          ]
        },

        {
          id: "Cookies", icon: "cake", tint: "butter",
          note: "",
          items: [
            { name: "Classic", description: "", price: "$0.00" },
            { name: "Dubai", description: "", price: "$0.00" }
          ]
        },

        {
          id: "Ice Cream", icon: "cake", tint: "mint",
          note: "",
          items: []
        }

      ]
    },

    // ======================================================
    // 2. DRINKS
    // ======================================================

    {
      id: "Drinks",
      icon: "cup",
      tint: "mint",
      note: "Find your favourite drink.",
      categories: [

        {
          id: "Milk tea", icon: "cup", tint: "pink",
          note: "Regular (16 oz) or large (24 oz).",
          items: [
            { name: "Original Milk Tea", description: "Classic milk tea with chewy tapioca pearls.", price: "$5.49" },
            { name: "Mango Milk Tea", description: "", price: "$5.49" },
            { name: "Jasmine Milk Tea", description: "Jasmine-infused tea blended with milk.", price: "$5.49" },
            { name: "Thai Milk Tea", description: "", price: "$5.49" },
            { name: "Matcha Milk Tea", description: "", price: "$5.49" },
            { name: "Strawberry Milk Tea", description: "", price: "$5.49" },
            { name: "Taro Milk Tea", description: "", price: "$5.49" },
            { name: "Pineapple Milk Tea", description: "", price: "$5.49" },
            { name: "Honeydew Milk Tea", description: "", price: "$5.49" },
            { name: "Coconut Milk Tea", description: "", price: "$5.49" }
          ]
        },

        {
          id: "Brown sugar", icon: "cup", tint: "butter",
          note: "Each comes with one scoop of tapioca. Shake well before drinking.",
          items: [
            { name: "Brown Sugar Original Milk Tea", description: "Black milk tea with brown sugar.", price: "$6.99" },
            { popular: true, name: "Brown Sugar Boba Milk", description: "Milk with brown sugar and a scoop of tapioca.", price: "$6.99" },
            { name: "Dirty Taro", description: "Taro milk tea with brown sugar.", price: "$6.99" },
            { name: "Dirty Matcha", description: "Matcha milk tea with brown sugar.", price: "$6.99" },
            { name: "Dirty Coconut", description: "Coconut milk tea with brown sugar.", price: "$6.99" }
          ]
        },

        {
          id: "Fruit tea", icon: "cup", tint: "mint",
          note: "Freshly brewed tea infused with fruit. Regular (16 oz) or large (24 oz).",
          items: [
            { name: "Strawberry Tea", description: "", price: "$5.25" },
            { name: "Peach Tea", description: "", price: "$5.25" },
            { name: "Green Apple Tea", description: "", price: "$5.25" },
            { name: "Mango Tea", description: "", price: "$5.25" },
            { name: "Lychee Tea", description: "", price: "$5.25" },
            { name: "Passion Fruit Tea", description: "", price: "$5.25" },
            { name: "Pineapple Tea", description: "", price: "$5.25" },
            { name: "Watermelon Tea", description: "", price: "$5.25" },
            { name: "Kiwi Tea", description: "", price: "$5.25" },
            { name: "Blueberry Tea", description: "", price: "$5.25" }
          ]
        },

        {
          id: "Matcha", icon: "cup", tint: "lilac",
          note: "",
          items: [
            { name: "Regular Matcha Latte", description: "", price: "$6.99" },
            { name: "Mango Matcha Latte", description: "", price: "$6.99" },
            { name: "Strawberry Matcha Latte", description: "", price: "$6.99" },
            { name: "Pistachio Matcha Latte", description: "", price: "$6.99" },
            { name: "Coconut Matcha Latte", description: "", price: "$6.99" }
          ]
        },

        {
          id: "Slushes", icon: "glass", tint: "mint",
          note: "Regular (16 oz) or large (24 oz).",
          items: [
            { name: "Mango Slush", description: "", price: "$5.25" },
            { name: "Strawberry Slush", description: "", price: "$5.25" },
            { name: "Pineapple Slush", description: "", price: "$5.25" },
            { name: "Watermelon Slush", description: "", price: "$5.25" },
            { name: "Kiwi Slush", description: "", price: "$5.25" },
            { name: "Peach Slush", description: "", price: "$5.25" },
            { name: "Green Apple Slush", description: "", price: "$5.25" },
            { name: "Passion Fruit Slush", description: "", price: "$5.25" },
            { name: "Lychee Slush", description: "", price: "$5.25" },
            { name: "Blueberry Slush", description: "", price: "$5.25" }
          ]
        },

        {
          id: "Smoothies", icon: "glass", tint: "pink",
          note: "Regular (16 oz) or large (24 oz).",
          items: [
            { name: "Mango Smoothie", description: "", price: "$5.49" },
            { name: "Pineapple Smoothie", description: "", price: "$5.49" },
            // { name: "Watermelon Smoothie", description: "", price: "$5.49" },
            { name: "Honeydew Smoothie", description: "", price: "$5.49" },
            { name: "Taro Smoothie", description: "", price: "$5.49" },
            { name: "Coconut Smoothie", description: "", price: "$5.49" },
            { name: "Strawberry Smoothie", description: "", price: "$5.49" },
            { name: "Matcha Smoothie", description: "", price: "$5.49" },
            { name: "Banana Smoothie", description: "", price: "$5.49" },
            { name: "Pina Colada Smoothie", description: "", price: "$5.99" },
            { name: "Mango Pineapple Smoothie", description: "", price: "$5.99" },
            { name: "Strawberry Banana Smoothie", description: "", price: "$5.99" }
          ]
        }

      ]
    },

    // ======================================================
    // 3. BREAKFAST MENU
    // Add your breakfast items and prices later.
    // ======================================================

    {
      id: "Breakfast Menu",
      icon: "cake",
      tint: "butter",
      note: "Our breakfast menu is coming soon.",
      categories: [

        {
          id: "Breakfast Specials",
          icon: "cake",
          tint: "butter",
          note: "",
          items: []
        },

        {
          id: "Breakfast Sandwiches",
          icon: "cake",
          tint: "pink",
          note: "",
          items: []
        },

        {
          id: "Pancakes",
          icon: "cake",
          tint: "mint",
          note: "",
          items: []
        },

        {
          id: "Toast & Bagels",
          icon: "cake",
          tint: "lilac",
          note: "",
          items: []
        },

        {
          id: "Coffee & Tea",
          icon: "cup",
          tint: "butter",
          note: "",
          items: []
        }

      ]
    }

  ],

  // menuFootnote: "Prices are taken from our delivery menus and can differ in store. Ask at the counter about today's specials."
};
