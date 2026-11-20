(function () {
  var q = new URLSearchParams(location.search);
  var st = document.getElementById('status'), box = document.getElementById('box'), ta = document.getElementById('code');
  var code = q.get('code'), err = q.get('error');
  if (err) { st.className = 'err'; st.textContent = 'Hiba a TikTok-tól: ' + err + (q.get('error_description') ? ' – ' + q.get('error_description') : ''); }
  else if (code) { st.className = 'ok'; st.textContent = 'Sikeres jóváhagyás.'; ta.value = code; box.hidden = false; }
  else { st.textContent = 'Nincs kód a címben. Ezt az oldalt a TikTok irányítja ide a jóváhagyás után.'; }
  if (code || err) { try { history.replaceState(null, '', location.pathname); } catch (e) {} }   // do not leave the code in the address bar / history
  document.getElementById('copy').addEventListener('click', function () {
    ta.select();
    (navigator.clipboard ? navigator.clipboard.writeText(ta.value) : Promise.resolve(document.execCommand('copy'))).then(function () { st.textContent = 'Kimásolva.'; });
  });
})();
