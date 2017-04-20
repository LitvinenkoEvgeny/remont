import $ from 'jquery';
import _ from 'lodash';

import './accordions.sass';
import {scrollTo} from './utilites';


const renderAccordion = _.template(`

<div class="accordions">
  <h5 class="accordions__header"> <%= accordions.header %> </h5>
  <h6 class="accordions__subheader"> <%= accordions.subheader %> </h6>

  <% _.forEach(accordions.accordions, function(accordionBlock){ %>
    <div class="accordion__wrp">
      <h6 class="accordion__name"><%=accordionBlock.name%></h6>
      <div></div>
      <dl class="accordion">
        <% _.forEach(accordionBlock.items, function(accordion){ %>
            <dt>
              <a href=""> <%= accordion.name %> </a>
            </dt>
            <dd>
            <% _.forEach(accordion.items, function(item){ %>
              <p>
                <%= decreaseAndWrapWithBold(item) %>
              <p>
            <% }); %>
            </dd>
        <% }); %>
      </dl>
    </div>
  <% }); %>

</div> `);


export function accordionInit($window, $document, $htmlBody) {
  var allPanels = $('.accordion > dd').hide();

  $('.accordion > dt > a').click(function(e) {
    e.preventDefault();
    const $this = $(this);
    const $target =  $this.parent().next();

    if(!$target.hasClass('active')){
       allPanels.removeClass('active').slideUp();
       $target.addClass('active').slideDown();
       scrollTo($htmlBody, $this, 800);
    } else {
      $target.removeClass('active').slideUp();
      scrollTo($this, 800);
    }
    return false;
  });

  $('.accordion__wrp:nth-child(odd)').each(function(item, index){
    const $this = $(this);
    let collection = $(this).add($this.next('.accordion__wrp'));
    collection.wrapAll('<div class="accordions__row" />');
  })

}

export default renderAccordion;
