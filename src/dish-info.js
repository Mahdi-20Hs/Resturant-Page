const container = document.querySelector('.container');

let infoContainer;
let info;

let infoHeader;
let infoImg;
let infoDescription;
let infoPrice;
let closeBtn;
let orderBtn;

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

function showInfo(dish){
  infoContainer = createElements('div', 'infoContainer');
  info = createElements('div', 'info');

  infoContainer.appendChild(info);
  container.appendChild(infoContainer);

  infoHeader = createElements('h2', undefined, dish.name);
  infoImg = createElements('div', 'infoImg');
  infoImg.setAttribute('style', `background-image: url(${dish.img})`)
  infoDescription = createElements('p', 'infoDescription', `Description: ${dish.info}`);
  infoPrice = createElements('p', 'infoPrice', `Price: ${dish.price}`);
  closeBtn = createElements('button', 'closeBtn', 'X');
  orderBtn = createElements('button', 'orderBtn', 'Order');

  infoContainer.classList.add('active-container');
  info.classList.add('active-info');

  info.appendChild(infoHeader);
  info.appendChild(infoImg);
  info.appendChild(infoDescription);
  info.appendChild(infoPrice);
  info.appendChild(closeBtn);
  info.appendChild(orderBtn);
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