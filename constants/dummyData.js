import { icons, images } from "./";

const myProfile = {
  name: "Nisham Wagle",
  profile_image: images.profile,
  address: "Gwarko , Lalitpur",
};

const tropicalRest = {
  id: 1,
  name: "Tropical Rest",
  icon: null,
  image: "http://192.168.0.110:8000/media/uploads/restaurants/astrou.png",
  address: "Halchowk, Kathmandu",
  isOpenNow: true,
  rating: 4.0,
  isClosedTemporarily: false,
  addedDate: "2022-01-03T15:41:13.308559Z",
  modifiedDate: "2022-01-03T15:41:13.308559Z",
  modifiedBy: 1,
};

const categories = [
  {
    id: 1,
    name: "Fast Food",
    icon: icons.burger,
  },
  {
    id: 2,
    name: "Fruit Item",
    icon: icons.cherry,
  },
  {
    id: 3,
    name: "Rice Item",
    icon: icons.rice,
  },
];

const hamburger = {
  id: 1,
  name: "Hamburger",
  description: "Chicken patty hamburger",
  categories: [1, 2],
  price: 250,
  isFavourite: true,
  image: require("../assets/dummyData/hamburger.png"),
};

const hotTacos = {
  id: 2,
  name: "Hot Tacos",
  description: "Mexican tortilla & tacos",
  categories: [1, 3],
  price: 199,
  isFavourite: false,
  image: require("../assets/dummyData/hot_tacos.png"),
};

const vegBiryani = {
  id: 3,
  name: "Veg Biryani",
  description: "Nepalese Vegetable Biryani",
  categories: [1, 2, 3],
  price: 200,
  isFavourite: true,
  image: require("../assets/dummyData/veg_biryani.png"),
};

const wrapSandwich = {
  id: 4,
  name: "Chicken Wrap",
  description: "Grilled chicken sandwich",
  categories: [1, 2],
  price: 175,
  isFavourite: true,
  image: require("../assets/dummyData/wrap_sandwich.png"),
};

const menu = [
  {
    id: 1,
    name: "Featured",
    list: [hamburger, hotTacos, vegBiryani],
  },
  {
    id: 2,
    name: "Popular",
    list: [hamburger, hotTacos, wrapSandwich],
  },
  {
    id: 3,
    name: "Trending",
    list: [hamburger, vegBiryani, wrapSandwich],
  },
  {
    id: 4,
    name: "Recommended",
    list: [hamburger, hotTacos, wrapSandwich],
  },
];

export default {
  myProfile,
  categories,
  menu,
  tropicalRest,
};
