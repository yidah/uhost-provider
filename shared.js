var backgrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var modalNo = document.querySelector('.modal__action--negative');
var planButtons = document.querySelectorAll('.plan .button');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

for (var i = 0; i < planButtons.length; i++) {
  planButtons[i].addEventListener('click', function () {
    //    modal.style.display='block';
    //    backgrop.style.display='block';

    // modal.className = 'open'; // this will overwrite class list
    modal.classList.add('open');
    backgrop.classList.add('open');
  });
}

backgrop.addEventListener('click', function () {
  // mobileNav.style.display='none';
  mobileNav.classList.remove('open');
  closeModal();
});
// validation for other pages that do not have modal
if (modalNo) {
  modalNo.addEventListener('click', closeModal);
}

function closeModal() {
  // backgrop.style.display= 'none';
  // modal.style.display= 'none';
  // validation for other pages that do not have modal
  if (modalNo) {
    modal.classList.remove('open');
  }
  backgrop.classList.remove('open');
}

toggleButton.addEventListener('click', function () {
  // mobileNav.style.display = 'block';
  // backgrop.style.display='block';
  mobileNav.classList.add('open');
  backgrop.classList.add('open');
});
