// Product cards: pre-select the product and jump to the enquiry form
document.querySelectorAll('#products button[type="button"]').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var card = btn.parentElement;
    var title = card.querySelector('h3, h4');
    var select = document.getElementById('product');
    if (title && select) select.value = title.textContent.trim();
    document.getElementById('enquiry').scrollIntoView({ behavior: 'smooth' });
  });
});

// Enquiry form: no backend yet. Replace this handler with a POST to your endpoint.
var form = document.querySelector('#enquiry form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  var btn = form.querySelector('button[type="submit"]');
  btn.textContent = 'Thank you — enquiry received';
  btn.disabled = true;
  form.reset();
});
