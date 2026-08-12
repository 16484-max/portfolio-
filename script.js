document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.mobile-bar button');
  var sidebar = document.querySelector('.sidebar');
  if (toggle && sidebar) {
    toggle.addEventListener('click', function () {
      sidebar.classList.toggle('open');
    });
  }
});
