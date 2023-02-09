import logoRemoveBgSmall from "../images/logo-removebg-small.png";
import logoLarge from "../images/logo-large.png";
import backgroundImg from "../images/cocktail-bar.jpeg";
import instagramLogo from "../images/instagram-icon.png";
import yelpLogo from "../images/yelp-logo.png";
import facebookLogo from "../images/facebook-icon.png";
import whatsappLogo from "../images/whatsapp-icon.png";

function pageLoad() {
  // Declare html elements
  const html = document.querySelector("html");
  const body = document.querySelector("body");
  const content = document.querySelector("#content");
  const header = document.createElement("div");
  const section1 = document.createElement("div");
  const imageSmall = document.createElement("img");
  const section2 = document.createElement("div");
  const home = document.createElement("button");
  const homeText = document.createTextNode("Home");
  const menu = document.createElement("button");
  const menuText = document.createTextNode("Menu");
  const contact = document.createElement("button");
  const contactText = document.createTextNode("Contact");
  const center = document.createElement("div");
  const imageLarge = document.createElement("img");
  const textContainer = document.createElement("div");
  const restaurantAge = document.createElement("div");
  const restaurantAgeText = document.createTextNode("Since 1966");
  const restaurantDescription = document.createElement("div");
  const restaurantDescriptionText = document.createTextNode(
    "Speakeasy with no reservations. Knock, and journey" +
      "through the tunnels of our establishment!"
  );
  const photoCredits = document.createElement("div");
  const photoCreditsText1 = document.createTextNode("Background photo by ");
  const quiNguyen = document.createElement("a");
  const quiNguyenText = document.createTextNode("Qui Nguyen");
  const photoCreditsText2 = document.createTextNode(" on ");
  const unsplash = document.createElement("a");
  const unsplashText = document.createTextNode("Unsplash");
  const footer = document.createElement("div");
  const socialMedia = document.createElement("div");
  const yelp = document.createElement("img");
  const facebook = document.createElement("img");
  const instagram = document.createElement("img");
  const whatsapp = document.createElement("img");
  const credits = document.createElement("div");
  const item1 = document.createElement("div");
  const item1Text = document.createTextNode(
    "Website created by Daniel Ballerini"
  );
  const item2 = document.createElement("div");
  const item2Text = document.createTextNode("with help from the ");
  const odinProject = document.createElement("a");
  const odinProjectText = document.createTextNode("© Odin Project");

  // Set element attributes
  header.setAttribute("id", "header");
  section1.setAttribute("class", "section-1");
  imageSmall.setAttribute("class", "image-small");
  imageSmall.setAttribute("src", logoRemoveBgSmall);
  imageSmall.setAttribute("alt", "Restaurant Logo");
  section2.setAttribute("class", "section-2");
  home.setAttribute("id", "home");
  menu.setAttribute("id", "menu");
  contact.setAttribute("id", "contact");
  center.setAttribute("id", "center");
  imageLarge.setAttribute("class", "image-large");
  imageLarge.setAttribute("src", logoLarge);
  imageLarge.setAttribute("alt", "Restaurant Logo");
  photoCredits.setAttribute("class", "photo-credits");
  quiNguyen.setAttribute("href", "https://unsplash.com/@quinguyen");
  unsplash.setAttribute("href", "https://unsplash.com/");
  footer.setAttribute("id", "footer");
  socialMedia.setAttribute("class", "social-media");
  yelp.setAttribute("src", yelpLogo);
  yelp.setAttribute("alt", "Yelp icon");
  facebook.setAttribute("src", facebookLogo);
  facebook.setAttribute("alt", "Facebook icon");
  instagram.setAttribute("src", instagramLogo);
  instagram.setAttribute("alt", "Instagram icon");
  whatsapp.setAttribute("src", whatsappLogo);
  whatsapp.setAttribute("alt", "Whatsapp icon");
  credits.setAttribute("class", "credits");
  item1.setAttribute("class", "item-1");
  item2.setAttribute("class", "item-2");
  odinProject.setAttribute("href", "https://www.theodinproject.com/");

  // Append elements to dom tree
  content.appendChild(header);
  header.appendChild(section1);
  section1.appendChild(imageSmall);
  header.appendChild(section2);
  section2.appendChild(home);
  home.appendChild(homeText);
  section2.appendChild(menu);
  menu.appendChild(menuText);
  section2.appendChild(contact);
  contact.appendChild(contactText);
  content.appendChild(center);
  center.appendChild(imageLarge);
  center.appendChild(textContainer);
  textContainer.appendChild(restaurantAge);
  restaurantAge.appendChild(restaurantAgeText);
  textContainer.appendChild(restaurantDescription);
  restaurantDescription.appendChild(restaurantDescriptionText);
  center.appendChild(photoCredits);
  photoCredits.appendChild(photoCreditsText1);
  photoCredits.appendChild(quiNguyen);
  quiNguyen.appendChild(quiNguyenText);
  photoCredits.appendChild(photoCreditsText2);
  photoCredits.appendChild(unsplash);
  unsplash.appendChild(unsplashText);
  content.appendChild(footer);
  footer.appendChild(socialMedia);
  socialMedia.appendChild(yelp);
  socialMedia.appendChild(facebook);
  socialMedia.appendChild(instagram);
  socialMedia.appendChild(whatsapp);
  footer.appendChild(credits);
  credits.appendChild(item1);
  item1.appendChild(item1Text);
  credits.appendChild(item2);
  item2.appendChild(item2Text);
  item2.appendChild(odinProject);
  odinProject.appendChild(odinProjectText);

  // Add background image
  center.style.backgroundImage = `url(${backgroundImg})`;
}

export default pageLoad;
