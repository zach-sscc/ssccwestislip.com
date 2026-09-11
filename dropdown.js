(function(){
  var hideTimer;
  var dd = document.querySelector('nav li.has-dropdown');
  if(!dd) return;
  function show(){ clearTimeout(hideTimer); dd.classList.add('dropdown-open'); }
  function hide(){ hideTimer = setTimeout(function(){ dd.classList.remove('dropdown-open'); }, 200); }
  dd.addEventListener('mouseenter', show);
  dd.addEventListener('mouseleave', hide);
  var menu = dd.querySelector('.nav-dropdown');
  if(menu){
    menu.addEventListener('mouseenter', show);
    menu.addEventListener('mouseleave', hide);
  }
})();
