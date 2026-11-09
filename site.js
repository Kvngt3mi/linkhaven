// Linkhaven prototype wiring (no backend yet). Phase 2 replaces this with real sign-up, login and saving.
(function () {
  var links = {
    'Log in': 'auth.html', 'Sign up free': 'auth.html', 'Claim your handle': 'auth.html',
    'Claim this handle': 'auth.html', 'Join Linkhaven Today': 'auth.html', 'Get Started': 'auth.html',
    'Back to log in': 'auth.html', 'Go back': 'auth.html', 'Go to home page': 'index.html',
    'Go to my dashboard': 'dashboard.html', 'Linkhaven': 'index.html',
    'Terms': 'legal.html#terms', 'Privacy': 'legal.html#privacy', 'Privacy Policy': 'legal.html#privacy',
    'Acceptable use': 'legal.html#acceptable-use', 'Report abuse': 'legal.html#report',
    'Links': 'dashboard.html', 'Appearance': 'appearance.html', 'Analytics': 'analytics.html', 'Settings': 'settings.html'
  };
  document.querySelectorAll('a').forEach(function (a) {
    var t = a.textContent.trim();
    if (links[t]) a.setAttribute('href', links[t]);
  });
  var buttons = { 'Create my page': 'onboarding.html', 'Log in': 'dashboard.html', 'Finish and see my page': 'onboarding.html' };
  document.querySelectorAll('button').forEach(function (b) {
    var t = b.textContent.trim();
    if (buttons[t]) b.addEventListener('click', function () { location.href = buttons[t]; });
  });
  // Home page: send the typed handle to sign-up
  var claim = document.querySelector('.claim');
  if (claim) {
    var go = function () {
      var v = (document.getElementById('handle') || {}).value || '';
      location.href = 'auth.html' + (v ? '?handle=' + encodeURIComponent(v.trim()) : '');
    };
    var btn = claim.querySelector('button');
    if (btn) btn.addEventListener('click', go);
    var inp = document.getElementById('handle');
    if (inp) inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') go(); });
  }
  // Sign-up: prefill handle from the home page
  var h = new URLSearchParams(location.search).get('handle');
  var sh = document.getElementById('sh');
  if (h && sh) sh.value = h;
})();
