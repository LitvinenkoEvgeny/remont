import $ from 'jquery';
import _ from 'lodash';

import {priceData as data} from './priceData';

import compileTable from './renderTable';
import {decreaseAndWrapWithBold} from './textReplacers';

import renderAccordion from './renderAccordions';
import {accordionInit} from './renderAccordions.js'

const $priceContent = $('#price-content');
const $window = $('window');
const $document = $('document');
const $htmlBody = $('html, body');

$priceContent.html(compileTable({table: data.firstTable, decreaseAndWrapWithBold}));
$priceContent.append(renderAccordion({accordions: data.firstAccordion, decreaseAndWrapWithBold}));
$priceContent.append(compileTable({table: data.secondTable, decreaseAndWrapWithBold}));

accordionInit($window, $document, $htmlBody);

function toUpper(string) {
  return string.toUpperCase();
}
