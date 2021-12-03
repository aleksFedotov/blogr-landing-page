const navItems = document.querySelectorAll('.nav-li');
const menuItems = document.querySelectorAll('.menu-li');
const burger = document.querySelectorAll('.burger-btn');

navItems.forEach((item) => {
  item.addEventListener('click', () => {
    if (item.classList.contains('active')) {
      item.classList.remove('active');
      return;
    }
    navItems.forEach((item) => {
      item.classList.remove('active');
    });
    item.classList.add('active');
  });
});

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    if (item.classList.contains('active')) {
      item.classList.remove('active');
      return;
    }
    menuItems.forEach((item) => {
      item.classList.remove('active');
    });
    item.classList.add('active');
  });
});

burger.forEach((el) => {
  el.addEventListener('click', () => {
    el.parentElement.classList.toggle('opened');
    menuItems.forEach((item) => {
      item.classList.remove('active');
    });
  });
});
