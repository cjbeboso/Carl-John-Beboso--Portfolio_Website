
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar ul li");

function setActiveNav() {
  let current = "";
  sections.forEach(section => {
  const sectionTop = section.offsetTop - 120; 
  const sectionHeight = section.offsetHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(li => {
    li.classList.remove("active_nav");
    const link = li.querySelector("a");
    if (link.getAttribute("href") === "#" + current) {
      li.classList.add("active_nav");
    }
  });
}

 
window.addEventListener("scroll", setActiveNav);

  
navLinks.forEach(item => {
  item.addEventListener("click", function () {
    navLinks.forEach(li => li.classList.remove('active_nav'));
    this.classList.add('active_nav');
  });
});


function validateForm() {
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name.trim() == '') {
        alert('Please enter your name');
        return false;
    }

    if (phone.trim() == '') {
        alert('Please enter your phone number');
        return false;
    }

    if (email.trim() == '') {
        alert('Please enter your email');
        return false;
    }

    if (message.trim() == '') {
        alert('Please enter your message');
        return false;
    }

    return true;
}

