import $ from 'jquery';
import _ from 'lodash';

const scrollTo = ($htmlBody, selector, time) => {
  setTimeout(() => {
    $htmlBody.animate({
      scrollTop: $(selector).offset().top - 100
    }, time);
  }, 1000);
}
export {scrollTo};
