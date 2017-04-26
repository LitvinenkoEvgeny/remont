import portfolioJSON from './works.json';
import menuItems from './works-nav.json';
import template from 'pug-loader!./works.pug';
import $ from 'jquery';
import './works.sass';
import scrollHelper from '../utils/scrollHelper';
const app = window.app;

// import { priceData } from '../price/priceData.js';
// const priceBathRoom = priceData.firstAccordion.accordions[3];
//
// priceBathRoom.items.forEach(accordion => {
//   accordion.items.forEach(item => {
//     // console.log(item);
//     const regexResult = item.match(/(.+) — (\d+).+\/(.+)/);
//     if(regexResult){
//       const name = regexResult[1];
//       const price = regexResult[2];
//       const countBy = regexResult[3];
//       console.log(`{
//         "name": "${name}",
//         "price": "${price}",
//         "countBy": "${countBy}"}
//       `);
//     }
//   })
// });

class WorksPage {
  constructor() {
    this.location = window.location.pathname;
    this.filterItems = null;
    this.filter = null;
    this.placeholder = document.body.querySelector('#worksPlaceholder');
    this.scrollHelper = new scrollHelper({
      offset: {right: 20, top: 90},
      target: '#catalog'
    });
    this.app = window.app;

    this.removeOpened = this.removeOpened.bind(this);
  }

  init() {
    this.createTemplate();
    this.renderTemplate();
    this.selectItems();
    this.addEvents();
    this.initAppEvents();
    this.scrollHelper.init();
  }

  nowAt() {
    const nowPage = location.pathname.split('/');
    return nowPage[nowPage.length - 1];
  }

  setActive(items, nowAt) {
    return items.map(item => {
      if (item.href === nowAt) {
        item.checked = 'checked';
        return item;
      } else {
        item.checked = false;
        return item;
      }
    });
  }

  createTemplate() {
    const createHeadingClassName = this.createHeadingClassName;

    function genTpl(options) {
      let portfolioItems, menu;

      if (options.page === 'index') {
        portfolioItems = portfolioJSON;
        menu = menuItems;
      } else {
        // json must be an array or object
        portfolioItems = [portfolioJSON[options.page]];
        menu = menuItems.slice(1, menuItems.length);
        menu = this.setActive(menu, this.nowAt());
      }

      return template({
        portfolioItems,
        createHeadingClassName,
        menuItems: menu,
        isSinglePage: options.isSinglePage
      });
    }

    if (this.isHomePage()) {

      this.template = genTpl.call(this, {page: 'index'});

    } else if (this.location.match(/walls/g)) {

      this.template = genTpl.call(this, {page: 'walls', isSinglePage: true});

    } else if (this.location.match(/roof/g)) {

      this.template = genTpl.call(this, {page: 'roof', isSinglePage: true});

    } else if (this.location.match(/floor/g)) {

      this.template = genTpl.call(this, {page: 'floor', isSinglePage: true});

    } else if (this.location.match(/bathroom/g)) {

      this.template = genTpl.call(this, {page: 'bathroom', isSinglePage: true});

    } else {
      console.error('can not find page items for more info look at WorksPage.createTemplate method');
    }
  }

  selectItems() {
    this.filterItems = $('.filter__item');
    this.filter = $('.filter');
  }

  isHomePage() {
    const isHomePage = !!(this.location === '/') || !!(this.location === '/stroy/') || !!(this.location === '/stroy')

    if (isHomePage) {
      console.info('location is homepage check WorksPage.isHomePage method if it isn\'t true');
      return true
    } else {
      console.info('location is not home page check WorksPage.isHomePage method if it isn\'t true');
      return false;
    }
  }

  setShowFormEvents() {
    const visibilityClassName = 'is-animate';
    const $objects = $('.object');
    const $closeObject = $('.object__close', $objects);

    $objects.on('click', function () {
      $('.contacts-table', $(this)).addClass(visibilityClassName);
    });

    $closeObject.on('click', function () {
      const $parentObject = $(this).parents('.object');
      const $table = $('.contacts-table', $parentObject);
      $table.removeClass('is-animate');
      return false;
    });
  }

  unselectAllFilters(e) {
    if (this.isHomePage()) {
      $('input[type="radio"]', this.filter).removeAttr('checked');
    } else {
      const now = location.pathname.split('/');
      now[now.length - 1] = $(e.target).parents('.filter__item').data('href');

      if (location.pathname === now.join('/')) {
        return false;
      } else {
        location.pathname = now.join('/');
      }
      return false;
    }
  }

  selectCheckedFilter(e) {
    if (e.target.nodeName === 'INPUT') {
      $(e.target).attr('checked', '');
    }
  }

  createHeadingClassName(item) {
    let className = 'btn btn_object';

    if (item.headerTitle) {
      className += ' btn--withoutTopPadding';
      className += ' btn--withTitle';
    }
    ;

    const rowsText = item.headerBig.split('<br/>');

    for (var i = 0; i < rowsText.length; i++) {
      const rowText = rowsText[i];
      if (rowText.length > 17) className += ' btn--long-row';
      break;
    }

    const headerRows = (item.headerBig.match(/<br\/>/g) || []).length + 1;
    className += ` btn--${headerRows}-rows`;

    return className;

  }

  removeOpened() {
    app.openedObjects = [];
  }

  renderTemplate() {
    try{
      this.placeholder.insertAdjacentHTML('afterEnd', this.template);
    } catch(e){
      console.log(e);
      console.info(`пытается отрендерить услуги не на главной странице ( пропустить ошибку )`);
    }
  }

  addEvents() {
    this.filterItems.on('click', this.removeOpened.bind(this));
    this.filterItems.on('click', this.unselectAllFilters.bind(this));
    this.filterItems.on('click', this.selectCheckedFilter);

    if (this.location !== '/') {
      this.setShowFormEvents();
    }
  }

  initAppEvents() {
    this.app.initBoxes();
    this.app.initTabs();
    this.app.initFilters();
    this.app.initEvents();

  }
}
const worksPage = new WorksPage();
worksPage.init();
