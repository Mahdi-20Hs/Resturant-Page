import { menuImports } from "./imports";
const container = document.querySelector('.container');




function CreateDish(name, info, price, img){
  const dish = {};
  dish.name = name;
  dish.info = info;
  dish.price = price;
  dish.img = img;
  return dish
}


const wurst = CreateDish('Wurst', ' a type of meat product usually made from ground meat—often pork, beef, or poultry—along with salt, spices and other flavourings.', '10$', menuImports.bratwurstImg);

const rouladen = CreateDish('Rouladen', 'typical German dish consists of bacon, onions, mustard, and pickles wrapped in thinly sliced beef or veal which is then cooked.', '20$', menuImports.rouladenImg);

const käsespätzle = CreateDish('Käsespätzle', 'These soft egg noodles are made from wheat flour and egg and are often topped with cheese (Käsespätzle) and roasted onions.', '15$', menuImports.käsespätzleImg);

const eintopf = CreateDish('Eintopf', 'broth, vegetables, potatoes or pulses, and pork, beef, chicken, or fish.', '15$', menuImports.eintopfImg);

const sauerbraten = CreateDish('Sauerbraten', 'a traditional German roast of heavily marinated meat. It is regarded as a national dish of Germany.', '25$', menuImports.sauerbratenImg);

const kartoffelpuffer = CreateDish('Kartoffelpuffer', 'shallow pan-fried pancakes made from grated or ground potatoes mixed with flour, egg, onion, and seasoning.', '15$', menuImports.kartoffelpufferImg);

const brezel = CreateDish('Brezel', ' a type of baked pastry that is made from dough commonly shaped into a knot. A Brezel is usually sprinkled with salt, however, other seasonings include cheese, sugar, chocolate, cinnamon, and different seeds.', '5$', menuImports.brezelImg);

const schnitzel = CreateDish('Schnitzel', 'Coated in breadcrumbs and often served with a slice of lemon, this thin, boneless cutlet of meat is an iconic part of German cuisine.', '10$', menuImports.schnitzelImg)

const schwarzwälderKirschtorte = CreateDish('Schwarzwälder Kirschtorte', 'the delicious Schwarzwälder Kirschtorte (which literally means ‘Black Forest cherry torte’). This dessert gets its name from Schwarzwälder Kirschwasser, a liqueur distilled from tart cherries.', '10$', menuImports.schwarzwälderKirschtorteImg);

const apfelstrudel = CreateDish('apfelstrudel', 'The popular dish consists of buttery pastry filled with apples that are flavored with sugar, cinnamon, and raisins.', '10$', menuImports.apfelstrudelImg);

const labskaus = CreateDish('Labskaus', 'a beef dish. German sailors in the 18th century developed it, and it became popular amongst many people on land.', '10$', menuImports.labskausImg);

const dönerKebab = CreateDish('Döner kebab', 'Döner kebab was introduced to Germany by Turkish immigrant workers it contains meat, onions and a bit of salad', '5$', menuImports.dönerKebabImg)

const dishes = [wurst, rouladen, käsespätzle, eintopf, sauerbraten, kartoffelpuffer, brezel, schnitzel, schwarzwälderKirschtorte, apfelstrudel, labskaus, dönerKebab];
const dishElements = [];

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

const dishContainer = createElements('div', 'dishContainer');

function createDishElement(dish){
  const dishEle = createElements('div', 'dish');

  dishEle.setAttribute('style', `background-image:url(${dish.img})`);

  return dishEle;
}

function renderDishes(){
  for(let i of dishes){
    const dish = createDishElement(i);
    dishContainer.appendChild(dish);
    dishElements.push(dish);
  }
}

function bindEvents(){

  dishElements.forEach((ele) => {
    ele.addEventListener('click', () => {
      let index = dishElements.indexOf(ele);
      menuImports.showInfo(dishes[index]);

      document.querySelector('.closeBtn').addEventListener('click', () => {
        menuImports.hideInfo()
      })
    })
  })
  
}

function init(){
  renderDishes();
  bindEvents();
  container.appendChild(dishContainer);
}

export {init};


