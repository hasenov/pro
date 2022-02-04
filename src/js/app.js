import MicroModal from 'micromodal';

document.addEventListener('DOMContentLoaded', function() {
    MicroModal.init({
        awaitCloseAnimation: true,
        disableFocus: true,
    });

    var hamburger = document.querySelector('.hamburger');
    var menu = document.querySelector('.header__navbar');
    var html = document.querySelector('html');
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('is-active');
        menu.classList.toggle('active');
        html.classList.toggle('lock');
    });

    window.onclick = function(e) {
        if (!e.target.closest('.header__navbar') && !e.target.closest('.header__hamburger')) {
            hamburger.classList.remove('is-active');
            menu.classList.remove('active');
            html.classList.remove('lock');
        }
    }

    document.addEventListener('click', function(e) {
        var menuLink = e.target.closest('.header__menu a');
        if(menuLink) {
            hamburger.classList.remove('is-active');
            menu.classList.remove('active');
            html.classList.remove('lock');
        }
    })

    var form = document.getElementById('formCallback');
    var submitBtn = form.querySelector('.form__submit');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        submitBtn.classList.add('active');

        setTimeout(function() {
            form.reset();
            submitBtn.classList.remove('active');
            MicroModal.close('modal-callback');
            MicroModal.show('modal-callback-success', {
                awaitCloseAnimation: true,
            });
        }, 1000)
    })
});