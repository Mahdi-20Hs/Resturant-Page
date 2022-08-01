import renderHome from './home';
import renderContact from './contact';
import renderMenu from './menu';

import './styles/main.css';
import './styles/home.css';
import './styles/menu.css';
import './styles/contact.css';

const container = document.querySelector('.container');
const homeBtn = document.querySelector('.home.btn');
const contactBtn = document.querySelector('.contact.btn');
const menuBtn = document.querySelector('.menu.btn');

window.onload = function(){
  renderHome();
  
  for ( let i=0; i<document.styleSheets.length; i++) {
    void(document.styleSheets.item(i).disabled=true);
  }
  for ( let i=0; i<3; i++) {
    void(document.styleSheets.item(i).disabled=false);
  }
}

homeBtn.addEventListener('click', () => {
  container.innerHTML = '';
  renderHome();

  for ( let i=2; i<document.styleSheets.length; i++) {
    void(document.styleSheets.item(i).disabled=true);
  }
  for ( let i=1; i<3; i++) {
    void(document.styleSheets.item(i).disabled=false);
  }
})

menuBtn.addEventListener('click', () => {
  container.innerHTML = '';
  renderMenu();

  for ( let i=2; i<document.styleSheets.length; i++) {
    void(document.styleSheets.item(i).disabled=true);
  }
  for ( let i=3; i<4; i++) {
    void(document.styleSheets.item(i).disabled=false);
  }
  
})

contactBtn.addEventListener('click', () => {
  container.innerHTML = '';
  renderContact();

  for ( let i=2; i<document.styleSheets.length; i++) {
    void(document.styleSheets.item(i).disabled=true);
  }
  for ( let i=4; i<5; i++) {
    void(document.styleSheets.item(i).disabled=false);
  }
})