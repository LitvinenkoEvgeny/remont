import $ from 'jquery';
import mobileDetect from 'mobile-detect';

class MobileDetecter {
  constructor(){
    this.md = new mobileDetect(window.navigator.userAgent);
    this.mobile = this.md.mobile();
    this.isMobile = !!this.md.mobile();
  }
}

class PreventMobileScroll extends MobileDetecter {
  constructor(){
    super();
    this.$outerScroll = $('#outer');
    this.$nav = $('#nav');
  }
  enableScroll(){
    this.$outerScroll.css({'overflow-y': 'scroll'});
    this.$nav.show();
  }
  disableScroll(){
    this.$outerScroll.css({'overflow-y': 'hidden'});
    this.$nav.hide();
  }
}

export default class Morph extends PreventMobileScroll {
    constructor(morph) {
      super();
      this.$morph = morph;
      this.$categoryItems = $('.catalog-category__item');
      this.$closeFilter = $('.header__center button');

      this.showMorph = this.showMorph.bind(this);
      this.hideMorph = this.hideMorph.bind(this);
      this.openCategoryItem = this.openCategoryItem.bind(this);
      this.closeCategoryItem = this.closeCategoryItem.bind(this);
      this.hideMorphIfMobile = this.hideMorphIfMobile.bind(this);

      this.init();
    }
    init() {
      this.hideMorphIfMobile();
      this.listenMorphEvents();
    }
    showMorph() {
      this.$morph.show();
    }
    hideMorph() {
      this.$morph.hide();
    }
    openCategoryItem() {
      this.showMorph();
      this.disableScroll();
    }
    closeCategoryItem() {
      this.enableScroll();
      if(this.isMobile){
        this.hideMorph();
      }
    }
    hideMorphIfMobile() {
      if(this.isMobile){
        console.log(`enter from mobile: hide morph`);
        this.hideMorph();
      } else {
        console.log(`enter from desktop: show morph`);
        this.showMorph();
      }
    }
    listenMorphEvents() {
      this.$categoryItems.on('click', this.openCategoryItem);
      this.$closeFilter.on('click', this.closeCategoryItem);
    }
}
