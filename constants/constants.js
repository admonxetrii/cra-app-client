const onboarding_screens = [
  {
    id: 1,
    bannerImage: require("../assets/images/undraw/dinein.png"),
    title: "Dine in at your favourite Restaurant.",
    description:
      "When you oder Eat Steet, we’ll hook you up with exclusive coupon, specials and rewards",
  },
  {
    id: 2,
    bannerImage: require("../assets/images/undraw/recommendation.png"),
    title: "Get food recommendations.",
    description:
      "We make food ordering fasr, simple and free-no matter if you order online or cash",
  },
  {
    id: 3,
    bannerImage: require("../assets/images/undraw/loyalty.png"),
    title: "Receive points and discounts",
    description:
      "You’ll receive the great food within a hour. And get free delivery credits for every order.",
  },
  {
    id: 4,
    bannerImage: require("../assets/images/undraw/started.png"),
    title: "Let's get started.",
    description:
      "Lorem ipusm alkshdlashdljioqwjdalskdiqhdo dnaskhd qlkwd o, qli hdoadldqoid adlqw hdoiq ldaso d",
  },
];

const screens = {
  main_layout: "MainLayout",
  home: "Home",
  search: "Search",
  cart: "Cart",
  favourite: "Favourite",
  notification: "Notification",
};

const bottom_tabs = [
  {
    id: 0,
    label: screens.home,
  },
  {
    id: 1,
    label: screens.search,
  },
  {
    id: 2,
    label: screens.cart,
  },
  {
    id: 3,
    label: screens.favourite,
  },
  {
    id: 4,
    label: screens.notification,
  },
];

const delivery_time = [
  {
    id: 1,
    label: "10 Mins",
  },
  {
    id: 2,
    label: "20 Mins",
  },
  {
    id: 3,
    label: "30 Mins",
  },
];

const ratings = [
  {
    id: 1,
    label: 1,
  },
  {
    id: 2,
    label: 2,
  },
  {
    id: 3,
    label: 3,
  },
  {
    id: 4,
    label: 4,
  },
  {
    id: 5,
    label: 5,
  },
];

const tags = [
  {
    id: 1,
    label: "Burger",
  },
  {
    id: 2,
    label: "Fast Food",
  },
  {
    id: 3,
    label: "Pizza",
  },
  {
    id: 4,
    label: "Asian",
  },
  {
    id: 5,
    label: "Dessert",
  },
  {
    id: 6,
    label: "Breakfast",
  },
  {
    id: 7,
    label: "Vegetable",
  },
  {
    id: 8,
    label: "Taccos",
  },
];

export default {
  screens,
  bottom_tabs,
  delivery_time,
  ratings,
  tags,
  onboarding_screens,
};
