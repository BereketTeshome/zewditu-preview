/* keep page content clear of the fixed nav, whatever height it wraps to */
(function(){
  function setNav(){
    var n=document.querySelector('.nav');
    if(n) document.documentElement.style.setProperty('--navh', n.offsetHeight+'px');
  }
  setNav();
  addEventListener('resize', setNav);
  addEventListener('load', setNav);
  if(document.fonts && document.fonts.ready) document.fonts.ready.then(setNav);
})();
