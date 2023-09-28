window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu_mobile'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
});



// ****************************************hiking************************************************
const itemClicl = document.querySelector('.hiking__about_item_img');
const img1Element = document.querySelector('.img1');
const img2Element = document.querySelector('.img2');

 itemClicl.onclick = imgToogle; 

 function imgToogle () {
   const img1 = img1Element.getAttribute('src') === 'img/about_hiking/1.png';
   const img2 = img2Element.getAttribute('src') === 'img/about_hiking/2.png';

  
    if(img1) {
        img1Element.src = 'img/about_hiking/2.png';
        img1Element.setAttribute("alt", 'snowy mountains');
    } else {
        img1Element.src = 'img/about_hiking/1.png';
    }   img1Element.setAttribute("alt", 'house and mountains in the background') 
    if (img2) {
        img2Element.src = 'img/about_hiking/1.png';
        img1Element.setAttribute("alt", 'snowy mountains'); 
    } else {
        img2Element.src = 'img/about_hiking/2.png';
        img1Element.setAttribute("alt", 'house and mountains in the background'); 
        
    }
    // return imgToogle;
   };

// *******************************************************************************************
