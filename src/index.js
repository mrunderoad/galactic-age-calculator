import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { AgeCalculator } from './js/space';



$("form#submit-planet").submit(function(event) {
  event.preventDefault();
  let years = parseInt($("#age").val());
  let lifeExpectancy = parseInt($("#expectancy").val());
  let planet = $("input:radio[name=planet]:checked").val();
  let calculator = new AgeCalculator(years, lifeExpectancy);
  let mars = calculator.marsAge();
  if(planet === "Mars") {
    console.log(planet);
    console.log(years);
    console.log(calculator.marsAge());
    $(".planet-span").html(mars);
  } else
  console.log(lifeExpectancy);

});

$(".start-btn").on("click", function () {
  $(".page-1").hide();
  $(".page-2").show();
});