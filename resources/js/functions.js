window.onload = function () {

    addMenuListEventListener()
    addBtnListeners()

}

var secondaryNav = document.getElementById("hidden");
var sticky = secondaryNav.offsetTop;

window.onscroll = function () {

    stickysecondaryNav()
};


function addBtnListeners() {
    let header = document.getElementById("primary-nav");
    let btns = header.getElementsByClassName("a-after");
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            var current = document.getElementsByClassName("active");

            if (current.length !== 0) {

                current[0].className = current[0].className.replace("active", "");
                this.className += " active";
            } else {
                this.className += " active";
            }

        });
    }
}


function stickysecondaryNav() {

    if (window.pageYOffset > sticky) {
        secondaryNav.classList.add("sticky");
    } else {
        secondaryNav.classList.remove("sticky");
    }
}

function addMenuListEventListener() {

    let element = document.getElementById("menu-option");

    element.addEventListener("click", showSecondaryNav);
}

function showSecondaryNav() {

    let secondaryNav = document.getElementById('hidden');

    let secondaryA = document.getElementsByClassName('color-fade');

    if (secondaryNav.style.visibility != 'visible') {
        for (ele of secondaryA) {
            ele.style.color = '#f6f6f6';
        }
        secondaryNav.style.visibility = 'visible'
        secondaryNav.style.opacity = '1'

    } else {
        for (ele of secondaryA) {
            ele.style.color = '#321e1d';
        }
        secondaryNav.style.visibility = 'hidden'
        secondaryNav.style.opacity = '0'
    }
}