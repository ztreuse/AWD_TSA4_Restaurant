
document.addEventListener('DOMContentLoaded', function() {
    var mainMenuButton = document.getElementById('mainMenuButton');
    var modal = document.getElementById('modalid');
    var bootstrapModal = new bootstrap.Modal(modal, {
        backdrop: 'static'
    });

    mainMenuButton.addEventListener('click', function() {
        bootstrapModal.hide();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var mainMenuButton = document.getElementById('mainMenuButton');
    var modal = document.getElementById('modalid2');
    var bootstrapModal = new bootstrap.Modal(modal, {
        backdrop: 'static'
    });

    mainMenuButton.addEventListener('click', function() {
        bootstrapModal.hide();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var mainMenuButton = document.getElementById('mainMenuButton');
    var modal = document.getElementById('modalid3');
    var bootstrapModal = new bootstrap.Modal(modal, {
        backdrop: 'static'
    });

    mainMenuButton.addEventListener('click', function() {
        bootstrapModal.hide();
    });
});

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });

  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});