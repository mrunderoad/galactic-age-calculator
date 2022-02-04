import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { AgeCalculator } from './js/space';

$(".start-btn").on("click", function () {
  $(".page-1").fadeOut();
  $(".page-2").fadeIn();
});