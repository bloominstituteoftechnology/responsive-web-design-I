const menuIcon = document.getElementById('menu-icon');
const headerNav = document.getElementById('header-nav');
menuIcon.addEventListener('click', function() {
  if (!headerNav.style.display || headerNav.style.display === 'none') {
    headerNav.style.display = 'flex';
  } else {
    headerNav.style.display = 'none';
  }
});