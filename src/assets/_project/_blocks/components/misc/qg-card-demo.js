$(function () {
  'use strict';
  $('.qg-card-demo').on('mouseover', function () {
    $(this).addClass("hover");
  }).on('mouseout', function () {
    $(this).removeClass("hover");
  });
  
});
