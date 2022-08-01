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

const about = createElements('div', 'about', 'In Hofbräuhaus we are commited to make you experience the german food at it\'s best.')

const info = createElements('div', 'info');
const hoursContainer = createElements('ul', 'hoursContainer');
info.appendChild(hoursContainer);

const locationContainer = createElements('div', 'locationContainer');
const locationHeader = createElements('h3',undefined, 'Location:');
const locationDetails = createElements('p', undefined, '828 Beacon St. Seattle, WA');
locationContainer.appendChild(locationHeader);
locationContainer.appendChild(locationDetails);
info.appendChild(locationContainer);

const img = createElements('div', 'homePageImg');
const imgAttribution = createElements('a', 'imgAttribution', 'Photo by cottonbro');
imgAttribution.href = 'https://www.pexels.com/photo/person-cooking-meat-on-grill-4551907/';
imgAttribution.target = '_blank'
img.appendChild(imgAttribution);

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

function renderWorkDays(){
  hoursContainer.innerHTML = '';
  const hoursHeader = createElements('li', 'hoursHeader', 'Hours:');
  hoursContainer.appendChild(hoursHeader);
  createHours('Monday');
  createHours('Tuesday');
  createHours('Wednesday');
  createHours('Thursday');
  createHours('Friday');
  createHours('Saturday');
  createHours('Sunday');
}

function renderHome(){
  renderWorkDays()
  container.appendChild(about);
  container.appendChild(info);
  container.appendChild(img);
}


export default renderHome;