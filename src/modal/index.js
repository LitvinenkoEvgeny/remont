import $ from 'jquery';
import _ from 'lodash';

window.jquery = $;

import 'jquery-modal/jquery.modal.min.css';
import jqModal from 'jquery-modal';

import './modal.sass';

const $body = $('body');
const $document = $(document);

const modalTemplate = _.template(`
  <div class="modal">
    <div class="modal__content" >
      <form class="modal-form">
        <label>
          <span class="modal-form__label">Номер телефона: </span>
          <input class="modal-form__input" name="phone" type="text" placeholder="8952123123" />
        </label>
        <button type="submit"></button>
      </form>
    </div>
  </div>
`)

$body.append(modalTemplate());
const $modal = $('.modal');
const $form = $('form', $modal);
$form.submit(() => false);

function generateErrorMessage(errorsMessage) {
  return _.template(`<span class="modal-form__error-message> <%= errorsMessage %> </span>"`)({errorsMessage});
}
$(function() {
  $( ".modal-form button" ).click(function() {
    $( ".modal-form button" ).addClass( "onclic");
    validate();
  });

  function validate() {
    const mobileNumber = $('input', $form).val();
    if(mobileNumber.length < 8){
      const message = generateErrorMessage('Слишком короткий номер телефона');
      $('label', $form).append(message);
    }
    setTimeout(function() {
      $( ".modal-form button" ).removeClass( "onclic" );
      $( ".modal-form button" ).addClass( "validate");
      callback(mobileNumber);
    }, 2250 );
  }
    function callback(mobileNumber) {
      setTimeout(function() {
        $( ".modal-form button" ).removeClass( "validate" );
        renderThanksMesage(mobileNumber);
      }, 1250 );
    }
  });

function renderThanksMesage(number){
  const thankMessage = _.template(`
    <div class="modal-message">
      <span class="modal-message__head">Ваша заявка принята!</span>
      <p class="modal-message__text">
        Мы свяжемся с вами по номеру:
        <span class="modal-message__number">
          <%= number %>
        </span>
      </p>
    </div>
  `);
  $('.modal__content', $modal).html(thankMessage({number}));
}

$('[data-showModal="true"]').click((e) => {
  e.preventDefault();
  $('.modal').modal();
  return false;
})
