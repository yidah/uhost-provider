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

    // tackling transition issue with display:none
    backgrop.style.display = 'block';
    setTimeout(function () {
      backgrop.classList.add('open');
    }, 10);
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

  // tackling transition issue with display:none
  backgrop.classList.remove('open');
  setTimeout(function () {
    backgrop.style.display = 'none';
  },200); /* has to match transition time to close at the same time transition:opacity 0.2s linear;*/
}

toggleButton.addEventListener('click', function () {
  // mobileNav.style.display = 'block';
  // backgrop.style.display='block';
  mobileNav.classList.add('open');

  // tackling transition issue with display:none
  backgrop.style.display = 'block';
  setTimeout(function () {
    backgrop.classList.add('open');
  }, 10);
});
