const navbar = document.getElementsByClassName('navbar')[0];
const mobileNav = document.getElementsByClassName('navigation')[0];
const hamburgerIcon = document.getElementsByClassName('navbar__hamburger-icon')[0];
const closeIcon = document.getElementsByClassName('navbar__close-icon')[0];
const socialIcons = document.getElementsByClassName('navigation__social')[0];
const logoText = document.getElementsByClassName('logo__text')[0];
const logoCircle = document.getElementsByClassName('logo__circle')[0];
const logoBookmark = document.getElementsByClassName('logo__bookmark')[0];
const body = document.body;

const closeMobileNav = e => {
  console.log(e);
  navbar.classList.remove('navbar--expand');
  mobileNav.classList.add('hide');
  hamburgerIcon.classList.remove('hide');
  closeIcon.classList.add('hide');
  body.classList.remove('hide-yscroll');
  socialIcons.classList.add('hide');

  /* change fill of logo */
  logoText.classList.remove('logo__text--white-theme');
  logoCircle.classList.remove('logo__circle--white-theme');
  logoBookmark.classList.remove('logo__bookmark--blue-theme');
};
const openMobileNav = e => {
  navbar.classList.add('navbar--expand');
  mobileNav.classList.remove('hide');
  hamburgerIcon.classList.add('hide');
  closeIcon.classList.remove('hide');
  body.classList.add('hide-yscroll');
  socialIcons.classList.remove('hide');

  /* change fill of logo */
  logoText.classList.add('logo__text--white-theme');
  logoCircle.classList.add('logo__circle--white-theme');
  logoBookmark.classList.add('logo__bookmark--blue-theme');
};
hamburgerIcon.addEventListener('click', openMobileNav);
closeIcon.addEventListener('click', closeMobileNav);
mobileNav.addEventListener('click', e => {
  if (e.target.nodeName.toLowerCase() === 'a') {
    closeMobileNav();
  }
});
console.log(hamburgerIcon);
