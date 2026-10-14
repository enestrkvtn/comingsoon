/* Tema düğmesi.
 *
 * SAYFA BOYANMADAN ÖNCE çalışır (head içinde, defer yok): yazılabilir
 * tercih varsa <html data-tema="..."> anında yazılır, böylece koyu temada
 * beyaz flaş olmaz. Tercih yoksa hiçbir şey yazılmaz — sistem tercihi
 * (prefers-color-scheme) devrede kalır.
 *
 * Ana uygulamadaki anahtar sözleşmesiyle aynı: localStorage "tema".
 */
(function () {
  var kok = document.documentElement;
  var ANAHTAR = 'tema';

  function oku() {
    try { return localStorage.getItem(ANAHTAR); } catch { return null; }
  }

  function yaz(deger) {
    try { localStorage.setItem(ANAHTAR, deger); } catch { /* özel mod */ }
  }

  var kayitli = oku();
  if (kayitli === 'koyu' || kayitli === 'acik') {
    kok.setAttribute('data-tema', kayitli);
  }

  // Düğme hazır olana kadar bekle (DOM henüz yok).
  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('temaBtn');
    if (!btn) return;

    // Sistem tercihini de hesaba kat: kayıt yoksa ekranın şu anki hali,
    // düğmenin bir sonraki tıklamada ne yapacağını belirler.
    function koyuMu() {
      var secili = kok.getAttribute('data-tema');
      if (secili) return secili === 'koyu';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    btn.addEventListener('click', function () {
      var yeni = koyuMu() ? 'acik' : 'koyu';
      kok.setAttribute('data-tema', yeni);
      yaz(yeni);
    });
  });
})();