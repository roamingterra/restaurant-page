import logoRemoveBgSmall from "../images/logo-removebg-small.png";
import backgroundImg from "../images/cocktail-bar.jpeg";
import instagramLogo from "../images/instagram-icon.png";
import yelpLogo from "../images/yelp-logo.png";
import facebookLogo from "../images/facebook-icon.png";
import whatsappLogo from "../images/whatsapp-icon.png";

function contactLoad() {
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

  /* Declared elements different from home page */
  const contactDescription = document.createElement("div");
  const contactTitle = document.createElement("h1");
  const contactTitleText = document.createTextNode("Contact Us");
  const contactDescriptionTextBox = document.createElement("div");
  //   const contactDescriptionText1container = document.createElement("div");
  const contactDescriptionText1 = document.createTextNode("X Saint Paul Est");
  const contactDescriptionText2 = document.createElement("br");
  const contactDescriptionText3 = document.createTextNode("Old Montreal");
  const contactDescriptionText4 = document.createElement("br");
  const contactDescriptionText5 = document.createTextNode("514-XXX-XXXX");
  const contactDescriptionText6 = document.createElement("br");
  const contactDescriptionText7 = document.createTextNode("info@lesoussol.com");
  /* End of declared elements different from home page */

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

  /* Element attributes different from home page */
  contactDescription.setAttribute("class", "contact-description");
  contactDescriptionTextBox.setAttribute("class", "contact-info");
  /* End of element attributes different from home page */

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

  /* Appended elements different from home page */
  center.appendChild(contactDescription);
  contactDescription.appendChild(contactTitle);
  contactTitle.appendChild(contactTitleText);
  contactDescription.appendChild(contactDescriptionTextBox);
  contactDescriptionTextBox.appendChild(contactDescriptionText1);
  contactDescriptionTextBox.appendChild(contactDescriptionText2);
  contactDescriptionTextBox.appendChild(contactDescriptionText3);
  contactDescriptionTextBox.appendChild(contactDescriptionText4);
  contactDescriptionTextBox.appendChild(contactDescriptionText5);
  contactDescriptionTextBox.appendChild(contactDescriptionText6);
  contactDescriptionTextBox.appendChild(contactDescriptionText7);
  /* End of appended elements different from home page */

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
export default contactLoad;
