// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import jquery from 'jquery';

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"


window.$ = jquery;
window.jQuery = jquery;

import "pikaday/plugins/pikaday.jquery";

Rails.start()
Turbolinks.start()
ActiveStorage.start()

import "controllers"

$(document).on("turbolinks:load", function() {
    $('.ui.dropdown').dropdown();
    $('.menu .item').tab();
    $('.datepicker').pikaday();
    $.ajaxSetup({ cache: false });
});

