import { firebaseConfig, isConfigured } from './js/firebase-config.js';

// Product cards: pre-select the product and jump to the enquiry form
document.querySelectorAll('#products button[type="button"]').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var title = btn.parentElement.querySelector('h3, h4');
    var select = document.getElementById('product');
    if (title && select) select.value = title.textContent.trim();
    document.getElementById('enquiry').scrollIntoView({ behavior: 'smooth' });
  });
});

// Enquiry form: saved to the "enquiries" collection in Firestore
var form = document.querySelector('#enquiry form');
var submitBtn = form.querySelector('button[type="submit"]');
var originalLabel = submitBtn.textContent;
var statusEl = document.createElement('p');
statusEl.setAttribute('role', 'status');
statusEl.style.cssText = 'grid-column:1/-1;font-size:.9rem;text-align:center;margin:0';
form.appendChild(statusEl);

var fields = ['product', 'name', 'company', 'email', 'phone', 'quantity', 'application', 'details'];

form.addEventListener('submit', async function (e) {
  e.preventDefault();
  var data = {};
  fields.forEach(function (f) { data[f] = (document.getElementById(f).value || '').trim(); });

  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending…';
  statusEl.textContent = '';
  try {
    if (!isConfigured) throw new Error('not_configured');
    const { initializeApp } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js');
    const { getFirestore, collection, addDoc, serverTimestamp } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js');
    const db = getFirestore(initializeApp(firebaseConfig));
    await addDoc(collection(db, 'enquiries'), Object.assign({}, data, {
      source: 'website',
      status: 'new',
      adminComment: '',
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    }));
    statusEl.style.color = 'inherit';
    statusEl.textContent = "Thank you — we've received your enquiry and will get back to you shortly.";
    form.reset();
  } catch (err) {
    statusEl.style.color = '#b00020';
    statusEl.textContent = err.message === 'not_configured'
      ? "We're setting things up — please try again shortly."
      : 'Something went wrong. Please try again.';
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = originalLabel;
  }
});
