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
  heroImage: "",   // optional: "images/hero.jpg" becomes the hero background photo
  intro: "Two shops, one menu: slushes, smoothies, milk tea, croffles, milk cakes and chocolate strawberries. Come in, take it to go, or order delivery.",
  email: "bakeandshake222@gmail.com",

  // Add your own photos: save them in the images folder, then list them here.
  // Example: { src: "images/strawberries.jpg", alt: "Chocolate strawberries" }
  photos: [],

  // Story blocks on the home page (left text, right picture; they alternate).
  // Use icons: ["cup","glass","berry","cake"] or add image: "images/photo.jpg".
  stories: [
    {
      title: "Made to make you happy",
      text: "Bake & Shake is a dessert and bubble tea shop in Barrie. Come in for a milk tea, stay for a croffle, or take chocolate strawberries to go.",
      icons: ["cup", "berry"], tint: "pink", image: ""
    },
    {
      title: "A drink for every mood",
      text: "Milk tea, fruit tea, matcha, slushes and smoothies, plus thick milkshakes topped with whipped cream.",
      icons: ["glass", "cup"], tint: "mint", image: ""
    },
    {
      title: "Two shops in Barrie",
      text: "Find us on Mapleview Drive and on Cundles Road East. Check the hours below before you head over.",
      icons: ["cake", "berry"], tint: "butter", image: ""
    }
  ],

  // Leave a link as "" to hide it.
  orderLinks: [
    { label: "Order on Uber Eats", url: "https://www.ubereats.com/ca/store/bake-&-shake/urwMg6HUT8-hDEszC34V9A" },
    { label: "Order on DoorDash",  url: "https://www.doordash.com/store/bake-and-shake-barrie-938667/" }
  ],
  social: [
    { label: "Instagram", url: "https://www.instagram.com/bakeandshakebarrie/" },
    { label: "Facebook",  url: "https://www.facebook.com/p/Bake-Shake-61559148347179/" },
    { label: "TikTok",    url: "https://www.tiktok.com/@bakeandshakebarrie" }
  ],

  locations: [
    {
      name: "Mapleview Drive",
      street: "222 Mapleview Dr W, Unit 6",
      city: "Barrie, ON L4N 9E7",
      phone: "(705) 970-1411",
      week: { mon: "closed", tue: "12:00-20:00", wed: "12:00-20:00", thu: "12:00-20:00", fri: "12:00-21:00", sat: "12:00-21:00", sun: "12:00-20:00" }
    },
    {
      name: "Cundles Road East",
      street: "221 Cundles Rd E",
      city: "Barrie, ON L4M 6L5",
      phone: "",
      week: { mon: "11:00-21:00", tue: "11:00-21:00", wed: "11:00-21:00", thu: "11:00-21:00", fri: "11:00-22:00", sat: "11:00-22:00", sun: "11:00-19:00" }
    }
  ],

  menu: [
    {
      id: "Milk tea", icon: "cup", tint: "pink",
      note: "Regular (16 oz) or large (24 oz).",
      items: [
        { name: "Original Milk Tea", description: "Classic milk tea with chewy tapioca pearls.", price: "$6.99" },
        { name: "Mango Milk Tea", description: "", price: "$6.99" },
        { name: "Watermelon Milk Tea", description: "Watermelon-infused tea blended with milk.", price: "$6.99" }
        /* Add more milk teas here, for example:
        , { name: "Taro Milk Tea", description: "", price: "$6.99" } */
      ]
    },
    {
      id: "Brown sugar", icon: "cup", tint: "butter",
      note: "Each comes with one scoop of tapioca. Shake well before drinking.",
      items: [
        { name: "Brown Sugar Original Milk Tea", description: "Black milk tea with brown sugar.", price: "$6.99" },
        { popular: true, name: "Brown Sugar Boba Milk", description: "Milk with brown sugar and a scoop of tapioca.", price: "$7.49" },
        { name: "Dirty Taro", description: "Taro milk tea with brown sugar.", price: "$7.49" },
        { name: "Dirty Matcha", description: "Matcha milk tea with brown sugar.", price: "$6.99" }
      ]
    },
    {
      id: "Fruit tea", icon: "cup", tint: "mint",
      note: "Freshly brewed tea infused with fruit. Regular (16 oz) or large (24 oz).",
      items: [
        { name: "Strawberry Tea", description: "", price: "$6.75" },
        { name: "Peach Tea", description: "", price: "$6.75" },
        { name: "Green Apple Tea", description: "", price: "$6.75" },
        { name: "Mango Tea", description: "", price: "$6.75" },
        { name: "Mixed Flavour Fruit Tea", description: "A blend of fruit flavours.", price: "$7.25" }
      ]
    },
    {
      id: "Matcha", icon: "cup", tint: "lilac",
      note: "",
      items: [
        { name: "Mango Matcha Latte", description: "", price: "$7.49" },
        { name: "Strawberry Matcha Latte", description: "Matcha with milk and strawberry puree.", price: "$7.49" },
        { name: "Dirty Matcha", description: "Matcha milk tea with brown sugar and tapioca.", price: "$6.99" }
      ]
    },
    {
      id: "Slushes", icon: "glass", tint: "mint",
      note: "Regular (16 oz) or large (24 oz).",
      items: [
        { name: "Mango Slush", description: "", price: "$6.75" },
        { name: "Strawberry Slush", description: "", price: "$6.75" },
        { name: "Pineapple Slush", description: "", price: "$6.75" },
        { name: "Watermelon Slush", description: "", price: "$6.75" },
        { name: "Kiwi Slush", description: "", price: "$6.75" },
        { name: "Peach Slush", description: "", price: "$6.75" },
        { name: "Green Apple Slush", description: "", price: "$6.75" },
        { name: "Passion Fruit Slush", description: "", price: "$6.75" },
        { name: "Lychee Slush", description: "", price: "$6.75" },
        { name: "Mix Flavour Slush", description: "Pick your own blend.", price: "$7.25" }
      ]
    },
    {
      id: "Smoothies", icon: "glass", tint: "pink",
      note: "Regular (16 oz) or large (24 oz).",
      items: [
        { name: "Mango Smoothie", description: "", price: "$6.99" },
        { name: "Pineapple Smoothie", description: "", price: "$6.99" },
        { name: "Watermelon Smoothie", description: "", price: "$6.99" },
        { name: "Honeydew Smoothie", description: "", price: "$6.99" },
        { name: "Taro Smoothie", description: "", price: "$6.99" },
        { name: "Coconut Smoothie", description: "Blended with real coconut meat.", price: "$6.99" },
        { name: "Mix Flavour Smoothie", description: "Pick your own blend.", price: "$7.49" }
      ]
    },
    {
      id: "Milkshakes", icon: "glass", tint: "lilac",
      note: "",
      items: [
        { popular: true, name: "Biscoff Dreamland", description: "Vanilla ice cream blended with Biscoff, swirled with caramel, topped with whipped cream.", price: "$11.49" },
        { name: "Oreo Obsession", description: "", price: "$11.49" },
        { name: "Kitkat Madness", description: "", price: "$11.49" },
        { name: "Nutella Heaven", description: "", price: "$11.49" },
        { name: "Ferrero Fantasy", description: "", price: "$11.49" },
        { name: "Strawberry Bliss", description: "Strawberries and milk, whipped cream and fresh strawberry slices.", price: "$10.49" },
        { name: "Mango Tango", description: "", price: "$10.49" },
        { name: "Strawberry Nutella", description: "", price: "$12.49", image: "images/nutella milkshake.jpg" },
        { name: "Snowy Vanilla", description: "", price: "$9.49" }
      ]
    },
    {
      id: "Chocolate strawberries", icon: "berry", tint: "pink",
      note: "",
      items: [
        { name: "Chocolate Strawberries", description: "", price: "$11.99", image: "images/chocolate.jpg" },
        { popular: true, name: "Dubai's Kunafa Strawberries", description: "Strawberries dipped in chocolate with kunafa crunch", price: "$14.99", image: "images/kunafa.jpg" },
        { name: "Oreo Strawberries", description: "", price: "$14.99", image: "images/oreo.jpg" },
        { name: "Lotus Strawberries", description: "", price: "$14.99", image: "images/lotus.jpg" },
        { name: "Hazelnut Dark Chocolate Strawberry", description: "", price: "$14.99", image: "images/hazelnut.jpg" }
      ]
    },
    {
      id: "Croffles", icon: "cake", tint: "butter",
      note: "",
      items: [
        { name: "Chocolate Overload", description: "", price: "$11.99", image: "images/Chocolate Overload.jpg" },
        { popular: true, name: "Biscoff Lover", description: "Warm croffle with Biscoff.", price: "$11.99", image: "images/biscoff lover.jpg" },
        { name: "Cookie & Cream", description: "", price: "$11.99", image: "images/cookie & cream.jpg" },
        { name: "Strawberry Cheesecake Croffle", description: "", price: "$13.99", image: "images/strawberry-cheesecakecroffle.jpg" },
        { name: "Matcha Berry Bliss", description: "", price: "$13.99", image: "images/matcha berry bliss.jpg" },
        { name: "Dubai Drizzle", description: "", price: "$13.99", image: "images/Dubai Drizzle.jpg" }
      ]
    },
    {
      id: "Milk cakes", icon: "cake", tint: "lilac",
      note: "",
      items: [
        { name: "Classic Milk Cake", description: "", price: "" },
        { name: "Strawberry Milk Cake", description: "", price: "" },
        { name: "Biscoff Milk Cake", description: "", price: "" },
        { name: "Kunafa Milk Cake", description: "", price: "" }
      ]
    },
    {
      id: "Ice cream and waffles", icon: "cake", tint: "mint",
      note: "",
      items: [
        { name: "Kunafa Ice Cream", description: "", price: "" },
        { name: "Bubble Waffle", description: "", price: "" }
      ]
    }
    /* To add Cookie Cups (or anything else), copy this block and edit it:
    , {
      id: "Cookie cups",
      note: "",
      items: [
        { name: "Name of cookie cup", description: "", price: "$0.00" }
      ]
    } */
  ],

  menuFootnote: "Prices are taken from our delivery menus and can differ in store. Ask at the counter about today's specials."
};
