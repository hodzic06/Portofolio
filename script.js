var xp = 0,
  mouseX = 0;
var yp = 0,
  mouseY = 0;
var xpDot = 0,
  mouseX = 0;
var ypDot = 0,
  mouseY = 0;

const cursorFollower = document.querySelector(".cursorFollower");
const cursorFollowerDot = document.querySelector(".cursorFollowerDot");

document.addEventListener("mousemove", (e) => {
  mouseX = e.pageX;
  mouseY = e.pageY;
});

setInterval(function () {
  xp += (mouseX - xp) / 5;
  yp += (mouseY - yp - window.scrollY) / 5;
  cursorFollower.style.left = xp + "px";
  cursorFollower.style.top = yp + "px";
}, 10);

setInterval(function () {
  xpDot += (mouseX - xpDot) / 8;
  ypDot += (mouseY - ypDot - window.scrollY) / 8;

  cursorFollowerDot.style.left = xpDot + "px";
  cursorFollowerDot.style.top = ypDot + "px";
}, 10);

const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('div ul a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('div ul a [href*=' + id +']').classList.add ('active');
            });
        };
    });
};

document.addEventListener("DOMContentLoaded", function() {
  var line = document.getElementById("animated-line");
  var container = document.querySelector(".loading-container");

  line.style.animation = "expandLine 1.5s forwards";

  // Dodajemo event listener koji će se pozvati nakon završetka animacije
  line.addEventListener("animationend", function() {
      // Nakon završetka animacije, uklanjamo liniju
      line.style.display = "none";

      // Prikazujemo sadržaj stranice nakon što se linija povuče
      document.body.style.overflow = "visible";

      // Sakrijemo lijevu i desnu stranu s lijepom animacijom
      container.style.left = "-100%";
      container.style.right = "-100%";
  });
});

document.addEventListener("DOMContentLoaded", function() {
    var line = document.getElementById("animated-line");
    var container = document.querySelector(".loading-container");

    // Dodajemo event listener koji će se pozvati nakon završetka animacije
    line.addEventListener("animationend", function() {
        // Nakon završetka animacije, uklanjamo liniju
        line.style.display = "none";

        // Prikazujemo sadržaj stranice nakon što se linija povuče
        document.body.style.overflow = "visible";

        // Dodajemo klasu koja će pokrenuti tranziciju
        container.classList.add("hide-left-right");
    });
});