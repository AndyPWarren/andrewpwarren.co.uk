'use strict';
import $ from 'jquery/src/jquery';
import 'bootstrap';
import styles from './../scss/main.scss';
import Typed from 'typed.js';
import TodModule from './TodModule';
import CookieModule from './CookieModule';

const cookieModule = new CookieModule();
const todModule = new TodModule();

function applyText(text) {
  $('.highlight').html(text);
}

function applyStyle(className) {
  $('body').addClass(className);
}

function setStrings(elem) {
  $(elem).attr('id', 'strings')
}

function removeElem(elem) {
  $(elem).remove();
}

function setHeaderText(visited) {
  if (visited) {
    removeElem('#first-time-visitor');
    setStrings('#previous-visitor');
  } else {
    removeElem('#previous-visitor');
    setStrings('#first-time-visitor');
  }
}

function run() {
  var range = todModule.getRange();
  applyText(range.text);
  applyStyle(range.cssClass);
  setHeaderText(cookieModule.readVisitedCookie())
  var typed = new Typed('.typed', {
    stringsElement: '#strings',
    typeSpeed: 30,
    cursorChar: '_',
    preStringTyped: () => {
      $('.typed-cursor').addClass('animate');
      $('.header').removeClass('hidden');
    },
    onStringTyped: () => {
      $('.reveal').addClass('show');
      if (!cookieModule.readVisitedCookie()) {
        cookieModule.setVisitedCookie();
      }
      setTimeout(() => {
        $('.typed-cursor').addClass('hide-op');
        $('.typed-cursor').removeClass('animate');
      }, 6000);
    },
  });
}
run();
