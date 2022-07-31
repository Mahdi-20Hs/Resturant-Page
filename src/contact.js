import { contactImports } from "./imports";
const container = document.querySelector('.container');


function createElements(type, className, content){
  const ele = document.createElement(`${type}`);
  if(className){
    ele.classList.add(`${className}`);
  }
  if(content){
    ele.textContent = content;
  }
  return ele
}

const contactContainer = createElements('div', 'contactContainer');


const address = createElements('div', 'address');
const addressHeader = createElements('h3', undefined, 'Address: ');
const addressInfo = createElements('p', undefined, '4289 Bridge Avenue, Roanoke, La, USA');
address.appendChild(addressHeader);
address.appendChild(addressInfo);
contactContainer.appendChild(address);

const phoneNumber = createElements('div', 'phoneNumber');
const numberHeader = createElements('h3', undefined, 'Phone Number: ');
const numberInfo = createElements('p', undefined, '337-753-3665');
phoneNumber.appendChild(numberHeader);
phoneNumber.appendChild(numberInfo);
contactContainer.appendChild(phoneNumber);

const email = createElements('div', 'email');
const emailHeader = createElements('h3', undefined, 'Email: ');
const emailInfo = createElements('p', undefined, 'amazingRandomEmail@email.com');
email.appendChild(emailHeader);
email.appendChild(emailInfo);
contactContainer.appendChild(email);

const socialMedia = createElements('div', 'socialMedia');
const twitter = createElements('div', 'twitter');
const facebook = createElements('div', 'facebook');
const instagram = createElements('div', 'instagram');
const youtube = createElements('div', 'youtube');
socialMedia.appendChild(twitter);
socialMedia.appendChild(facebook);
socialMedia.appendChild(instagram);
socialMedia.appendChild(youtube);
contactContainer.appendChild(socialMedia)

function renderContact(){
  container.appendChild(contactContainer);
}

export default renderContact;





