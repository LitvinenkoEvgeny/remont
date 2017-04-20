import portfolioJSON from './portfolio.json';
import template from 'pug-loader!./portfolio.pug';
import './portfolio.sass';
const app = window.app;

// console.log(portfolioJSON);
// console.log(template({portfolioItems: portfolioJSON}));
const placeholder = document.body.querySelector('#portfolioPlaceholder').insertAdjacentHTML('afterEnd',
  template({portfolioItems: portfolioJSON})
);

function removeOpened () {
  app.openedObjects = [];
}

$('.filter__item').on('click', removeOpened);

app.initBoxes();
app.initTabs();
app.initFilters();
app.initEvents();
