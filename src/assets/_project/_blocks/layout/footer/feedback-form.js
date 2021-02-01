// load event resets the feedback form to the initial state
function resetForm () {
  $('#qg-page-feedback-form :input:not(:checkbox):not(:hidden):not(:button):not(:radio):not(:submit)').each(function () {
    $(this).val('');
  });
  $('#qg-page-feedback-form :input:checkbox, #qg-page-feedback-form :input:radio').each(function (element) {
    $(this).prop('checked', false);
  });
}
window.addEventListener('load', function (event) {
  resetForm();
}, false);

$('.no-js').removeClass('no-js');

$('.qg-footer-feedback__close').on('click', function (e) {
  e.preventDefault();
  $('.qg-feedback-toggle').removeClass('d-none');
});

$('.qg-feedback-toggle').on('click', function (e) {
  e.preventDefault();
  if ($('#qg-page-feedback-form').hasClass('d-none')) {
    $(this).addClass('d-none');
  }
});

/**
* Adds page and user details to hidden inputs on the feedback form
**/

function sanitize (str) {
  if (!str) {
    return false;
  }
  return str.replace(/</g, '&lt;') // strip <
    .replace(/>/g, '&gt;') // strip >
    .replace(/\+/g, '&#43;') // strip +
    .replace(/\\/g, '&#92;') // strip \
    .replace(/\(/g, '&#40;') // strip (
    .replace(/\)/g, '&#41;') // strip )
    .replace(/{/g, '&#123;') // strip (
    .replace(/}/g, '&#124;'); // strip )
}
// the script try to predict browser name from the User-Agent
let browserName = (function () {
  let ua = navigator.userAgent;
  let tem;
  let M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
  if (/trident/i.test(M[1])) {
    tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
    return 'IE ' + (tem[1] || '');
  }
  if (M[1] === 'Chrome') {
    tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
    if (tem != null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
  }
  M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
  if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
  return M.join(' ');
})();

function addHiddenInput (key, val) {
  var newHiddenInput = $('<input type="hidden"/>');
  newHiddenInput.attr('name', key);
  newHiddenInput.attr('value', sanitize(val));
  $('#feedback-hidden-inputs').append(newHiddenInput);
}
function init (franchiseTitle) {
  var franchise;
  if (franchiseTitle) {
    franchise = franchiseTitle;
  } else {
    franchise = location.pathname.split('/')[1];
  }
  addHiddenInput('franchise', franchise);
  addHiddenInput('page-title', $(document).find('title').text());
  addHiddenInput('page-url', window.location.href);
  addHiddenInput('page-referer', document.referrer);
  addHiddenInput('rspUsrAgent', navigator.userAgent);
  addHiddenInput('browserName', browserName);
  addHiddenInput('OS', navigator.platform);
  addHiddenInput('g-recaptcha-response', '');
}

module.exports = { init: init };
