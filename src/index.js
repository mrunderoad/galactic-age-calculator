import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { AgeCalculator } from './js/space';

let calculator = new AgeCalculator();

$("form#submit-planet").submit(function(event) {
  event.preventDefault();
  let years = parseInt($("#age").val());
  let lifeExpectancy = parseInt($("#expectancy").val());
  let planet = $("input:radio[name=planet]:checked").val();
  let mars = calculator.marsAge(years);
  let marsExpectancy = calculator.marsLeft(lifeExpectancy, years)
  let jupiter = calculator.jupiterAge(years);
  let jupiterExpectancy = calculator.jupiterLeft(lifeExpectancy, years)
  let venus = calculator.venusAge(years);
  let venusExpectancy = calculator.venusLeft(lifeExpectancy, years)
  let mercury = calculator.mercuryAge(years);
  let mercuryExpectancy = calculator.mercuryLeft(lifeExpectancy, years)
  let earth = calculator.earthLeft(lifeExpectancy, years);
  let over = calculator.overExpected(years, lifeExpectancy)
  if (planet === "Mars") {
    $(".page-2").hide();
    $(".results").show();
    $(".chosen-planet").html(planet);
    $(".planet-span").html(mars);
    $(".planet-left-span").html(marsExpectancy); 
    if(years > lifeExpectancy) {
      $(".results").hide();
      $(".no-way").show();
      $(".over-lived").html(over)
    }
  } else if (planet === "Jupiter") {
    $(".page-2").hide();
    $(".results").show();
    $(".chosen-planet").html(planet);
    $(".planet-span").html(jupiter);
    $(".planet-left-span").html(jupiterExpectancy);
    $(".over-lived").html(over)
    if (years > lifeExpectancy) {
      $(".results").hide();
      $(".no-way").show();
      $(".over-lived").html(over);
    }
  } else if (planet === "Mercury") {
    $(".page-2").hide();
    $(".results").show();
    $(".chosen-planet").html(planet);
    $(".planet-span").html(mercury);
    $(".planet-left-span").html(mercuryExpectancy);
    $(".over-lived").html(over)
    if (years > lifeExpectancy) {
      $(".results").hide();
      $(".no-way").show();
      $(".over-lived").html(over);
    }
  } else if (planet === "Venus") {
    $(".page-2").hide();
    $(".results").show();
    $(".chosen-planet").html(planet);
    $(".planet-span").html(venus);
    $(".planet-left-span").html(venusExpectancy);
    $(".over-lived").html(over)
    if (years > lifeExpectancy) {
      $(".results").hide();
      $(".no-way").show();
      $(".over-lived").html(over);
    }
  } else if (planet === "Earth") {
    $(".page-2").hide();
    $(".results").show();
    $(".chosen-planet").html(planet);
    $(".planet-span").html(years);
    $(".planet-left-span").html(earth);
    $(".over-lived").html(over)
    if (years > lifeExpectancy) {
      $(".results").hide();
      $(".no-way").show();
      $(".over-lived").html(over);
    }
  }
});

$(".start-btn").on("click", function () {
  $(".page-1").hide();
  $(".page-2").show();
});