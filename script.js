// function classToggle() {
//     const navs = document.querySelector('ul')
    
//     navs.classList.toggle('toggle');
//   }
  
//   document.querySelector('.Navbar__Link-toggle')
//     .addEventListener('click', classToggle)


const nav = document.getElementById('toggle');
const openMenu = document.getElementById('open');
const closeMenu = document.getElementById('close');

closeMenu.style.display = 'none';
function showMenu() {
  openMenu.style.display = 'none';
    closeMenu.style.display = 'block';
    

    nav.style.left = 0;
}

function hideMenu() {
  openMenu.style.display = 'block';
  closeMenu.style.display = 'none';
  nav.style.left = '';
}


