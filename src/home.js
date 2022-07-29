const container = document.querySelector('.container');

const about = createElements('div', 'about', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, rerum, voluptatum voluptates sit mollitia labore veniam, quam quas ea culpa temporibus quidem iste. Sed, veniam?')

const info = createElements('div', 'info');
const hoursContainer = createElements('ul', 'hoursContainer')
const hoursHeader = createElements('li', 'hoursHeader', 'Hours:')

const locationContainer = createElements('div', 'locationContainer');
const locationHeader = createElements('h3',undefined, 'Location:');
const locationDetails = createElements('p', undefined, '2300 Portland Ave, Savanna, Illinois(IL)');

const img = createElements('div', 'homePageImg');
const imgAttribution = createElements('a', 'imgAttribution', 'Photo by cottonbro')
imgAttribution.href = 'https://www.pexels.com/photo/person-cooking-meat-on-grill-4551907/';

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

function init(){
  info.appendChild(hoursContainer);
  hoursContainer.appendChild(hoursHeader);
  renderWorkDays()
  info.appendChild(locationContainer);
  locationContainer.appendChild(locationHeader);
  locationContainer.appendChild(locationDetails);
  img.appendChild(imgAttribution);
  container.appendChild(about);
  container.appendChild(info);
  container.appendChild(img)
}

function renderWorkDays(){
  createHours('Monday');
  createHours('Tuesday');
  createHours('Wednesday');
  createHours('Thursday');
  createHours('Friday');
  createHours('Saturday');
  createHours('Sunday');
}

function createHours(day){
  const time = document.createElement('li');

  if(day === 'Saturday'){
    time.textContent = `${day}: 8am-5pm`;
  }else if(day === 'Sunday'){
    time.textContent = `${day}: Closed`;
  }else{
    time.textContent = `${day}: 8am-8pm`;
  }

  time.classList.add('days');
  hoursContainer.appendChild(time);
}

function renderHome(){
  init()
}

export default renderHome;