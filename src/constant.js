import chromeIcon from "./Assets/images/logo-chrome.svg";
import firefoxIcon from "./Assets/images/logo-firefox.svg";
import operaIcon from "./Assets/images/logo-opera.svg";
import featuresOne from "./Assets/images/illustration-features-tab-1.svg";
import featuresTwo from "./Assets/images/illustration-features-tab-2.svg";
import featuresThree from "./Assets/images/illustration-features-tab-3.svg";

export const extentionData = [
  {
    icon: chromeIcon,
    heading: "Add to Chrome",
    text: "Minimum version 62",
  },
  {
    icon: firefoxIcon,
    heading: "Add to Firefox",
    text: "Minimum version 55",
  },
  {
    icon: operaIcon,
    heading: "Add to Opera",
    text: "Minimum version 46",
  },
];

export const navLinkList = ["Features", "Pricing", "Contact"];

export const FAQList = [
  {
    id: "1",
    isOpen: false,
    question: "What is Bookmark?",
    answer:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    id: "2",
    isOpen: false,
    question: "How can I request a new browser?",
    answer:
      "Vimperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    id: "3",
    isOpen: false,
    question: "Is there a mobile app?",
    answer:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamu ligula. Suspendisse imperdiet.",
  },
  {
    id: "4",
    isOpen: false,
    question: "What about other Chromium browsers?",
    answer:
      "Vivamus augaliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
];

export const featuresData = [
  {
    id: 0,
    button: "Simple Bookmarking",
    title: "Bookmark in one click",
    text: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    imgUrl: featuresOne,
    link: "More Info",
  },
  {
    id: 1,
    button: "Speedy Searching",
    title: "Intelligent search",
    text: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    imgUrl: featuresTwo,
    link: "More Info",
  },
  {
    id: 2,
    button: "Easy Sharing",
    title: "Share your bookmarks",
    text: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    imgUrl: featuresThree,
    link: "More Info",
  },
];
