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

const container = document.querySelector('.container');

const infoContainer = createElements('div', 'infoContainer');
const info = createElements('div', 'info');

let infoHeader;
let infoImg;
let infoDescription;
let infoPrice;
let closeBtn;
let orderBtn;

infoContainer.appendChild(info);
container.appendChild(infoContainer);

function showInfo(dish){
  infoHeader = createElements('h2', undefined, dish.name);
  infoImg = createElements('div', 'infoImg');
  infoImg.setAttribute('style', `background-image: url(${dish.img})`)
  infoDescription = createElements('p', 'infoDescription', `Description: ${dish.info}`);
  infoPrice = createElements('p', 'infoPrice', `Price: ${dish.price}`);
  closeBtn = createElements('button', 'closeBtn', 'X');
  orderBtn = createElements('button', 'orderBtn', 'Order');


  info.appendChild(infoHeader);
  info.appendChild(infoImg);
  info.appendChild(infoDescription);
  info.appendChild(infoPrice);
  info.appendChild(closeBtn);
  info.appendChild(orderBtn);

  infoContainer.classList.add('active-container');
  info.classList.add('active-info');
}

function hideInfo(){
  infoContainer.classList.remove('active-container');
  info.classList.remove('active-info');

  info.removeChild(infoHeader);
  info.removeChild(infoImg);
  info.removeChild(infoDescription);
  info.removeChild(infoPrice);
  info.removeChild(closeBtn);
  info.removeChild(orderBtn);
}

export {showInfo, hideInfo};