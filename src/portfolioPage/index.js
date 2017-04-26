import portfolioJSON from './portfolio.json';
import template from 'pug-loader!./portfolio.pug';
import './portfolio.sass';
import scrollHelper from '../utils/scrollHelper';
const app = window.app;

const scrlHelper = new scrollHelper({
  offset: {right: 20, top: 90},
  target: '#catalog'
});

// console.log(portfolioJSON);
// console.log(template({portfolioItems: portfolioJSON}));
try{
  const placeholder = document.body.querySelector('#portfolioPlaceholder').insertAdjacentHTML('afterEnd',
    template({portfolioItems: portfolioJSON})
  );
  scrlHelper.init();
} catch(e){
  console.log(e);
  console.info(`пытается отрендерить прайс не на главной странице ( пропустить ошибку )`);
}

function removeOpened () {
  app.openedObjects = [];
}

$('.filter__item').on('click', removeOpened);

app.initBoxes();
app.initTabs();
app.initFilters();
app.initEvents();
