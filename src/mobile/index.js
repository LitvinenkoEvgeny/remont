import $ from 'jquery';
import '../styles/mobile.sass';
import mobileDetect from 'mobile-detect';
import Morph from './Morph.js';

// const md = new mobileDetect(window.navigator.userAgent);
// $(document).ready(() => {
//   const hash = window.location.hash;
//   const styles = {
//     marginLeft: '0px',
//     transform: 'translate(-50%, 0%) matrix(1, 0, 0, 1, 0, -274)',
//     width: '1500px;'
//   }
//
//   if(hash === '#floor'){
//     const works = $('a[href="partials/works.html"]');
//     app.catalog.open('circle', 3, 'partials/works.html');
//     $('.catalog-category').hide();
//   }
// })


const $body = $('body');
const $document = $(document);
const $timeline = $('.timeline');
const $window = $(window);
const $morph = $('#morph');
// const $categoryItems = $('.catalog-category__item');
// const $closeFilter = $('.header__center button');

$(document).ready(() => {
  const morph = new Morph($morph);
});


// function hideMorph() {
//   $morph.hide();
// }
// function showMorph(){
//   $morph.show();
// }
//
// function openCategoryItem(){
//   showMorph()
// }
//
// function closeCategoryItem(){
//   if(md.mobile()){
//     hideMorph();
//   }
// }
//
// function hideMorphIfMobile () {
//   if(md.mobile()){
//     console.log('mobile');
//     hideMorph()
//   } else {
//     console.log('not mobile')
//     showMorph()
//   }
// }
//
// $categoryItems.on('click', openCategoryItem);
// $closeFilter.on('click', closeCategoryItem);
// $(document).ready(hideMorphIfMobile);
