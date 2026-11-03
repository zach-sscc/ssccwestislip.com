(function(){
  // Enrollment for the next school year opens each November
  var now = new Date(), year = now.getFullYear();
  var startYear = now.getMonth() >= 10 ? year + 1 : year;
  document.querySelectorAll('.js-school-year').forEach(function(el){
    el.textContent = startYear + '–' + (startYear + 1);
  });
})();
